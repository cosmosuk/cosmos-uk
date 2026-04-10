import fs from "fs/promises";
import path from "path";

// ─── Generic CSV parser (RFC 4180) ────────────────────────────────────────────

function parseCSV(raw: string): Record<string, string>[] {
  // Normalise line endings
  const input = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // Tokenise into cells, respecting quoted fields that span lines
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  let i = 0;

  while (i < input.length) {
    const ch = input[i];

    if (inQuotes) {
      if (ch === '"') {
        // Escaped quote ("") → literal "
        if (input[i + 1] === '"') {
          cell += '"';
          i += 2;
        } else {
          inQuotes = false;
          i++;
        }
      } else {
        cell += ch;
        i++;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
      } else if (ch === ",") {
        row.push(cell);
        cell = "";
        i++;
      } else if (ch === "\n") {
        row.push(cell);
        cell = "";
        rows.push(row);
        row = [];
        i++;
      } else {
        cell += ch;
        i++;
      }
    }
  }

  // Flush last cell / row
  if (cell !== "" || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((cells) => {
    const record: Record<string, string> = {};
    headers.forEach((header, idx) => {
      record[header] = cells[idx]?.trim() ?? "";
    });
    return record;
  });
}

// ─── File loader ──────────────────────────────────────────────────────────────

async function loadCSV(filename: string): Promise<Record<string, string>[]> {
  const filepath = path.join(process.cwd(), "src/assets/Data", filename);
  const raw = await fs.readFile(filepath, "utf-8");
  return parseCSV(raw);
}

// ─── String catalog ───────────────────────────────────────────────────────────

/** Returns a key → text map from DBStringCatalog.csv */
export async function getStringCatalog(): Promise<Record<string, string>> {
  const rows = await loadCSV("DBStringCatalog.csv");
  return Object.fromEntries(rows.map((r) => [r.KEY, r.TEXT]));
}

// ─── Images ───────────────────────────────────────────────────────────────────

/** Returns a key → URL map from DBImages.csv */
export async function getImages(): Promise<Record<string, string>> {
  const rows = await loadCSV("DBImages.csv");
  return Object.fromEntries(rows.map((r) => [r.KEY, r.LINK]));
}

// ─── Press releases ───────────────────────────────────────────────────────────

export enum PressReleaseType {
  EmergencyAppeal = "Emergency appeal",
  CommunityUpdate = "Community update",
  Commemoration = "Commemoration",
  Meeting = "Meeting",
  AGM = "AGM",
  Statement = "Statement",
  Unknown = "Unknown",
}

const TYPE_MAP: Record<string, PressReleaseType> = {
  "emergency appeal": PressReleaseType.EmergencyAppeal,
  "community update": PressReleaseType.CommunityUpdate,
  commemoration: PressReleaseType.Commemoration,
  meeting: PressReleaseType.Meeting,
  agm: PressReleaseType.AGM,
  statement: PressReleaseType.Statement,
};

export interface PressRelease {
  titleKey: string;
  title: string;
  type: PressReleaseType;
  content: string;
  created: Date;
  updated: Date;
  images: string[];
}

/**
 * Returns press releases with all string-catalog and image keys resolved.
 * Sorted newest-first by created date.
 */
export async function getPressReleases(): Promise<PressRelease[]> {
  const [rows, strings, images] = await Promise.all([
    loadCSV("DBPressRelease.csv"),
    getStringCatalog(),
    getImages(),
  ]);

  return rows
    .map((r): PressRelease => {
      const imageKeys = r.IMAGES
        ? r.IMAGES.split(",").map((k) => k.trim()).filter(Boolean)
        : [];

      return {
        titleKey: r.TITLE,
        title: strings[r.TITLE] ?? r.TITLE,
        type: TYPE_MAP[r.TYPE.toLowerCase()] ?? PressReleaseType.Unknown,
        content: strings[r.CONTENT] ?? r.CONTENT,
        created: new Date(r.CREATED),
        updated: new Date(r.UPDATED),
        images: imageKeys.map((k) => images[k]).filter(Boolean),
      };
    })
    .sort((a, b) => b.created.getTime() - a.created.getTime());
}

// ─── About us ─────────────────────────────────────────────────────────────────

/** Returns the about us body text from DBAboutUs.csv */
export async function getAboutUs(): Promise<string> {
  const rows = await loadCSV("DBAboutUs.csv");
  return rows[0]?.DATA ?? "";
}
