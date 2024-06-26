import AreaOfFocus from "@/components/home/AreaOfFocus";
import Blogs from "@/components/home/Blogs";
import CoFound from "@/components/home/CoFound";
import Concept from "@/components/home/Concept";
import Equity from "@/components/home/Equity";
import FeaturedIn from "@/components/home/FeaturedIn";
import HeroSection from "@/components/home/HeroSection";
import InvestorsNetwork from "@/components/home/InvestorsNetwork";
import JoinUs from "@/components/home/JoinUs";
import LowerCTA from "@/components/home/LowerCTA";
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
      {/* // */}
      <InvestorsNetwork />
      <Equity />
      <Blogs />
      <FeaturedIn />
      <LowerCTA />
      {/* //footer */}
      <Footer />
    </>
  );
}
