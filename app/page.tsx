import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServiceMenu from "@/components/ServiceMenu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ServiceMenu />
      <Gallery />
      <Reviews />
      <Visit />
      <BookingForm />
      <Footer />
    </>
  );
}
