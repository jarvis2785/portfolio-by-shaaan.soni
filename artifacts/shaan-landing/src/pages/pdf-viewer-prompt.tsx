import { useState } from "react";
import { useLocation } from "wouter";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF_PATH = "/prompt-engineering-framework.pdf";
const PDF_FILENAME = "Prompt Engineering Framework — Shaan Soni.pdf";

export default function PdfViewerPromptPage() {
  const [, setLocation] = useLocation();
  const [loaded, setLoaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_PATH;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        backgroundColor: "#0A0A0A",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top nav bar */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid #1A1A1A" }}
      >
        <button
          onClick={() => setLocation("/systems")}
          data-testid="btn-back"
          style={{
            color: "#AAAAAA",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "0.8rem",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F2ED"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#AAAAAA"; }}
        >
          ← Back to Systems
        </button>

        <p
          style={{
            color: "#C9A84C",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          @shaaann.soni
        </p>

        <div style={{ width: "120px" }} />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center px-4 py-12" style={{ gap: "0" }}>
        <h1
          className="text-center font-semibold mb-2"
          style={{ color: "#F5F2ED", fontSize: "1.15rem", letterSpacing: "-0.01em" }}
          data-testid="pdf-title"
        >
          Prompt Engineering Framework
        </h1>
        <p className="text-center text-xs mb-8" style={{ color: "#555555" }}>
          by Shaan Soni · @shaaann.soni
        </p>

        {/* PDF Cover Preview */}
        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
            border: "1px solid #222",
            background: "#111",
            maxWidth: "520px",
            width: "100%",
          }}
          data-testid="pdf-cover"
        >
          {!loaded && (
            <div
              style={{
                height: "680px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#444",
                fontSize: "0.8rem",
              }}
            >
              Loading cover...
            </div>
          )}
          <Document
            file={PDF_PATH}
            onLoadSuccess={() => setLoaded(true)}
            onLoadError={() => setLoaded(true)}
            loading=""
          >
            <Page
              pageNumber={1}
              width={Math.min(520, window.innerWidth - 32)}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/* Gold line */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            width: "100%",
            maxWidth: "520px",
            margin: "32px auto 28px",
          }}
        />

        {/* Download button */}
        <button
          onClick={handleDownload}
          data-testid="btn-download"
          className="flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
          style={{
            backgroundColor: "#C9A84C",
            color: "#0A0A0A",
            border: "none",
            cursor: "pointer",
            fontSize: "0.85rem",
            letterSpacing: "0.02em",
            padding: "14px 40px",
            width: "100%",
            maxWidth: "520px",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A8892E"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9A84C"; }}
        >
          Download Framework ↓
        </button>

        <p className="text-center text-xs mt-4" style={{ color: "#444" }}>
          Free · PDF · 9 pages
        </p>
      </div>

      <footer className="text-center pb-10">
        <p style={{ color: "#333", fontSize: "0.7rem" }}>
          © 2026 Shaan Soni · @shaaann.soni
        </p>
      </footer>
    </div>
  );
}
