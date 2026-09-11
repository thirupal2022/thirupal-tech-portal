import { ArrowLeft, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

import educationBanner from "../../assets/education_banner.png";

export default function EducationHero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-[#dfe6df] bg-[#edf4ee] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="relative z-20 flex items-center gap-2 px-5 pt-5 text-sm text-slate-600 md:px-7 md:pt-6">
        <button
          type="button"
          onClick={() => navigate("/community")}
          className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-[#4f7a53] transition hover:bg-white/60 hover:text-[#2a5541]"
        >
          <ArrowLeft className="h-4 w-4" />
          Community
        </button>
        <span className="text-slate-400">/</span>
        <span className="font-medium text-slate-700">Education</span>
      </div>

      <div className="relative z-10 min-h-[320px] md:min-h-[420px]">
        <img
          src={educationBanner}
          alt="A student and parent learning together in a community school"
          className="h-full w-full object-cover"
        />
        

        <div className="absolute bottom-4 right-4 z-20 max-w-[240px] rounded-2xl border border-[#d7e8dc] bg-[#edf9f1]/90 p-4 text-right shadow-lg backdrop-blur-sm">
          <Quote className="ml-auto mb-2 h-4 w-4 text-[#2c6f4f]" />
          <p className="text-sm font-medium leading-snug text-[#285445]">
            "Education is not just about books, it&apos;s about building better lives and stronger communities."
          </p>
        </div>
      </div>
    </section>
  );
}
