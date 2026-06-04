const steps = [
  {
    title: "Define the customer signal",
    body: "Write down the exact pain, trigger event, or buying signal you want to spot. Good signals are specific: hiring for a role, complaining about a workflow, launching a product, asking for recommendations, or mentioning a competitor.",
  },
  {
    title: "Build ethical search queries",
    body: "Use public posts and compliant search only. Combine problem phrases, role titles, and intent words such as 'recommend', 'looking for', 'need help', 'tool for', or 'switching from'. Avoid scraping private data or mass-automating engagement.",
  },
  {
    title: "Create a lightweight lead board",
    body: "Track handle, post URL, signal, context, fit score, next action, and follow-up date. A spreadsheet, CRM, or simple markdown board is enough at the start.",
  },
  {
    title: "Engage before pitching",
    body: "Reply with something useful, ask a relevant question, or share a practical resource. The goal is to create a real conversation, not to drop a generic sales message.",
  },
  {
    title: "Send a short permission-based DM",
    body: "If the conversation fits, ask whether they want a relevant resource or quick suggestion. Keep it human, specific to their post, and easy to ignore.",
  },
  {
    title: "Measure and improve weekly",
    body: "Review which queries, post types, and reply styles create real conversations. Keep what works, remove noisy queries, and document examples of good-fit leads.",
  },
];

const queries = [
  '"looking for" "CRM" -hiring',
  '"recommend" "email automation"',
  '"switching from" "HubSpot"',
  '"need help" "lead generation"',
  '"tool for" "sales outreach"',
];

export const metadata = {
  title: "Twitter Lead Generation Tutorial",
  description: "A practical, ethical workflow for finding and qualifying leads from public Twitter/X conversations.",
};

export default function TwitterLeadGenTutorial() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <a className="text-sm font-medium text-cyan-300 hover:text-cyan-200" href="/">
          ← Back to home
        </a>

        <header className="mt-10">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Tutorial · Lead generation from Twitter/X
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            How to generate leads from Twitter without spam
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This guide shows a compliant, relationship-first workflow for finding people who are already talking about a problem you solve, qualifying them, and starting useful conversations.
          </p>
        </header>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-cyan-200">Principles before tactics</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Work only with public posts and platform-compliant tools.</li>
            <li>• Do not automate spam replies, fake engagement, or mass DMs.</li>
            <li>• Use every lead interaction to help first and sell second.</li>
            <li>• Save context so every follow-up feels specific and human.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Step-by-step workflow</h2>
          <div className="mt-6 grid gap-5">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-cyan-200">Example search queries</h2>
            <div className="mt-4 space-y-3">
              {queries.map((query) => (
                <code key={query} className="block rounded-xl bg-slate-900 px-4 py-3 text-sm text-slate-100">
                  {query}
                </code>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-cyan-200">Lead board columns</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Handle and profile URL</li>
              <li>• Post URL and short context</li>
              <li>• Pain or buying signal</li>
              <li>• Fit score from 1–5</li>
              <li>• Helpful reply idea</li>
              <li>• Follow-up date and outcome</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-emerald-200">Simple outreach template</h2>
          <p className="mt-4 leading-7 text-slate-200">
            “Saw your post about [specific problem]. One thing that usually helps is [short useful insight]. If useful, I can send a quick checklist for [desired outcome].”
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Keep it short, relevant, and permission-based. If they do not respond, do not keep pushing.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-cyan-200">Weekly review checklist</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Which queries produced real prospects?</li>
            <li>Which replies created conversations?</li>
            <li>Which signals were false positives?</li>
            <li>Which offers or resources got the best response?</li>
            <li>What should be removed from the process next week?</li>
          </ol>
        </section>
      </article>
    </main>
  );
}
