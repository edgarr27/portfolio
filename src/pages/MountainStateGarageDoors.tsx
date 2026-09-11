import { useNavigate } from "react-router";

const contributions = [
  {
    title: "Blog Section Development",
    desc: "Added and customized the blog section, including post layouts and reusable components, to improve content organization and provide a consistent reading experience.",
  },
  {
    title: "Custom Elementor Theme",
    desc: "Developed a custom WordPress theme and extended it with Elementor Pro, creating reusable section templates and a consistent visual language across all pages.",
  },
  {
    title: "SEO Optimization",
    desc: "Applied SEO techniques and optimized page structure, content, and metadata to improve search engine visibility and ensure proper SEO formatting across the website.",
  },
  {
    title: "Responsive Mobile Layout",
    desc: "Optimized the entire site for mobile-first browsing with custom CSS breakpoints, ensuring fast load times and easy navigation for customers looking for urgent garage door help.",
  },
  {
    title: "PHP Customizations",
    desc: "Used PHP 8+ to extend theme functionality — custom post types for service listings, dynamic page templates, and conditional content based on service category.",
  },
  {
    title: "Hosting & Deployment",
    desc: "Managed full deployment pipeline through cPanel and WP Engine, including SSL setup, caching configuration, and staging-to-live migration with zero downtime.",
  },
];

const stack = ["WordPress", "Elementor", "HTML/CSS", "JavaScript", "PHP 8+", "Custom Themes"];

export default function MountainStateGarageDoors() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4dc]">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <button onClick={() => navigate("/")} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#b8f542] flex items-center justify-center">
            <span className="text-[#0a0a0a] text-xs font-bold mono">ES</span>
          </div>
          <span className="font-['Fraunces'] text-base font-light tracking-tight">Edgar Simbajon</span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-[#6b6762] hover:text-[#e8e4dc] transition-colors group"
        >
          <span className="mono text-xs group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to Portfolio
        </button>
      </header>

      <section className="pt-36 pb-12 px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="mono text-xs text-[#6b6762] tracking-widest uppercase">Case Study</span>
          <span className="w-8 h-px bg-[#333]" />
          <span className="mono text-xs text-[#b8f542]">WordPress / Elementor</span>
          <span className="w-8 h-px bg-[#333]" />
          <span className="mono text-xs text-[#6b6762]">2024</span>
        </div>
        <h1 className="font-['Fraunces'] text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6">
          MountainState<br />Garage Doors
        </h1>
        <p className="text-[#6b6762] text-lg leading-relaxed max-w-2xl">
          Professional service website for a garage door company, focused on showcasing services, products, and solutions for residential and commercial customers.
        </p>
      </section>

      <div className="px-8 max-w-5xl mx-auto mb-16">
        <div className="rounded overflow-hidden border border-[#1a1a1a] bg-[#111]">
          <img
            src="/src/imports/Mountain_State_Garage_Doors_Section.png"
            alt="MountainState Garage Doors website screenshot"
            className="w-full object-cover"
          />
        </div>
      </div>

      <section className="px-8 max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1a1a1a]">
          {[
            { label: "Client", val: "MountainState Garage Doors" },
            { label: "Year", val: "2024" },
            { label: "Role", val: "WordPress Developer" },
            { label: "Type", val: "Service Website" },
          ].map((m) => (
            <div key={m.label} className="bg-[#0a0a0a] px-6 py-5">
              <div className="mono text-xs text-[#6b6762] uppercase tracking-widest mb-1">{m.label}</div>
              <div className="text-sm text-[#e8e4dc]">{m.val}</div>
            </div>
          ))}
        </div>
      </section>

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

      <section className="px-8 max-w-5xl mx-auto mb-20 border-t border-[#1a1a1a] pt-16">
        <h2 className="font-['Fraunces'] text-3xl font-light mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((t) => (
            <span key={t} className="mono text-sm border border-[#222] text-[#6b6762] px-5 py-2.5 rounded hover:border-[#b8f542] hover:text-[#b8f542] transition-colors">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="px-8 max-w-5xl mx-auto pb-20 border-t border-[#1a1a1a] pt-16 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-[#6b6762] hover:text-[#e8e4dc] transition-colors group"
        >
          <span className="mono text-sm group-hover:-translate-x-1 transition-transform inline-block">←</span>
          <span className="text-sm">Back to all work</span>
        </button>
        <span className="mono text-xs text-[#333]">2 / 4</span>
      </section>
    </div>
  );
}
