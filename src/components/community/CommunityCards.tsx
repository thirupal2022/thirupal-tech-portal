import React from "react";
import { useNavigate } from "react-router-dom";
import AnnouncementBadge from "../common/AnnouncementBadge";

const CommunityCards: React.FC<{ onShowHero?: () => void }> = ({ onShowHero }) => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex items-center justify-between">
            <h2 className="mb-4 pt-5 text-2xl font-semibold text-slate-800">Community</h2>
        </div>

        <div className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-[#e4ece4] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5faf7] hover:shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
                <div className="flex cursor-pointer items-center gap-4" onClick={() => navigate('/community/agriculture')}>
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7ef] text-2xl shadow-sm">🌾</div>
                        <div>
                            <div className="font-semibold text-slate-800">Agriculture</div>
                            <div className="mt-1 text-sm text-slate-600">Farming, crops and local produce</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-[24px] border border-[#e4ece4] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5faf7] hover:shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
                <div className="flex cursor-pointer items-center gap-4" onClick={() => navigate('/community/education')}>
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7ef] text-2xl shadow-sm">🎓</div>
                        <div>
                            <div className="font-semibold text-slate-800">Education</div>
                            <div className="mt-1 text-sm text-slate-600">Local schools, learning and literacy</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative rounded-[24px] border border-[#e4ece4] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5faf7] hover:shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
                <AnnouncementBadge
                    onClick={() => { if (onShowHero) { onShowHero(); } else { navigate('/community/festivals'); } }}
                    className="absolute right-4 top-4"
                    ariaLabel="New Update - open festivals"
                />
                <div className="flex cursor-pointer items-center gap-4" onClick={() => { if (onShowHero) { onShowHero(); } else { navigate('/community/festivals'); } }}>
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7ef] text-2xl shadow-sm">🎉</div>
                        <div>
                            <div className="font-semibold text-slate-800">Festivals</div>
                            <div className="mt-1 text-sm text-slate-600">Celebrate culture and events</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-[24px] border border-[#e4ece4] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5faf7] hover:shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
                <div className="flex cursor-pointer items-center gap-4" onClick={() => navigate('/community/sports')} >
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7ef] text-2xl shadow-sm">🏆</div>
                        <div>
                            <div className="font-semibold text-slate-800">Sports</div>
                            <div className="mt-1 text-sm text-slate-600">Community games and activities</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
  );
};

export default CommunityCards;
