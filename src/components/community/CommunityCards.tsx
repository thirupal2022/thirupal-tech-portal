import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityCards: React.FC<{ onShowHero?: () => void }> = ({ onShowHero }) => {
  const navigate = useNavigate();
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

        
        
        <h2 className="text-2xl pt-5 font-semibold mb-4">Community</h2>
        <div className="mt-6 space-y-6">
            <section className="p-6 rounded-2xl border bg-white shadow-sm hover:bg-amber-50 hover:shadow-lg transition-colors duration-200">
                <div className="flex items-center gap-4  cursor-pointer" onClick={() => navigate('/community/agriculture')}>
                    <div className="flex items-center gap-4">
                        <div className="text-2xl">🌾</div>
                        <div>
                        <div className="font-semibold">Agriculture</div>
                        <div className="text-sm text-slate-600 mt-1">Farming, crops and local produce</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-6 rounded-2xl border bg-white shadow-sm hover:bg-indigo-50 hover:shadow-lg transition-colors duration-200">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/community/education')}>
                    <div className="flex items-center gap-4">
                        <div className="text-2xl">🎓</div>
                        <div>
                        <div className="font-semibold">Education</div>
                        <div className="text-sm text-slate-600 mt-1">Local schools, learning and literacy</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-6 rounded-2xl border bg-white shadow-sm hover:bg-rose-50 hover:shadow-lg transition-colors duration-200">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => { if (onShowHero) { onShowHero(); } else { navigate('/community/festivals'); } }}>
                    <div className="flex items-center gap-4">
                        <div className="text-2xl">🎉</div>
                        <div>
                        <div className="font-semibold">Festivals</div>
                            <div className="text-sm text-slate-600 mt-1">Celebrate culture and events</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-6 rounded-2xl border bg-white shadow-sm hover:bg-emerald-50 hover:shadow-lg transition-colors duration-200">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/community/sports')} >
                    <div className="flex items-center gap-4">
                        <div className="text-2xl">🏆</div>
                        <div>
                            <div className="font-semibold">Sports</div>
                            <div className="text-sm text-slate-600 mt-1">Community games and activities</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
  );
};

export default CommunityCards;
