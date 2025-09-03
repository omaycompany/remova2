"use client";

import React, { useState } from "react";

export default function FreeSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const organization = String(formData.get("organization") || "").trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false);
      setError("Please enter a valid email.");
      return;
    }
    if (!organization) {
      setIsSubmitting(false);
      setError("Please enter your organization name.");
      return;
    }

    try {
      const res = await fetch("/api/membership/free", { method: "POST", body: formData });
      const json = await res.json();
      if (res.ok) {
        setMessage(json.message || "Welcome! Check your email for next steps.");
        form.reset();
      } else {
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 max-w-xl mx-auto">
      {message && (
        <div className="alert alert-success"><span>{message}</span></div>
      )}
      {error && (
        <div className="alert alert-error"><span>{error}</span></div>
      )}
      <input name="email" type="email" className="input input-bordered" placeholder="Work Email" required />
      <input name="organization" className="input input-bordered" placeholder="Organization / Company" required />
      <button type="submit" className={`btn btn-primary ${isSubmitting ? "loading" : ""}`} disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join Free"}
      </button>
    </form>
  );
}