import { Link } from "@tanstack/react-router";
import {
  BarChart,
  Brain,
  Cloud,
  Code2,
  MonitorSmartphone,
  MoveRight,
  Server,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Diagram Helpers (copied from ARCOPlatform.tsx)
────────────────────────────────────────────── */
function ArchDiagram({
  title,
  children,
  height = "280px",
}: {
  title: string;
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <div
      style={{
        minHeight: height,
        border: "1px solid rgba(31,111,67,0.35)",
        borderRadius: "12px",
        backgroundColor: "#0c120e",
        position: "relative",
        overflow: "hidden",
        padding: "28px 32px 24px",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.07,
        }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${title.replace(/\s/g, "-")}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#66A37A"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${title.replace(/\s/g, "-")})`}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "40px",
          background: "linear-gradient(to bottom, #2d8a52, transparent)",
          borderRadius: "12px 0 0 0",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#2d8a52",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            [ {title} ]
          </span>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              color: "#4a5568",
              marginTop: "2px",
            }}
          >
            Architecture Diagram Placeholder
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

function DiagNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        padding: "8px 14px",
        border: `1px solid ${
          accent ? "rgba(45,138,82,0.7)" : "rgba(45,138,82,0.3)"
        }`,
        borderRadius: "6px",
        backgroundColor: accent ? "rgba(11,79,44,0.35)" : "rgba(15,26,19,0.8)",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.72rem",
        color: accent ? "#66A37A" : "#8a9e94",
        fontWeight: accent ? 600 : 400,
        textAlign: "center" as const,
        whiteSpace: "nowrap" as const,
      }}
    >
      {label}
    </div>
  );
}

