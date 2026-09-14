import { useState } from "react";
import { useNavigate } from "react-router";
import MountainStateImage from "../src/imports/Mountain_State_Garage_Doors_Section.png";
import RMDLawImage from "../src/imports/RMD_Law_Section.png";
import SpiralyticsImage from "../src/imports/Spiralytics_Section.png";
import ZplatzImage from "../src/imports/Zplatz_Section.png";

const nav = ["Work", "Skills", "About", "Contact"];

const projects = [
  {
    id: 1,
    title: "RMD Law",
    category: "WordPress / Elementor",
    year: "2024",
    desc: "Corporate website for a law firm, designed to showcase legal services, firm expertise, and information for prospective clients.",
    tags: ["WordPress", "Elementor", "HTML/CSS", "JavaScript"],
    img: RMDLawImage,
    color: "#b8f542",
  },
  {
    id: 2,
    title: "MountainState Garage Doors",
    category: "WordPress / Elementor",
    year: "2024",
    desc: "Professional service website for a garage door company, focused on showcasing services, products, and solutions for residential and commercial customers.",
    tags: [
      "WordPress",
      "Elementor",
      "HTML/CSS",
      "JavaScript",
      "PHP 8+",
      "Custom Themes",
    ],
    img: MountainStateImage,
    color: "#f5a842",
  },
  {
    id: 3,
    title: "Spiralytics",
    category: "WordPress / Elementor",
    year: "2024",
    desc: "Corporate website for a digital marketing agency, showcasing SEO, content marketing, and digital marketing services for businesses.",
    tags: ["WordPress", "Elementor", "HTML/CSS", "JavaScript", "PHP 8+"],
    img: SpiralyticsImage,
    color: "#42a8f5",
  },
  {
    id: 4,
    title: "Zplatz",
    category: "React / Next.js",
    year: "2025",
    desc: "AI-powered 3D visualization platform that transforms video footage into immersive virtual environments and interactive experiences.",
    tags: ["React", "Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    img: ZplatzImage,
    color: "#c542f5",
  },
];

const skills = [
  {
    group: "WordPress",
    items: [
      "Custom Themes",
      "Gutenberg Blocks",
      "WooCommerce",
      "ACF Pro",
      "Multisite",
      "REST API",
      "PHP 8+",
      "Plugin Dev",
      "Elementor",
    ],
  },
  {
    group: "Front-End",
    items: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "CSS Grid",
      "GSAP",
      "SVG Animation",
    ],
  },
  {
    group: "Back-End & CMS",
    items: ["Node.js", "MySQL", "PostgreSQL", "REST", "Docker", "Squarespace"],
  },
  {
    group: "Tooling",
    items: [
      "Git",
      "Vite",
      "Webpack",
      "GitHub Actions",
      "Vercel",
      "WP Engine",
      "Figma",
      "cPanel",
    ],
  },
];

