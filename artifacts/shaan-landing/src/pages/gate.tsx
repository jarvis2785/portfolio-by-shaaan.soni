import { useState } from "react";
import { useLocation } from "wouter";

export default function GatePage() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase() }),
      });

      if (!res.ok && res.status !== 201) {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setLocation("/systems");
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="noise-bg min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="page-content min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Instagram handle tag */}
          <p
            className="text-center text-sm font-medium tracking-widest uppercase mb-10"
            style={{ color: "#C9A84C", letterSpacing: "0.2em" }}
            data-testid="instagram-handle"
          >
            @shaaann.soni
          </p>

          {/* Headline */}
          <h1
            className="text-center font-bold leading-tight mb-6"
            style={{
              color: "#F5F2ED",
              fontSize: "clamp(2.2rem, 5vw, 3rem)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
            data-testid="headline"
          >
            The Systems Behind<br />The Build.
          </h1>

          {/* Gold line */}
          <div className="gold-line mb-8" />

          {/* Subheadline */}
          <p
            className="text-center text-sm leading-relaxed mb-10"
            style={{ color: "#AAAAAA", lineHeight: "1.75" }}
            data-testid="subheadline"
          >
            Frameworks, mental models, and content systems I use to build a personal brand, a clothing brand, and an AI app — simultaneously, at 19. Enter your details to get access.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="lead-form">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-testid="input-name"
              className="w-full px-4 py-3.5 text-sm rounded-md outline-none transition-all"
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2A2A2A",
                color: "#F5F2ED",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#C9A84C"; }}
              onBlur={(e) => { e.target.style.borderColor = "#2A2A2A"; }}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="input-email"
              className="w-full px-4 py-3.5 text-sm rounded-md outline-none transition-all"
              style={{
                backgroundColor: "#141414",
                border: "1px solid #2A2A2A",
                color: "#F5F2ED",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#C9A84C"; }}
              onBlur={(e) => { e.target.style.borderColor = "#2A2A2A"; }}
            />

            {error && (
              <p className="text-sm text-red-400 text-center" data-testid="error-message">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              data-testid="button-submit"
              className="w-full py-3.5 text-sm font-semibold rounded-md transition-all mt-1 disabled:opacity-60"
              style={{
                backgroundColor: loading ? "#A8892E" : "#C9A84C",
                color: "#0A0A0A",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.01em",
                cursor: loading ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => { if (!loading) (e.target as HTMLButtonElement).style.backgroundColor = "#A8892E"; }}
              onMouseLeave={(e) => { if (!loading) (e.target as HTMLButtonElement).style.backgroundColor = "#C9A84C"; }}
            >
              {loading ? "Getting access..." : "Get Access →"}
            </button>
          </form>

          {/* Spam disclaimer */}
          <p
            className="text-center text-xs mt-5"
            style={{ color: "#555555" }}
            data-testid="spam-disclaimer"
          >
            No spam. Just systems.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p
            className="text-xs"
            style={{ color: "#444444", fontFamily: "'Inter', sans-serif" }}
            data-testid="footer"
          >
            © 2026 Shaan Soni · @shaaann.soni
          </p>
        </footer>
      </div>
    </div>
  );
}
