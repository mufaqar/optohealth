import Banner from "@/components/home/Banner";
import Know from "@/components/home/Know";
import FeatureCard from "@/components/home/FeatureCard";
import Video from "@/components/home/video";
import FeatureSlider from "@/components/home/FeatureSlider";
import Issuses from "@/components/home/Issuses";
import Solutions from "@/components/home/Solutions";
import FlipBox from "@/components/home/FlipBox";

const cards = [
  {
    id: 1,
    title: "Triage in",
    time: "4 minutes.",
    desc: "Not 4 hours",
    bgColor: "bg-theme_red",
    Icon: "/images/watch.svg",
  },
  {
    id: 2,
    title: "Trusted,",
    time: "passionate",
    desc: "workforce",
    bgColor: "bg-primary",
    Icon: "/images/users.svg",
  },
  {
    id: 3,
    title: "Committed to",
    time: "making a ",
    desc: "real difference",
    bgColor: "bg-secondary",
    Icon: "/images/heart.svg",
  },
];
export default function Home() {
  return (
    <>
      <Banner />
      <Know />
      <FeatureCard />
      <Video />
      <FeatureSlider />
      <Issuses />
      <Solutions />
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-6">
          {cards.map((card) => (
            <FlipBox key={card.id} data={card} />
          ))}
        </div>
      </section>
    </>
  );
}
