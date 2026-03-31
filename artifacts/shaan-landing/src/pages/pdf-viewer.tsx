import { useLocation } from "wouter";

const PDF_PATH = "/content-psychology-framework.pdf";
const PDF_FILENAME = "Content Psychology Framework — Shaan Soni.pdf";

export default function PdfViewerPage() {
  const [, setLocation] = useLocation();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_PATH;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid #1F1F1F" }}
      >
        <button
          onClick={() => setLocation("/systems")}
          data-testid="btn-back"
          className="flex items-center gap-2 text-xs transition-all"
          style={{ color: "#AAAAAA", background: "none", border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F2ED"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#AAAAAA"; }}
        >
          ← Back to Systems
        </button>

        <p
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "#C9A84C", letterSpacing: "0.15em" }}
        >
          @shaaann.soni
        </p>

        <button
          onClick={handleDownload}
          data-testid="btn-download"
          className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-md transition-all"
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
          Download PDF ↓
        </button>
      </div>

      {/* Title bar */}
      <div className="px-6 py-5" style={{ borderBottom: "1px solid #1A1A1A" }}>
        <h1
          className="font-semibold"
          style={{ color: "#F5F2ED", fontSize: "1.1rem", letterSpacing: "-0.01em" }}
          data-testid="pdf-title"
        >
          Content Psychology Framework
        </h1>
        <p className="text-xs mt-1" style={{ color: "#555555" }}>
          Shaan Soni · @shaaann.soni
        </p>
      </div>

      {/* PDF Embed */}
      <div className="w-full" style={{ height: "calc(100vh - 116px)" }}>
        <iframe
          src={PDF_PATH}
          title="Content Psychology Framework"
          data-testid="pdf-iframe"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            backgroundColor: "#111",
          }}
        />
      </div>
    </div>
  );
}
