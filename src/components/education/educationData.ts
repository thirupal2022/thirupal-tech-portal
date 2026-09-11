import { BookOpen, BriefcaseBusiness, Building2, Calculator, GraduationCap, Lightbulb, Megaphone, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProgramItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  border: string;
};

export type UpdateItem = {
  date: string;
  month: string;
  year: string;
  title: string;
  detail: string;
  badge: string;
  action?: string;
};

export const educationPrograms: ProgramItem[] = [
  {
    title: "Local Schools",
    description: "Find and explore schools in our community with details, facilities and contact information.",
    icon: Building2,
    accent: "bg-[#edf7ef]",
    border: "border-[#dfeee3]",
  },
  {
    title: "Learning Hub",
    description: "Access study materials, e-books, video lessons and quick explanations for various classes and subjects.",
    icon: BookOpen,
    accent: "bg-[#f4f7ff]",
    border: "border-[#dfe7ff]",
  },
  {
    title: "Digital Literacy",
    description: "Learn how to use digital tools, stay safe online and build essential tech skills for everyday life.",
    icon: Calculator,
    accent: "bg-[#edf5ff]",
    border: "border-[#dfe9ff]",
  },
  {
    title: "Student Activities",
    description: "Participate in quizzes, competitions, events and career badges & certificates.",
    icon: Sparkles,
    accent: "bg-[#fbeef4]",
    border: "border-[#f7dfe8]",
  },
  {
    title: "Parent Corner",
    description: "Helpful guides and tips to support your child's learning and development.",
    icon: Users,
    accent: "bg-[#f1ebff]",
    border: "border-[#e4dbff]",
  },
  {
    title: "Teacher Corner",
    description: "Teaching resources, lesson plans, worksheets and tools to make learning easier.",
    icon: GraduationCap,
    accent: "bg-[#edf9f2]",
    border: "border-[#dff0e6]",
  },
  {
    title: "Scholarships & Opportunities",
    description: "Explore scholarships, competitions, internship offers and financial aid options.",
    icon: ShieldCheck,
    accent: "bg-[#fff4df]",
    border: "border-[#f8e6b8]",
  },
  {
    title: "Career Guidance",
    description: "Discover career options, required skills and a step-by-step pathway for your future.",
    icon: BriefcaseBusiness,
    accent: "bg-[#edf9ff]",
    border: "border-[#dfefff]",
  },
  {
    title: "Skills & Competitions",
    description: "Build life skills, technical knowledge and participate in community challenges.",
    icon: Lightbulb,
    accent: "bg-[#fff2eb]",
    border: "border-[#f7d9c8]",
  },
  {
    title: "Community Learning",
    description: "Share knowledge, learn from others and grow together as a community.",
    icon: Megaphone,
    accent: "bg-[#edf7ee]",
    border: "border-[#ddeee3]",
  },
];

export const educationUpdates: UpdateItem[] = [
  {
    date: "10",
    month: "Sep",
    year: "2026",
    title: "National Scholarship Application Open",
    detail: "Applications are now open for eligible students. Last date: 30 Sep 2026.",
    badge: "Scholarship",
    action: "View Details",
  },
  {
    date: "17",
    month: "Sep",
    year: "2026",
    title: "Science Quiz Competition",
    detail: "District-level Science Quiz for classes 6-10. Register now!",
    badge: "Competition",
    action: "Register",
  },
  {
    date: "22",
    month: "Sep",
    year: "2026",
    title: "Free Digital Literacy Workshop",
    detail: "Learn basic computer and internet skills. Venue: Community Hall, Chittoor.",
    badge: "Workshop",
    action: "Learn More",
  },
];

export const quickLinks = [
  "Education Calendar",
  "Useful Resources",
  "Important Government Schemes",
  "Contact Support",
];
