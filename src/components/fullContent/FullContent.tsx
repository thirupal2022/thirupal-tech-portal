import React, { useState, useEffect } from 'react';

// --- INTERFACES & TYPES ---
interface IconProps {
  className?: string;
}

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormFeedback {
  type: 'success' | 'error';
  text: string;
}

interface StatItem {
  value: string;
  label: string;
  sub: string;
  color: string;
}

interface InitiativeItem {
  title: string;
  desc: string;
  icon: string;
  badge: string;
  color: string;
}

/*
interface TechHubItem {
  title: string;
  icon: string;
  items: string[];
  accentColor: string;
}
*/

interface Milestone {
  year: string;
  title: string;
  desc: string;
}

interface VisionPhase {
  phase: string;
  title: string;
  desc: string;
}

interface GroundInitiative {
  title: string;
  meta: string;
  desc: string;
  points: string[];
  emoji: string;
  color: string;
}

// --- INLINE SVG ICONS with TS Prop Typing ---
const SunIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.95 4.95l1.59 1.59m10.91 10.91l1.59 1.59M3 12h2.25m13.5 0H21M5.75 18.25l1.59-1.59m10.91-10.91l1.59-1.59M12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const CloudIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
  </svg>
);

const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

// --- MOCK BLOGS DATA ---
const BLOGS_DATA: Blog[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Complete Guide',
    excerpt: 'A comprehensive guide to AWS Cloud Practitioner certification with detailed explanations and practice questions.',
    category: 'AWS Cloud',
    author: 'Thirupal Reddy',
    date: 'Nov 12, 2025',
    readTime: '15 min read',
    tags: ['EC2', 'S3', 'Lambda', 'CloudFront', 'Route53', 'IAM'],
    content: `
      <h2>What is AWS Cloud Practitioner?</h2>
      <p>The AWS Certified Cloud Practitioner is an entry-level certification that validates your overall understanding of the AWS Cloud platform. It covers basic cloud concepts, security, technology, and billing structures.</p>
      
      <h2>Key Exam Pillars</h2>
      <ul>
        <li><strong>Cloud Concepts (26%):</strong> Understanding of AWS cloud value proposition, cloud economics, and basic architecture principles.</li>
        <li><strong>Security and Compliance (25%):</strong> AWS shared responsibility model, basic security concepts, AWS IAM, and resource protection.</li>
        <li><strong>Technology (33%):</strong> Core services like EC2, S3, RDS, Lambda, and general deployment/operating methods.</li>
        <li><strong>Billing and Pricing (16%):</strong> Pricing models, tools for cost management, and tier options.</li>
      </ul>

      <h2>Sample Practice Focus</h2>
      <p>Focus deeply on understanding the difference between SaaS, PaaS, and IaaS, and memorize the primary use-cases for fundamental AWS services like IAM, S3, VPC, EC2, and Route 53.</p>
    `
  },
  {
    id: 'react-performance',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn advanced techniques to optimize React applications for faster rendering, state management efficiency, and lower memory footprint.',
    category: 'React Development',
    author: 'Thirupal Reddy',
    date: 'May 8, 2025',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Memoization', 'Virtualization'],
    content: `
      <h2>Why Optimize React?</h2>
      <p>As applications grow, wasteful renders, bloated component states, and large bundle sizes can significantly impact user experience. React provides built-in mechanisms to help you maintain top-tier performance.</p>

      <h2>Top Optimization Strategies</h2>
      <ul>
        <li><strong>Use React.memo:</strong> Prevent unnecessary child component re-renders when parent props do not change.</li>
        <li><strong>useCallback & useMemo:</strong> Cache functions and computed values across render cycles to avoid recreating references.</li>
        <li><strong>Lazy Loading & Code Splitting:</strong> Use <code>React.lazy</code> and <code>Suspense</code> to chunk bundles and only load scripts as needed.</li>
        <li><strong>Virtualize Long Lists:</strong> Avoid rendering thousands of DOM elements by displaying only the visible window viewport of rows.</li>
      </ul>
    `
  },
  {
    id: 'agriculture-tech',
    title: 'Technology in Agriculture: The Future of Farming',
    excerpt: 'Exploring how modern technology is transforming agriculture and empowering rural farmers to leverage smart systems in rural India.',
    category: 'Agriculture',
    author: 'Thirupal Reddy',
    date: 'May 2, 2025',
    readTime: '7 min read',
    tags: ['Agri-Tech', 'Rural Development', 'Sensors', 'Automation'],
    content: `
      <h2>Empowering the Soil with Code</h2>
      <p>Agriculture is the backbone of rural communities. By integrating low-cost IoT soil moisture sensors, automated water distribution pumps, and localized weather prediction systems, rural farmers can achieve unprecedented crop yields while preserving critical resources.</p>
      
      <h2>Key Implementations</h2>
      <p>1. <strong>IoT Moisture Tracking:</strong> Inexpensive microcontrollers send alerts when land drops below recommended moisture thresholds.</p>
      <p>2. <strong>Drone Land Surveying:</strong> Affordable aerial imaging to detect crop diseases and soil degradation early.</p>
      <p>3. <strong>Direct Marketplace Apps:</strong> Bypassing complex middlemen networks to sell farm yield directly to markets, protecting hard-earned revenue.</p>
    `
  },
  {
    id: 'docker-beginners',
    title: 'Docker for Beginners: Complete Guide',
    excerpt: 'Learn Docker from scratch with practical, real-world examples and deployment configurations for lightweight microservices.',
    category: 'DevOps',
    author: 'Thirupal Reddy',
    date: 'Apr 25, 2025',
    readTime: '9 min read',
    tags: ['Docker', 'Containers', 'DevOps', 'Microservices'],
    content: `
      <h2>The Container Revolution</h2>
      <p>No more "it works on my machine!" Docker packages an application and all its dependencies into an isolated container that runs reliably on any environment.</p>

      <h2>Core Concepts</h2>
      <ul>
        <li><strong>Dockerfile:</strong> A text document containing all the commands a user could call on the command line to assemble an image.</li>
        <li><strong>Image:</strong> An executable package that includes everything needed to run an application—code, runtime, libraries, environment variables, and config.</li>
        <li><strong>Container:</strong> A runtime instance of an image.</li>
      </ul>
    `
  }
];

