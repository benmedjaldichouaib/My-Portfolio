"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    
    "hero.greeting": "Hello, I'm",
    "hero.name": "Chouaib benmedjaldi",
    "hero.title": "Fullstack Web & AI Developer",
    "hero.description": "I build modern, responsive, and scalable web applications, work with AI projects, and create efficient user interfaces. Passionate about transforming ideas into real-world solutions.",
    "hero.downloadCV": "Download CV",
    
    // About
    "about.title": "About Me",
    "about.description1": "I am a 23-year-old computer science student at the University of Sciences and Technology Houari Boumediene (USTHB), currently in Master 1. Last year, I completed my final project (PFE) on EQRaa: an Arabic intelligent dictionary at a startup. I have experience in web development (frontend & backend) and AI, and I am passionate about learning new technologies.",
    "about.description2": "I am a passionate web developer with a strong interest in building clean and efficient user interfaces. I enjoy transforming ideas into real-world applications and continuously improving my skills. Based in Algiers, Algeria.",
    
    // Skills
    "skills.title": "My Skills",
    
    // Projects
    "projects.title": "Projects",
    "projects.project1.title": "Portfolio Website",
    "projects.project1.description": "A personal portfolio built with modern frontend technologies.",
    "projects.project2.title": "BioGenAnalyzer",
    "projects.project2.description": "Web app for DNA analysis and 3D protein visualization using AI.",
    "projects.project3.title": "Intelligent Word/PDF Summarizer",
    "projects.project3.description":"Tool to quickly summarize any Word or PDF file using Gemini API.",
    "projects.project4.title": "Image Compressor",
    "projects.project4.description":"Tool to compress images with easy size control.",
    "projects.project5.title": "Telegram AI ChatBot",
    "projects.project5.description":"Smart Telegram bot for chatting and responding like GPT.",
     "projects.project6.title": "Telegram Shop Bot",
    "projects.project6.description":"E-commerce Telegram bot for browsing products, cart, and order management.",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",
    
    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "Feel free to contact me at chouaibbenmedjaldi19@gmail.com or use the form below to send me a message.",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.message": "Your message",
    "contact.send": "Send Message"
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.contact": "التواصل",
    
    // Hero
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "شعيب",
    "hero.title": "مطوّر ويب Fullstack وذكاء اصطناعي",
    "hero.description": "أبني تطبيقات ويب حديثة، متجاوبة وقابلة للتوسع، أعمل على مشاريع الذكاء الاصطناعي، وأصمّم واجهات مستخدم فعّالة. شغوف بتحويل الأفكار إلى حلول واقعية.",
    "hero.downloadCV": "تحميل السيرة الذاتية",
    
    // About
    "about.title": "عني",
    "about.description1": "أنا طالب في علوم الكمبيوتر في جامعة العلوم والتكنولوجيا هواري بومدين (USTHB)، أبلغ من العمر 23 عامًا وأدرس حاليا في سنة الماستر 1. في العام الماضي، أنجزت مشروع التخرج الخاص بي EQRaa: قاموس عربي ذكي ضمن شركة ناشئة. لدي خبرة في تطوير مواقع الويب (Frontend & Backend) والذكاء الاصطناعي، وأحب تعلم التقنيات الجديدة.",
    "about.description2": "أنا مطور ويب شغوف ولدي اهتمام كبير ببناء واجهات مستخدم نظيفة وفعالة. أحب تحويل الأفكار إلى تطبيقات واقعية وأعمل دائما على تطوير مهاراتي. أعيش في الجزائر العاصمة، الجزائر.",
    
    // Skills
    "skills.title": "مهاراتي التقنية",
    
    // Projects
    "projects.title": "المشاريع",
    "projects.project1.title": "موقع شخصي",
    "projects.project1.description": "موقع تعريفي تم بناؤه باستخدام تقنيات الويب الحديثة.",
    "projects.project2.title": "BioGenAnalyzer",
    "projects.project2.description": "موقع لتحليل ADN وعرض البروتين ثلاثي الأبعاد باستخدام الذكاء الاصطناعي.",
    "projects.project3.title": "ملخص ذكي للملفات Word وPDF",
    "projects.project3.description":"أداة لتلخيص أي ملف Word أو PDF بسرعة باستخدام Gemini API.",
    "projects.project4.title": "ضاغط الصور",
    "projects.project4.description":"أداة لضغط الصور مع التحكم في الحجم بسهولة.",
    "projects.project5.title": "Telegram AI Chat Bot",
    "projects.project5.description":"بوت تيليغرام ذكي للتحدث والرد مثل GPT.",
    "projects.project6.title": "بوت متجر تيليغرام",
    "projects.project6.description":"بوت متجر على تيليغرام لتصفح المنتجات وإدارة الطلبات والسلة.",
    
    "projects.viewCode": "عرض الكود",
    "projects.liveDemo": "معاينة مباشرة",
    
    // Contact
    "contact.title": "تواصل معي",
    "contact.description": "يمكنك التواصل معي عبر البريد الإلكتروني chouaibbenmedjaldi19@gmail.com أو من خلال تعبئة النموذج أدناه.",
    "contact.email": "البريد الإلكتروني",
    "description": "لا تتردد في إرسال رسالة، سأرد عليك في أقرب وقت.",
    "contact.name": "الاسم",
    "contact.message": "رسالتك",
    "contact.send": "إرسال الرسالة"

  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
