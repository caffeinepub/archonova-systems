import { Link } from "@tanstack/react-router";
import {
  Award,
  BarChart3,
  BookOpen,
  FileText,
  MoveRight,
  ShieldCheck,
  Tag,
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

function DiagNodeWide({
  label,
  sub,
  accent = false,
}: { label: string; sub?: string; accent?: boolean }) {
  return (
    <div
      style={{
        padding: "10px 20px",
        border: `1px solid ${accent ? "rgba(45,138,82,0.7)" : "rgba(45,138,82,0.3)"}`,
        borderRadius: "6px",
        backgroundColor: accent ? "rgba(11,79,44,0.35)" : "rgba(15,26,19,0.8)",
        textAlign: "center" as const,
        minWidth: "160px",
      }}
    >
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
          color: accent ? "#66A37A" : "#8a9e94",
          fontWeight: accent ? 600 : 400,
        }}
      >
        {label}
      </div>
      {sub && (
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.62rem",
            color: "rgba(45,138,82,0.55)",
            marginTop: "2px",
          }}
        >
          {sub}
        </div>
      )}
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
    <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
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
   LICENSING CONSULTING PAGE
────────────────────────────────────────────── */
export default function LicensingConsulting() {
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
            <Tag size={14} style={{ color: "#2d8a52" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                color: "#66A37A",
                letterSpacing: "0.06em",
                fontWeight: 500,
              }}
            >
              Licensing &amp; Procurement Consulting
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
            Enterprise Licensing Strategy &amp;
            <br />
            <span style={{ color: "#2d8a52" }}>Procurement Consulting</span>
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
            Archonova Systems helps organizations navigate complex enterprise
            licensing ecosystems across cloud platforms and software vendors,
            ensuring optimized procurement strategies, cost efficiency, and
            compliance.
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
              data-ocid="licensing.hero.primary_button"
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
              Consult Licensing Experts
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="licensing.hero.secondary_button"
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

      {/* ── FEATURED: Microsoft Licensing Strategy ── */}
      <section
        style={{
          padding: "72px 24px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          data-ocid="licensing.microsoft.card"
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
              <BookOpen size={22} />
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
                Microsoft Licensing Strategy
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
            Microsoft licensing is one of the most complex and commercially
            significant areas of enterprise software procurement. Archonova
            Systems provides vendor-neutral advisory services to help
            organizations navigate Microsoft 365 licensing models, Enterprise
            Agreement structures, and CSP program options to ensure they are
            licensed correctly, cost-efficiently, and aligned with their
            consumption patterns.
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
              margin: "0 0 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "8px 32px",
            }}
          >
            {[
              "Microsoft 365 license model assessment and right-sizing",
              "Enterprise Agreement (EA) negotiation and renewal advisory",
              "Cloud Solution Provider (CSP) program evaluation and structuring",
              "License compliance audits and true-up risk management",
              "Microsoft license optimization and cost reduction strategies",
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

      {/* ── SERVICE GRID ── */}
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
            ocid="licensing.services.card.2"
            icon={<BarChart3 size={18} />}
            title="Cloud Procurement Consulting"
            description="Archonova Systems advises enterprises on cloud procurement strategy across major platforms, ensuring organizations structure agreements, commitments, and consumption models that deliver long-term cost efficiency and flexibility."
            capabilities={[
              "Cloud spend analysis and procurement optimization",
              "Reserved instance and committed use discount planning",
              "Multi-cloud procurement framework development",
              "Cloud vendor agreement review and negotiation support",
              "Procurement governance and policy framework development",
            ]}
          />
          <ServiceCard
            index={3}
            ocid="licensing.services.card.3"
            icon={<Award size={18} />}
            title="AWS Procurement Frameworks"
            description="We help organizations structure AWS procurement programs that align cloud spending with business objectives, leveraging Enterprise Discount Programs, Savings Plans, and marketplace procurement channels to reduce total cost of ownership."
            capabilities={[
              "AWS Enterprise Discount Program (EDP) advisory",
              "Savings Plans and Reserved Instance optimization",
              "AWS Marketplace procurement strategy",
              "Consolidated billing and account structure optimization",
              "AWS commitment planning and spend forecasting",
            ]}
          />
          <ServiceCard
            index={4}
            ocid="licensing.services.card.4"
            icon={<ShieldCheck size={18} />}
            title="Enterprise Licensing Optimization"
            description="Our licensing optimization practice helps enterprises identify redundant, underutilized, and non-compliant software licenses across their portfolio, reducing procurement costs while maintaining full compliance across all vendor agreements."
            capabilities={[
              "Enterprise software license inventory and audit",
              "Underutilized and duplicate license identification",
              "Vendor contract consolidation and renewal planning",
              "License compliance risk assessment and remediation",
              "Ongoing license position reporting and management",
            ]}
          />
          <ServiceCard
            index={5}
            ocid="licensing.services.card.5"
            icon={<FileText size={18} />}
            title="Technology Bid Consulting"
            description="Archonova Systems provides specialist consulting for enterprise technology tender and bid processes, ensuring procurement specifications, vendor evaluation criteria, and contract terms reflect best practice and deliver competitive outcomes."
            capabilities={[
              "Technology RFP and RFQ development and review",
              "Vendor evaluation framework and scoring design",
              "Bid response analysis and commercial benchmarking",
              "Contract terms review and negotiation advisory",
              "Technology procurement governance and compliance",
            ]}
          />
        </div>
      </section>

      {/* ── INFOGRAPHIC: Enterprise Licensing Procurement Framework ── */}
      <section
        style={{
          padding: "0 24px 72px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Enterprise Licensing Procurement Framework
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#9ca3af",
              maxWidth: "620px",
            }}
          >
            A structured procurement methodology that aligns business
            requirements with vendor licensing models to deliver cost-optimized,
            compliant enterprise software deployments.
          </p>
        </div>

        <ArchDiagram
          title="Enterprise Licensing Procurement Framework"
          height="360px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
            }}
          >
            <DiagNode label="Business Requirements" accent />
            <Connector vertical />
            <DiagNode label="License Assessment" />
            <Connector vertical />
            {/* Three-vendor row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <DiagNodeWide label="Microsoft" sub="EA / M365 / CSP" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "1px",
                    height: "10px",
                    backgroundColor: "rgba(45,138,82,0.3)",
                  }}
                />
                <DiagNodeWide label="AWS" sub="EDP / Savings Plans" accent />
                <div
                  style={{
                    width: "1px",
                    height: "10px",
                    backgroundColor: "rgba(45,138,82,0.3)",
                  }}
                />
              </div>
              <DiagNodeWide label="Google Cloud" sub="CUD / Marketplace" />
            </div>
            <Connector vertical />
            <DiagNode label="Procurement Strategy" accent />
            <Connector vertical />
            <DiagNode label="Cost Optimization" />
            <Connector vertical />
            <DiagNode label="Enterprise Deployment" accent />
          </div>
        </ArchDiagram>
      </section>

      {/* ── SOFTWARE LICENSING PORTFOLIO ── */}
      <section
        style={{ padding: "0 24px 72px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          data-ocid="licensing.portfolio.card"
          style={{
            backgroundColor: "#0f1a13",
            border: "1px solid rgba(45,138,82,0.45)",
            borderLeft: "4px solid #2d8a52",
            borderRadius: "12px",
            padding: "40px",
          }}
        >
          <div style={{ marginBottom: "32px" }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "rgba(45,138,82,0.6)",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "8px",
              }}
            >
              06 — Full Portfolio
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
              Software Licensing Portfolio
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                color: "#9ca3af",
                lineHeight: 1.65,
                marginTop: "10px",
              }}
            >
              Archonova Systems provides advisory and procurement services
              across the full spectrum of enterprise software licensing,
              covering Microsoft, Google, VMware, Oracle, and major productivity
              platforms.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Microsoft Column */}
            <div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#66A37A",
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                  textTransform: "uppercase" as const,
                }}
              >
                Microsoft Licensing
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Microsoft 365 (M365) Licensing",
                  "Office 365 (O365) Licensing",
                  "Microsoft Azure Consumption Licensing",
                  "Microsoft Enterprise Agreement (EA)",
                  "Microsoft CSP Licensing",
                  "Microsoft Select Plus Licensing",
                  "Windows Server Licensing",
                  "Windows Desktop OS Licensing",
                  "Microsoft SQL Server Licensing",
                  "Microsoft Exchange Server Licensing",
                  "Microsoft SharePoint Licensing",
                  "Microsoft Dynamics Licensing",
                  "Power Platform Licensing (Power BI, Power Apps, Power Automate)",
                  "Microsoft Defender Security Licensing",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      color: "#9ca3af",
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#2d8a52",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Vendors Column */}
            <div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#66A37A",
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                  textTransform: "uppercase" as const,
                }}
              >
                Other Vendor Licensing
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Google Workspace Licensing",
                  "Google Cloud Platform Licensing",
                  "VMware Licensing",
                  "RedHat Enterprise Linux Licensing",
                  "Oracle Database Licensing",
                  "Adobe Creative Cloud Licensing",
                  "Autodesk Licensing",
                  "SAP Licensing",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      color: "#9ca3af",
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#2d8a52",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            <Tag size={13} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                color: "#66A37A",
                letterSpacing: "0.08em",
              }}
            >
              Licensing &amp; Procurement Advisory
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
            Optimize Your Enterprise Licensing Strategy
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
            Archonova Systems acts as a trusted advisory partner for enterprise
            procurement decisions -- helping organizations reduce licensing
            costs, maintain compliance, and develop procurement frameworks that
            scale with their business.
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
              data-ocid="licensing.cta.primary_button"
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
              Consult Licensing Experts
              <MoveRight size={16} />
            </Link>
            <Link
              to="/"
              data-ocid="licensing.cta.link"
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
