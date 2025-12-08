import { Hero } from "@/components/landing-page/Hero";
import LearningJourney from "@/components/landing-page/LearningJourney";
import WhyCoursevita from "@/components/landing-page/WhyCoursevita";
import Testimonials from "@/components/landing-page/Testimonials";
import Workshop from "@/components/landing-page/workshop";

export default function Home() {
  return (
    <>
      <Hero />
      <Workshop />
      <LearningJourney />
      <WhyCoursevita />
      <Testimonials />
    </>
  );
}
