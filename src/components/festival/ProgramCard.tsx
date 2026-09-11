import React from "react";

const ProgramCard: React.FC<{
  name: string;
  category?: string;
  time?: string;
  ageGroup?: string;
  description?: string;
  onRegister?: () => void;
}> = ({ name, category, time, ageGroup, description, onRegister }) => {
  return (
    <article className="rounded-[20px] border border-[#dfeae1] bg-[#f9fbf9] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <h4 className="font-semibold text-[#1d3d2d]">{name}</h4>
      <div className="mt-1 text-xs text-[#2d6c51]">{category} • {time} {ageGroup ? `• Age: ${ageGroup}` : ""}</div>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
      <div className="mt-3 text-right">
        <button onClick={onRegister} className="rounded-full bg-[#1f8a63] px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-[#177454]">Participate</button>
      </div>
    </article>
  );
};

export default ProgramCard;
