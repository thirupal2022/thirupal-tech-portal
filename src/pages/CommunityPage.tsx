import React, { useRef, useState } from "react";
import CommunityHero from "../components/community/CommunityHero";
//import CultureSection from "../components/community/CultureSection";
import UpcomingFestivals from "../components/community/UpcomingFestivals";
import FestivalDetailsModal from "../components/community/FestivalDetailsModal";
import ProgramDetailsModal from "../components/community/ProgramDetailsModal";
import QuizModal from "../components/community/Quiz/QuizModal";
import { communityService } from "../services/communityService";
import EventsExplorer from "../components/community/EventsExplorer";

const CommunityPage: React.FC = () => {
  const festivalsRef = useRef<HTMLDivElement | null>(null);
  const [festivalData, setFestivalData] = useState<any>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [festivalsList, setFestivalsList] = useState<any[]>([]);
  const [focusedProgramId, setFocusedProgramId] = useState<string | undefined>(undefined);
  const [programModalOpen, setProgramModalOpen] = useState(false);
  const [programFestival, setProgramFestival] = useState<any | undefined>(undefined);
  const [programData, setProgramData] = useState<any | undefined>(undefined);

  const scrollToFestivals = () => {
    festivalsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSelectFestival = (id: string) => {
    communityService.getFestivalById(id).then((f) => {
      setFestivalData(f);
      setModalOpen(true);
    });
  };

  const exploreEvents = () => {
    communityService.getFestivals().then((list) => {
      setFestivalsList(list || []);
      setExplorerOpen(true);
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setFestivalData(undefined);
    setFocusedProgramId(undefined);
    try {
      document.body.style.overflow = "";
      // @ts-ignore
      if ((window as any).__modalOpenCount) delete (window as any).__modalOpenCount;
    } catch (e) {
      // ignore
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <CommunityHero onScrollToFestivals={scrollToFestivals} onExploreEvents={exploreEvents} />
      {/*}
      <CultureSection />
      */ }
      <div ref={festivalsRef}>
        <UpcomingFestivals onSelectFestival={onSelectFestival} onExploreQuiz={() => setQuizOpen(true)} />
      </div>

      <section id="programs" className="mt-8">
        {/* Could map ProgramCard components here in future using festival data */}
      </section>

      <FestivalDetailsModal festival={festivalData} open={modalOpen} onClose={closeModal} focusedProgramId={focusedProgramId} />
      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />

      <ProgramDetailsModal open={programModalOpen} festival={programFestival} program={programData} onClose={() => setProgramModalOpen(false)} />

      <EventsExplorer
        open={explorerOpen}
        festivals={festivalsList}
        onClose={() => setExplorerOpen(false)}
        onOpenProgram={(id, programId) => {
          communityService.getFestivalById(id).then((f) => {
            setProgramFestival(f);
            const prog = f?.programs?.find((pp: any) => pp.id === programId);
            setProgramData(prog);
            setProgramModalOpen(true);
          });
        }}
      />
    </main>
  );
};

export default CommunityPage;
