import { useActor } from "@/hooks/useActor";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const techOptions = [
  "Cloud Infrastructure Consulting",
  "Microsoft 365 Services",
  "Google Cloud & Workspace",
  "AWS Infrastructure",
  "Data Center & Hybrid Infrastructure",
  "Enterprise Software Development",
  "Artificial Intelligence & Automation",
  "Managed IT Services",
  "Licensing & Procurement Consulting",
  "Other",
];

export default function Contact() {
  const { actor, isFetching } = useActor();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    technologyRequirement: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.submitConsultation(
        form.name,
        form.company,
        form.email,
        form.phone,
        form.technologyRequirement,
        form.message,
      );
      setSubmitted(true);
      toast.success(
        "Consultation request submitted. We will be in touch shortly.",
      );
    } catch {
      toast.error("Failed to submit. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#1A1A1A",
    border: "1px solid rgba(102,163,122,0.2)",
    borderRadius: "4px",
    color: "#ffffff",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 200ms",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "0.8rem",
    color: "#B8B8B8",
    marginBottom: "6px",
    letterSpacing: "0.02em",
  };

  return (
    <section
      style={{
        paddingTop: "72px",
        backgroundColor: "#0A0A0A",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <div
        style={{
          padding: "80px 24px 60px",
          background:
            "linear-gradient(135deg, rgba(11,79,44,0.3) 0%, rgba(0,0,0,0) 60%)",
          borderBottom: "1px solid rgba(31,111,67,0.2)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h1 className="section-heading mb-4">
            Schedule a Technology Consultation
          </h1>
          <p className="section-subheading">
            Whether you are planning cloud infrastructure, enterprise software
            development, AI automation, or technology modernization, the
            Archonova Systems team is ready to assist. Connect with our
            consulting team to discuss your technology requirements and explore
            solutions tailored to your organization.
          </p>
        </div>
      </div>

      {/* Get in Touch intro */}
      <div
        style={{
          padding: "60px 24px 0",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.95rem",
            color: "#B8B8B8",
            lineHeight: 1.75,
            maxWidth: "720px",
          }}
        >
          Our team works with organizations across multiple industries to design
          scalable technology infrastructure, intelligent software platforms,
          and cloud-based systems. If you have a technology requirement or would
          like to explore how Archonova Systems can support your organization,
          please reach out using the contact details below or submit the
          consultation form.
        </p>
      </div>

      {/* Two-column: Contact Info + Form */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column: Contact Information */}
          <div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#ffffff",
                marginBottom: "32px",
              }}
            >
              Contact Information
            </h2>

            {/* Email */}
            <div style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "#66A37A",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Email
              </p>
              <a
                href="mailto:info@archonovasystems.com"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "#B8B8B8",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#66A37A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                }}
              >
                <Mail size={15} style={{ color: "#66A37A", flexShrink: 0 }} />
                info@archonovasystems.com
              </a>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "#66A37A",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Phone
              </p>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "#B8B8B8",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Phone size={15} style={{ color: "#66A37A", flexShrink: 0 }} />
                +91 78377 94951
              </div>
            </div>

            {/* Office */}
            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "#66A37A",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Office
              </p>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "#B8B8B8",
                  lineHeight: 1.8,
                  display: "flex",
                  gap: "8px",
                }}
              >
                <MapPin
                  size={15}
                  style={{ color: "#66A37A", flexShrink: 0, marginTop: "3px" }}
                />
                <div>
                  <div>Archonova Systems OPC Private Limited</div>
                  <div>Unit 603–604, Tower B</div>
                  <div>Bhutani Alphathum, Sector 90</div>
                  <div>Noida, Uttar Pradesh – 201304</div>
                  <div>India</div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              style={{
                padding: "24px",
                backgroundColor: "#111111",
                border: "1px solid rgba(102,163,122,0.15)",
                borderRadius: "4px",
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                Response Time
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.825rem",
                  color: "#B8B8B8",
                  lineHeight: 1.6,
                }}
              >
                We typically respond to consultation requests within one
                business day. For urgent infrastructure matters, please email us
                directly at info@archonovasystems.com.
              </p>
            </div>
          </div>

          {/* Right column: Form */}
          <div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#ffffff",
                marginBottom: "32px",
              }}
            >
              Consultation Request Form
            </h2>

            {submitted ? (
              <div
                data-ocid="contact.success_state"
                style={{
                  padding: "48px",
                  backgroundColor: "#111111",
                  border: "1px solid rgba(102,163,122,0.3)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(31,111,67,0.2)",
                    border: "1px solid #66A37A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <Send size={24} style={{ color: "#66A37A" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  Thank you for contacting Archonova Systems.
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#B8B8B8",
                    lineHeight: 1.7,
                  }}
                >
                  Our consulting team will review your request and reach out
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-ocid="contact.modal">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      style={inputStyle}
                      placeholder="Your full name"
                      data-ocid="contact.input"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.5)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.2)";
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>
                      Company Name *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      style={inputStyle}
                      placeholder="Your organization"
                      data-ocid="contact.input"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.5)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.2)";
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      style={inputStyle}
                      placeholder="you@company.com"
                      data-ocid="contact.input"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.5)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.2)";
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      style={inputStyle}
                      placeholder="+91 00000 00000"
                      data-ocid="contact.input"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.5)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.2)";
                      }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="tech" style={labelStyle}>
                      Technology Requirement *
                    </label>
                    <select
                      id="tech"
                      required
                      value={form.technologyRequirement}
                      onChange={(e) =>
                        handleChange("technologyRequirement", e.target.value)
                      }
                      style={{ ...inputStyle, cursor: "pointer" }}
                      data-ocid="contact.select"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.5)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.2)";
                      }}
                    >
                      <option value="" disabled>
                        Select a technology area
                      </option>
                      {techOptions.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          style={{ backgroundColor: "#1A1A1A" }}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" style={labelStyle}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      style={{ ...inputStyle, resize: "vertical" }}
                      placeholder="Describe your technology challenge or requirement..."
                      data-ocid="contact.textarea"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.5)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(102,163,122,0.2)";
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting || isFetching || !actor}
                  data-ocid="contact.submit_button"
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 36px",
                    backgroundColor: "#1F6F43",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting || isFetching ? 0.7 : 1,
                    transition: "background-color 250ms, opacity 250ms",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting)
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#3D8B5E";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#1F6F43";
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Schedule a Technology Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Why Contact Archonova section */}
      <div
        style={{
          borderTop: "1px solid rgba(31,111,67,0.15)",
          borderBottom: "1px solid rgba(31,111,67,0.15)",
          background:
            "linear-gradient(180deg, rgba(11,79,44,0.08) 0%, rgba(0,0,0,0) 100%)",
          padding: "64px 24px",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Why Contact Archonova Systems
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              color: "#B8B8B8",
              lineHeight: 1.8,
            }}
          >
            Organizations choose Archonova Systems for consulting-led technology
            services across cloud infrastructure, enterprise software
            engineering, AI automation, and IT operations management. Our team
            helps businesses design scalable digital environments aligned with
            modern enterprise architecture and operational goals.
          </p>
        </div>
      </div>
    </section>
  );
}
