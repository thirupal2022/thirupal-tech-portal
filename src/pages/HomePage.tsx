import FutureVision from "../sections/FutureVision";
import HeroSection from "../sections/HeroSection";
import ImpactSection from "../sections/ImpactSection";
import MissionSection from "../sections/MissionSection";
import TechnologyHub from "../sections/TechnologyHub";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <TechnologyHub />
      <FutureVision />
    </>
  );
}