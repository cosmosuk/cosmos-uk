"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface GalleryGroup {
  id: string;
  label: string;
  cover: string;
  images: string[];
}

function toPreviewUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url;
}

function toThumbnailUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match)
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`;
  return url;
}

function GalleryLightboxInner({ groups }: { groups: GalleryGroup[] }) {
  const searchParams = useSearchParams();
  const albumParam = searchParams.get("album");
  const initialAlbum =
    albumParam !== null &&
    !isNaN(Number(albumParam)) &&
    Number(albumParam) >= 0 &&
    Number(albumParam) < groups.length
      ? Number(albumParam)
      : null;

  const [activeGroup, setActiveGroup] = useState<number | null>(initialAlbum);
  const [imageIndex, setImageIndex] = useState(0);

  const allImages =
    activeGroup !== null ? groups[activeGroup].images : [];

  const close = useCallback(() => {
    setActiveGroup(null);
    setImageIndex(0);
  }, []);

  const prev = useCallback(
    () => setImageIndex((i) => (i - 1 + allImages.length) % allImages.length),
    [allImages.length]
  );

  const next = useCallback(
    () => setImageIndex((i) => (i + 1) % allImages.length),
    [allImages.length]
  );

  useEffect(() => {
    if (activeGroup === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeGroup, close, prev, next]);

  useEffect(() => {
    if (activeGroup !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeGroup]);

  return (
    <>
      {/* Album grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {groups.map((group, gi) => (
          <button
            key={group.id}
            onClick={() => {
              setActiveGroup(gi);
              setImageIndex(0);
            }}
            className="group relative rounded-[10px] overflow-hidden border border-[var(--color-border)] bg-white hover:border-gold transition-colors duration-150 text-left"
          >
            <div className="aspect-square w-full relative overflow-hidden bg-navy">
              <Image
                src={toThumbnailUrl(group.cover)}
                alt={group.label}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-3.5" />
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {activeGroup !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(15, 31, 61, 0.95)" }}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-150 text-xl z-10 border border-white/10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 z-10">
            <p className="text-[12px] text-white/50">
              {imageIndex + 1} of {allImages.length}
            </p>
          </div>

          {/* Prev arrow */}
          {allImages.length > 1 && (
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-150 text-2xl z-10 border border-white/10"
            >
              ‹
            </button>
          )}

          {/* Image viewer */}
          <div className="relative w-full max-w-4xl mx-16 sm:mx-20">
            <div className="relative rounded-[10px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] aspect-[16/10]">
              <iframe
                key={`${activeGroup}-${imageIndex}`}
                src={toPreviewUrl(allImages[imageIndex])}
                title={`${groups[activeGroup].label} — image ${imageIndex + 1}`}
                allow="autoplay"
                className="absolute border-0 h-full pointer-events-none"
                style={{
                  width: "calc(100% + 120px)",
                  left: "-60px",
                  top: 0,
                  overflow: "hidden",
                }}
              />
            </div>
          </div>

          {/* Next arrow */}
          {allImages.length > 1 && (
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm transition-all duration-150 text-2xl z-10 border border-white/10"
            >
              ›
            </button>
          )}

          {/* Thumbnail strip */}
          {allImages.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className="relative w-12 h-12 rounded-[6px] overflow-hidden border-2 transition-all duration-150 flex-shrink-0"
                  style={{
                    borderColor:
                      i === imageIndex
                        ? "var(--color-gold)"
                        : "rgba(255,255,255,0.15)",
                    opacity: i === imageIndex ? 1 : 0.5,
                  }}
                >
                  <Image
                    src={toThumbnailUrl(img)}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export function GalleryLightbox({ groups }: { groups: GalleryGroup[] }) {
  return (
    <Suspense fallback={null}>
      <GalleryLightboxInner groups={groups} />
    </Suspense>
  );
}
