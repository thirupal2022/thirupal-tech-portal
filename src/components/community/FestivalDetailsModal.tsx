import React from "react";
import type { Festival } from "../../data/festivals";
import FestivalSchedule from "./FestivalSchedule";

const FestivalDetailsModal: React.FC<{ festival?: Festival; open: boolean; onClose: () => void }> = ({ festival, open, onClose }) => {
  if (!open || !festival) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-auto max-h-[90vh] p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-amber-900">{festival.name}</h2>
          <button onClick={onClose} aria-label="Close" className="text-amber-600">Close</button>
        </div>
        <p className="mt-3 text-amber-700">{festival.description}</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-amber-900">Festival Details</h3>
            <ul className="text-sm text-amber-700 mt-2 space-y-1">
              <li><strong>Date:</strong> {festival.date}</li>
              <li><strong>Venue:</strong> {festival.venue}</li>
              <li><strong>Organized By:</strong> {festival.organizers}</li>
              <li><strong>Contact:</strong> {festival.contact}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-amber-900">Schedule</h3>
            <FestivalSchedule programs={festival.programs || []} />
          </div>
        </div>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="bg-amber-700 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetailsModal;
