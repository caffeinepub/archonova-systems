import { Link } from "@tanstack/react-router";
import {
  Building2,
  HardDrive,
  Layers,
  MoveRight,
  Network,
  Server,
  Settings,
  Shuffle,
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
   DATA CENTER PAGE
────────────────────────────────────────────── */
export default function DataCenter() {
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
            <Server size={14} style={{ color: "#2d8a52" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                color: "#66A37A",
                letterSpacing: "0.06em",
                fontWeight: 500,
              }}
            >
              Data Center Infrastructure
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
            Enterprise Data Center Infrastructure &amp;
            <br />
            <span style={{ color: "#2d8a52" }}>Hybrid Cloud Solutions</span>
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
            Archonova Systems helps organizations design and deploy modern
            infrastructure environments combining dedicated data centers,
            private infrastructure, and public cloud platforms.
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
              data-ocid="data_center.hero.primary_button"
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
              Discuss Infrastructure Strategy
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="data_center.hero.secondary_button"
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

      {/* ── FEATURED SERVICE: Private Data Center Infrastructure ── */}
      <section
        style={{
          padding: "72px 24px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          data-ocid="data_center.private_dc.card"
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
              <Building2 size={22} />
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
                Private Data Center Infrastructure
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
            Archonova Systems designs and deploys dedicated private data center
            environments that give organizations full control over their
            infrastructure stack. From server room buildouts to enterprise-grade
            colocation facilities, we architect solutions that meet the
            performance, compliance, and security requirements of
            mission-critical workloads.
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
              "Private server room design and deployment",
              "Physical and virtual infrastructure architecture",
              "On-premises storage and networking infrastructure",
              "Power, cooling, and redundancy planning",
              "Data center security and access control frameworks",
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
          padding: "0 24px 48px",
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
            ocid="data_center.services.card.2"
            icon={<HardDrive size={18} />}
            title="Dedicated Servers"
            description="Organizations requiring predictable, high-performance compute capacity benefit from dedicated server environments that eliminate the variability of shared infrastructure. Archonova Systems provisions and manages dedicated server deployments that deliver consistent performance for demanding enterprise workloads."
            capabilities={[
              "Bare-metal server provisioning and configuration",
              "RAID storage and redundant networking",
              "Out-of-band management and remote access",
              "Hardware lifecycle and replacement management",
              "SLA-backed uptime and performance monitoring",
            ]}
          />
          <ServiceCard
            index={3}
            ocid="data_center.services.card.3"
            icon={<Layers size={18} />}
            title="Virtual Machines"
            description="Virtualization enables organizations to maximize hardware utilization while maintaining workload isolation and operational flexibility. Archonova Systems architects virtual machine environments using industry-leading hypervisors, supporting everything from dev/test environments to production enterprise workloads."
            capabilities={[
              "Hypervisor selection and deployment (VMware, Hyper-V, KVM)",
              "VM provisioning templates and image management",
              "Resource allocation and performance tuning",
              "High availability and live migration configuration",
              "Snapshot, backup, and disaster recovery integration",
            ]}
          />
          <ServiceCard
            index={4}
            ocid="data_center.services.card.4"
            icon={<Network size={18} />}
            title="Shared Infrastructure"
            description="For organizations seeking cost-effective infrastructure without dedicated resource commitments, shared infrastructure models provide scalable compute, storage, and networking on a pooled basis. Archonova Systems designs shared environments with strong workload isolation and performance guarantees."
            capabilities={[
              "Multi-tenant compute and storage architecture",
              "Resource pooling and dynamic allocation",
              "Network segmentation and tenant isolation",
              "Capacity planning and utilization monitoring",
              "Infrastructure-as-a-service (IaaS) model implementation",
            ]}
          />
          <ServiceCard
            index={5}
            ocid="data_center.services.card.5"
            icon={<Building2 size={18} />}
            title="Co-location Services"
            description="Co-location allows organizations to house their own hardware in professionally managed data center facilities, gaining access to enterprise-grade power, cooling, and connectivity without the capital investment of building their own facility. Archonova Systems manages co-location engagements from site selection through ongoing operations."
            capabilities={[
              "Co-location facility evaluation and vendor selection",
              "Cabinet and cage configuration planning",
              "Cross-connect and network connectivity setup",
              "Remote hands coordination and on-site support",
              "Power and cooling capacity management",
            ]}
          />
          <ServiceCard
            index={6}
            ocid="data_center.services.card.6"
            icon={<Shuffle size={18} />}
            title="Hybrid Infrastructure"
            description="Modern enterprises operate across a mix of private data centers, managed hosting, and public cloud platforms. Archonova Systems architects hybrid infrastructure models that unify these environments under consistent management frameworks, enabling workload portability and optimized cost performance."
            capabilities={[
              "Hybrid architecture design and network integration",
              "Private-to-cloud connectivity (SD-WAN, VPN, direct connect)",
              "Unified identity and access management across environments",
              "Workload placement and cost optimization strategy",
              "Centralized monitoring and operations management",
            ]}
          />
        </div>
      </section>

      {/* ── HYBRID INFRASTRUCTURE ARCHITECTURE DIAGRAM ── */}
      <section
        data-ocid="data_center.hybrid_diagram.section"
        style={{
          padding: "0 24px 72px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              color: "#ffffff",
              marginBottom: "8px",
            }}
          >
            Hybrid Infrastructure Architecture
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#6b7280",
            }}
          >
            A structural view of how enterprise applications connect across
            private data centers and public cloud platforms.
          </p>
        </div>

        <ArchDiagram title="Hybrid Infrastructure Architecture" height="420px">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
            }}
          >
            {/* Top node */}
            <DiagNode label="Enterprise Applications" accent />
            <Connector vertical />
            <DiagNode label="Hybrid Infrastructure Layer" accent />
            <Connector vertical />

            {/* Split row */}
            <div
              style={{
                display: "flex",
                gap: "48px",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {/* Left branch: Private */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <DiagNode label="Private Data Center" />
                <Connector vertical />
                <DiagNode label="Dedicated Servers" />
              </div>

              {/* Right branch: Public Cloud */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <DiagNode label="Public Cloud (AWS / Azure / GCP)" />
                <Connector vertical />
                <DiagNode label="Scalable Compute" />
              </div>
            </div>
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
              Data Center Consulting
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
            Ready to Build Your Infrastructure Strategy?
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
            deploy, and manage infrastructure environments that combine the
            control of private data centers with the flexibility of hybrid cloud
            architecture.
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
              data-ocid="data_center.cta.primary_button"
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
              Discuss Infrastructure Strategy
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="data_center.cta.link"
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
