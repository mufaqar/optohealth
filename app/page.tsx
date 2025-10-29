import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import Image from "next/image";
import Know from "@/components/home/Know";
import FeatureCard from "@/components/home/FeatureCard";
import Video from "@/components/home/video";
import FeatureSlider from "@/components/home/FeatureSlider";



export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Know />
      <FeatureCard />
      <Video />
      <FeatureSlider />
    

    </>
  );
}
