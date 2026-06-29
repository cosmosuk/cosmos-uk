import { GALLERY } from "@/lib/content";
import { getGallery } from "@/lib/csv";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Gallery – COSMOS UK",
};

export default async function GalleryPage() {
  const groups = await getGallery();

  return (
    <>
      {/* Page hero */}
      <div className="bg-navy px-5 md:px-8 pt-[52px] pb-12">
        <div className="max-w-content mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            {GALLERY.eyebrow}
          </p>
          <h1 className="font-playfair text-[30px] md:text-[38px] font-semibold text-white tracking-[-0.01em] mb-2">
            {GALLERY.heading}
          </h1>
          <p className="text-[14px] md:text-[14.5px] text-white/60">
            {GALLERY.subtitle}
          </p>
        </div>
      </div>

      <section className="section-wrap">
        <GalleryLightbox groups={groups} />
      </section>

      <Footer />
    </>
  );
}
