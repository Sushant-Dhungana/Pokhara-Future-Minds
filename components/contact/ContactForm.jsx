"use client";

import { useRef, useState } from "react";
import Toaster, { useToast } from "../common/Toaster";

const serviceOptions = [
  { value: "korean-language", label: "🇰🇷  Korean Language Classes (TOPIK)" },
  { value: "ielts",           label: "📝  IELTS Preparation" },
  { value: "pte",             label: "📝  PTE Academic Coaching" },
  { value: "korea-visa",      label: "✈️  Study in Korea — Admissions & Visa" },
  { value: "australia-visa",  label: "✈️  Study in Australia — Admissions & Visa" },
  { value: "canada-visa",     label: "✈️  Study in Canada — Admissions & Visa" },
  { value: "uk-visa",         label: "✈️  Study in UK — Admissions & Visa" },
  { value: "usa-visa",        label: "✈️  Study in USA — Admissions & Visa" },
  { value: "japan-visa",      label: "✈️  Study in Japan — Admissions & Visa" },
  { value: "gks-scholarship", label: "🏅  GKS Scholarship Guidance" },
  { value: "sop",             label: "📄  SOP / CV Writing" },
  { value: "general",         label: "💬  General Counseling" },
];

const initial = {
  name: "", phone: "", email: "", service: "", destination: "", message: "",
};

// Field-level rules → returns a human-friendly toast message
const rules = [
  { key: "name",    test: (v) => v.trim().length >= 2,                          msg: "Please enter your full name." },
  { key: "phone",   test: (v) => /^[\d\s+\-().]{7,15}$/.test(v.trim()),        msg: "Enter a valid phone number." },
  { key: "email",   test: (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),  msg: "Enter a valid email address." },
  { key: "service", test: (v) => !!v,                                           msg: "Please select a service you are interested in." },
  { key: "message", test: (v) => v.trim().length >= 20,                         msg: "Message must be at least 20 characters." },
];

function validate(fields) {
  const errs = {};
  for (const rule of rules) {
    if (!rule.test(fields[rule.key])) errs[rule.key] = rule.msg;
  }
  return errs;
}

export default function ContactForm() {
  const [fields, setFields]   = useState(initial);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const { toasts, add, remove } = useToast();

  // Derived inline errors (only for touched fields)
  const allErrors = validate(fields);
  const errors = Object.fromEntries(
    Object.entries(allErrors).filter(([k]) => touched[k])
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Mark all fields touched so inline errors show
    setTouched(Object.fromEntries(Object.keys(initial).map((k) => [k, true])));
    const errs = validate(fields);

    if (Object.keys(errs).length > 0) {
      // Fire one toast per error, staggered slightly
      Object.values(errs).forEach((msg, i) => {
        setTimeout(() => add({ message: msg, type: "error", duration: 5000 }), i * 120);
      });
      return;
    }

    setSubmitted(true);
    add({ message: `Message sent! We'll be in touch soon, ${fields.name.split(" ")[0]}.`, type: "success", duration: 6000 });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (submitted) {
    return (
      <>
        <Toaster toasts={toasts} onRemove={remove} />
        <div
          ref={formRef}
          className="surface-card contact-form contact-success"
          role="status"
          aria-live="polite"
        >
          <span className="success-icon" aria-hidden="true">✓</span>
          <h2 className="brand-heading-sm">
            Message <span>sent!</span>
          </h2>
          <p>
            Thank you, <strong>{fields.name.split(" ")[0]}</strong>. Our team will
            contact you within one business day to schedule your free counseling session.
          </p>
          <button
            type="button"
            className="btn-pill-gradient"
            onClick={() => {
              setFields(initial);
              setTouched({});
              setSubmitted(false);
            }}
          >
            Send another message
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster toasts={toasts} onRemove={remove} />

      <form
        ref={formRef}
        className="surface-card contact-form"
        aria-label="Contact and inquiry form"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="brand-heading-sm">
          Send us a <span>message</span>
        </h2>

        {/* Name */}
        <div className="form-field">
          <label htmlFor="name">Full Name <span className="required-star">*</span></label>
          <input
            id="name" name="name" type="text"
            placeholder="Your full name"
            autoComplete="name"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "field-error" : ""}
          />
          {errors.name && <p id="name-error" className="field-error-msg" role="alert">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="form-field">
          <label htmlFor="phone">Phone Number <span className="required-star">*</span></label>
          <input
            id="phone" name="phone" type="tel"
            placeholder="+977-98XXXXXXXX"
            autoComplete="tel"
            value={fields.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={errors.phone ? "field-error" : ""}
          />
          {errors.phone && <p id="phone-error" className="field-error-msg" role="alert">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor="email">Email Address <span className="optional-tag">optional</span></label>
          <input
            id="email" name="email" type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? "field-error" : ""}
          />
          {errors.email && <p id="email-error" className="field-error-msg" role="alert">{errors.email}</p>}
        </div>

        {/* Service select */}
        <div className="form-field">
          <label htmlFor="service">I am interested in <span className="required-star">*</span></label>
          <div className="select-wrap">
            <select
              id="service" name="service"
              value={fields.service}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "service-error" : undefined}
              className={`custom-select${fields.service ? " has-value" : ""}${errors.service ? " field-error" : ""}`}
            >
              <option value="" disabled>— Select a service —</option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <span className="select-chevron" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          {errors.service && <p id="service-error" className="field-error-msg" role="alert">{errors.service}</p>}
        </div>

        {/* Destination */}
        <div className="form-field">
          <label htmlFor="destination">Preferred Destination <span className="optional-tag">optional</span></label>
          <input
            id="destination" name="destination" type="text"
            placeholder="e.g., South Korea, Australia, Canada..."
            value={fields.destination}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        {/* Message */}
        <div className="form-field">
          <label htmlFor="message">Tell us your situation <span className="required-star">*</span></label>
          <textarea
            id="message" name="message" rows={5}
            placeholder="Share your academic background, target intake, budget, and any questions you have..."
            value={fields.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={errors.message ? "field-error" : ""}
          />
          {errors.message && <p id="message-error" className="field-error-msg" role="alert">{errors.message}</p>}
          {fields.message.length > 0 && fields.message.length < 20 && !errors.message && (
            <p className="field-hint">{20 - fields.message.length} more characters needed</p>
          )}
        </div>

        <button type="submit" className="btn-pill-gradient contact-submit-btn">
          Send Inquiry
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </>
  );
}
