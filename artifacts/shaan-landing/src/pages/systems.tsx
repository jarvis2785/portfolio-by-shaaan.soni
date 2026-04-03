import { useLocation } from "wouter";

const sections = [
  {
    id: "personal-brand",
    label: "Personal Brand + Content",
    description: "Frameworks on identity, audience, and content systems.",
    route: "/section/personal-brand",
  },
  {
    id: "ai",
    label: "AI",
    description: "Systems for using AI to build, create, and automate.",
    route: "/section/ai",
  },
];

export default function SystemsPage() {
  const [, setLocation] = useLocation();

  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <div
        className="min-h-screen flex flex-col items-center px-4 py-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
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

          <div className="gold-line mb-5" />

          <p
            className="text-center text-sm mb-14"
            style={{ color: "#AAAAAA", lineHeight: "1.75" }}
            data-testid="systems-subheading"
          >
            Everything I use to build, create, and grow — documented.
          </p>

          {/* Section Cards */}
          <div className="flex flex-col gap-5" data-testid="sections-list">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setLocation(section.route)}
                data-testid={`card-section-${section.id}`}
                className="w-full text-left rounded-md p-6 transition-all"
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid #1F1F1F",
                  borderLeft: "3px solid #C9A84C",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#202020";
                  e.currentTarget.style.borderColor = "#2A2A2A";
                  e.currentTarget.style.borderLeftColor = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1A1A1A";
                  e.currentTarget.style.borderColor = "#1F1F1F";
                  e.currentTarget.style.borderLeftColor = "#C9A84C";
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2
                      className="font-semibold mb-1"
                      style={{
                        color: "#F5F2ED",
                        fontSize: "1rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {section.label}
                    </h2>
                    <p
                      className="text-sm"
                      style={{ color: "#AAAAAA" }}
                    >
                      {section.description}
                    </p>
                  </div>
                  <span style={{ color: "#C9A84C", fontSize: "1.1rem", marginLeft: "16px" }}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-xs" style={{ color: "#444444" }} data-testid="systems-footer">
            © 2026 Shaan Soni · @shaaann.soni
          </p>
        </footer>
      </div>
    </div>
  );
}
