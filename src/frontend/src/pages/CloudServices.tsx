import { Link } from "@tanstack/react-router";
import {
  Cloud,
  GitBranch,
  Layers,
  MoveRight,
  Network,
  Settings,
  Shield,
  TrendingDown,
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
}: { label: string; accent?: boolean }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        border: `1px solid ${accent ? "rgba(45,138,82,0.7)" : "rgba(45,138,82,0.3)"}`,
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
      style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}
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
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
}) {
  return (
    <div
      data-ocid={`cloud_services.service.card.${index}`}
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
   CLOUD SERVICES PAGE
────────────────────────────────────────────── */
export default function CloudServices() {
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
            <Cloud size={14} style={{ color: "#2d8a52" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                color: "#66A37A",
                letterSpacing: "0.06em",
                fontWeight: 500,
              }}
            >
              Cloud Services
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
            Enterprise Cloud Architecture &amp;
            <br />
            <span style={{ color: "#2d8a52" }}>Infrastructure Consulting</span>
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
            Archonova Systems designs and deploys scalable, secure cloud
            infrastructure across hybrid and multi-cloud environments — enabling
            your organization to operate with agility, resilience, and cost
            efficiency.
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
              data-ocid="cloud_services.hero.primary_button"
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
              Schedule a Cloud Consultation
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="cloud_services.hero.secondary_button"
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

      {/* ── SERVICES GRID (1–3) ── */}
      <section
        style={{
          padding: "72px 24px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          <ServiceCard
            index={1}
            icon={<Cloud size={18} />}
            title="Cloud Readiness Assessment"
            description="Before migrating infrastructure to the cloud, organizations must evaluate their current architecture, application dependencies, and security requirements. Archonova Systems performs structured assessments that help businesses plan their cloud adoption strategy with precision and confidence."
            capabilities={[
              "Infrastructure evaluation",
              "Application dependency mapping",
              "Security architecture review",
              "Migration feasibility analysis",
              "Cost-benefit modeling",
            ]}
          />
          <ServiceCard
            index={2}
            icon={<Layers size={18} />}
            title="Hybrid Cloud Architecture"
            description="Enterprises rarely operate in a single cloud environment. Archonova Systems architects hybrid cloud solutions that bridge on-premises infrastructure with public cloud platforms, enabling workloads to run where they perform best."
            capabilities={[
              "On-premises to cloud connectivity",
              "Private and public cloud integration",
              "Latency-optimized workload placement",
              "Identity and access federation",
              "Disaster recovery design",
            ]}
          />
          <ServiceCard
            index={3}
            icon={<Network size={18} />}
            title="Multi-Cloud Strategy"
            description="Relying on a single cloud provider introduces vendor lock-in and limits flexibility. Archonova Systems designs multi-cloud strategies that distribute workloads intelligently across AWS, Azure, and Google Cloud."
            capabilities={[
              "Provider-agnostic architecture design",
              "Cross-cloud data portability",
              "Unified governance and policy enforcement",
              "Workload portability planning",
              "SLA and resilience optimization",
            ]}
          />
        </div>
      </section>

      {/* ── DIAGRAM 1: Multi-Cloud Architecture ── */}
      <section
        style={{ padding: "0 24px 64px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <ArchDiagram title="Multi-Cloud Architecture Diagram" height="300px">
          {/* Top row */}
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              gap: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "32px",
                justifyContent: "center",
                flexWrap: "wrap" as const,
                marginBottom: "0",
              }}
            >
              <DiagNode label="Microsoft Azure" accent />
              <DiagNode label="Google Cloud Platform" accent />
              <DiagNode label="AWS Infrastructure" accent />
            </div>
            <Connector vertical />
            <DiagNode label="Hybrid Infrastructure Hub" accent />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "rgba(45,138,82,0.4)",
                  }}
                />
                <div style={{ color: "rgba(45,138,82,0.6)", fontSize: "10px" }}>
                  ◀
                </div>
              </div>
              <DiagNode label="Security &amp; Governance Layer" />
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <div style={{ color: "rgba(45,138,82,0.6)", fontSize: "10px" }}>
                  ▶
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "rgba(45,138,82,0.4)",
                  }}
                />
              </div>
            </div>
            <Connector vertical />
            <DiagNode label="Unified Monitoring &amp; Operations" />
          </div>
        </ArchDiagram>
      </section>

      {/* ── SERVICES GRID (4–5) ── */}
      <section
        style={{ padding: "0 24px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          <ServiceCard
            index={4}
            icon={<MoveRight size={18} />}
            title="Cloud Migration"
            description="Migrating legacy systems to cloud environments requires careful planning to avoid disruption. Archonova Systems executes cloud migrations with structured lift-and-shift, re-platforming, and refactoring methodologies."
            capabilities={[
              "Legacy application assessment",
              "Migration sequencing and dependency mapping",
              "Zero-downtime migration planning",
              "Post-migration validation",
              "Rollback and contingency planning",
            ]}
          />
          <ServiceCard
            index={5}
            icon={<GitBranch size={18} />}
            title="DevOps Automation"
            description="Accelerating software delivery requires automation across the entire development and operations lifecycle. Archonova Systems implements DevOps frameworks that reduce manual processes and increase deployment velocity."
            capabilities={[
              "CI/CD pipeline design and implementation",
              "Infrastructure-as-Code (IaC) deployment",
              "Automated testing integration",
              "Container orchestration (Kubernetes, Docker)",
              "Release management and change control",
            ]}
          />
        </div>
      </section>

      {/* ── DIAGRAM 2: Cloud Migration Workflow ── */}
      <section
        style={{ padding: "0 24px 64px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <ArchDiagram title="Cloud Migration Workflow" height="160px">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap" as const,
              gap: "0",
            }}
          >
            {[
              "Legacy Infrastructure",
              "Assessment & Planning",
              "Pilot Migration",
              "Full Migration",
              "Validation & Optimization",
            ].map((step, i, arr) => (
              <div key={step} style={{ display: "flex", alignItems: "center" }}>
                <DiagNode
                  label={step}
                  accent={i === 0 || i === arr.length - 1}
                />
                {i < arr.length - 1 && <Connector />}
              </div>
            ))}
          </div>
        </ArchDiagram>
      </section>

      {/* ── SERVICES GRID (6–7) ── */}
      <section
        style={{ padding: "0 24px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          <ServiceCard
            index={6}
            icon={<Shield size={18} />}
            title="Infrastructure Security"
            description="Cloud infrastructure introduces new attack surfaces that require purpose-built security controls. Archonova Systems embeds security into cloud architecture from design through deployment."
            capabilities={[
              "Identity and access management (IAM)",
              "Network segmentation and zero-trust design",
              "Compliance framework alignment (SOC 2, ISO 27001)",
              "Threat detection and SIEM integration",
              "Encryption and key management strategy",
            ]}
          />
          <ServiceCard
            index={7}
            icon={<TrendingDown size={18} />}
            title="Cloud Cost Optimization"
            description="Unmanaged cloud spending is one of the most common challenges facing enterprises. Archonova Systems implements financial operations (FinOps) practices that align cloud spending with business value."
            capabilities={[
              "Cloud spend visibility and tagging frameworks",
              "Reserved instance and savings plan analysis",
              "Right-sizing and resource decommissioning",
              "Chargeback and showback reporting",
              "Continuous cost governance",
            ]}
          />
        </div>
      </section>

      {/* ── DIAGRAM 3: Infrastructure Automation Pipeline ── */}
      <section
        style={{ padding: "0 24px 64px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <ArchDiagram title="Infrastructure Automation Pipeline" height="160px">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            {[
              "Source Control",
              "CI/CD Pipeline",
              "Infrastructure-as-Code",
              "Cloud Provisioning",
              "Monitoring & Alerting",
            ].map((step, i, arr) => (
              <div key={step} style={{ display: "flex", alignItems: "center" }}>
                <DiagNode label={step} accent={i === 2} />
                {i < arr.length - 1 && <Connector />}
              </div>
            ))}
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
            <Settings size={13} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                color: "#66A37A",
                letterSpacing: "0.08em",
              }}
            >
              Enterprise Cloud Consulting
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
            Ready to Modernize Your Cloud Infrastructure?
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
            Archonova Systems partners with enterprise organizations to design,
            migrate, and manage cloud environments that scale with your
            business.
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
              data-ocid="cloud_services.cta.primary_button"
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
              Schedule a Cloud Consultation
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="cloud_services.nav.link"
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
