import { useNavigate } from "react-router";

const contributions = [
  {
    title: "WordPress Theme Customization & Elementor",
    desc: "Enhanced an existing WordPress theme by customizing its layouts and components with Elementor Pro. Developed and refined key sections of the website, created reusable templates, and implemented custom styling to improve the overall design, consistency, and user experience.",
  },
  {
    title: "Practice Area Pages",
    desc: "Created structured, SEO-friendly pages for each legal service — personal injury, auto accidents, slip & fall, and more — with clear calls-to-action and intake form integration.",
  },
  {
    title: "Responsive Layout & Mobile Optimization",
    desc: "Ensured pixel-perfect responsiveness across all breakpoints using custom CSS overrides on top of Elementor's grid system, optimized for both desktop and mobile court-facing clients.",
  },
  {
    title: "Contact & Consultation Forms",
    desc: "Integrated lead capture forms with email notification routing and spam protection using WPForms, directly tied to the firm's intake workflow.",
  },
  {
    title: "Performance & Accessibility",
    desc: "Ran Lighthouse audits and applied image optimization, lazy loading, and caching rules via WP Engine to hit 90+ performance scores. Addressed basic WCAG accessibility requirements for legal compliance.",
  },
  {
    title: "Deployment & Handoff",
    desc: "Managed staging-to-production deployment via WP Engine and cPanel, documented the CMS for the client team, and configured role-based access for content editors.",
  },
];

const stack = ["WordPress", "Elementor", "HTML/CSS", "JavaScript", "PHP 8+"];

export default function RMDLaw() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4dc]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full bg-[#b8f542] flex items-center justify-center">
            <span className="text-[#0a0a0a] text-xs font-bold mono">ES</span>
          </div>
          <span className="font-['Fraunces'] text-base font-light tracking-tight">Edgar Simbajon</span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-[#6b6762] hover:text-[#e8e4dc] transition-colors"
        >
          <span className="mono text-xs">←</span> Back to Portfolio
        </button>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-12 px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="mono text-xs text-[#6b6762] tracking-widest uppercase">Case Study</span>
          <span className="w-8 h-px bg-[#333]" />
          <span className="mono text-xs text-[#b8f542]">WordPress / Elementor</span>
          <span className="w-8 h-px bg-[#333]" />
          <span className="mono text-xs text-[#6b6762]">2024</span>
        </div>
        <h1 className="font-['Fraunces'] text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6">
          RMD Law
        </h1>
        <p className="text-[#6b6762] text-lg leading-relaxed max-w-2xl">
          Corporate website for a California-based personal injury law firm — designed to establish professional credibility, communicate legal services clearly, and convert prospective clients into consultations.
        </p>
      </section>

      {/* Hero image */}
      <div className="px-8 max-w-5xl mx-auto mb-16">
        <div className="rounded overflow-hidden border border-[#1a1a1a] bg-[#111]">
          <img
            src="/src/imports/RMD_Law_Section.png"
            alt="RMD Law website screenshot"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Meta strip */}
      <section className="px-8 max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1a1a1a]">
          {[
            { label: "Client", val: "RMD Law" },
            { label: "Year", val: "2024" },
            { label: "Role", val: "WordPress Developer" },
            { label: "Type", val: "Corporate Website" },
          ].map((m) => (
            <div key={m.label} className="bg-[#0a0a0a] px-6 py-5">
              <div className="mono text-xs text-[#6b6762] uppercase tracking-widest mb-1">{m.label}</div>
              <div className="text-sm text-[#e8e4dc]">{m.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contributions */}
      <section className="px-8 max-w-5xl mx-auto mb-16 border-t border-[#1a1a1a] pt-16">
        <h2 className="font-['Fraunces'] text-3xl font-light mb-10">What I Contributed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a]">
          {contributions.map((c, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8">
              <div className="flex items-start gap-4">
                <span className="mono text-xs text-[#b8f542] mt-1 flex-shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-medium text-[#e8e4dc] mb-2">{c.title}</h3>
                  <p className="text-sm text-[#6b6762] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="px-8 max-w-5xl mx-auto mb-20 border-t border-[#1a1a1a] pt-16">
        <h2 className="font-['Fraunces'] text-3xl font-light mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((t) => (
            <span
              key={t}
              className="mono text-sm border border-[#222] text-[#6b6762] px-5 py-2.5 rounded hover:border-[#b8f542] hover:text-[#b8f542] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Back CTA */}
      <section className="px-8 max-w-5xl mx-auto pb-20 border-t border-[#1a1a1a] pt-16 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-[#6b6762] hover:text-[#e8e4dc] transition-colors group"
        >
          <span className="mono text-sm group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm">Back to all work</span>
        </button>
        <span className="mono text-xs text-[#333]">1 / 4</span>
      </section>
    </div>
  );
}
