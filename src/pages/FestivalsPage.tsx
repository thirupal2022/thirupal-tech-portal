import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import CommunityHero from "../components/festival/CommunityHero";
import UpcomingFestivals from "../components/festival/UpcomingFestivals";
import FestivalDetailsModal from "../components/festival/FestivalDetailsModal";
import ProgramDetailsModal from "../components/festival/ProgramDetailsModal";
import EventsExplorer from "../components/festival/EventsExplorer";
import QuizModal from "../components/community/Quiz/QuizModal";
import { communityService } from "../services/communityService";

const FestivalsPage: React.FC = () => {
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
  const navigate = useNavigate();

  const scrollToFestivals = () => {
    festivalsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSelectFestival = (id: string) => {
    communityService.getFestivalById(id).then((f) => {
      setFestivalData(f);
      setModalOpen(true);
    });
  };

  const openExplorer = () => {
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
    <main className="mx-auto max-w-[1320px] px-4 py-6 md:px-6 lg:px-8">
      <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
        <button className="text-[#4f7a53] transition hover:underline" onClick={() => navigate('/community')}>Community</button>
        <span>/</span>
        <span className="font-medium text-slate-700">Festivals</span>
      </div>

      <CommunityHero onScrollToFestivals={scrollToFestivals} onExploreEvents={openExplorer} />

      <div ref={festivalsRef} className="mt-8">
        <UpcomingFestivals onSelectFestival={onSelectFestival} onExploreQuiz={() => setQuizOpen(true)} />
      </div>

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

export default FestivalsPage;
