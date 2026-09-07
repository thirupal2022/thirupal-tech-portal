import React, { useRef, useState } from "react";
import CommunityHero from "../components/community/CommunityHero";
//import CultureSection from "../components/community/CultureSection";
import UpcomingFestivals from "../components/community/UpcomingFestivals";
import FestivalDetailsModal from "../components/community/FestivalDetailsModal";
import QuizModule from "../components/community/Quiz/QuizModule";
import { communityService } from "../services/communityService";

const CommunityPage: React.FC = () => {
  const festivalsRef = useRef<HTMLDivElement | null>(null);
  const [festivalData, setFestivalData] = useState<any>(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToFestivals = () => {
    festivalsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSelectFestival = (id: string) => {
    communityService.getFestivalById(id).then((f) => {
      setFestivalData(f);
      setModalOpen(true);
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    // clear selected festival data to ensure modal unmounts cleanly
    setFestivalData(undefined);
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
      <CommunityHero onScrollToFestivals={scrollToFestivals} />
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

      <FestivalDetailsModal festival={festivalData} open={modalOpen} onClose={closeModal} />
    </main>
  );
};

export default CommunityPage;
