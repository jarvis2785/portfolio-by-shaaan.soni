import { useLocation } from "wouter";

const systems = [
  {
    id: "content-psychology",
    title: "Content Psychology Framework",
    description: "How I think about hooks, authority, and audience when creating reels.",
    route: "/system/content-psychology",
  },
];

export default function SectionPersonalBrandPage() {
  const [, setLocation] = useLocation();

  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <div
        className="min-h-screen flex flex-col items-center px-4 py-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="w-full max-w-2xl">
          <button
            onClick={() => setLocation("/systems")}
            data-testid="btn-back"
            className="text-xs mb-10 block"
            style={{
              color: "#AAAAAA",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F2ED"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#AAAAAA"; }}
          >
            ← Back to Sections
          </button>

          <p
            className="text-sm font-medium tracking-widest uppercase mb-6"
            style={{ color: "#C9A84C", letterSpacing: "0.2em" }}
          >
            Personal Brand + Content
          </p>

          <h1
            className="font-bold mb-4"
            style={{
              color: "#F5F2ED",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              letterSpacing: "-0.02em",
            }}
            data-testid="section-heading"
          >
            Personal Brand + Content Systems.
          </h1>

          <div className="gold-line mb-10" style={{ maxWidth: "100%" }} />

          <div className="flex flex-col gap-5">
            {systems.map((system) => (
              <div
                key={system.id}
                data-testid={`card-system-${system.id}`}
                className="rounded-md p-6"
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid #1F1F1F",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <h2
                  className="font-semibold mb-2"
                  style={{ color: "#F5F2ED", fontSize: "1rem", letterSpacing: "-0.01em" }}
                >
                  {system.title}
                </h2>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "#AAAAAA" }}
                >
                  {system.description}
                </p>
                <button
                  onClick={() => setLocation(system.route)}
                  data-testid={`btn-view-${system.id}`}
                  className="px-4 py-2 text-xs font-semibold rounded-md transition-all"
                  style={{
                    backgroundColor: "#C9A84C",
                    color: "#0A0A0A",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A8892E"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9A84C"; }}
                >
                  View System →
                </button>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-xs" style={{ color: "#444444" }}>
            © 2026 Shaan Soni · @shaaann.soni
          </p>
        </footer>
      </div>
    </div>
  );
}
