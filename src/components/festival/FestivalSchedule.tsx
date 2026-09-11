import React from "react";
import type { ProgramItem } from "../../data/festivals";

const FestivalSchedule: React.FC<{ programs: ProgramItem[] }> = ({ programs }) => {
  if (!programs.length) return <p className="text-sm text-[#2d6c51]">Schedule will be announced soon.</p>;

  return (
    <ol className="ml-2 border-l border-[#d8e9dc] pl-4">
      {programs.map((p) => (
        <li key={p.id} className="mb-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#2b7a58]" />
            <div>
              <div className="font-medium text-[#1d3d2d]">{p.name}</div>
              <div className="text-xs text-[#2d6c51]">{p.time} • {p.category || ""} {p.ageGroup ? `• Age: ${p.ageGroup}` : ""}</div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default FestivalSchedule;
