"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  LinkedinIcon,
  Github,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import TextScrambleLoop from "./ui/text-scramble-effect";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const defaultHeading = "Say Hi, Don't Be Shy";
  const [headingText, setHeadingText] = useState(defaultHeading);
  const { toast } = useToast();

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("contactFormDraft");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {}
    }
  }, []);

  // Save to localStorage when formData changes
  useEffect(() => {
    localStorage.setItem("contactFormDraft", JSON.stringify(formData));
  }, [formData]);

  const funnyQuotes = [
    "🚀 Message beamed into Praveen's dimension! If he doesn't reply within 24h, he is probably wrestling with a semicolon, surviving an 8:30 AM lecture, or drinking chai.",
    "📡 Teleportation successful! Your message has officially bypassed campus Wi-Fi and landed in Praveen's inbox.",
    "☕ Message dispatched! Praveen will read it as soon as his code compiles and his coffee kicks in.",
    "🎓 Alert received! Currently debugging assignments, but your message just jumped to the top of his priority queue!",
    "⚡ High-priority ping received! If it's about a job or project, Praveen is already grinning and opening VS Code.",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (botcheck) {
      // Honeypot triggered, silently pretend it succeeded to trick the bot
      toast({
        title: "Message Delivered! 📬",
        description: "Your message has been sent directly to Praveen's inbox.",
        variant: "default",
        duration: 5000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      localStorage.removeItem("contactFormDraft");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Send directly to Web3Forms from the user's browser (bypasses Cloudflare Server IP Blocking)
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "955c5b29-bee5-4171-a3cf-6f68ee94776a",
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          message: `You received a new message from your portfolio contact form:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
        }),
      });

      // 2. Send to our own API in the background (for database backup, rate limiting, etc)
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Local DB backup failed:", e));

      // We only care if Web3Forms succeeded
      let data = {};
      try {
        data = await web3Response.json();
      } catch (e) {
        // Fallback if response isn't JSON
      }

      if (web3Response.ok) {
        const picked = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
        setRandomQuote(picked);
        setShowSuccessDialog(true);

        toast({
          title: "Message Delivered! 📬",
          description: "Your message has been sent directly to Praveen's inbox.",
          variant: "default",
          duration: 5000,
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        localStorage.removeItem("contactFormDraft");
      } else {
        // Handle server-side errors
        toast({
          title: "Error",
          description:
            (data as any).error || (data as any).message || "Failed to send message. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description:
          "Network error. Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "praveensksuthar@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=praveensksuthar@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bangalore, Karnataka, India",
      link: "https://www.google.com/maps?q=Bangalore,+India",
    },
  ];

  return (
    <section id="contact" className="relative py-0 bg-gray-950">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text={headingText} />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors card-hover">
                  <CardContent className="p-4 flex items-center">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <h3 className="font-bold text-xl mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Praveen-Suthar-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHeadingText("Check out my Repos!")}
                  onMouseLeave={() => setHeadingText(defaultHeading)}
                  className="w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors flex items-center justify-center"
                >
                  <Github className="h-5 w-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/praveen-suthar-554b12333"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHeadingText("Let's connect!")}
                  onMouseLeave={() => setHeadingText(defaultHeading)}
                  className="w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors flex items-center justify-center"
                >
                  <LinkedinIcon className="h-5 w-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=praveensksuthar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHeadingText("Drop me an Email!")}
                  onMouseLeave={() => setHeadingText(defaultHeading)}
                  className="w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field to catch bots */}
                  <input 
                    type="checkbox" 
                    name="botcheck" 
                    className="hidden" 
                    style={{ display: "none" }} 
                    checked={botcheck} 
                    onChange={(e) => setBotcheck(e.target.checked)} 
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Collaboration"
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Funny Success Quote Modal */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-gray-900 border border-gray-700 max-w-md w-[92vw] rounded-2xl p-6 text-center text-white shadow-2xl shadow-blue-500/10">
          <DialogHeader className="flex flex-col items-center justify-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2 justify-center text-white">
              <span>Message In Orbit!</span>
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: "3s" }} />
            </DialogTitle>
          </DialogHeader>

          <div className="my-4 p-4 rounded-xl bg-gray-800/60 border border-gray-700/80">
            <p className="text-base md:text-lg text-gray-200 italic leading-relaxed font-medium">
              &ldquo;{randomQuote}&rdquo;
            </p>
          </div>

          <p className="text-xs text-gray-400">
            Praveen's inbox has received your message and will get back to you shortly!
          </p>

          <DialogFooter className="mt-4 sm:justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
              onClick={() => setShowSuccessDialog(false)}
            >
              Awesome, Got It! 😎
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
