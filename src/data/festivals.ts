export interface ProgramItem {
  id: string;
  name: string;
  category?: string;
  time?: string;
  ageGroup?: string;
  description?: string;
}

export interface Festival {
  id: string;
  name: string;
  date: string; // human readable
  isoDate?: string; // ISO for countdown
  location: string;
  venue?: string;
  description?: string;
  image?: string;
  organizers?: string;
  startTime?: string;
  endTime?: string;
  contact?: string;
  programs?: ProgramItem[];
}

export const FESTIVALS: Festival[] = [
  {
    id: "vinayaka-2026",
    name: "Vinayaka Chavithi Festival",
    date: "Thursday 17 – Saturday 19 September 2026",
    isoDate: "2026-09-17T18:00:00",
    location: "Menatampalli Village, SS Konda Post",
    venue: "Village Mandapam",
    organizers: "M.N.P SSC Batch",
    contact: "Sagar — 9000542052",
    image:
      "https://images.unsplash.com/photo-1542736667-069246bdbc75?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
    description:
      "Three-day Vinayaka Chavithi celebration with puja, cultural programs, games, competitions and community annadanam.",
    startTime: "18:30",
    endTime: "23:30",
    programs: [
      { id: "d1-1", name: "Pooja (Installation & Evening Puja)", category: "Day 1", time: "6:30–7:30 PM", description: "Village Mandapam" },
      { id: "d1-2", name: "Annadanam — Prasadam Distribution", category: "Day 1", time: "7:30–9:00 PM" },
      { id: "d1-3", name: "Chekkala Bajana (Traditional singing)", category: "Day 1", time: "8:00–11:00 PM" },

      { id: "d2-1", name: "Rangoli Competition", category: "Day 2", time: "8:00–9:00 AM" },
      { id: "d2-2", name: "Youth Programs (fitness, sports)", category: "Day 2", time: "9:30–12:30 PM" },
      { id: "d2-3", name: "Kids' Sports Competition", category: "Day 2", time: "2:00–3:30 PM" },
      { id: "d2-4", name: "Cultural Events & Group Dance", category: "Day 2", time: "4:30–8:30 PM" },
      { id: "d2-5", name: "Group Dance Performance", category: "Day 2", time: "9:30–11:30 PM" },

      { id: "d3-1", name: "Kids' Games & Otti Kotuta", category: "Day 3", time: "9:30–11:30 AM" },
      { id: "d3-2", name: "Elder Games & Musical Chairs", category: "Day 3", time: "2:30–4:30 PM" },
      { id: "d3-3", name: "Nimarjanam (Procession & Immersion)", category: "Day 3", time: "5:30–11:30 PM", description: "Grand Procession with DJ & Sky Rockets" }
    ]
  }
];

export default FESTIVALS;
