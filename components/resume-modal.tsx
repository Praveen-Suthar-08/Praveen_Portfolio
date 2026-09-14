"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Loader2 } from "lucide-react";

interface ResumeModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

export default function ResumeModal({ trigger, className }: ResumeModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const resumePath = "/resume/Praveen_Suthar_Resume.pdf";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button
            variant="outline"
            className={`border-blue-500/40 text-blue-400 hover:bg-blue-500/10 flex items-center gap-2 ${className || ""}`}
          >
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-4xl w-[94vw] h-[88vh] flex flex-col bg-gray-950 border border-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl">
        <DialogHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-gray-800 sm:pr-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-lg sm:text-xl font-bold text-white">
                Praveen Suthar — Resume
              </DialogTitle>
              <p className="text-xs text-gray-400">
                Full Stack Web Developer &amp; Creative Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-gray-700 hover:bg-gray-800 text-gray-300 flex items-center gap-1.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">New Tab</span>
              </Button>
            </a>
            <a href={resumePath} download="Praveen_Suthar_Resume.pdf">
              <Button
                size="sm"
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-lg shadow-blue-500/20"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </Button>
            </a>
          </div>
        </DialogHeader>

        <div className="flex-1 w-full h-full relative mt-3 rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-950/90 z-10 space-y-3">
              <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
              <p className="text-xs text-gray-400">Loading resume preview...</p>
            </div>
          )}

          <iframe
            src={`${resumePath}#toolbar=0`}
            className="w-full h-full rounded-xl border-0"
            title="Praveen Suthar Resume"
            onLoad={() => setLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
