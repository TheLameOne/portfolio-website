"use client";

import { useState, useRef } from "react";
import { Send, Copy, Check } from "lucide-react";
import { person } from "@/data/person";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const submitRef = useRef<HTMLAnchorElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Harsh,\n\nMy name is ${name}.\n\n${message}\n\nFrom: ${email}`
    );
    const subj = encodeURIComponent(subject || "Portfolio Inquiry");
    window.location.href = `mailto:${person.email}?subject=${subj}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — silently ignore
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="cf-name" className="contact-form-label">
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            className="brutalist-input"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="cf-email" className="contact-form-label">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            className="brutalist-input"
            placeholder="john@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="cf-subject" className="contact-form-label">
          Subject
        </label>
        <input
          id="cf-subject"
          type="text"
          className="brutalist-input"
          placeholder="Let's work together"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="cf-message" className="contact-form-label">
          Message
        </label>
        <textarea
          id="cf-message"
          className="brutalist-input brutalist-textarea"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
      </div>

      <div className="contact-form-actions">
        <button type="submit" className="btn-primary contact-submit-btn">
          <Send size={16} />
          Send Message
        </button>

        <button
          type="button"
          className="btn-secondary contact-copy-btn"
          onClick={copyEmail}
          aria-label="Copy email address"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </form>
  );
}
