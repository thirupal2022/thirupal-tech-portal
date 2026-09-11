import EducationHero from "../components/education/EducationHero";
import EducationProgramGrid from "../components/education/EducationProgramGrid";
import EducationUpdatesPanel from "../components/education/EducationUpdatesPanel";

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-[1320px] px-4 py-6 md:px-6 lg:px-8">
      <EducationHero />
      <EducationProgramGrid />
      <EducationUpdatesPanel />
    </main>
  );
}
