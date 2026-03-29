import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  bgClass?: string;
  caption?: string;
  showIcon?: boolean;
  style?: CSSProperties;
}

const PhotoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 stroke-white fill-none"
    strokeWidth={1.5}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export function ImagePlaceholder({
  className,
  bgClass = "bg-navy-mid",
  caption,
  showIcon = true,
  style,
}: ImagePlaceholderProps) {
  return (
    <div className={cn("relative overflow-hidden", bgClass, className)} style={style}>
      {/* diagonal stripe texture */}
      <div className="ph-stripe absolute inset-0" />

      {showIcon && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-20 z-10">
          <PhotoIcon />
        </div>
      )}

      {caption && (
        <div
          className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-2.5 pt-5"
          style={{
            background:
              "linear-gradient(transparent, rgba(9,18,38,.78))",
          }}
        >
          <span className="text-[10.5px] text-white/80 uppercase tracking-[0.07em]">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