const timeline = [
  {
    year: "2025",
    role: "Frontend Web Developer Intern",
    org: "Polypix Studios / Remote",
    note: "Next.js, JavaScript, and Tailwind CSS development for responsive and modern web applications.",
  },
  {
    year: "2024",
    role: "WordPress Development Intern",
    org: "Spiralytics, Inc. / Remote",
    note: "Assisted in building and maintaining WordPress websites using HTML, CSS, JavaScript, Git/GitHub, cPanel, and WP Engine.",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("Work");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const projectRoutes: Record<number, string> = {
    1: "/work/rmd-law",
    2: "/work/mountainstate-garage-doors",
    3: "/work/spiralytics",
    4: "/work/zplatz",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4dc]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#b8f542] flex items-center justify-center">
            <span className="text-[#0a0a0a] text-xs font-bold mono">ES</span>
          </div>
          <span className="font-['Fraunces'] text-base font-light tracking-tight">
            Edgar Simbajon
          </span>
        </div>
        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item);
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 py-1.5 text-sm rounded transition-all duration-200 ${
                activeSection === item
                  ? "bg-[#b8f542] text-[#0a0a0a] font-medium"
                  : "text-[#6b6762] hover:text-[#e8e4dc]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <a
          href="mailto:edgarharoldsimbajon@gmail.com"
          className="text-xs mono text-[#b8f542] border border-[#b8f542]/40 px-4 py-2 rounded hover:bg-[#b8f542]/10 transition-colors"
        >
          Open to work
        </a>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <p className="mono text-[#6b6762] text-xs tracking-widest uppercase mb-6">
            Web &amp; WordPress Developer — Est. 2024
          </p>
          <h1 className="font-['Fraunces'] text-6xl lg:text-8xl font-light leading-[0.92] tracking-tight mb-8">
            I build and improve websites{" "}
            <em className="italic text-[#b8f542]">people</em>
            <br />
            rely on.
          </h1>
          <p className="text-[#6b6762] text-lg leading-relaxed max-w-md">
            Web/WordPress Developer passionate about creating intuitive and
            engaging digital experiences.
          </p>
        </div>
        <div className="lg:text-right">
          <div className="inline-grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded overflow-hidden">
            {[
              { n: "WordPress", label: "Theme Customization" },
              { n: "Elementor Pro", label: "Page & Component Development" },
              { n: "React / Next.js", label: "Frontend Development" },
              { n: "SEO", label: "On-Page Optimization" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0a0a0a] p-6 text-left">
                <div className="font-['Fraunces'] text-3xl text-[#b8f542] mb-1">
                  {s.n}
                </div>
                <div className="text-xs text-[#6b6762] mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 max-w-6xl mx-auto">
        <div className="h-px bg-[#1a1a1a]" />
      </div>

      {/* Work */}
      <section id="Work" className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-['Fraunces'] text-4xl font-light">
            Selected Work
          </h2>
          <span className="mono text-xs text-[#6b6762]">2024 – 2025</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1a1a1a]">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-[#0a0a0a] group cursor-pointer"
              onMouseEnter={() => setHoveredProject(p.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                projectRoutes[p.id] && navigate(projectRoutes[p.id])
              }
            >
              <div className="overflow-hidden">
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="mono text-xs text-[#6b6762] tracking-wide uppercase">
                    {p.category}
                  </span>
                  <span className="mono text-xs text-[#6b6762]">{p.year}</span>
                </div>
                <h3 className="font-['Fraunces'] text-2xl font-light mb-3 transition-colors duration-200 group-hover:text-[#b8f542]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#6b6762] leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] border border-[#222] text-[#6b6762] px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {projectRoutes[p.id] && (
                  <div className="mt-5 flex items-center gap-2 text-xs text-[#b8f542] mono opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View case study</span>
                    <span>→</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="Skills"
        className="py-20 px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]"
      >
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-['Fraunces'] text-4xl font-light">
            Skills &amp; Stack
          </h2>
          <span className="mono text-xs text-[#6b6762]">Tools I trust</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
          {skills.map((group) => (
            <div key={group.group} className="bg-[#0a0a0a] p-8">
              <h3 className="mono text-xs text-[#b8f542] tracking-widest uppercase mb-6">
                {group.group}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#6b6762] hover:text-[#e8e4dc] transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#333] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="About"
        className="py-20 px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-['Fraunces'] text-4xl font-light mb-8">
              About
            </h2>
            <div className="space-y-4 text-[#6b6762] text-base leading-relaxed">
              <p>
                I’m Edgar — a software developer specializing in Software
                Engineering, with hands-on experience building websites and web
                applications. I started working with WordPress through my
                internship, where I learned how to build, customize, and
                maintain websites while working with real client projects.
              </p>
              <p>
                I enjoy turning ideas and designs into functional, responsive,
                and user-friendly experiences. Whether I’m working on a
                WordPress website or building a web application with React and
                Next.js, I care about writing clean, maintainable code and
                creating something that is practical and easy to use.
              </p>
              <p>
                I’m always looking to improve my skills, take on new challenges,
                and build things that make a meaningful impact.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <a
                href="mailto:edgarharoldsimbajon@gmail.com"
                className="bg-[#b8f542] text-[#0a0a0a] text-sm font-medium px-6 py-3 rounded hover:bg-[#c8ff52] transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="mono text-xs text-[#b8f542] tracking-widest uppercase mb-8">
              Experience
            </h3>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-[#b8f542] flex-shrink-0 mt-1" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[#1a1a1a] mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="mono text-xs text-[#6b6762] mb-1">
                      {item.year}
                    </div>
                    <div className="font-medium text-[#e8e4dc] text-sm mb-0.5">
                      {item.role}
                    </div>
                    <div className="text-[#b8f542] text-xs mono mb-2">
                      {item.org}
                    </div>
                    <p className="text-[#6b6762] text-sm leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="Contact"
        className="py-20 px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-['Fraunces'] text-4xl font-light mb-4">
              Let's work together
            </h2>
            <p className="text-[#6b6762] mb-8 leading-relaxed">
              Currently open to full-time opportunities and new roles in web
              development and WordPress development.
            </p>
            <div className="space-y-4">
              {[
                { label: "Email", val: "edgarharoldsimbajon@gmail.com" },
                {
                  label: "Location",
                  val: "Parañaque City, Metro Manila (remote-friendly)",
                },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 text-sm">
                  <span className="mono text-[#6b6762] w-24 flex-shrink-0">
                    {c.label}
                  </span>
                  <span className="text-[#e8e4dc]">{c.val}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {[
              {
                name: "name" as const,
                label: "Name",
                type: "text",
                placeholder: "Your name",
              },
              {
                name: "email" as const,
                label: "Email",
                type: "email",
                placeholder: "your@email.com",
              },
            ].map((f) => (
              <div key={f.name}>
                <label className="mono text-xs text-[#6b6762] tracking-wide uppercase block mb-2">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={formState[f.name]}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, [f.name]: e.target.value }))
                  }
                  className="w-full bg-[#111] border border-[#222] rounded px-4 py-3 text-sm text-[#e8e4dc] placeholder-[#333] focus:outline-none focus:border-[#b8f542] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="mono text-xs text-[#6b6762] tracking-wide uppercase block mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full bg-[#111] border border-[#222] rounded px-4 py-3 text-sm text-[#e8e4dc] placeholder-[#333] focus:outline-none focus:border-[#b8f542] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#b8f542] text-[#0a0a0a] font-medium py-3 rounded hover:bg-[#c8ff52] transition-colors text-sm"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-8 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="mono text-xs text-[#333]">
          © 2025 Edgar Harold Simbajon. Built with React + WordPress passion.
        </span>
        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="mono text-xs text-[#444] hover:text-[#b8f542] transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
