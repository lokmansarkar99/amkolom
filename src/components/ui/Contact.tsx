"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Mail } from "lucide-react";
import { sectionClasses, sectionHeaderClasses } from "@/lib/section-spacing";
import { formatWhatsAppUrl } from "@/lib/whatsapp";

type ContactProps = {
  compact?: boolean;
  whatsappUrl?: string;
};

export default function Contact({ compact = false, whatsappUrl = "" }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const whatsappLink = formatWhatsAppUrl(whatsappUrl);

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");

    const { submitContactMessage } = await import("@/actions/contact");
    const res = await submitContactMessage(formData);

    if (res.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(res.error || "Failed to send message");
    }
  }

  return (
    <section id="contact" className={`${sectionClasses(compact)} relative`}>
      <div className="container mx-auto max-w-5xl">
        <div className={sectionHeaderClasses(compact)}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let&apos;s build something awesome together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <form action={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-lg px-4 py-3">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-3.5 rounded-lg transition-colors"
              >
                <Send size={18} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass rounded-3xl p-6 sm:p-8 flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Quick Connect</h3>
              <p className="text-sm text-gray-400 mb-6">
                Prefer a faster response? Reach out directly and let&apos;s discuss your idea.
              </p>

              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold transition-colors"
                >
                  <MessageCircle size={20} />
                  Connect on WhatsApp
                </a>
              ) : (
                <div className="text-sm text-gray-500 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  WhatsApp link not configured yet.
                </div>
              )}
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Email Response</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Form messages are saved to the dashboard. I typically reply within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
