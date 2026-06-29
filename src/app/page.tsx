import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { NewsGrid } from "@/components/home/NewsGrid";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <NewsGrid />
      <GalleryPreview />
      <WhoWeAre />
      <Footer />
    </>
  );
}
