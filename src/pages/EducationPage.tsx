import { useNavigate } from "react-router-dom";

export default function EducationPage() {
  const navigate = useNavigate();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-4 text-sm text-slate-600 flex items-center gap-2">
        <button className="text-amber-700 hover:underline" onClick={() => navigate('/community')}>Community</button>
        <span>/</span>
        <span>Education</span>
      </div>

      <section className="p-6 rounded-2xl border bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Education</h1>
        <p className="mt-2 text-slate-600">Placeholder content for education programs and learning resources.</p>
      </section>
    </main>
  );
}