function Connector({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "20px",
            backgroundColor: "rgba(45,138,82,0.4)",
          }}
        />
        <div
          style={{
            color: "rgba(45,138,82,0.6)",
            fontSize: "10px",
            lineHeight: 1,
          }}
        >
          ▼
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "24px",
          height: "1px",
          backgroundColor: "rgba(45,138,82,0.4)",
        }}
      />
      <div
        style={{
          color: "rgba(45,138,82,0.6)",
          fontSize: "10px",
          lineHeight: 1,
        }}
      >
        ▶
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Expertise Card
────────────────────────────────────────────── */
function ExpertiseCard({
  icon,
  title,
  description,
  ocid,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  ocid: string;
}) {
  return (
    <div
      data-ocid={ocid}
      style={{
        backgroundColor: "#0f1a13",
        border: "1px solid rgba(31,111,67,0.25)",
        borderLeft: "3px solid #1F6F43",
        borderRadius: "10px",
        padding: "28px",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(45,138,82,0.6)";
        el.style.borderLeftColor = "#3D8B5E";
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 8px 32px rgba(31,111,67,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(31,111,67,0.25)";
        el.style.borderLeftColor = "#1F6F43";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "8px",
          backgroundColor: "rgba(11,79,44,0.4)",
          border: "1px solid rgba(45,138,82,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2d8a52",
          marginBottom: "16px",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "1.05rem",
          color: "#ffffff",
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          color: "#9ca3af",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Tech Block
────────────────────────────────────────────── */
function TechBlock({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "rgba(15,26,19,0.8)",
        border: "1px solid rgba(45,138,82,0.25)",
        borderRadius: "8px",
        padding: "14px 20px",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(45,138,82,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(45,138,82,0.25)";
      }}
    >
      <span style={{ color: "#2d8a52" }}>{icon}</span>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          color: "#d1d5db",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────
   ABOUT PAGE
────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        data-ocid="about.hero.section"
        style={{
          background:
            "linear-gradient(160deg, #0B2A1A 0%, #091A10 40%, #0A0A0A 100%)",
          padding: "110px 24px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* SVG grid pattern */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.04,
            pointerEvents: "none",
          }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#66A37A"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(11,79,44,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            textAlign: "center" as const,
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            About <span style={{ color: "#2d8a52" }}>Archonova Systems</span>
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#66A37A",
              marginBottom: "24px",
              lineHeight: 1.4,
            }}
          >
            Engineering Intelligent Technology Ecosystems for Modern Enterprises
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "#9ca3af",
              lineHeight: 1.75,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Archonova Systems is an enterprise technology consulting and
            engineering company helping organizations modernize infrastructure,
            implement cloud platforms, build intelligent software systems, and
            adopt AI-driven automation.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section
        style={{
          padding: "72px 24px 56px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-overview-grid"
        >
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#2d8a52",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                display: "block",
                marginBottom: "14px",
              }}
            >
              [ Company Overview ]
            </span>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              A Consulting-Led Technology Company
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.975rem",
                color: "#d1d5db",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Archonova Systems combines strategic consulting with engineering
              expertise to help organizations design and deploy scalable
              technology ecosystems.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.975rem",
                color: "#9ca3af",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Our work spans cloud infrastructure, enterprise software
              development, artificial intelligence systems, and technology
              operations management.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.975rem",
                color: "#9ca3af",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              We partner with organizations to transform complex technology
              environments into scalable, intelligent digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(45,138,82,0.3), transparent)",
        }}
      />

      {/* ── CORE EXPERTISE ── */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" as const, marginBottom: "48px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#2d8a52",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              display: "block",
              marginBottom: "12px",
            }}
          >
            [ Core Expertise ]
          </span>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              color: "#ffffff",
              margin: 0,
            }}
          >
            What We Do Best
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <ExpertiseCard
            ocid="about.expertise.item.1"
            icon={<Cloud size={20} />}
            title="Cloud Infrastructure"
            description="Designing scalable multi-cloud environments across Microsoft, Google Cloud, and AWS."
          />
          <ExpertiseCard
            ocid="about.expertise.item.2"
            icon={<Code2 size={20} />}
            title="Enterprise Software Engineering"
            description="Developing enterprise-grade software platforms and SaaS systems."
          />
          <ExpertiseCard
            ocid="about.expertise.item.3"
            icon={<Brain size={20} />}
            title="Artificial Intelligence & Automation"
            description="Building intelligent workflows and machine learning systems."
          />
          <ExpertiseCard
            ocid="about.expertise.item.4"
            icon={<BarChart size={20} />}
            title="Technology Consulting"
            description="Helping organizations plan and implement modern digital infrastructure."
          />
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(45,138,82,0.3), transparent)",
        }}
      />

      {/* ── TECHNOLOGY ECOSYSTEM ── */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" as const, marginBottom: "40px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#2d8a52",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              display: "block",
              marginBottom: "12px",
            }}
          >
            [ Technology Ecosystems ]
          </span>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Technology Ecosystems We Work With
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <TechBlock label="Microsoft Cloud" icon={<Cloud size={16} />} />
          <TechBlock
            label="Google Cloud Platform"
            icon={<Server size={16} />}
          />
          <TechBlock
            label="Amazon Web Services"
            icon={<MonitorSmartphone size={16} />}
          />
          <TechBlock
            label="Enterprise Data Center Infrastructure"
            icon={<BarChart size={16} />}
          />
        </div>

        {/* Multi-Cloud Diagram */}
        <ArchDiagram
          title="Multi-Cloud Infrastructure Architecture"
          height="340px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              gap: 0,
            }}
          >
            <DiagNode label="Applications" accent />
            <Connector vertical />
            <DiagNode label="Hybrid Infrastructure Layer" accent />
            <Connector vertical />
            {/* Branch row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "48px",
                flexWrap: "wrap" as const,
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <DiagNode label="Microsoft" />
                <Connector vertical />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <DiagNode label="Google Cloud" />
                <Connector vertical />
              </div>
            </div>
            <DiagNode label="AWS Infrastructure" accent />
          </div>
        </ArchDiagram>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(45,138,82,0.3), transparent)",
        }}
      />

      {/* ── CONSULTING APPROACH ── */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-approach-grid"
        >
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#2d8a52",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                display: "block",
                marginBottom: "14px",
              }}
            >
              [ Consulting Approach ]
            </span>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 20px",
              }}
            >
              Our Technology Consulting Approach
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                color: "#9ca3af",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Archonova Systems follows a consulting-first model, working
              closely with organizations to understand their technology
              landscape before designing and implementing solutions.
            </p>
          </div>
          <div>
            <ArchDiagram title="Consulting Approach Flow" height="160px">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap" as const,
                  gap: 0,
                  justifyContent: "center",
                }}
              >
                <DiagNode label="Assessment" accent />
                <Connector />
                <DiagNode label="Architecture" />
                <Connector />
                <DiagNode label="Implementation" />
                <Connector />
                <DiagNode label="Optimization" accent />
              </div>
            </ArchDiagram>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(45,138,82,0.3), transparent)",
        }}
      />

      {/* ── INDUSTRY EXPERIENCE ── */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-experience-grid"
        >
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#2d8a52",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                display: "block",
                marginBottom: "14px",
              }}
            >
              [ Industry Experience ]
            </span>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              Experience Across Evolving Technology Landscapes
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.975rem",
                color: "#d1d5db",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Over the past decade, enterprise technology has evolved from
              traditional infrastructure to cloud-native platforms and AI-driven
              automation systems.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.975rem",
                color: "#9ca3af",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Archonova Systems supports organizations navigating this
              transformation by designing scalable, secure, and intelligent
              digital environments.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(45,138,82,0.3), transparent)",
        }}
      />

      {/* ── ARCO SECTION ── */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#0c120e",
            border: "1px solid rgba(31,111,67,0.3)",
            borderRadius: "14px",
            padding: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              height: "60px",
              background: "linear-gradient(to bottom, #2d8a52, transparent)",
              borderRadius: "14px 0 0 0",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "40px",
              alignItems: "center",
            }}
            className="about-arco-inner"
          >
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#2d8a52",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  display: "block",
                  marginBottom: "14px",
                }}
              >
                [ ARCO Platform ]
              </span>
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#ffffff",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                Innovation Through the ARCO Platform
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  color: "#d1d5db",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                }}
              >
                Archonova Systems has developed ARCO, an intelligent
                infrastructure analysis platform purpose-built for enterprise
                organizations.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  color: "#9ca3af",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                ARCO helps organizations analyze cloud environments, optimize
                infrastructure performance, and generate intelligent insights
                for operational efficiency.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="https://arco.archonovasystems.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="about.arco.primary_button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#0B4F2C",
                  border: "1px solid #2d8a52",
                  color: "#ffffff",
                  padding: "14px 28px",
                  borderRadius: "6px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "background-color 0.2s, transform 0.2s",
                  whiteSpace: "nowrap" as const,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#1a6b3a";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#0B4F2C";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                Explore ARCO Platform
                <MoveRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0B2A1A 0%, #0B4F2C 50%, #0A1A0F 100%)",
          padding: "88px 24px",
          textAlign: "center" as const,
          borderTop: "1px solid rgba(45,138,82,0.2)",
          borderBottom: "1px solid rgba(45,138,82,0.2)",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.25,
            }}
          >
            Start Your Technology Transformation Journey
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.65,
              marginBottom: "36px",
            }}
          >
            Connect with our consulting team to explore how Archonova Systems
            can help your organization design, deploy, and optimize modern
            technology infrastructure.
          </p>
          <Link
            to="/contact"
            data-ocid="about.cta.primary_button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#0A0A0A",
              border: "1px solid rgba(102,163,122,0.5)",
              color: "#ffffff",
              padding: "16px 36px",
              borderRadius: "6px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "background-color 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(11,79,44,0.5)";
              (e.currentTarget as HTMLElement).style.borderColor = "#66A37A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#0A0A0A";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(102,163,122,0.5)";
            }}
          >
            Schedule a Technology Consultation
            <MoveRight size={16} />
          </Link>
        </div>
      </section>

      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 768px) {
          .about-overview-grid,
          .about-approach-grid,
          .about-experience-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-arco-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
