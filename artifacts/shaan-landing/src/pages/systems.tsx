const systems = [
  {
    id: 1,
    title: "Short Form Content Framework",
    description:
      "How I think about hooks, authority, and audience when creating reels.",
    link: "#",
  },
  {
    id: 2,
    title: "Personal Brand OS",
    description:
      "The identity, audience, and content system behind @shaaann.soni.",
    link: "#",
  },
  {
    id: 3,
    title: "Builder's Daily System",
    description:
      "The discipline and execution framework I run every single day.",
    link: "#",
  },
];

export default function SystemsPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <div
        className="min-h-screen flex flex-col items-center px-4 py-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="w-full max-w-2xl">
          <p
            className="text-center text-sm font-medium tracking-widest uppercase mb-8"
            style={{ color: "#C9A84C", letterSpacing: "0.2em" }}
            data-testid="systems-handle"
          >
            @shaaann.soni
          </p>

          <h1
            className="text-center font-bold mb-4"
            style={{
              color: "#F5F2ED",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
            data-testid="systems-heading"
          >
            Here Are The Systems.
          </h1>

          {/* Gold line */}
          <div className="gold-line mb-5" />

          <p
            className="text-center text-sm mb-14"
            style={{ color: "#AAAAAA", lineHeight: "1.75" }}
            data-testid="systems-subheading"
          >
            Everything I use to build, create, and grow — documented.
          </p>

          {/* System Cards */}
          <div className="flex flex-col gap-5" data-testid="systems-list">
            {systems.map((system) => (
              <div
                key={system.id}
                data-testid={`card-system-${system.id}`}
                className="rounded-md p-6 transition-all"
                style={{
                  backgroundColor: "#1A1A1A",
                  borderLeft: "3px solid #C9A84C",
                  border: "1px solid #1F1F1F",
                  borderLeftColor: "#C9A84C",
                  borderLeftWidth: "3px",
                }}
              >
                <h2
                  className="font-semibold mb-2"
                  style={{ color: "#F5F2ED", fontSize: "1rem", letterSpacing: "-0.01em" }}
                  data-testid={`title-system-${system.id}`}
                >
                  {system.title}
                </h2>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "#AAAAAA" }}
                  data-testid={`desc-system-${system.id}`}
                >
                  {system.description}
                </p>
                <a
                  href={system.link}
                  data-testid={`link-system-${system.id}`}
                  className="inline-block px-4 py-2 text-xs font-semibold rounded-md transition-all"
                  style={{
                    backgroundColor: "#C9A84C",
                    color: "#0A0A0A",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = "#A8892E";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = "#C9A84C";
                  }}
                >
                  View System →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p
            className="text-xs"
            style={{ color: "#444444" }}
            data-testid="systems-footer"
          >
            © 2026 Shaan Soni · @shaaann.soni
          </p>
        </footer>
      </div>
    </div>
  );
}
