"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, GraduationCap, Server } from "lucide-react";
import TextScrambleLoop from "./ui/text-scramble-effect";
import { portfolioProfile } from "@/lib/portfolio-data";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const educationData = portfolioProfile.education;

  return (
    <section id="about" className="relative py-20 bg-gray-950">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text="My Professional Side" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-full">
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg h-full">
                <div className="absolute inset-0 bg-dots opacity-30 rounded-lg"></div>
                <div className="relative">
                  <div className="text-md mb-6 leading-relaxed text-gray-200 space-y-4">
                    <p>
                      I’m a Computer Science Engineering student and Full Stack Developer passionate about building scalable, intelligent, and user-focused web applications. I work with technologies like <span className="text-blue-400 font-semibold">MERN</span>, <span className="text-blue-400 font-semibold">Django</span>, <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-blue-400 font-semibold">PostgreSQL</span>, and <span className="text-blue-400 font-semibold">MongoDB</span>, while exploring <span className="text-white font-medium">AI and Generative AI</span> to create smarter software solutions.
                    </p>
                    <p>
                      I enjoy turning ideas into real-world products—from AI-powered platforms and real-time collaboration systems to scalable marketplace applications. I focus on writing clean, efficient code, building reliable APIs, and creating seamless user experiences.
                    </p>
                    <p>
                      I’m always learning, experimenting with new technologies, and looking for opportunities to build innovative products that solve meaningful problems.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-gray-400 text-sm">
                          praveensksuthar@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Location</h3>
                        <p className="text-gray-400 text-sm">
                          Bangalore, Karnataka, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Education</h3>
                        <p className="text-gray-400 text-sm">
                          B.E. in Computer Science & Engineering (CGPA 8.95)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Core Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Full-Stack Web Development",
                        "MERN Stack",
                        "Django (Python)",
                        "Three.js & 3D Web",
                        "AI-Driven Solutions",
                        "RESTful APIs",
                        "React 19",
                        "PostgreSQL & MongoDB",
                        "Docker & Cloudflare",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="section-subtitle">Education</h3>

              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors">
                      <CardContent className="p-5">
                        <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                        <p className="text-blue-400 mb-2 font-medium">{edu.institution}</p>
                        <div className="flex justify-between text-sm text-gray-300 font-semibold mb-3">
                          <span>{edu.period}</span>
                          <span className="text-emerald-400">{edu.grade}</span>
                        </div>
                        {edu.details && (
                          <p className="text-xs text-gray-400 border-t border-gray-700/60 pt-2 leading-relaxed">
                            {edu.details}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