import homeBanner from '../../assets/Home_Banner.png';

export default function FullContent(): React.JSX.Element {
  // Navigation State: 'home' | 'about' | 'blogs' | 'mission' | 'initiatives' | 'techhub' | 'future' | 'contact'
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  // Blog related state
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<string>('All');
  const [blogSearchQuery, setBlogSearchQuery] = useState<string>('');

  // Contact form submission custom simulation
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' });
  const [formFeedback, setFormFeedback] = useState<FormFeedback | null>(null);

  // Newsletter state
  //const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  //const [newsletterFeedback, setNewsletterFeedback] = useState<string | null>(null);

  // Auto scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedBlogId]);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormFeedback({ type: 'error', text: 'Please fill in all mandatory fields.' });
      return;
    }
    setFormFeedback({ type: 'success', text: `Thank you ${contactForm.name}! Your message was successfully dispatched to Thirupal.` });
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormFeedback(null), 5000);
  };

  /*
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterFeedback('Successfully subscribed to ThirupalTech newsletter!');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterFeedback(null), 4000);
  };
  */

  const handleReadBlog = (id: string): void => {
    setSelectedBlogId(id);
    setActiveTab('blogs');
  };

  // Filtered blogs logic
  const filteredBlogs: Blog[] = BLOGS_DATA.filter((blog: Blog) => {
    const matchesCategory: boolean = blogCategoryFilter === 'All' || blog.category === blogCategoryFilter;
    const matchesSearch: boolean = blog.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
                          blog.tags.some((t: string) => t.toLowerCase().includes(blogSearchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* --- TOP HEADER NAVIGATION --- */}
      <nav className={`sticky top-0 z-50 border-b transition-colors ${darkMode ? 'bg-slate-950/90 border-slate-800 backdrop-blur-md' : 'bg-white/90 border-slate-200 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => { setActiveTab('home'); setSelectedBlogId(null); }}>
              <span className="text-xl font-extrabold tracking-tight text-amber-500">Thirupal</span>
              <span className={`text-xl font-extrabold tracking-tight ${darkMode ? 'text-emerald-400' : 'text-slate-800'}`}>Tech</span>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex space-x-1 items-center">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'blogs', label: 'Blogs' },
                { id: 'mission', label: 'Mission' },
                { id: 'initiatives', label: 'Initiatives' },
                { id: 'techhub', label: 'Tech Hub' },
                { id: 'future', label: 'Future Vision' },
                { id: 'contact', label: 'Contact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== 'blogs') setSelectedBlogId(null);
                  }}
                  className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-all ${
                    (activeTab === tab.id)
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Right Side: Theme Toggle & Star Button */}
            <div className="flex items-center space-x-3">
              {/* Theme toggle switch design */}
              <div className={`flex items-center rounded-full p-1 cursor-pointer w-14 transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-300'}`} onClick={() => setDarkMode(!darkMode)}>
                <div className={`rounded-full w-6 h-6 flex items-center justify-center transform transition-transform duration-300 ${darkMode ? 'translate-x-6 bg-emerald-500 text-slate-950' : 'translate-x-0 bg-white text-yellow-500'}`}>
                  {darkMode ? <MoonIcon /> : <SunIcon />}
                </div>
              </div>

              {/* Star Badge */}
              <div className="hidden sm:flex items-center space-x-1 text-yellow-500 bg-yellow-500/10 px-2.5 py-1 rounded-full text-xs font-semibold">
                <span>★</span>
                <span>Star</span>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Nav Bar - Horizontal Scrolling for Easy Tapping */}
        <div className="lg:hidden flex overflow-x-auto py-2 px-4 border-t border-slate-800/10 scrollbar-none space-x-2">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'blogs', label: 'Blogs' },
            { id: 'mission', label: 'Mission' },
            { id: 'initiatives', label: 'Initiatives' },
            { id: 'techhub', label: 'Tech Hub' },
            { id: 'future', label: 'Future' },
            { id: 'contact', label: 'Contact' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id !== 'blogs') setSelectedBlogId(null);
              }}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white'
                  : darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* --- HERO BANNER (Dark Sky Glowing Cloud Theme) --- */}
      {activeTab === 'home' && (
        <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          {/* Background Image Container with Gradient Overlays */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={homeBanner} 
                    alt="ThirupalTech Rural Cloud Banner" 
                    className="w-full h-full object-cover object-center opacity-45"
                />
                
            </div>
          
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Background elements simulating rural fields & sky stars */}
            <div className="absolute top-10 left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Technology for <span className="text-emerald-400">Communities.</span> <br />
                Innovation for <span className="text-amber-400">Villages.</span>
              </h2>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                I am <span className="text-emerald-300 font-semibold">Thirupal Reddy</span>, a Software Engineer passionate about using cutting-edge technology to create deeply meaningful, practical, and scalable impact in rural environments.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setActiveTab('blogs')}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all text-sm"
                >
                  Read Blogs
                </button>
                <button 
                  onClick={() => setActiveTab('about')}
                  className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:border-slate-500 transition-all text-sm"
                >
                  About Me
                </button>
              </div>

              {/* Pillars (Rural Innovation Framework) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8">
                {[
                  { title: "Education", subtitle: "Digital Literacy", emoji: "📖", color: "border-red-500/30 text-red-400 bg-red-950/20" },
                  { title: "Agriculture", subtitle: "Innovation", emoji: "🌾", color: "border-green-500/30 text-green-400 bg-green-950/20" },
                  { title: "Villages", subtitle: "Development", emoji: "🏡", color: "border-blue-500/30 text-blue-400 bg-blue-950/20" },
                  { title: "Culture", subtitle: "Preservation", emoji: "🏺", color: "border-amber-500/30 text-amber-400 bg-amber-950/20" }
                ].map((pillar, i) => (
                  <div key={i} className={`p-3 rounded-xl border ${pillar.color} flex flex-col items-center text-center`}>
                    <span className="text-2xl mb-1">{pillar.emoji}</span>
                    <span className="font-bold text-xs block text-white">{pillar.title}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{pillar.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>

            

          </div>
        </div>
      )}

      {/* --- CORE WRAPPER --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* --- HOME PAGE TAB CONTENT --- */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            
            {/* Trusted Technologies Section */}
            {/*

            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Our Expertise</h2>
                <p className={`text-2xl font-extrabold mt-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Trusted Technologies</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {[
                  { name: "AWS", logo: "☁️", color: "text-orange-500", desc: "Cloud Hosting" },
                  { name: "React", logo: "⚛️", color: "text-blue-400", desc: "Frontend Dev" },
                  { name: "TypeScript", logo: "📘", color: "text-sky-500", desc: "Type Safety" },
                  { name: "Java", logo: "☕", color: "text-red-500", desc: "Backend API" },
                  { name: "Spring Boot", logo: "🍃", color: "text-green-500", desc: "Enterprise App" },
                  { name: "Docker", logo: "🐳", color: "text-cyan-400", desc: "Containerization" },
                  { name: "Kubernetes", logo: "☸️", color: "text-indigo-400", desc: "Orchestration" },
                  { name: "GitHub", logo: "🐙", color: "text-white bg-slate-800 rounded-full px-1", desc: "Version Control" }
                ].map((tech, i) => (
                  <div key={i} className={`p-4 rounded-xl border text-center flex flex-col items-center justify-center transition-all hover:-translate-y-1 cursor-pointer ${
                    darkMode ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/40' : 'bg-white border-slate-200 hover:border-emerald-500/40 shadow-sm'
                  }`}>
                    <span className="text-3xl mb-2">{tech.logo}</span>
                    <span className="font-bold text-xs">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 mt-1">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </section>
            */}
            
            {/* Why ThirupalTech Exists & Our Impact Goals */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
              {/* Left Column Description */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-amber-500 uppercase">Core Purpose</h3>
                <h4 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Why ThirupalTech Exists</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Technology should not remain limited
                    to cities. <br />

                    Students deserve opportunities. <br />

                    Farmers deserve innovation. <br />

                    Villages deserve digital access. <br />

                    ThirupalTech exists to bridge this gap. <br />
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  <strong>ThirupalTech</strong> exists to build that vital bridging infrastructure. We craft easy-to-use software ecosystems, empower education directly on the ground, and deploy robust IoT tools that secure a better, sustainable future for rural societies.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => setActiveTab('mission')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 group"
                  >
                    <span>Learn More about our Mission</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column Impact Counter Blocks */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                {[
                  { value: "100+", label: "Blogs & Articles", sub: "To be Published", color: "border-emerald-500/20" },
                  { value: "1000+", label: "Students", sub: "To Reach & Educate", color: "border-blue-500/20" },
                  { value: "100+", label: "Villages", sub: "To Positively Impact", color: "border-amber-500/20" },
                  { value: "50+", label: "Tech Guides", sub: "To Open-source & Share", color: "border-purple-500/20" }
                ].map((stat: StatItem, i: number) => (
                  <div key={i} className={`p-6 rounded-2xl border text-center ${stat.color} ${darkMode ? 'bg-slate-900/60' : 'bg-white shadow-sm'}`}>
                    <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block mb-1">{stat.value}</span>
                    <span className={`text-xs font-bold block ${darkMode ? 'text-white' : 'text-slate-800'}`}>{stat.label}</span>
                    <span className="text-[10px] text-slate-500 mt-1 block">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Rural Impact Initiatives Section */}
            <section className="space-y-6 pt-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">How We Help</h2>
                <p className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Rural Impact Initiatives</p>
                <p className="text-xs text-slate-500">Targeted programs aimed at solving fundamental rural challenges through technology.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Education Programs",
                    desc: "Supporting digital literacy, coding seminars, career guidance and modern tech mentorship directly for village schools.",
                    icon: "🎓",
                    badge: "Empowerment",
                    color: "border-red-500/20"
                  },
                  {
                    title: "Agriculture Innovation",
                    desc: "Promoting smart farming, soil sensors, affordable irrigation triggers, and custom localized weather guidance networks.",
                    icon: "🌾",
                    badge: "Sustainability",
                    color: "border-green-500/20"
                  },
                  {
                    title: "Village Development",
                    desc: "Building intuitive digital apps, web listings, and microservices for small local cottage enterprises and community systems.",
                    icon: "🏡",
                    badge: "Community",
                    color: "border-blue-500/20"
                  },
                  {
                    title: "Culture Preservation",
                    desc: "Documenting folk histories, traditional farming methods, local arts, and regional recipes to preserve heritage for future generations.",
                    icon: "🎨",
                    badge: "Heritage",
                    color: "border-amber-500/20"
                  }
                ].map((initiative: InitiativeItem, idx: number) => (
                  <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between ${initiative.color} ${
                    darkMode ? 'bg-slate-900/80 hover:bg-slate-900' : 'bg-white hover:shadow-md'
                  } transition-all duration-300`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{initiative.icon}</span>
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full">{initiative.badge}</span>
                      </div>
                      <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{initiative.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{initiative.desc}</p>
                    </div>
                    
                    <button 
                      onClick={() => setActiveTab('initiatives')}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 self-start"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Knowledge Hub */}
            

            {/* Featured Blogs Section */}
            

          </div>
        )}

        {/* --- ABOUT TAB CONTENT --- */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            {/* Header Banner */}
            <div className={`p-8 rounded-3xl text-center space-y-2 border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Who I Am</h2>
              <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>About Me</p>
              <p className="text-xs text-slate-500">Home / About Me</p>
            </div>

            {/* Profile Bio & Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Photo & Fast Intro Box */}
              <div className={`lg:col-span-4 p-6 rounded-2xl border text-center space-y-4 ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-400 mx-auto p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-4xl overflow-hidden">
                    👨‍💻
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Thirupal Reddy</h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">Software Engineer </p>
                  <p className="text-[10px] text-slate-500">Rural Technology Community Builder</p>
                </div>
                
                <div className="flex justify-center gap-2 flex-wrap">
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">AWS Certified</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">Full Stack Dev</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">Community Focused</span>
                </div>
              </div>

              {/* Bio & Professional Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className={`text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Empowering Rural Landscapes with Advanced Tech</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  I am a Software Engineer with a deep foundation in cloud architectures, enterprise system engineering, and full-stack development patterns. However, my passion extends beyond writing robust microservices; I believe technology is a powerful tool to solve practical, ground-level problems in rural areas.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Growing up, I witnessed firsthand the digital divide that isolates remote communities. This website, <strong>ThirupalTech</strong>, is my dedicated mission platform to provide education, showcase scalable solutions, and build robust digital systems designed purposefully for villages, local schools, and smart agriculture.
                </p>

                {/* Stat Counters Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {[
                    { count: "3+", label: "Years Experience" },
                    { count: "10+", label: "Certifications" },
                    { count: "20+", label: "Projects Completed" },
                    { count: "5+", label: "Community Initiatives" }
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-xl text-center border ${
                      darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}>
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-500 block">{stat.count}</span>
                      <span className={`text-[10px] font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* My Journey Timeline */}
            <div className="space-y-6 pt-6">
              <h3 className={`text-2xl font-extrabold text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>My Journey</h3>
              
              <div className="max-w-3xl mx-auto relative border-l border-emerald-500/30 pl-6 ml-4 space-y-8">
                {[
                  {
                    year: "Early Life",
                    title: "Rural Roots & Spark of Inspiration",
                    desc: "Grew up in a quiet village setting, experiencing firsthand the lack of connectivity and basic digital services. Ignited a lifelong vow to return value through technological empowerment."
                  },
                  {
                    year: "Academic Era",
                    title: "Computer Science Graduation",
                    desc: "Graduated with honors. Rigorous training in software engineering principles, enterprise Java frameworks, and high-performance algorithms."
                  },
                  {
                    year: "Professional Growth",
                    title: "Software Engineer Careers",
                    desc: "Honed professional experience building secure, scalable cloud systems, container architectures, and distributed microservices within corporate environments."
                  },
                  {
                    year: "Present Day",
                    title: "AWS Specialization & ThirupalTech Launch",
                    desc: "Achieved multiple AWS professional achievements. Launched the ThirupalTech platform to compile easy tutorials and architect community IoT integrations for Indian villages."
                  }
                ].map((milestone: Milestone, i: number) => (
                  <div key={i} className="relative">
                    {/* Ring indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                    
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">{milestone.year}</span>
                      <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{milestone.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* --- BLOGS TAB CONTENT --- */}
        {activeTab === 'blogs' && (
          <div className="space-y-12">
            
            {/* If a single blog is selected, render the reading screen */}
            {selectedBlogId ? (
              <div className="space-y-8">
                <button 
                  onClick={() => setSelectedBlogId(null)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  ← Back to All Blogs
                </button>

                {(() => {
                  const currentBlog: Blog | undefined = BLOGS_DATA.find((b: Blog) => b.id === selectedBlogId);
                  if (!currentBlog) return <p>Blog post not found.</p>;
                  return (
                    <article className="max-w-3xl mx-auto space-y-8">
                      {/* Meta */}
                      <div className="space-y-4">
                        <span className="text-xs font-bold uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                          {currentBlog.category}
                        </span>
                        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {currentBlog.title}
                        </h1>
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <p className="font-bold text-emerald-500">{currentBlog.author}</p>
                          <span>•</span>
                          <p>{currentBlog.date}</p>
                          <span>•</span>
                          <p>{currentBlog.readTime}</p>
                        </div>
                      </div>

                      {/* Cover Placeholder Frame */}
                      <div className="relative aspect-video rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/10 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                        <div className="absolute top-4 right-4 text-xs font-mono text-emerald-500 bg-slate-950 px-2 py-1 rounded">
                          AWS Certified Cloud Tech
                        </div>
                        <CloudIcon className="w-16 h-16 text-emerald-400/40 animate-pulse mb-2" />
                        <span className="text-lg font-bold text-slate-300">{currentBlog.title}</span>
                        <span className="text-xs text-slate-500 mt-1">Official ThirupalTech Technology Guide</span>
                      </div>

                      {/* Content Render */}
                      <div 
                        className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none text-sm text-slate-300 leading-relaxed space-y-4`}
                        dangerouslySetInnerHTML={{ __html: currentBlog.content }}
                      />

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                        {currentBlog.tags.map((tag: string, i: number) => (
                          <span key={i} className="text-xs bg-slate-900 text-slate-400 px-3 py-1 rounded-lg border border-slate-800">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })()}
              </div>
            ) : (
              // Blogs Archive List screen
              <div className="space-y-8">
                {/* Header Header */}
                <div className={`p-8 rounded-3xl text-center space-y-2 border ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Knowledge Sharing</h2>
                  <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Blog & Articles</p>
                  <p className="text-xs text-slate-500">Home / Blogs</p>
                </div>

                {/* Filter Controls & Search */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column Filters */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Search Field */}
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search articles..." 
                        value={blogSearchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBlogSearchQuery(e.target.value)}
                        className={`w-full text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                      <div className="absolute left-3.5 top-3.5 text-slate-500">
                        <SearchIcon />
                      </div>
                    </div>

                    {/* Category List */}
                    <div className="space-y-3">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Categories</p>
                      <div className="flex flex-col gap-1">
                        {['All', 'AWS Cloud', 'React Development', 'Agriculture', 'DevOps'].map((category) => (
                          <button
                            key={category}
                            onClick={() => setBlogCategoryFilter(category)}
                            className={`text-left px-3 py-2 text-xs rounded-lg transition-all ${
                              blogCategoryFilter === category
                                ? 'bg-emerald-500 text-slate-950 font-bold'
                                : darkMode ? 'text-slate-400 hover:bg-slate-900 hover:text-white' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Blogs Feed */}
                  <div className="lg:col-span-9 space-y-6">
                    {filteredBlogs.length === 0 ? (
                      <div className="text-center p-12 border border-dashed border-slate-800 rounded-2xl">
                        <p className="text-slate-400 text-sm">No blogs matched your search criteria.</p>
                        <button 
                          onClick={() => { setBlogSearchQuery(''); setBlogCategoryFilter('All'); }}
                          className="mt-4 text-xs font-bold text-emerald-500 hover:underline"
                        >
                          Clear Filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredBlogs.map((blog: Blog) => (
                          <article key={blog.id} className={`rounded-2xl border overflow-hidden flex flex-col justify-between ${
                            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                          } hover:-translate-y-1 transition-all duration-300`}>
                            <div className="p-6 space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                                  {blog.category}
                                </span>
                                <span className="text-[10px] text-slate-500">{blog.readTime}</span>
                              </div>
                              <h3 className={`text-base font-bold line-clamp-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{blog.title}</h3>
                              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                            </div>

                            <div className={`p-6 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'} flex items-center justify-between`}>
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">TR</div>
                                <div className="text-[10px]">
                                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{blog.author}</p>
                                  <p className="text-slate-500">{blog.date}</p>
                                </div>
                              </div>
                              <button 
                                onClick={() => handleReadBlog(blog.id)}
                                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                              >
                                Read More
                                <ArrowRightIcon className="w-3 h-3" />
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

              </div>
            )}

          </div>
        )}

        {/* --- MISSION TAB CONTENT --- */}
        {activeTab === 'mission' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Core Beliefs</h2>
              <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Mission</p>
              <p className="text-xs text-slate-500">How we plan to reshape rural connectivity and software deployment paradigms.</p>
            </div>

            <div className={`p-8 rounded-2xl border space-y-6 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white shadow-sm border-slate-200'}`}>
              <div className="flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                <h3 className="text-xl font-bold">The Core ThirupalTech Vision</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rural areas hold the physical backbone of nations, hosting essential agriculture and foundational cottage systems. However, modern high-grade software architectures (microservices, real-time edge caches, automation APIs, cloud scale storage) often pass these zones by entirely. 
              </p>
              <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 italic text-sm text-slate-300">
                "Our mission is simple: To bring high-level enterprise software methodologies down to earth to serve community growth, rural schools, and progressive family farmers."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Universal Digital Literacy", desc: "No student should be left behind. We design simple curriculums that take students from standard computing tools directly to advanced concepts like HTML coding, GitHub logic, and basic cloud APIs." },
                { title: "Empowering Rural Soil", desc: "IoT irrigation systems and edge automation loops shouldn't cost thousands. We focus on compiling open-source, affordable hardware guidelines running on NodeMCU or Arduino to trigger water automation." },
                { title: "Supporting Cottage Crafts", desc: "Many rural businesses make outstanding physical goods but lack visual presence. We design lightweight, static digital listings to put village artisans on the digital global map." },
                { title: "Documenting Folk Histories", desc: "Our platform offers tools to archive and store critical oral histories, community records, traditional seed databases, and historical assets using secure database engines." }
              ].map((m, i) => (
                <div key={i} className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                  <h4 className="text-base font-bold text-emerald-400">{m.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- INITIATIVES TAB CONTENT --- */}
        {activeTab === 'initiatives' && (
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Impact on the Ground</h2>
              <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Rural Impact Initiatives</p>
              <p className="text-xs text-slate-500">Discover how ThirupalTech is actively initiating projects across villages.</p>
            </div>

            {/* Comprehensive details of the 4 initiatives */}
            <div className="space-y-8">
              {[
                {
                  title: "Smart Village Connectivity & Digital Training",
                  meta: "Education Programs",
                  desc: "This initiative aims to establish high-speed networking, communal computer hubs, and specialized computer science programming bootcamps for ambitious young students in rural schools.",
                  points: [
                    "Introduces children to HTML, CSS, JavaScript, and Cloud basics.",
                    "Provides free, download-ready open-source curriculum modules.",
                    "Builds career preparation mentorship pipelines matching remote students with tech industry mentors."
                  ],
                  emoji: "🎓",
                  color: "border-red-500/20"
                },
                {
                  title: "Low-Cost Automated Agricultural Systems",
                  meta: "Agriculture Innovation",
                  desc: "By combining basic soil chemistry guidelines with cheap moisture and heat sensors, we build custom automated systems that prevent water waste and warn farmers about impending weather anomalies.",
                  points: [
                    "Utilizes low-cost hardware to trigger automatic sprinkler networks.",
                    "Sends smart direct notifications warning of high rain or drought potential.",
                    "Connects regional growers directly with wholesale buyers."
                  ],
                  emoji: "🌾",
                  color: "border-green-500/20"
                },
                {
                  title: "Micro-Commerce Directory for Artisans",
                  meta: "Village Development",
                  desc: "Empowering rural weavers, clay pot makers, and unique agricultural producers to establish direct contact portfolios so buyers can pay fair prices directly.",
                  points: [
                    "Zero commissions — all transactions occur directly via cash or UPI transfer.",
                    "Includes map routes so visitors can buy items directly from origin.",
                    "Beautiful photo listings highlighting local craftsmanship."
                  ],
                  emoji: "🏡",
                  color: "border-blue-500/20"
                }
              ].map((init: GroundInitiative, i: number) => (
                <div key={i} className={`p-8 rounded-2xl border grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${init.color} ${
                  darkMode ? 'bg-slate-900/60' : 'bg-white shadow-sm'
                }`}>
                  <div className="md:col-span-2 text-center">
                    <span className="text-6xl">{init.emoji}</span>
                  </div>
                  <div className="md:col-span-10 space-y-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{init.meta}</span>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{init.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{init.desc}</p>
                    <ul className="space-y-1 pt-2">
                      {init.points.map((p: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="text-emerald-500">✦</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TECH HUB TAB CONTENT --- */}
        {activeTab === 'techhub' && (
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Architecture Center</h2>
              <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Technology Knowledge Hub</p>
              <p className="text-xs text-slate-500">Dive deep into the precise technology stacks that ThirupalTech employs and teaches.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Stack 1: AWS Cloud */}
              <div className={`lg:col-span-4 p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                <span className="text-4xl">☁️</span>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>AWS Cloud</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We leverage AWS cloud structures to deploy responsive microservices. Our focuses include serverless scale triggers that guarantee robust village connectivity without large running bills.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex justify-between text-xs text-slate-400"><span>EC2 Provisioning</span><span className="text-emerald-400">Expert</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>Lambda Orchestration</span><span className="text-emerald-400">Advanced</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>S3 Security</span><span className="text-emerald-400">Expert</span></div>
                </div>
              </div>

              {/* Stack 2: Software Engineering */}
              <div className={`lg:col-span-4 p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                <span className="text-4xl">💻</span>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Software Engineering</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Writing clean, self-documenting code in Java and TypeScript is a priority. We build custom React dashboards and Spring Boot REST modules that make system integration transparent.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex justify-between text-xs text-slate-400"><span>React / TypeScript</span><span className="text-blue-400">Expert</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>Java Spring Boot</span><span className="text-blue-400">Expert</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>Microservices</span><span className="text-blue-400">Advanced</span></div>
                </div>
              </div>

              {/* Stack 3: DevOps & Scaling */}
              <div className={`lg:col-span-4 p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                <span className="text-4xl">⚙️</span>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>DevOps & Infrastructure</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Through Kubernetes, Docker, and GitHub Actions, we orchestrate zero-downtime micro-clusters. This means applications remain active and responsive even under rural network volatility.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex justify-between text-xs text-slate-400"><span>Docker Containers</span><span className="text-amber-400">Expert</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>Kubernetes Clusters</span><span className="text-amber-400">Advanced</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>CI/CD Pipelines</span><span className="text-amber-400">Expert</span></div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- FUTURE VISION TAB CONTENT --- */}
        {activeTab === 'future' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">What's Ahead</h2>
              <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Future Vision</p>
              <p className="text-xs text-slate-500">The roadmap toward broad scale digital rural empowerment.</p>
            </div>

            <div className="relative border-l-2 border-slate-800 pl-6 space-y-8 ml-4">
              {[
                { phase: "Phase 1: Foundations", title: "Resource Compiling & Online Classroom Support", desc: "Building structured coding guides, providing digital literacy materials, and delivering computer science resources completely free for village schools." },
                { phase: "Phase 2: IoT Pilot", title: "Smart Soil Moisture Sensor Deployment", desc: "Deploying affordable soil and smart farming moisture trackers directly in partner rural farms to track water usage optimization." },
                { phase: "Phase 3: Directory expansion", title: "Cottage Craft and Rural Tourism Listings", desc: "Launching directory portfolios showcasing localized cottage crafts, home businesses, and traditional rural tourism destinations directly to buyers." }
              ].map((v: VisionPhase, i: number) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-400">{v.phase}</span>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{v.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- CONTACT TAB CONTENT --- */}
        {activeTab === 'contact' && (
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Get In Touch</h2>
              <p className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact Me</p>
              <p className="text-xs text-slate-500">Let's connect, share ideas, and build rural technology together.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Side */}
              <div className={`lg:col-span-7 p-6 rounded-2xl border ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <h3 className="text-base font-bold mb-4">Send a Message</h3>
                
                {formFeedback && (
                  <div className={`p-4 mb-4 rounded-xl text-xs font-medium ${
                    formFeedback.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {formFeedback.text}
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name" 
                      value={contactForm.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, name: e.target.value})}
                      className={`w-full text-xs rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email" 
                      value={contactForm.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, email: e.target.value})}
                      className={`w-full text-xs rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Enter subject" 
                      value={contactForm.subject}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({...contactForm, subject: e.target.value})}
                      className={`w-full text-xs rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Message *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Write your message..." 
                      value={contactForm.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContactForm({...contactForm, message: e.target.value})}
                      className={`w-full text-xs rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                      }`}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-lg transition-all text-xs"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info Column Side */}
              <div className="lg:col-span-5 space-y-6">
                <div className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                } space-y-6`}>
                  <h3 className="text-base font-bold">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-emerald-500/10 text-emerald-500">
                        <MailIcon />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-slate-400">Email Address</p>
                        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>thirupalanguru@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-emerald-500/10 text-emerald-500">
                        <LocationIcon />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-slate-400">Location</p>
                        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Andra Pradesh, India 🇮🇳</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Handles */}
                  
                </div>

                {/* Direct Subscription Widget */}
                

              </div>

            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className={`border-t py-12 ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          
          {/* Logo & About */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center cursor-pointer" onClick={() => { setActiveTab('home'); setSelectedBlogId(null); }}>
              <span className="text-lg font-extrabold tracking-tight text-emerald-500">Thirupal</span>
              <span className={`text-lg font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-800'}`}>Tech</span>
            </div>
            <p className="leading-relaxed">
              Empowering remote villages, agricultural workers, and community schools with highly scalable cloud integrations and open-source software structures.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => { setActiveTab('home'); setSelectedBlogId(null); }} className="text-left hover:text-emerald-400">Home</button>
              <button onClick={() => { setActiveTab('techhub'); }} className="text-left hover:text-emerald-400">Tech Hub</button>
              <button onClick={() => { setActiveTab('about'); }} className="text-left hover:text-emerald-400">About Me</button>
              <button onClick={() => { setActiveTab('future'); }} className="text-left hover:text-emerald-400">Future Vision</button>
              <button onClick={() => { setActiveTab('blogs'); setSelectedBlogId(null); }} className="text-left hover:text-emerald-400">Blogs</button>
              <button onClick={() => { setActiveTab('contact'); }} className="text-left hover:text-emerald-400">Contact</button>
              <button onClick={() => { setActiveTab('mission'); }} className="text-left hover:text-emerald-400">Mission</button>
              <button onClick={() => { setActiveTab('initiatives'); }} className="text-left hover:text-emerald-400">Initiatives</button>
            </div>
          </div>

          {/* Categories */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Technology Hubs</h4>
            <div className="space-y-2">
              <p className="cursor-pointer hover:text-emerald-400" onClick={() => { setActiveTab('techhub'); }}>AWS Cloud Automation</p>
              <p className="cursor-pointer hover:text-emerald-400" onClick={() => { setActiveTab('techhub'); }}>React & TypeScript Systems</p>
              <p className="cursor-pointer hover:text-emerald-400" onClick={() => { setActiveTab('techhub'); }}>Docker & Kubernetes Microservices</p>
              <p className="cursor-pointer hover:text-emerald-400" onClick={() => { setActiveTab('initiatives'); }}>Rural Soil Moisture IoT</p>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 space-y-3">
            <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Connect</h4>
            <div className="flex gap-3 text-lg">
              <a href="#linkedin" title="LinkedIn" className="hover:text-emerald-400">🔗</a>
              <a href="#github" title="GitHub" className="hover:text-emerald-400">🐙</a>
              <a href="#twitter" title="Twitter" className="hover:text-emerald-400">🐦</a>
              <a href="#youtube" title="YouTube" className="hover:text-emerald-400">📺</a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900/40 text-center text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} ThirupalTech. All rights reserved. Made with ❤️ for local communities.</p>
        </div>
      </footer>

    </div>
  );
}