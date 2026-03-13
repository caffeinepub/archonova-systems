import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  FileText,
  Server,
} from "lucide-react";
import { useEffect, useRef } from "react";

/* ──────────────────────────────────────────────
   Neural Network SVG Background
────────────────────────────────────────────── */
function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodeCount = 60;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        for (let j = i + 1; j < nodeCount; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(31, 111, 67, ${(1 - dist / 160) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 163, 122, ${n.alpha})`;
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}

/* ──────────────────────────────────────────────
   Section Wrapper
────────────────────────────────────────────── */
function Section({
  children,
  bg = "#0A0A0A",
  className = "",
  style = {},
  id,
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{ backgroundColor: bg, ...style }}
      className={`py-8 px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Diagram Placeholder
────────────────────────────────────────────── */
function DiagramPlaceholder({
  label,
  height = "200px",
}: { label: string; height?: string }) {
  return (
    <div
      style={{
        minHeight: height,
        border: "1px dashed rgba(31,111,67,0.5)",
        borderRadius: "4px",
        backgroundColor: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        position: "relative",
        overflow: "hidden",
        animation: "diagram-pulse 3s ease-in-out infinite",
      }}
    >
      {/* Grid lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.08,
        }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
      >
        <defs>
          <pattern
            id="grid"
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
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <Server size={28} style={{ color: "#1F6F43", opacity: 0.6 }} />
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#3D8B5E",
          opacity: 0.8,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────
   HOMEPAGE
────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0A0A0A",
          overflow: "hidden",
        }}
      >
        <NeuralNetworkBg />

        {/* Background image subtle layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(/assets/generated/hero-neural-bg.dim_1920x1080.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            zIndex: 0,
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(11,79,44,0.45) 0%, rgba(0,0,0,0.88) 70%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            paddingTop: "120px",
            paddingBottom: "80px",
          }}
        >
          {/* Badge */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(31,111,67,0.15)",
              border: "1px solid rgba(102,163,122,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <Cpu size={12} style={{ color: "#66A37A" }} />
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#66A37A",
              }}
            >
              Enterprise Technology Consulting
            </span>
          </div>

          <h1
            className="animate-fade-up-delay-1"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: "840px",
              marginBottom: "24px",
            }}
          >
            Engineering Intelligent Technology Ecosystems{" "}
            <span style={{ color: "#66A37A" }}>for the Modern Enterprise</span>
          </h1>

          <p
            className="animate-fade-up-delay-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.1rem",
              color: "#B8B8B8",
              lineHeight: 1.75,
              maxWidth: "600px",
              marginBottom: "40px",
            }}
          >
            Archonova Systems helps organizations modernize infrastructure,
            adopt cloud platforms, develop enterprise software, and implement
            AI-driven automation.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
            <Link
              to="/contact"
              data-ocid="hero.primary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                backgroundColor: "#1F6F43",
                color: "#ffffff",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "background-color 250ms",
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
              Start a Technology Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/cloud-services"
              data-ocid="hero.secondary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 32px",
                border: "1px solid rgba(102,163,122,0.5)",
                color: "#66A37A",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                backgroundColor: "transparent",
                transition: "background-color 250ms, border-color 250ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(102,163,122,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(102,163,122,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(102,163,122,0.5)";
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          aria-label="Scroll to content"
          data-ocid="hero.button"
          onClick={() => {
            document
              .getElementById("consulting-approach")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              color: "#666666",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <ChevronDown
            size={18}
            style={{
              color: "#66A37A",
              animation: "scroll-bounce 2s ease-in-out infinite",
            }}
          />
        </button>
      </section>

      {/* 2. CONSULTING APPROACH */}
      <Section bg="#080808" id="consulting-approach">
        <div className="text-center mb-8">
          <p className="section-label mb-3">METHODOLOGY</p>
          <h2 className="section-heading mb-5">Our Consulting Approach</h2>
          <p
            className="section-subheading mx-auto"
            style={{ maxWidth: "680px" }}
          >
            We begin every engagement with a structured methodology designed to
            align technology strategy with business outcomes. Our
            consulting-first approach ensures that every deployment, migration,
            and implementation is grounded in architectural clarity and
            measurable objectives.
          </p>
        </div>

        {/* 4-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            {
              num: "01",
              title: "Assessment",
              desc: "Evaluate current infrastructure, identify gaps, and define strategic technology objectives aligned with business priorities.",
            },
            {
              num: "02",
              title: "Architecture",
              desc: "Design a scalable, secure, and optimized technology blueprint tailored to your operational requirements.",
            },
            {
              num: "03",
              title: "Implementation",
              desc: "Execute deployment with precision engineering, rigorous testing, and structured change management.",
            },
            {
              num: "04",
              title: "Optimization",
              desc: "Continuously monitor, refine, and evolve the technology ecosystem to maximize performance and value.",
            },
          ].map((step, i) => (
            <div
              key={step.num}
              className="card-hover"
              data-ocid={`approach.item.${i + 1}`}
              style={{
                position: "relative",
                padding: "32px 28px",
                backgroundColor: "#111111",
                border: "1px solid rgba(102,163,122,0.1)",
                borderRight: i < 3 ? "none" : "1px solid rgba(102,163,122,0.1)",
                cursor: "default",
              }}
            >
              {/* Arrow connector (desktop) */}
              {i < 3 && (
                <div
                  style={{
                    position: "absolute",
                    right: "-12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    display: "none",
                  }}
                  className="hidden md:block"
                >
                  <ArrowRight size={20} style={{ color: "#1F6F43" }} />
                </div>
              )}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(102,163,122,0.5)",
                  backgroundColor: "rgba(31,111,67,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "#66A37A",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  color: "#B8B8B8",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
              {/* Green left accent */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  backgroundColor: i === 0 ? "#66A37A" : "#1F6F43",
                  borderRadius: "0",
                  transition: "background-color 250ms",
                }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 3. CORE TECHNOLOGY DOMAINS */}
      <Section bg="#0A0A0A">
        <div className="text-center mb-8">
          <p className="section-label mb-3">SPECIALIZATIONS</p>
          <h2 className="section-heading mb-5">Core Technology Domains</h2>
          <p
            className="section-subheading mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Archonova delivers specialized expertise across the critical domains
            driving modern enterprise transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Cloud size={24} style={{ color: "#66A37A" }} />,
              title: "Cloud Infrastructure",
              desc: "Design, migrate, and operate enterprise cloud environments across hybrid and multi-cloud architectures. We deliver infrastructure that scales with your business.",
              href: "/cloud-services",
            },
            {
              icon: <FileText size={24} style={{ color: "#66A37A" }} />,
              title: "Enterprise Licensing",
              desc: "Navigate complex software licensing landscapes to reduce cost, ensure compliance, and maximize the value of your technology investments.",
              href: "/licensing-consulting",
            },
            {
              icon: <Code2 size={24} style={{ color: "#66A37A" }} />,
              title: "Software Engineering",
              desc: "Build robust, scalable enterprise applications using modern development practices and cloud-native architectures designed for longevity.",
              href: "/software-ai",
            },
            {
              icon: <Brain size={24} style={{ color: "#66A37A" }} />,
              title: "Artificial Intelligence",
              desc: "Implement AI and machine learning solutions that automate processes, surface actionable insights, and drive intelligent decision-making.",
              href: "/software-ai",
            },
          ].map((card, i) => (
            <Link
              key={card.title}
              to={card.href as "/"}
              data-ocid={`domains.item.${i + 1}`}
              className="card-hover"
              style={{
                display: "block",
                padding: "32px 28px",
                backgroundColor: "#111111",
                border: "1px solid rgba(102,163,122,0.1)",
                borderLeft: "3px solid #1F6F43",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <div style={{ marginBottom: "16px" }}>{card.icon}</div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: "#B8B8B8",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#66A37A",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                }}
              >
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4. CLOUD ECOSYSTEMS */}
      <Section bg="#080808">
        <div className="text-center mb-8">
          <p className="section-label mb-3">CLOUD PLATFORMS</p>
          <h2 className="section-heading mb-5">Cloud Ecosystems</h2>
          <p
            className="section-subheading mx-auto"
            style={{ maxWidth: "620px" }}
          >
            We architect and operate enterprise environments across the world's
            leading cloud platforms, bringing deep technical expertise to every
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Microsoft Cloud",
              desc: "Azure infrastructure, Microsoft 365, Dynamics 365, and seamless hybrid cloud integration for enterprise productivity and scale.",
              href: "/microsoft-cloud",
              badge: "Azure · M365 · Dynamics 365",
            },
            {
              name: "Google Cloud",
              desc: "GCP compute, BigQuery analytics, Vertex AI, and managed Kubernetes workloads for data-driven organizations.",
              href: "/google-cloud",
              badge: "GCP · BigQuery · Vertex AI",
            },
            {
              name: "Amazon Web Services",
              desc: "EC2, S3, RDS, Lambda, and end-to-end AWS Well-Architected deployments engineered for reliability and performance.",
              href: "/aws-services",
              badge: "EC2 · Lambda · RDS · S3",
            },
          ].map((cloud, i) => (
            <div
              key={cloud.name}
              className="card-hover"
              data-ocid={`cloud.item.${i + 1}`}
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(102,163,122,0.1)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <DiagramPlaceholder label="Cloud Architecture Diagram" />
              <div style={{ padding: "24px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    backgroundColor: "rgba(31,111,67,0.15)",
                    border: "1px solid rgba(102,163,122,0.2)",
                    borderRadius: "100px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.7rem",
                    color: "#66A37A",
                    marginBottom: "12px",
                  }}
                >
                  {cloud.badge}
                </span>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  {cloud.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "#B8B8B8",
                    lineHeight: 1.65,
                  }}
                >
                  {cloud.desc}
                </p>
                <Link
                  to={cloud.href as "/"}
                  data-ocid={`cloud.item.${i + 1}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "16px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    color: "#66A37A",
                    textDecoration: "none",
                    transition: "gap 200ms",
                  }}
                >
                  Explore <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. DATA CENTER INFRASTRUCTURE */}
      <Section bg="#0A0A0A">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">INFRASTRUCTURE</p>
            <h2 className="section-heading mb-6">Data Center Infrastructure</h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                color: "#B8B8B8",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Modern enterprises require infrastructure that spans on-premises
              data centers, colocation facilities, and cloud environments.
              Archonova designs and deploys hybrid infrastructure models that
              provide the performance, security, and flexibility required for
              mission-critical workloads.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                color: "#B8B8B8",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Our infrastructure engagements encompass network architecture,
              compute provisioning, storage strategy, disaster recovery, and
              operational management — built to enterprise standards from day
              one.
            </p>
            <Link
              to="/data-center"
              data-ocid="datacenter.primary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                backgroundColor: "#1F6F43",
                color: "#ffffff",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "background-color 250ms",
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
              Explore Infrastructure Services
              <ArrowRight size={15} />
            </Link>
          </div>
          <div>
            <DiagramPlaceholder
              label="Hybrid Infrastructure Architecture Diagram"
              height="320px"
            />
          </div>
        </div>
      </Section>

      {/* 6. SOFTWARE & AI ENGINEERING */}
      <Section bg="#080808">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">ENGINEERING</p>
            <h2 className="section-heading mb-6">
              Software &amp; AI Engineering
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                color: "#B8B8B8",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Our software engineering practice delivers enterprise-grade
              applications built for scale, security, and longevity. From custom
              platform development to legacy modernization, we apply modern
              engineering principles to solve complex business problems.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                color: "#B8B8B8",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Our AI practice helps organizations move beyond experimentation —
              implementing production-grade AI systems, intelligent automation
              pipelines, and data-driven decision frameworks that deliver
              measurable operational impact.
            </p>
            <Link
              to="/software-ai"
              data-ocid="software.primary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                backgroundColor: "#1F6F43",
                color: "#ffffff",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "background-color 250ms",
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
              Explore Engineering Practice
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Terminal / code visual */}
          <div
            style={{
              backgroundColor: "#0c0c0c",
              border: "1px solid rgba(31,111,67,0.3)",
              borderRadius: "4px",
              overflow: "hidden",
              fontFamily: "monospace",
            }}
          >
            {/* Terminal bar */}
            <div
              style={{
                padding: "10px 16px",
                backgroundColor: "#111111",
                borderBottom: "1px solid rgba(31,111,67,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: c,
                    opacity: 0.7,
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "0.7rem",
                  color: "#666666",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                archonova-ai — terminal
              </span>
            </div>
            {/* Code lines */}
            <div style={{ padding: "24px" }}>
              {[
                {
                  indent: 0,
                  text: "> initializing AI pipeline...",
                  color: "#66A37A",
                  delay: "0s",
                },
                {
                  indent: 1,
                  text: "loading model: archonova-v2.1",
                  color: "#B8B8B8",
                  delay: "0.4s",
                },
                {
                  indent: 1,
                  text: "scanning infrastructure workloads",
                  color: "#B8B8B8",
                  delay: "0.8s",
                },
                {
                  indent: 1,
                  text: "analyzing 1,247 resource metrics",
                  color: "#B8B8B8",
                  delay: "1.2s",
                },
                {
                  indent: 0,
                  text: "> optimization recommendations:",
                  color: "#66A37A",
                  delay: "1.6s",
                },
                {
                  indent: 2,
                  text: "[✓] right-size 14 compute instances",
                  color: "#3D8B5E",
                  delay: "2.0s",
                },
                {
                  indent: 2,
                  text: "[✓] consolidate 3 database clusters",
                  color: "#3D8B5E",
                  delay: "2.4s",
                },
                {
                  indent: 2,
                  text: "[✓] enable auto-scaling on prod tier",
                  color: "#3D8B5E",
                  delay: "2.8s",
                },
                {
                  indent: 0,
                  text: "> estimated cost reduction: 23%",
                  color: "#66A37A",
                  delay: "3.2s",
                },
              ].map((line) => (
                <div
                  key={line.text}
                  style={{
                    display: "flex",
                    marginBottom: "10px",
                    paddingLeft: `${line.indent * 16}px`,
                    animation: `fade-up 0.4s ease ${line.delay} both`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: line.color,
                      lineHeight: 1.5,
                    }}
                  >
                    {line.text}
                  </span>
                </div>
              ))}
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "14px",
                  backgroundColor: "#66A37A",
                  animation: "blink-cursor 1s step-end infinite",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 7. ARCO PLATFORM TEASER */}
      <section
        style={{
          padding: "56px 24px",
          background: "linear-gradient(135deg, #0B4F2C 0%, #0A0A0A 60%)",
          borderTop: "1px solid rgba(31,111,67,0.3)",
          borderBottom: "1px solid rgba(31,111,67,0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 10% 50%, rgba(31,111,67,0.2) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-4xl mx-auto relative" style={{ zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(102,163,122,0.12)",
              border: "1px solid rgba(102,163,122,0.35)",
              borderRadius: "100px",
              padding: "5px 14px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#66A37A",
              }}
            >
              Archonova PROPRIETARY PLATFORM
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            ARCO —{" "}
            <span style={{ color: "#66A37A" }}>
              AI-Driven Infrastructure Intelligence
            </span>
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#B8B8B8",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "680px",
            }}
          >
            ARCO is Archonova's proprietary AI platform designed to analyze
            infrastructure workloads, visualize application architecture, and
            deliver intelligent optimization recommendations across cloud and
            on-premises environments.
          </p>

          {/* Capability pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {[
              "Infrastructure Architecture Visualization",
              "Workload Analysis",
              "Performance Insights",
              "Cloud Optimization Recommendations",
              "Intelligent Deployment Suggestions",
            ].map((cap) => (
              <span
                key={cap}
                style={{
                  padding: "7px 14px",
                  backgroundColor: "rgba(31,111,67,0.18)",
                  border: "1px solid rgba(102,163,122,0.3)",
                  borderRadius: "100px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  color: "#66A37A",
                  animation: "chip-glow 3s ease-in-out infinite",
                }}
              >
                {cap}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a
              href="https://arco.archonovasystems.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="arco.primary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
                backgroundColor: "#1F6F43",
                color: "#ffffff",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "background-color 250ms",
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
              Explore ARCO Platform
              <ArrowRight size={15} />
            </a>
            <Link
              to="/contact"
              data-ocid="arco.secondary_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                border: "1px solid rgba(102,163,122,0.45)",
                color: "#66A37A",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                backgroundColor: "transparent",
                transition: "background-color 250ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(102,163,122,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section
        style={{
          padding: "56px 24px",
          background:
            "linear-gradient(90deg, #0E3D22 0%, #0B4F2C 50%, #0A0A0A 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.25,
            }}
          >
            Ready to Modernize Your Technology Infrastructure?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#B8B8B8",
              marginBottom: "36px",
              lineHeight: 1.7,
              maxWidth: "540px",
              margin: "0 auto 36px",
            }}
          >
            Speak with an Archonova consultant to assess your current
            environment and define a path forward.
          </p>
          <Link
            to="/contact"
            data-ocid="cta.primary_button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "15px 36px",
              backgroundColor: "#ffffff",
              color: "#0B4F2C",
              borderRadius: "4px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 250ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#66A37A";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#ffffff";
              (e.currentTarget as HTMLElement).style.color = "#0B4F2C";
            }}
          >
            Book a Technology Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
