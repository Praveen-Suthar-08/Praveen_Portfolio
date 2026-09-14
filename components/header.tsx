"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoreVertical, Home, User, Code, Briefcase, Mail, FolderGit2, FileText } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { markInternalNavigationToHome } from "@/hooks/use-intro-animation";
import ResumeModal from "@/components/resume-modal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: "intro", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      markInternalNavigationToHome();
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 opacity-100 ${
        isScrolled
          ? "bg-gray-950/70 backdrop-blur-[20px] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative">
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400/80 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
          onClick={() => scrollToSection("intro")}
        >
          <img src="/logo.jpg" alt="PS Logo" className="h-10 w-10 object-cover" />
        </motion.button>

        <div className="flex items-center gap-3 md:gap-4" ref={dropdownRef}>
          <div className="relative">
            {/* Three-dot menu button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`rounded-full h-10 w-10 transition-all duration-300 border ${
                  isMenuOpen
                    ? "bg-blue-500/10 border-blue-400/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-gray-900/40 border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/60 hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                }`}
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-14 w-56 p-2 rounded-2xl bg-gray-950/80 backdrop-blur-[25px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-cyan-900/10 z-50 flex flex-col gap-1 overflow-hidden"
                >
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-blue-500/15 hover:text-cyan-400 hover:shadow-[inset_0_0_12px_rgba(34,211,238,0.1)] group"
                    >
                      <span className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Resume Button inside dropdown */}
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <ResumeModal className="w-full justify-start rounded-xl py-2.5 px-4 text-sm bg-transparent hover:bg-blue-500/15 text-gray-300 hover:text-cyan-400 border-none shadow-none font-medium h-auto flex items-center gap-3" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
