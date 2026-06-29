import Link from "next/link";
import Image from "next/image";
import { getGallery } from "@/lib/csv";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

function toThumbnailUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match)
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`;
  return url;
}

export async function GalleryPreview() {
  const groups = await getGallery();
  const previews = groups.slice(0, 4);
  const totalPhotos = groups.reduce((sum, g) => sum + g.images.length, 0);

  return (
    <section className="section-wrap">
      <SectionHeader
        eyebrow="Gallery"
        title="Moments from our community"
        subtitle={`${totalPhotos} photos across ${groups.length} albums from our events and meetings.`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {previews.map((group, i) => (
          <Link
            key={group.id}
            href={`/gallery?album=${i}`}
            className="group relative rounded-[10px] overflow-hidden aspect-square no-underline block"
          >
            <Image
              src={toThumbnailUrl(group.cover)}
              alt={group.label}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div
              className="absolute inset-0 flex items-end p-3.5"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,31,61,0.7) 0%, transparent 60%)",
              }}
            >
              <div />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-[18px] text-right">
        <Link href="/gallery">
          <Button variant="outline-dark">View full gallery →</Button>
        </Link>
      </div>
    </section>
  );
}
