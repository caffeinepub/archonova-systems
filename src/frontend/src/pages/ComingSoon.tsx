import { Link } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  isArco?: boolean;
}

export default function ComingSoon({
  title,
  subtitle,
  isArco,
}: ComingSoonProps) {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "72px",
        backgroundColor: "#0A0A0A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(31,111,67,0.15)",
            border: "1px solid rgba(102,163,122,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "24px",
          }}
        >
          <Clock size={13} style={{ color: "#66A37A" }} />
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#66A37A",
            }}
          >
            {isArco ? "Coming Soon" : "In Development"}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            color: "#B8B8B8",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          {subtitle} This page is currently being developed and will be
          available soon.
        </p>

        {isArco && (
          <a
            href="https://arco.archonovasystems.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="arco.primary_button"
            style={{
              display: "inline-block",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "14px 32px",
              backgroundColor: "#1F6F43",
              color: "#ffffff",
              borderRadius: "4px",
              textDecoration: "none",
              marginBottom: "16px",
              marginRight: "12px",
              transition: "background-color 250ms",
            }}
          >
            Explore ARCO Platform
          </a>
        )}

        <Link
          to="/"
          data-ocid="comingsoon.secondary_button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "14px 28px",
            border: "1px solid rgba(102,163,122,0.4)",
            color: "#66A37A",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "all 250ms",
          }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
