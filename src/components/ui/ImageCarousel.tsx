"use client";

import { useState } from "react";

/** Convert a Google Drive share URL to the official preview embed URL */
function toPreviewUrl(url: string): string {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

export function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden h-[300px] select-none">
      {/* Google Drive preview iframe */}
      <iframe
        key={index}
        src={toPreviewUrl(images[index])}
        title={`Image ${index + 1} of ${images.length}`}
        allow="autoplay"
        className="absolute inset-0 w-full h-full border-0"
      />
      {/* Transparent click-blocker — sits above the iframe so Drive's own
          buttons are unreachable, but below the nav controls (z-10) */}
      <div className="absolute inset-0 z-[5]" />
      {/* Solid cover over the Drive "open" icon in the top-right corner */}
      {/* Cover Drive UI on the sides */}
      <div className="absolute top-0 left-0 bottom-0 w-16 bg-[#202124] z-[6]" />
      <div className="absolute top-0 right-0 bottom-0 w-16 bg-[#202124] z-[6]" />

      {/* Prev / Next — only shown when more than one image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-150 text-[18px] leading-none z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-150 text-[18px] leading-none z-10"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className="w-1.5 h-1.5 rounded-full transition-colors duration-150"
                style={{
                  background: i === index ? "white" : "rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 right-3 text-[11px] text-white/70 bg-black/40 rounded-[4px] px-2 py-0.5 tabular-nums z-10">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
