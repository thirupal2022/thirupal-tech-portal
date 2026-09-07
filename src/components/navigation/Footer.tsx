export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-t from-slate-900/90 via-slate-900/80 to-transparent text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">ThirupalTech</h3>
            <p className="mt-4 max-w-xl text-slate-200">Technology becomes meaningful when it uplifts communities.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-slate-300">
              <li>About</li>
              <li>Community</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              <a aria-label="Twitter" href="#" className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.5.6-2.3.8C16.6 6 15.5 5.5 14.3 5.5c-2 0-3.5 1.8-3 3.6C8.7 8.8 6.8 7.7 5.6 6c-.8 1.4-.3 3.1 1 4-.5 0-1-.2-1.4-.4 0 1.7 1.3 3.2 3 3.5-.5.1-1 .1-1.5.1-.4 0-.7 0-1-.1.6 2 2.6 3.3 4.8 3.3C8.4 20 6.2 20.7 4 20.7c-1 0-2-.1-3-.3 2.3 1.4 5 2.2 7.9 2.2 9.5 0 14.7-7.9 14.7-14.7v-.7c1-.6 1.9-1.3 2.6-2.1-.9.4-1.8.6-2.7.7z" fill="currentColor"/></svg></a>
              <a aria-label="GitHub" href="#" className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.2 10.1.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 1.9 1.3.5 1.2 1.4.9 2 .7.1-.6.4-1 .7-1.2-2.3-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .9.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.1-1.3 3-.9 3-.9.6 1.5.2 2.6.1 2.9.7.6 1.1 1.6 1.1 2.7 0 3.9-2.3 4.8-4.6 5.1.4.4.8 1 .8 2v3c0 .2.2.6.7.5 4.2-1.5 7.2-5.5 7.2-10.1C23.1 5.3 18.3.5 12 .5z" fill="currentColor"/></svg></a>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-sm text-slate-400">
          © 2026 ThirupalTech
        </div>

      </div>

    </footer>
  );
}