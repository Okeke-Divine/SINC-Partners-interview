import AreaOfFocus from "@/components/home/AreaOfFocus";
import CoFound from "@/components/home/CoFound";
import Concept from "@/components/home/Concept";
import HeroSection from "@/components/home/HeroSection";
import JoinUs from "@/components/home/JoinUs";
import NetWork from "@/components/home/NetWork";
import Quote from "@/components/home/Quote";
import ServiceModel from "@/components/home/ServiceModel";
import Studio from "@/components/home/Studio";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* //header */}
      <HeroSection />
      <Quote />
      <NetWork />
      <AreaOfFocus />
      <Concept />
      <ServiceModel />
      <Studio />
      <CoFound />
      <JoinUs />
      {/* //footer */}
      <Footer />
    </>
  );
}
