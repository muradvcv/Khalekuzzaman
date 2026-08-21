import About from "@/Components/Home/About";
import Banner from "@/Components/Home/Banner";
import TechAnimation from "@/Components/Home/TechAnimation";
import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen">
    <Banner/>
    <About/>
    <TechAnimation/>
  </div>
  );
}
