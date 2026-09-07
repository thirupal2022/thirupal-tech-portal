import React, { useRef, useState } from "react";
import CommunityHero from "../components/community/CommunityHero";
//import CultureSection from "../components/community/CultureSection";
import UpcomingFestivals from "../components/community/UpcomingFestivals";
import FestivalDetailsModal from "../components/community/FestivalDetailsModal";
import ProgramDetailsModal from "../components/community/ProgramDetailsModal";
import QuizModule from "../components/community/Quiz/QuizModule";
import { communityService } from "../services/communityService";
import EventsExplorer from "../components/community/EventsExplorer";

const CommunityPage: React.FC = () => {
  const festivalsRef = useRef<HTMLDivElement | null>(null);
  const [festivalData, setFestivalData] = useState<any>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
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
    // Open the dedicated Events Explorer modal
    communityService.getFestivals().then((list) => {
      setFestivalsList(list || []);
      setExplorerOpen(true);
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    // clear selected festival data and focused program
    setFestivalData(undefined);
    setFocusedProgramId(undefined);
    try {
      // Force-remove any leftover body overflow lock in case cleanup didn't run
      document.body.style.overflow = '';
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
        <UpcomingFestivals onSelectFestival={onSelectFestival} />
      </div>

      <section id="programs" className="mt-8">
        <h2 className="text-2xl font-semibold text-amber-900">Festival Programs & Activities</h2>
        <p className="text-sm text-amber-700 mt-1">Join the village programs — registrations open for select events.</p>
        {/* Could map ProgramCard components here in future using festival data */}
      </section>

      <QuizModule />

      <section id="memories" className="mt-8">
        <h2 className="text-2xl font-semibold text-amber-900">Memories From Our Community</h2>
        <p className="text-sm text-amber-700 mt-2">Previous festivals and event highlights will appear here.</p>
      </section>

      <FestivalDetailsModal festival={festivalData} open={modalOpen} onClose={closeModal} focusedProgramId={focusedProgramId} />

      <ProgramDetailsModal open={programModalOpen} festival={programFestival} program={programData} onClose={() => setProgramModalOpen(false)} />

      <EventsExplorer
        open={explorerOpen}
        festivals={festivalsList}
        onClose={() => setExplorerOpen(false)}
        onOpenProgram={(id, programId) => {
          // open the dedicated program modal for the selected program (keep explorer open)
          communityService.getFestivalById(id).then((f) => {
            setProgramFestival(f);
            const prog = f?.programs?.find((pp: any) => pp.id === programId);
            setProgramData(prog);
            setProgramModalOpen(true);
            // keep explorer open in background so user returns to it after closing program modal
          });
        }}
      />
    </main>
  );
};

export default CommunityPage;
