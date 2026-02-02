"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      router.push(`/thank-you?name=${encodeURIComponent(formData.firstName)}`);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
 
      <main className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          {/* Contact Info Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-1 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl capitalize md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Let's discuss your <br />{" "}
              <span className="text-blue-500">financial future </span>
              <span className="text-green-500 animate-pulse">.</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-lg">
              Have questions about our platform or want to see how we can help
              your business grow? We're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email us</h3>
                  <p className="text-white/40 mb-1">
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:hello@nexverra.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    hello@nexverra.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit us</h3>
                  <p className="text-white/40 mb-1">
                    Come say hello at our office HQ.
                  </p>
                  <p className="text-white">
                    100 Smith Street, Collingwood VIC 3066 AU
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Call us</h3>
                  <p className="text-white/40 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a
                    href="tel:+1555000000"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    First name
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Last name
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Phone number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us a little about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                ></textarea>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  {errorMessage}
                </p>
              )}

              {status === "success" && (
                <p className="text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                  Message sent successfully! We'll be in touch soon.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full bg-white text-black font-semibold rounded-xl py-4 hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

     </div>
  );
}
