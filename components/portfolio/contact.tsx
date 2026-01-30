"use client"

import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { useLanguage } from "@/context/language-context"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const { t, dir } = useLanguage()
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_0sv5nor",
        "template_dvhmqvf",
        formRef.current,
        "w4W8hg2ohcSsJAT2P"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
          formRef.current?.reset()
        },
        () => {
          setLoading(false)
          alert("Something went wrong, please try again.")
        }
      )
  }

  return (
    <section id="contact" dir={dir} className="py-20 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("contact.title")}
        </h2>

        <p className="text-center text-muted-foreground mb-10">
          {t("contact.description")}
        </p>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-card p-8 rounded-2xl border border-border"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none"
          />

          <textarea
            name="message"
            rows={5}
            placeholder={t("contact.message")}
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
          >
            {loading ? "Sending..." : t("contact.send")}
          </button>

          {success && (
            <p className="text-green-500 text-center">
              Message sent successfully ✅
            </p>
          )}
        </form>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/benmedjaldichouaib" target="_blank">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/chouaib-benmedjaldi-a405a1291/" target="_blank">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
