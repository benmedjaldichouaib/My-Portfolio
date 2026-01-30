"use client"

import { useLanguage } from "@/context/language-context"

const skills = [
  { name: "HTML", color: "bg-[#e34f26]/10 text-[#e34f26] border-[#e34f26]/30" },
  { name: "CSS", color: "bg-[#1572b6]/10 text-[#42a5f5] border-[#1572b6]/30" },
  { name: "JavaScript", color: "bg-[#f7df1e]/10 text-[#f7df1e] border-[#f7df1e]/30" },
  { name: "React", color: "bg-[#61dafb]/10 text-[#61dafb] border-[#61dafb]/30" },
  { name: "Next.js", color: "bg-zinc-800/60 text-zinc-100 border-zinc-600/40" },
  { name: "Tailwind CSS", color: "bg-[#06b6d4]/10 text-[#06b6d4] border-[#06b6d4]/30" },
  { name: "Python", color: "bg-[#3776ab]/10 text-[#4fc3f7] border-[#3776ab]/30" },
  { name: "Telegram API", color: "bg-[#0088cc]/10 text-[#0088cc] border-[#0088cc]/30" },
  { name: "Gemini API", color: "bg-[#4caf50]/10 text-[#4caf50] border-[#4caf50]/30" },
  { name: "AI / ML", color: "bg-[#ff9900]/10 text-[#ff9900] border-[#ff9900]/30" },
  { name: "Flask", color: "bg-zinc-800/60 text-zinc-100 border-zinc-600/40" },
  { name: "Git & GitHub", color: "bg-[#f05032]/10 text-[#f05032] border-[#f05032]/30" },
]

export function Skills() {
  const { t, dir } = useLanguage()

  return (
    <section id="skills" dir={dir} className="py-20 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {t("skills.title")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`px-5 py-3 rounded-lg border font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
