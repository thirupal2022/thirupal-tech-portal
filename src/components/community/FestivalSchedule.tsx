import React from "react";
import type { ProgramItem } from "../../data/festivals";

const FestivalSchedule: React.FC<{ programs: ProgramItem[] }> = ({ programs }) => {
  if (!programs.length) return <p className="text-sm text-amber-600">Schedule will be announced soon.</p>;

  return (
    <ol className="border-l border-amber-200 ml-2 pl-4">
      {programs.map((p) => (
        <li key={p.id} className="mb-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div>
              <div className="font-medium text-amber-900">{p.name}</div>
              <div className="text-xs text-amber-600">{p.time} • {p.category || ""} {p.ageGroup ? `• Age: ${p.ageGroup}` : ""}</div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default FestivalSchedule;
