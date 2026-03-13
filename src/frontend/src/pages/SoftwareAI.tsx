import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
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
   Service Card
────────────────────────────────────────────── */
function ServiceCard({
  index,
  icon,
  title,
  description,
  capabilities,
  ocid,
  children,
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
  ocid: string;
  children?: React.ReactNode;
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
          marginBottom: children ? "20px" : 0,
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

      {children && <div style={{ marginTop: "8px" }}>{children}</div>}
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
        {/* Ambient glow */}
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
            Archonova Systems designs and builds custom enterprise software
            platforms engineered for scalability, performance, and long-term
            maintainability. From system architecture through full-stack
            delivery, we serve as an engineering partner for organizations
            building intelligent, cloud-integrated applications.
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
            Key capabilities:
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
              "Custom application development for enterprise environments",
              "Microservices and distributed system architecture",
              "API-first design and multi-platform integration",
              "CI/CD pipelines and automated delivery workflows",
              "Code review, quality assurance, and technical governance",
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
                  style={{
                    color: "#2d8a52",
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICE GRID (indexes 2–6) ── */}
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
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <ServiceCard
            index={2}
            ocid="software_ai.services.card.2"
            icon={<GitMerge size={18} />}
            title="SaaS Platform Architecture"
            description="We design multi-tenant SaaS platforms built for enterprise scale, enabling organizations to deliver software services with high availability, flexible billing models, and secure data isolation."
            capabilities={[
              "Multi-tenant architecture with data isolation",
              "Subscription and usage-based billing integration",
              "High-availability and auto-scaling infrastructure",
              "Tenant onboarding and provisioning automation",
              "SLA-aligned uptime and performance monitoring",
            ]}
          />
          <ServiceCard
            index={3}
            ocid="software_ai.services.card.3"
            icon={<Puzzle size={18} />}
            title="API Integrations"
            description="Archonova Systems architects and implements API ecosystems that connect enterprise platforms, third-party services, and internal systems into unified, reliable data flows."
            capabilities={[
              "RESTful and GraphQL API development",
              "Enterprise system integration (ERP, CRM, ITSM)",
              "API gateway design and rate limiting",
              "Authentication, authorization, and OAuth 2.0 flows",
              "API documentation, versioning, and lifecycle management",
            ]}
          />

          {/* Workflow Automation — with AI Workflow Pipeline diagram */}
          <ServiceCard
            index={4}
            ocid="software_ai.services.card.4"
            icon={<Zap size={18} />}
            title="Workflow Automation"
            description="We implement AI-powered workflow automation systems that eliminate manual processes, accelerate operational throughput, and embed intelligent decision-making into core business workflows."
            capabilities={[
              "Business process automation with AI decision layers",
              "Robotic process automation (RPA) integration",
              "Event-driven workflow orchestration",
              "Automated approvals, routing, and escalation logic",
              "Real-time monitoring and operational dashboards",
            ]}
          >
            <ArchDiagram title="AI Workflow Pipeline" height="260px">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <DiagNode label="Business Data" accent />
                <Connector vertical />
                <DiagNode label="AI Model" />
                <Connector vertical />
                <DiagNode label="Automation Engine" accent />
                <Connector vertical />
                <DiagNode label="Operational Workflow" />
                <Connector vertical />
                <DiagNode label="Business Insights" accent />
              </div>
            </ArchDiagram>
          </ServiceCard>

          {/* Machine Learning Engineering — with ML Architecture diagram */}
          <ServiceCard
            index={5}
            ocid="software_ai.services.card.5"
            icon={<Cpu size={18} />}
            title="Machine Learning Engineering"
            description="Our machine learning engineering practice designs, trains, and deploys production-grade ML models that generate predictive intelligence and enable data-driven automation at scale."
            capabilities={[
              "Data pipeline engineering and feature engineering",
              "Model training, validation, and performance benchmarking",
              "ML model deployment to cloud and edge environments",
              "Continuous model monitoring and retraining pipelines",
              "Integration with enterprise data warehouses and BI tools",
            ]}
          >
            <ArchDiagram title="Machine Learning Architecture" height="260px">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <DiagNode label="Data Sources" accent />
                <Connector vertical />
                <DiagNode label="Data Processing" />
                <Connector vertical />
                <DiagNode label="Machine Learning Model" accent />
                <Connector vertical />
                <DiagNode label="Prediction Engine" />
                <Connector vertical />
                <DiagNode label="Analytics Dashboard" accent />
              </div>
            </ArchDiagram>
          </ServiceCard>

          <ServiceCard
            index={6}
            ocid="software_ai.services.card.6"
            icon={<BarChart3 size={18} />}
            title="AI Analytics Systems"
            description="Archonova Systems builds AI-powered analytics platforms that surface actionable intelligence from complex enterprise data, enabling leadership teams to make informed decisions faster."
            capabilities={[
              "Real-time and batch analytics architecture",
              "Natural language querying and AI-assisted reporting",
              "Anomaly detection and predictive forecasting",
              "Dashboard design for executive and operational audiences",
              "Integration with cloud data platforms (BigQuery, Redshift, Synapse)",
            ]}
          />
        </div>
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
    </>
  );
}
