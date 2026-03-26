import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMenu from "./components/FeaturedMenu";
import Locations from "./components/Locations";
import LeggieroFood from "./components/LeggieroFood";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <Locations />
        <LeggieroFood />
      </main>
      <Footer />
    </>
  );
}
