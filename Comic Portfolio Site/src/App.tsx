import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import ComicSeries from "./components/ComicSeries";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <FeaturedWork />
      <ComicSeries />
      <Philosophy />
      <Footer />
    </div>
  );
}
