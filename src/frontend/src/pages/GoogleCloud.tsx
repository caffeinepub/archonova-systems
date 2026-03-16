import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  Box,
  Cloud,
  GitBranch,
  Mail,
  MoveRight,
  Server,
  Settings,
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
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   GOOGLE CLOUD PAGE
────────────────────────────────────────────── */
export default function GoogleCloud() {
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
              Google Cloud
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
            Google Cloud &amp;
            <br />
            <span style={{ color: "#2d8a52" }}>
              Workspace Enterprise Solutions
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
            Archonova Systems helps organizations deploy and optimize Google
            Cloud infrastructure and Google Workspace collaboration environments
            to power scalable digital operations.
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
              data-ocid="google_cloud.hero.primary_button"
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
              Consult with Google Cloud Specialists
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="google_cloud.hero.secondary_button"
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

      {/* ── FEATURED SERVICE: Google Workspace Deployment ── */}
      <section
        style={{
          padding: "72px 24px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          data-ocid="google_cloud.workspace.card"
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
              <Cloud size={22} />
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
                Google Workspace Deployment
              </h2>
            </div>
          </div>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.925rem",
              color: "#9ca3af",
              lineHeight: 1.7,
              marginBottom: "24px",
              maxWidth: "820px",
            }}
          >
            Archonova Systems helps enterprises deploy and configure Google
            Workspace environments that support secure collaboration,
            cloud-native productivity, and streamlined administration. From
            tenant provisioning to compliance controls, our consultants manage
            every phase of the Workspace adoption lifecycle.
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
              "Google Workspace tenant provisioning and configuration",
              "Gmail, Calendar, and Meet deployment",
              "Drive and Shared Drive governance",
              "Admin console policy and security configuration",
              "User lifecycle management and directory integration",
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
          {/* Card 02: Enterprise Email Migration */}
          <ServiceCard
            index={2}
            ocid="google_cloud.services.card.2"
            icon={<Mail size={18} />}
            title="Enterprise Email Migration"
            description="Migrating enterprise email to Gmail and Google Workspace requires careful planning to preserve mailbox integrity, maintain delivery continuity, and configure DNS correctly. Archonova Systems executes Gmail migrations from Microsoft Exchange, on-premises mail systems, and legacy providers with minimal disruption."
            capabilities={[
              "Mailbox migration strategy and execution",
              "MX record and DNS cutover management",
              "Contacts and calendar data migration",
              "Distribution group and alias configuration",
              "Post-migration validation and support",
            ]}
          >
            {/* Embedded Email Migration Architecture Diagram */}
            <div data-ocid="google_cloud.email_migration_diagram.section">
              <ArchDiagram title="Email Migration Architecture" height="auto">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <DiagNode
                    label="Source Mail Systems (Exchange / IMAP / Legacy)"
                    accent
                  />
                  <Connector vertical />
                  <DiagNode label="DNS Cutover & MX Records" />
                  <Connector vertical />
                  <DiagNode label="Gmail Migration Tool" />
                  <Connector vertical />
                  <DiagNode
                    label="Google Workspace (Gmail + Calendar + Contacts)"
                    accent
                  />
                  <Connector vertical />
                  <DiagNode label="Post-Migration Validation" />
                </div>
              </ArchDiagram>
            </div>
          </ServiceCard>

          {/* Card 03: Kubernetes Infrastructure */}
          <ServiceCard
            index={3}
            ocid="google_cloud.services.card.3"
            icon={<Server size={18} />}
            title="Kubernetes Infrastructure"
            description="Google Kubernetes Engine (GKE) is one of the most capable managed Kubernetes platforms available. Archonova Systems designs and deploys GKE clusters that provide reliable, scalable container orchestration for enterprise workloads."
            capabilities={[
              "GKE cluster architecture and provisioning",
              "Node pool design and autoscaling configuration",
              "Namespace and RBAC policy management",
              "Network policy and ingress controller setup",
              "Cluster monitoring and logging integration",
            ]}
          >
            {/* Embedded GKE Kubernetes Architecture Diagram */}
            <div data-ocid="google_cloud.kubernetes_diagram.section">
              <ArchDiagram title="GKE Kubernetes Architecture" height="auto">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <DiagNode label="Developer Workload" accent />
                  <Connector vertical />
                  <DiagNode label="Container Registry (Artifact Registry)" />
                  <Connector vertical />
                  <DiagNode label="GKE Control Plane" accent />
                  <Connector vertical />
                  <DiagNode label="Node Pool (Autoscaling)" />
                  <Connector vertical />
                  <DiagNode label="Pods & Services" />
                  <Connector vertical />
                  <DiagNode label="Cloud Monitoring" accent />
                </div>
              </ArchDiagram>
            </div>
          </ServiceCard>

          {/* Card 04: Containerized Applications — with embedded diagram */}
          <ServiceCard
            index={4}
            ocid="google_cloud.services.card.4"
            icon={<Box size={18} />}
            title="Containerized Applications"
            description="Containerization enables consistent, portable application deployments across development, staging, and production environments. Archonova Systems architects containerized application platforms on Google Cloud that improve deployment velocity and infrastructure reliability."
            capabilities={[
              "Application containerization strategy",
              "Docker image build and registry management",
              "Google Artifact Registry configuration",
              "Container security scanning and policy",
              "CI/CD pipeline integration for container deployments",
            ]}
          >
            {/* Embedded Container Architecture Diagram */}
            <div data-ocid="google_cloud.container_diagram.section">
              <ArchDiagram
                title="Google Cloud Container Architecture"
                height="auto"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <DiagNode label="User Request" accent />
                  <Connector vertical />
                  <DiagNode label="Google Load Balancer" accent />
                  <Connector vertical />
                  <DiagNode label="Kubernetes Cluster (GKE)" />
                  <Connector vertical />
                  <DiagNode label="Containerized Microservices" />
                  <Connector vertical />
                  <DiagNode label="Database / Cloud Storage" accent />
                </div>
              </ArchDiagram>
            </div>
          </ServiceCard>

          {/* Card 05: DevOps Automation */}
          <ServiceCard
            index={5}
            ocid="google_cloud.services.card.5"
            icon={<GitBranch size={18} />}
            title="DevOps Automation"
            description="Automating software delivery and infrastructure management on Google Cloud reduces manual overhead and accelerates release cycles. Archonova Systems implements DevOps frameworks using Google Cloud Build, Cloud Deploy, and Terraform to streamline enterprise pipelines."
            capabilities={[
              "CI/CD pipeline design with Cloud Build and Cloud Deploy",
              "Infrastructure as code with Terraform on GCP",
              "Artifact management and deployment automation",
              "Environment promotion and release management",
              "Operational runbook and incident workflow automation",
            ]}
          >
            {/* Embedded Google Cloud DevOps Pipeline Diagram */}
            <div data-ocid="google_cloud.devops_diagram.section">
              <ArchDiagram title="Google Cloud DevOps Pipeline" height="auto">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <DiagNode label="Source Repository" accent />
                  <Connector vertical />
                  <DiagNode label="Cloud Build (CI)" />
                  <Connector vertical />
                  <DiagNode label="Artifact Registry" />
                  <Connector vertical />
                  <DiagNode label="Cloud Deploy (CD)" accent />
                  <Connector vertical />
                  <DiagNode label="Production Environment" accent />
                </div>
              </ArchDiagram>
            </div>
          </ServiceCard>

          {/* Card 06: Analytics Infrastructure — with embedded diagram */}
          <ServiceCard
            index={6}
            ocid="google_cloud.services.card.6"
            icon={<BarChart2 size={18} />}
            title="Analytics Infrastructure"
            description="Google Cloud's data and analytics platform gives enterprises the tools to collect, store, and analyze large volumes of operational data. Archonova Systems designs scalable analytics infrastructures using BigQuery, Dataflow, and Looker to turn raw data into actionable intelligence."
            capabilities={[
              "BigQuery data warehouse design and optimization",
              "Dataflow pipeline architecture for streaming and batch",
              "Pub/Sub event ingestion framework",
              "Looker and Looker Studio dashboard design",
              "Data governance and access control frameworks",
            ]}
          >
            {/* Embedded Analytics Pipeline Diagram */}
            <div data-ocid="google_cloud.analytics_diagram.section">
              <ArchDiagram title="Google Data Analytics Pipeline" height="auto">
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
                  <DiagNode label="Data Ingestion (Pub/Sub)" />
                  <Connector vertical />
                  <DiagNode label="Google BigQuery" accent />
                  <Connector vertical />
                  <DiagNode label="Analytics Processing (Dataflow)" />
                  <Connector vertical />
                  <DiagNode label="Dashboard / Insights" accent />
                </div>
              </ArchDiagram>
            </div>
          </ServiceCard>
        </div>
      </section>

      {/* ── EMAIL & COLLABORATION SERVICES ── */}
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
            index={7}
            ocid="google_cloud.services.card.7"
            icon={<Mail size={18} />}
            title="Email & Collaboration Services"
            description="Google-native email collaboration, security, and compliance services for enterprise environments — extending Google Workspace with enterprise-grade protection and governance."
            capabilities={[
              "Google Workspace advanced configuration",
              "Hybrid Email Setup",
              "Email Security Gateway",
              "Spam Filtering & Threat Protection",
              "Email Archiving & Compliance",
              "Email Backup Solutions",
              "Collaboration Tools Deployment (Google Meet / Chat)",
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
            <Settings size={13} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                color: "#66A37A",
                letterSpacing: "0.08em",
              }}
            >
              Google Cloud Consulting
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
            Ready to Scale on Google Cloud?
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
            Archonova Systems partners with enterprise organizations to deploy,
            optimize, and manage Google Cloud and Workspace environments that
            drive performance and operational agility.
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
              data-ocid="google_cloud.cta.primary_button"
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
              Consult with Google Cloud Specialists
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="google_cloud.cta.link"
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
