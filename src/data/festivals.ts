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
    id: "ganesha-2026",
    name: "Ganesha Festival 2026",
    date: "17 September 2026",
    isoDate: "2026-09-17T18:00:00",
    location: "Our Village",
    venue: "Village Community Center",
    organizers: "Village Community",
    contact: "+91-99999-00000",
    image: "https://images.unsplash.com/photo-1520039667048-5a5c8f2b6b9a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
    description:
      "Join our village community in celebrating Lord Ganesha with devotion, cultural programs, games, competitions and community activities.",
    startTime: "08:00",
    endTime: "22:00",
    programs: [
      { id: "p1", name: "Ganapathi Puja", category: "ritual", time: "08:00" },
      { id: "p2", name: "Children's Traditional Games", category: "games", time: "11:00", ageGroup: "4-9" },
      { id: "p3", name: "Quiz Competition", category: "competition", time: "14:00", ageGroup: "10-14" },
      { id: "p4", name: "Cultural Dance", category: "cultural", time: "18:00" },
      { id: "p5", name: "Ganesha Procession", category: "procession", time: "20:00" },
      { id: "p6", name: "Prasadam Distribution", category: "community", time: "12:30" }
    ]
  }
];

export default FESTIVALS;
