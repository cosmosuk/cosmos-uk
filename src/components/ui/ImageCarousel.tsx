"use client";

import { useState } from "react";

function toPreviewUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

function toDownloadUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return url;
}

export function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main viewer */}
      <div className="relative w-full max-w-3xl">
        {/* Iframe clipped so Drive's own toolbar falls outside the visible area */}
        <div className="relative rounded-[10px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-[360px]">
          <iframe
            key={index}
            src={toPreviewUrl(images[index])}
            title={`Image ${index + 1} of ${images.length}`}
            allow="autoplay"
            className="absolute border-0 h-full"
            style={{ width: "calc(100% + 120px)", left: "-60px" }}
          />
        </div>

        {/* Prev / next — only when multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm transition-all duration-150 text-[20px] leading-none z-10 border border-white/10"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm transition-all duration-150 text-[20px] leading-none z-10 border border-white/10"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Bottom bar: save link + thumbnail strip */}
      <div className="flex items-center justify-between w-full max-w-3xl">
        <a
          href={toDownloadUrl(images[index])}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40 hover:text-white/80 transition-colors duration-150"
        >
          ↓ Save image
        </a>

        {images.length > 1 && (
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className="flex items-center justify-center w-8 h-8 rounded-[6px] text-[11px] font-semibold transition-all duration-150 border"
                style={
                  i === index
                    ? {
                        background: "var(--color-gold)",
                        color: "#fff",
                        borderColor: "var(--color-gold)",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.45)",
                        borderColor: "rgba(255,255,255,0.1)",
                      }
                }
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
