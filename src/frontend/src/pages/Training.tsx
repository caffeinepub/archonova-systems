import { Link } from "@tanstack/react-router";
import { Award, BookOpen, Brain, Cloud, MoveRight, Users } from "lucide-react";

const categories = [
  {
    icon: <Users size={22} />,
    label: "01",
    title: "Corporate Training",
    description:
      "Organization-wide technology adoption and digital transformation training programs designed to align executive leadership and operational teams with modern technology strategy.",
    items: [
      "Organization-wide technology adoption programs",
      "Digital transformation readiness training",
      "IT governance training",
      "Change management for technology initiatives",
      "Executive technology briefings",
    ],
  },
  {
    icon: <BookOpen size={22} />,
    label: "02",
    title: "Technology Training",
    description:
      "Hands-on training programs for IT administrators, end users, and infrastructure teams covering enterprise applications, cloud platforms, and operational best practices.",
    items: [
      "Administrator Training",
      "End User Training",
      "Cloud platform fundamentals (Azure, AWS, GCP)",
      "Infrastructure operations training",
      "Enterprise application training",
      "Documentation and SOP Handover",
    ],
  },
  {
    icon: <Brain size={22} />,
    label: "03",
    title: "AI & Automation Training",
    description:
      "Practical AI and automation training programs equipping business teams with the skills to leverage intelligent tools, automate workflows, and make data-driven decisions.",
    items: [
      "AI concepts and enterprise application",
      "Machine learning fundamentals for business teams",
      "AI workflow automation training",
      "Prompt engineering and AI tools for productivity",
      "Data-driven decision making",
    ],
  },
  {
    icon: <Cloud size={22} />,
    label: "04",
    title: "Cloud Certification Programs",
    description:
      "Structured certification preparation programs for Microsoft Azure, AWS, and Google Cloud, including technical workshops, hands-on labs, and multi-cloud architecture training.",
    items: [
      "Cloud Certification Programs (Azure, AWS, GCP)",
      "Technical Workshops",
      "Hands-on lab environments",
      "Certification exam preparation",
      "Multi-cloud architecture training",
    ],
  },
];

export default function Training() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(160deg, #0B2A1A 0%, #0A1A0F 40%, #0E0E0E 100%)",
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG grid */}
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
              id="training-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#66A37A"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#training-grid)" />
        </svg>

        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
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
            <Award size={13} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                color: "#66A37A",
                letterSpacing: "0.08em",
              }}
            >
              Enterprise Training Programs
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Corporate & Technology
            <br />
            <span style={{ color: "#2d8a52" }}>Training Programs</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: "680px",
              marginBottom: "36px",
            }}
          >
            Empowering teams with enterprise technology skills, AI capability,
            and cloud certification programs — from executive briefings to
            hands-on technical workshops.
          </p>

          <div
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" as const }}
          >
            <Link
              to="/contact"
              data-ocid="training.cta.primary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#1F6F43",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "6px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "background-color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#3D8B5E";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#1F6F43";
              }}
            >
              Enquire About Training
              <MoveRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAINING CATEGORIES ── */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" as const, marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Training Program Areas
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              color: "#9ca3af",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Structured training programs designed for enterprise teams across
            technology, cloud, AI, and corporate digital readiness.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))",
            gap: "28px",
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              data-ocid={`training.category.card.${idx + 1}`}
              style={{
                backgroundColor: "#0f1a13",
                border: "1px solid rgba(31,111,67,0.25)",
                borderLeft: "4px solid rgba(45,138,82,0.6)",
                borderRadius: "12px",
                padding: "32px",
                transition: "border-color 0.25s, transform 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(45,138,82,0.65)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(31,111,67,0.25)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(11,79,44,0.45)",
                    border: "1px solid rgba(45,138,82,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2d8a52",
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "rgba(45,138,82,0.55)",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    {cat.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                {cat.description}
              </p>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.72rem",
                  color: "#4a7c5e",
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                }}
              >
                Program includes:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {cat.items.map((item) => (
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
                        marginTop: "3px",
                        fontSize: "10px",
                      }}
                    >
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
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
            Equip Your Teams for the Future of Technology
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
            Archonova Systems designs and delivers enterprise training programs
            tailored to your organization's technology environment, skill gaps,
            and transformation roadmap.
          </p>

          <Link
            to="/contact"
            data-ocid="training.cta.primary_button"
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
            Schedule a Training Consultation
            <MoveRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
