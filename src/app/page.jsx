import AreaOfFocus from "@/components/home/AreaOfFocus";
import Concept from "@/components/home/Concept";
import HeroSection from "@/components/home/HeroSection";
import NetWork from "@/components/home/NetWork";
import Quote from "@/components/home/Quote";
import NavBar from "@/components/shared/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Quote />
      <NetWork />
      <AreaOfFocus />
      <Concept />
    </>
  );
}
