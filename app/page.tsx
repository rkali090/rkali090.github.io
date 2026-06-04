export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
          Next.js + GitHub Pages
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Your default website is live.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This site is a static Next.js export deployed automatically with GitHub Actions to GitHub Pages.
          Replace this page with your uploaded website content and push to publish a new build.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="font-semibold text-cyan-200">Build</h2>
            <p className="mt-2 text-sm text-slate-300">`pnpm build` exports static files into `out/`.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="font-semibold text-cyan-200">Deploy</h2>
            <p className="mt-2 text-sm text-slate-300">GitHub Actions uploads the static artifact to Pages.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="font-semibold text-cyan-200">View</h2>
            <p className="mt-2 text-sm text-slate-300">Open https://rkali090.github.io after the workflow finishes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
