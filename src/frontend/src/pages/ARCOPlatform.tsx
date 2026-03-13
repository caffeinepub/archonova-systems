import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  Cpu,
  DollarSign,
  Gauge,
  GitBranch,
  MoveRight,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Architecture Diagram Helpers
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
   Capability Card
────────────────────────────────────────────── */
function CapabilityCard({
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
   ARCO PLATFORM PAGE
────────────────────────────────────────────── */
export default function ARCOPlatform() {
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
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "350px",
            background:
              "radial-gradient(ellipse, rgba(11,79,44,0.25) 0%, transparent 70%)",
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
          {/* Badge */}
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
              Proprietary Platform
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
            ARCO: Intelligent Infrastructure
            <br />
            <span style={{ color: "#2d8a52" }}>
              Analysis &amp; Optimization
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
            ARCO is Archonova Systems&#39; proprietary intelligent
            infrastructure analysis platform, purpose-built to give enterprise
            organizations real-time visibility into architecture complexity,
            workload distribution, and cloud cost efficiency.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <a
              href="https://arco.archonovasystems.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="arco.hero.primary_button"
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
              Explore the ARCO Platform
              <MoveRight size={16} />
            </a>
            <Link
              to="/contact"
              data-ocid="arco.hero.secondary_button"
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
              Talk to a Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ── */}
      <section
        style={{
          padding: "72px 24px 48px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center" as const,
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            color: "#9ca3af",
            lineHeight: 1.75,
            marginBottom: "32px",
          }}
        >
          Developed by Archonova Systems, ARCO serves as an engineering
          intelligence layer that continuously ingests infrastructure telemetry,
          analyzes architecture patterns, and delivers prioritized optimization
          guidance across cloud, on-premise, and hybrid environments. Unlike
          generic observability tools, ARCO is purpose-built for enterprise
          infrastructure complexity — translating raw operational data into
          strategic decisions that reduce cost, improve performance, and
          accelerate architectural clarity.
        </p>
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(45,138,82,0.3), transparent)",
          }}
        />
      </section>

      {/* ── CAPABILITIES SECTION ── */}
      <section
        style={{
          padding: "0 24px 72px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" as const, marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Platform Capabilities
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              color: "#9ca3af",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            ARCO delivers four core analytical capabilities designed to give
            enterprise infrastructure teams a decisive operational advantage.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          <CapabilityCard
            index={1}
            ocid="arco.capabilities.card.1"
            icon={<GitBranch size={18} />}
            title="Infrastructure Architecture Visualization"
            description="Provides real-time, interactive maps of enterprise infrastructure topology. Surfaces dependencies, service relationships, and configuration states across hybrid environments."
            capabilities={[
              "Auto-discovery of infrastructure components and dependencies",
              "Interactive topology maps for cloud, on-premise, and hybrid environments",
              "Configuration drift detection and architecture compliance visualization",
              "Integration with leading infrastructure-as-code toolchains",
            ]}
          />
          <CapabilityCard
            index={2}
            ocid="arco.capabilities.card.2"
            icon={<BarChart2 size={18} />}
            title="Workload Analysis"
            description="Analyzes workload distribution patterns to identify inefficiencies, bottlenecks, and underutilized resources. Delivers actionable intelligence to improve resource allocation and operational throughput."
            capabilities={[
              "Workload pattern analysis across compute, storage, and network layers",
              "Resource utilization benchmarking and efficiency scoring",
              "Bottleneck identification and capacity constraint analysis",
              "Historical trend analysis with predictive demand modeling",
            ]}
          />
          <CapabilityCard
            index={3}
            ocid="arco.capabilities.card.3"
            icon={<Gauge size={18} />}
            title="Performance Optimization Insights"
            description="Continuously evaluates infrastructure performance against defined baselines to surface optimization opportunities. Delivers prioritized recommendations aligned with operational and business objectives."
            capabilities={[
              "Automated performance baseline analysis and anomaly detection",
              "Infrastructure optimization scoring with prioritized recommendations",
              "Application and database performance correlation analysis",
              "SLA compliance monitoring with deviation alerting",
            ]}
          />
          <CapabilityCard
            index={4}
            ocid="arco.capabilities.card.4"
            icon={<DollarSign size={18} />}
            title="Cloud Cost Optimization"
            description="Provides granular visibility into cloud expenditure across platforms to identify waste, optimize spend, and enforce governance policies."
            capabilities={[
              "Multi-cloud cost visibility across AWS, Azure, and Google Cloud",
              "Reserved instance and savings plan optimization recommendations",
              "Idle and underutilized resource identification and right-sizing",
              "Cost allocation and chargeback reporting for internal stakeholders",
            ]}
          />
        </div>
      </section>

      {/* ── ARCHITECTURE DIAGRAM ── */}
      <section
        style={{
          padding: "0 24px 72px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" as const, marginBottom: "32px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            ARCO Platform Architecture
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#9ca3af",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            How ARCO ingests, processes, and delivers infrastructure
            intelligence across the enterprise.
          </p>
        </div>

        <ArchDiagram title="ARCO Platform Architecture" height="360px">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
            }}
          >
            <DiagNode label="Enterprise Infrastructure" accent />
            <Connector vertical />
            <DiagNode label="ARCO Data Collection Layer" />
            <Connector vertical />
            <DiagNode label="Analysis & Intelligence Engine" accent />
            <Connector vertical />
            {/* Branch row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                flexWrap: "wrap" as const,
                justifyContent: "center",
              }}
            >
              <DiagNode label="Visualization Engine" />
              <div
                style={{
                  width: "1px",
                  height: "32px",
                  backgroundColor: "rgba(45,138,82,0.25)",
                }}
              />
              <DiagNode label="Cost Optimization Engine" />
            </div>
            <Connector vertical />
            <DiagNode label="Enterprise Dashboard & Insights" accent />
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
            <Cpu size={13} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                color: "#66A37A",
                letterSpacing: "0.08em",
              }}
            >
              ARCO Platform
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
            Ready to Analyze Your Infrastructure?
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
            ARCO gives enterprise teams the analytical depth to make informed
            decisions about infrastructure architecture, workload efficiency,
            and cloud spend — without manual investigation or guesswork.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <a
              href="https://arco.archonovasystems.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="arco.cta.primary_button"
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
              Explore the ARCO Platform
              <MoveRight size={16} />
            </a>
            <Link
              to="/contact"
              data-ocid="arco.cta.secondary_button"
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
              Contact Archonova
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
