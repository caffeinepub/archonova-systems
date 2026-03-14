import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  Calculator,
  Code2,
  Cpu,
  GitMerge,
  MoveRight,
  Puzzle,
  Zap,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Architecture Diagram Placeholder
────────────────────────────────────────────── */
function ArchDiagram({
  title,
  children,
  height = "280px",
  fullWidth = false,
}: {
  title: string;
  children: React.ReactNode;
  height?: string;
  fullWidth?: boolean;
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
        padding: fullWidth ? "36px 48px 32px" : "28px 32px 24px",
      }}
    >
      {/* Grid background */}
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

      {/* Corner accent */}
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
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
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
        padding: "10px 20px",
        border: `1px solid ${
          accent ? "rgba(45,138,82,0.7)" : "rgba(45,138,82,0.3)"
        }`,
        borderRadius: "6px",
        backgroundColor: accent ? "rgba(11,79,44,0.35)" : "rgba(15,26,19,0.8)",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        color: accent ? "#66A37A" : "#8a9e94",
        fontWeight: accent ? 600 : 400,
        textAlign: "center" as const,
        whiteSpace: "nowrap" as const,
        minWidth: "160px",
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
            height: "24px",
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
          width: "32px",
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
   Service Card
────────────────────────────────────────────── */
function ServiceCard({
  index,
  icon,
  title,
  description,
  capabilities,
  ocid,
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
  ocid: string;
}) {
  return (
    <div
      data-ocid={ocid}
      style={{
        backgroundColor: "#0f1a13",
        border: "1px solid rgba(31,111,67,0.25)",
        borderRadius: "12px",
        padding: "28px",
        transition: "border-color 0.25s, transform 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(45,138,82,0.6)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(31,111,67,0.25)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Icon + number */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "8px",
            backgroundColor: "rgba(11,79,44,0.4)",
            border: "1px solid rgba(45,138,82,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2d8a52",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "rgba(45,138,82,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          0{index}
        </span>
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
          marginBottom: "16px",
        }}
      >
        {description}
      </p>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
          color: "#4a7c5e",
          fontWeight: 600,
          textTransform: "uppercase" as const,
          letterSpacing: "0.08em",
          marginBottom: "8px",
        }}
      >
        Key capabilities:
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column" as const,
          gap: "6px",
        }}
      >
        {capabilities.map((cap) => (
          <li
            key={cap}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.82rem",
              color: "#d1d5db",
              lineHeight: 1.45,
            }}
          >
            <span style={{ color: "#2d8a52", marginTop: "3px", flexShrink: 0 }}>
              •
            </span>
            {cap}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ──────────────────────────────────────────────
   SOFTWARE & AI PAGE
────────────────────────────────────────────── */
export default function SoftwareAI() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #0B2A1A 0%, #091A10 40%, #0A0A0A 100%)",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(11,79,44,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center" as const,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(11,79,44,0.25)",
              border: "1px solid rgba(45,138,82,0.35)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <Cpu size={14} style={{ color: "#2d8a52" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                color: "#66A37A",
                letterSpacing: "0.06em",
                fontWeight: 500,
              }}
            >
              Software Engineering &amp; AI
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Enterprise Software Engineering &amp;
            <br />
            <span style={{ color: "#2d8a52" }}>
              Artificial Intelligence Solutions
            </span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "#9ca3af",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto 36px",
            }}
          >
            Archonova Systems helps organizations design and build scalable
            software platforms, implement AI-driven automation, and develop
            intelligent data systems integrated with modern cloud
            infrastructure.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <Link
              to="/contact"
              data-ocid="software_ai.hero.primary_button"
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
              Explore AI &amp; Software Solutions
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="software_ai.hero.secondary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                border: "1px solid rgba(45,138,82,0.35)",
                color: "#9ca3af",
                padding: "14px 28px",
                borderRadius: "6px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(45,138,82,0.7)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(45,138,82,0.35)";
                (e.currentTarget as HTMLElement).style.color = "#9ca3af";
              }}
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICE: Enterprise Software Development ── */}
      <section
        style={{
          padding: "72px 24px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          data-ocid="software_ai.enterprise_dev.card"
          style={{
            backgroundColor: "#0f1a13",
            border: "1px solid rgba(45,138,82,0.45)",
            borderLeft: "4px solid #2d8a52",
            borderRadius: "12px",
            padding: "40px 40px 36px",
            transition: "border-color 0.25s, transform 0.25s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(45,138,82,0.75)";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(45,138,82,0.45)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                backgroundColor: "rgba(11,79,44,0.5)",
                border: "1px solid rgba(45,138,82,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2d8a52",
                flexShrink: 0,
              }}
            >
              <Code2 size={22} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "rgba(45,138,82,0.6)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "2px",
                }}
              >
                01 — Featured Service
              </span>
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#ffffff",
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Enterprise Software Development
              </h2>
            </div>
          </div>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.925rem",
              color: "#9ca3af",
              lineHeight: 1.7,
              marginBottom: "8px",
              maxWidth: "820px",
            }}
          >
            Archonova Systems designs and builds scalable enterprise software
            platforms tailored to organizational workflows and modern
            infrastructure environments.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              color: "#4a7c5e",
              fontWeight: 600,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              marginBottom: "12px",
              marginTop: "16px",
            }}
          >
            Capabilities include:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "8px 32px",
            }}
          >
            {[
              "custom enterprise applications",
              "SaaS platform development",
              "cloud-native architecture",
              "enterprise system integrations",
            ].map((cap) => (
              <li
                key={cap}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: "#d1d5db",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{ color: "#2d8a52", marginTop: "4px", flexShrink: 0 }}
                >
                  •
                </span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICE GRID (6 services, 3×2) ── */}
      <section
        style={{
          padding: "0 24px 72px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="software-ai-grid"
        >
          <ServiceCard
            index={2}
            ocid="software_ai.services.card.1"
            icon={<GitMerge size={18} />}
            title="SaaS Platform Architecture"
            description="Design scalable multi-tenant software platforms built for modern cloud infrastructure."
            capabilities={[
              "cloud-native application architecture",
              "microservices design",
              "scalable backend systems",
              "API-first architecture",
            ]}
          />
          <ServiceCard
            index={3}
            ocid="software_ai.services.card.2"
            icon={<Puzzle size={18} />}
            title="API Integrations"
            description="Connect enterprise applications and cloud systems through robust API integrations."
            capabilities={[
              "REST API development",
              "enterprise system integrations",
              "third-party platform connectivity",
              "secure API authentication",
            ]}
          />
          <ServiceCard
            index={4}
            ocid="software_ai.services.card.3"
            icon={<Zap size={18} />}
            title="Workflow Automation"
            description="Automate business processes using intelligent automation frameworks."
            capabilities={[
              "process automation pipelines",
              "AI-powered workflows",
              "operational task automation",
              "decision automation systems",
            ]}
          />
          <ServiceCard
            index={5}
            ocid="software_ai.services.card.4"
            icon={<Cpu size={18} />}
            title="Machine Learning Engineering"
            description="Design and deploy machine learning systems for predictive analytics and intelligent automation."
            capabilities={[
              "model development",
              "training pipelines",
              "model deployment",
              "inference systems",
            ]}
          />
          <ServiceCard
            index={6}
            ocid="software_ai.services.card.5"
            icon={<BarChart3 size={18} />}
            title="AI Analytics Systems"
            description="Develop data intelligence platforms that transform operational data into insights."
            capabilities={[
              "predictive analytics",
              "real-time dashboards",
              "business intelligence platforms",
              "data pipeline architecture",
            ]}
          />
          <ServiceCard
            index={7}
            ocid="software_ai.services.card.6"
            icon={<Calculator size={18} />}
            title="Tally Customization & Integration"
            description="Archonova Systems provides advanced Tally customization and integration services to extend accounting systems into complete business management platforms."
            capabilities={[
              "custom Tally modules",
              "inventory management customization",
              "automated reporting systems",
              "integration with ERP and external applications",
              "API integration with cloud systems",
            ]}
          />
        </div>
      </section>

      {/* ── STANDALONE DIAGRAM: AI Workflow Pipeline ── */}
      <section
        data-ocid="software_ai.workflow_diagram.section"
        style={{
          padding: "0 24px 56px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "1.4rem",
              color: "#ffffff",
              marginBottom: "8px",
            }}
          >
            AI Workflow Pipeline
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#9ca3af",
              lineHeight: 1.6,
            }}
          >
            Intelligent automation pipelines that transform business data into
            operational outcomes through AI-driven decision layers.
          </p>
        </div>
        <ArchDiagram title="AI Workflow Pipeline" height="320px" fullWidth>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap" as const,
              gap: 0,
            }}
          >
            <DiagNode label="Business Data" accent />
            <Connector />
            <DiagNode label="Data Ingestion Layer" />
            <Connector />
            <DiagNode label="AI / ML Model" accent />
            <Connector />
            <DiagNode label="Automation Engine" />
            <Connector />
            <DiagNode label="Operational Workflow" accent />
            <Connector />
            <DiagNode label="Business Insights" />
          </div>
        </ArchDiagram>
      </section>

      {/* ── STANDALONE DIAGRAM: Machine Learning Architecture ── */}
      <section
        data-ocid="software_ai.ml_diagram.section"
        style={{
          padding: "0 24px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "1.4rem",
              color: "#ffffff",
              marginBottom: "8px",
            }}
          >
            Machine Learning Architecture
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#9ca3af",
              lineHeight: 1.6,
            }}
          >
            End-to-end ML architecture from raw data sources through model
            training, deployment, and inference at enterprise scale.
          </p>
        </div>
        <ArchDiagram
          title="Machine Learning Architecture"
          height="320px"
          fullWidth
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap" as const,
              gap: 0,
            }}
          >
            <DiagNode label="Data Sources" accent />
            <Connector />
            <DiagNode label="Data Processing" />
            <Connector />
            <DiagNode label="Feature Engineering" accent />
            <Connector />
            <DiagNode label="ML Model Training" />
            <Connector />
            <DiagNode label="Model Deployment" accent />
            <Connector />
            <DiagNode label="Analytics Dashboard" />
          </div>
        </ArchDiagram>
      </section>

      {/* ── CTA SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0B2A1A 0%, #0B4F2C 50%, #0A1A0F 100%)",
          padding: "80px 24px",
          textAlign: "center" as const,
          borderTop: "1px solid rgba(45,138,82,0.2)",
          borderBottom: "1px solid rgba(45,138,82,0.2)",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(102,163,122,0.3)",
              borderRadius: "100px",
              padding: "5px 14px",
              marginBottom: "24px",
            }}
          >
            <Bot size={13} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                color: "#66A37A",
                letterSpacing: "0.08em",
              }}
            >
              Software &amp; AI Consulting
            </span>
          </div>

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
            Ready to Build Intelligent Systems?
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
            Archonova Systems partners with enterprise organizations to design
            and build scalable software platforms, implement AI-driven
            automation, and develop intelligent data systems that power
            operational decision-making.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <Link
              to="/contact"
              data-ocid="software_ai.cta.primary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#0A0A0A",
                border: "1px solid rgba(102,163,122,0.5)",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "6px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
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
              Explore AI &amp; Software Solutions
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="software_ai.cta.link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                padding: "14px 28px",
                borderRadius: "6px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.7)";
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Responsive grid override */}
      <style>{`
        @media (max-width: 900px) {
          .software-ai-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .software-ai-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
