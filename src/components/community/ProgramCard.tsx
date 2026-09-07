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
    <article className="bg-white rounded-lg p-4 shadow-sm">
      <h4 className="font-semibold text-amber-900">{name}</h4>
      <div className="text-xs text-amber-600">{category} • {time} {ageGroup ? `• Age: ${ageGroup}` : ""}</div>
      <p className="mt-2 text-amber-700 text-sm">{description}</p>
      <div className="mt-3 text-right">
        <button onClick={onRegister} className="bg-amber-700 text-white px-3 py-1 rounded">Participate</button>
      </div>
    </article>
  );
};

export default ProgramCard;
