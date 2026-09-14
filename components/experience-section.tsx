"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Award,
  ArrowUpRight,
  Download,
  FileText,
  Medal,
  Lock,
  Unlock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextScrambleLoop from "./ui/text-scramble-effect";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "achievement";
  link?: string;
  experienceCertificate?: string;
  image?: string;
}

interface certification {
  title: string;
  badge?: string;
  issuer: string;
  period?: string;
  image?: string;
}

export default function ExperienceSection() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(
    null,
  );

  // Debug state
  console.log("🔍 Current hovered achievement:", hoveredAchievement);

  const workExperiences: Experience[] = [];

  const achievements: Experience[] = [
    {
      title: "Gemini Certified Student – University",
      company: "Google for Education / Google AI",
      period: "Jan 2026 – Jan 2029",
      description:
        "Demonstrated the knowledge, skills, and basic competencies needed to use Google AI. Awarded to Praveen Suthar on 31/01/2026, valid through 31/01/2029.",
      type: "achievement",
      image: "/achievements/gemini-certified-student.jpg",
    },
    {
      title: "Virtual: PromptWars – Rank 242 / 48,682",
      company: "Hack2skill (H2S)",
      period: "2025 – 2026",
      description:
        "Participated in Virtual: PromptWars on Hack2skill, achieving an AI Code Submission score of 90.15 and securing a rank of #242 out of 48,682 participants.",
      type: "achievement",
      image: "/achievements/hack2skill-promptwars.png",
    },
    {
      title: "Highest CGPA in Computer Science Engineering",
      company: "Visvesvaraya Technological University (VTU)",
      period: "Academic Excellence",
      description:
        "Secured 9.5 as the highest CGPA in Engineering Computer Science under Visvesvaraya Technological University (VTU).",
      type: "achievement",
    },
  ];

  const certifications: certification[] = [
    {
      title: "Agentic AI Saksham Program",
      issuer: "Capabl",
      period: "2026",
    },
    {
      title: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage",
      period: "2026",
      image: "/certificates/aws-solutions-architecture.jpg",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      period: "2025",
      image: "/certificates/oracle-ai-foundations.jpg",
    },
    {
      title: "Web Development with AI Tools",
      issuer: "Edunet Foundation",
      period: "2025–26",
      image: "/certificates/Web_dev_with_cgpt_simplilearn_page-0001.jpg",
    },
    {
      title: "AI Skills Passport",
      issuer: "EY and Microsoft",
      period: "2026",
      image: "/certificates/ey-ai-skills-passport.jpg",
    },
    {
      title: "Introduction to Prompt Engineering with GitHub Copilot",
      issuer: "Microsoft",
      period: "2025",
      image: "/certificates/github-copilot.jpg",
    },
    {
      title: "AI-Driven Coding and Project Management with Git",
      issuer: "Parvam",
      period: "2026",
    },
    {
      title: "AI agent development on Azure",
      issuer: "Microsoft",
      period: "2025",
      image: "/certificates/azure-ai-agent.jpg",
    },
    {
      title: "Foundation course on Green Skills and Artificial Intelligence",
      issuer: "Edunet Foundation",
      period: "2025",
      image: "/certificates/green-skills-ai.jpg",
    },
  ];

  return (
    <section id="experience" className="relative py-0 pb-4 bg-gray-900">
      {/* Work Experience Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop
            text="Work Experience"
            className="text-3xl font-bold"
          />
        </motion.h2>

        {workExperiences.length === 0 ? (
          <div className="max-w-3xl mx-auto my-6">
            <Card className="bg-gray-800/40 border-dashed border-gray-700 hover:border-blue-500/40 transition-all p-6 text-center">
              <div className="text-3xl mb-3">🎓 ☕ 💻</div>
              <h3 className="text-xl font-bold text-white mb-2">
                &ldquo;Currently Infiltrating College Labs &amp; Debugging Academic Life&rdquo;
              </h3>
              <p className="text-sm md:text-base text-gray-300 italic max-w-xl mx-auto mb-3">
                &ldquo;Currently busy turning canteen chai into code, surviving 8:30 AM engineering lectures, and debugging semester exams. Full-time Computer Science student by day, nocturnal full-stack hacker by night!&rdquo;
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Status: Available for high-impact internships &amp; freelance projects
              </div>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`mb-8 md:mb-12 flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start relative`}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>

                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors card-hover">
                      <CardContent className="p-4 md:p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                            <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-base md:text-lg">
                              <TextScrambleLoop
                                text={experience.title}
                                className=""
                              />
                            </h3>
                            <p className="text-xs md:text-sm text-gray-400">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-gray-300 mb-4">
                          {experience.description}
                        </p>

                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="border-blue-500/30 text-blue-400 text-xs md:text-sm"
                          >
                            {experience.period}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Achievements Section */}
      {achievements.length > 0 && (
        <div
          id="achievements"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title text-gradient"
          >
            <TextScrambleLoop
              text="Achievements"
              className="text-3xl font-bold"
            />
          </motion.h2>

          <div className="max-w-4xl mx-auto overflow-visible">
            <div className="relative overflow-visible">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`mb-8 md:mb-12 flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start relative group`}
                  onMouseEnter={() => setHoveredAchievement(index)}
                  onMouseLeave={() => setHoveredAchievement(null)}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-gray-900 z-10"></div>

                  <div
                    className={`relative w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 transition-all duration-300 cursor-none hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                      <CardContent className="p-4 md:p-5 flex flex-col">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-2 rounded-full transition-all duration-300 ${
                            hoveredAchievement === index
                              ? "bg-yellow-500/20 text-yellow-400 scale-110 rotate-12"
                              : "bg-gray-700/50 text-gray-400"
                          }`}>
                            {hoveredAchievement === index ? (
                              <Unlock className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
                            ) : (
                              <Lock className="h-4 w-4 md:h-5 md:w-5" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-base md:text-lg">
                              <TextScrambleLoop
                                text={achievement.title}
                                className=""
                              />
                            </h3>
                            <p className="text-xs md:text-sm text-gray-400">
                              {achievement.company}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-gray-300 mb-4">
                          {achievement.description}
                        </p>

                        <div className="flex justify-between items-center flex-wrap gap-2 mt-auto">
                          <Badge
                            variant="outline"
                            className="border-yellow-500/30 text-yellow-400 text-xs md:text-sm"
                          >
                            {achievement.period}
                          </Badge>
                          <span className={`hidden md:inline-flex text-xs transition-colors font-semibold ${
                            hoveredAchievement === index ? "text-yellow-400 " : "text-gray-500"
                          }`}>
                            {hoveredAchievement === index 
                              ? "Aha! You discovered the win! 🎉" 
                              : "🤫 Please don't hover your mouse onto this"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Hover Image Preview on the other side of the card */}
                    <AnimatePresence mode="wait">
                      {hoveredAchievement === index && achievement.image && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className={`z-[100] pointer-events-none w-full h-[220px] relative mt-4 md:mt-0 md:absolute md:w-[370px] md:h-[220px] md:top-[1%] md:transform md:-translate-y-1/2 ${
                            index % 2 === 0
                              ? "md:left-full md:ml-12"
                              : "md:right-full md:mr-12"
                          }`}
                        >
                          <div className="w-full h-full border-2 border-yellow-400 rounded-lg overflow-hidden shadow-2xl bg-gray-900/95 p-3 shadow-yellow-900/30 relative">
                            <motion.div
                              initial={{ filter: "blur(12px) grayscale(100%)", scale: 1.05, opacity: 0.3 }}
                              animate={{ filter: "blur(0px) grayscale(0%)", scale: 1, opacity: 1 }}
                              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                              className="relative w-full h-full"
                            >
                              <Image
                                src={achievement.image}
                                alt={achievement.title}
                                fill
                                className="object-contain rounded-md"
                                loading="eager"
                                quality={90}
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 0 }}
                              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
                              className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none p-4 text-center"
                            >
                              <Lock className="h-6 w-6 text-yellow-500/70 mb-2 animate-pulse" />
                              <p className="text-xs text-yellow-200/80 font-semibold">
                                🤫 Please don't hover your mouse onto this
                              </p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, scale: 0.75 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.35, duration: 0.3, type: "spring", stiffness: 100 }}
                              className="absolute top-2 right-2 bg-yellow-500/90 text-gray-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase"
                            >
                              Unlocked
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certifications Section */}
      <div
        id="certifications"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-title text-3xl md:text-4xl font-bold text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          <TextScrambleLoop text="Certifications" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4"
        >
          <Card className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Dialog key={cert.title}>
                    <DialogTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.05 * index,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.25)",
                        }}
                        className="p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl border border-gray-700/50 hover:border-blue-400/50 transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="bg-blue-500/10 p-2.5 rounded-lg group-hover:bg-blue-500/20 transition-all flex-shrink-0">
                            <Medal className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base text-white group-hover:text-blue-300 transition-colors leading-snug cursor-pointer">
                              {cert.title}
                            </h3>
                            <div className="flex items-center justify-between gap-2 mt-2">
                              <p className="text-xs text-gray-400">
                                {cert.issuer}
                              </p>
                              {cert.period && (
                                <Badge variant="outline" className="text-[11px] text-blue-400 border-blue-500/30">
                                  {cert.period}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="max-w-3xl bg-gray-950/95 border-gray-700 p-6 text-white shadow-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
                          <Medal className="w-5 h-5 text-blue-400" />
                          {cert.title}
                        </DialogTitle>
                        <p className="text-sm text-gray-400">{cert.issuer} • {cert.period}</p>
                      </DialogHeader>
                      {cert.image ? (
                        <div className="relative w-full h-[360px] md:h-[520px] mt-4 rounded-lg overflow-hidden border border-gray-800 bg-black/70">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      ) : (
                        <div className="p-8 mt-4 rounded-lg border border-gray-800 bg-gray-900/60 text-center">
                          <Medal className="w-12 h-12 text-blue-400 mx-auto mb-3 opacity-80" />
                          <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                          <p className="text-sm text-gray-300 mb-2">Issued by <span className="text-blue-400 font-medium">{cert.issuer}</span> ({cert.period})</p>
                          <p className="text-xs text-gray-400">Verified certification credential.</p>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
