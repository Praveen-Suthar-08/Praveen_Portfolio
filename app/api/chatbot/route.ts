import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const SYSTEM_PROMPT = `You are an AI assistant representing Praveen Suthar, an accomplished Full Stack Web Developer and Creative Developer based in Bangalore, India.

Knowledge Base:
- Full Name: Praveen Suthar
- Role: Full Stack Web Developer / Creative Developer
- Location: Bangalore, Karnataka, India
- Email: praveensksuthar@gmail.com
- GitHub: https://github.com/Praveen-Suthar-08
- LinkedIn: https://www.linkedin.com/in/praveen-suthar-554b12333
- Education:
  1. Bachelor of Engineering (B.E.) in Computer Science and Engineering from City Engineering College, Bangalore (2023 - Expected 2027), CGPA: 8.95 / 10. Core Focus: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Web Technologies, Software Engineering.
  2. Pre-University Education (11th & 12th) from Narayana PU College (2021 - 2023). Comprehensive study in Physics, Chemistry, Mathematics, and Computer Science.
  3. Primary & Secondary Schooling (Nursery and 1st - 10th) from Narayana Primary & Higher School (Till 2021).
- Summary: I’m a Computer Science Engineering student and Full Stack Developer passionate about building scalable, intelligent, and user-focused web applications. I work with technologies like MERN, Django, React, Next.js, PostgreSQL, and MongoDB, while exploring AI and Generative AI to create smarter software solutions. I enjoy turning ideas into real-world products—from AI-powered platforms and real-time collaboration systems to scalable marketplace applications. I focus on writing clean, efficient code, building reliable APIs, and creating seamless user experiences. I’m always learning, experimenting with new technologies, and looking for opportunities to build innovative products that solve meaningful problems.
- Certifications & Honors:
  1. Agentic AI Saksham Program (Capabl, 2026)
  2. AWS Solutions Architecture Job Simulation (Forage, 2026) [Certificate: /certificates/aws-solutions-architecture.jpg]
  3. Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Oracle, 2025) [Certificate: /certificates/oracle-ai-foundations.jpg]
  4. Web Development with AI Tools (Edunet Foundation, 2025–26) [Certificate: /certificates/Web_dev_with_cgpt_simplilearn_page-0001.jpg]
  5. AI Skills Passport (EY and Microsoft, 2026) [Certificate: /certificates/ey-ai-skills-passport.jpg]
  6. Introduction to Prompt Engineering with GitHub Copilot (Microsoft, 2025) [Certificate: /certificates/Microsoft_Intro_to_prompt_engg_w_Github_copilotpdf_page-0001.jpg]
  7. AI-Driven Coding and Project Management with Git (Parvam, 2026)
  8. AI agent development on Azure (Microsoft, 2025) [Certificate: /certificates/azure-ai-agent.jpg]
  9. Foundation course on Green Skills and Artificial Intelligence (Edunet Foundation, 2025) [Certificate: /certificates/green-skills-ai.jpg]
- Achievements:
  1. Gemini Certified Student – University (Google / Google AI): Awarded on 31/01/2026 (valid through 31/01/2029) for demonstrated knowledge and core competencies in Google AI and Gemini models.
  2. Virtual: PromptWars (Hack2skill / H2S): Participated and secured Rank #242 out of 48,682 competitors in AI Code Submission with a 90.15 score.
  3. Highest CGPA in Computer Science Engineering (VTU): Secured 9.5 as the highest CGPA under Visvesvaraya Technological University (VTU) curriculum.
- Core Technical Skills:
  - Languages: JavaScript (ES6+), Python, Java, C, SQL
  - Frontend: React.js (React 19 & 18), Next.js (App Router), Vue.js, Tailwind CSS (v3 & v4), HTML5 & Modern CSS3
  - 3D & Creative Web: Three.js, React Three Fiber, Drei
  - Backend & APIs: Node.js, FastAPI, Django (Python), Hono, RESTful APIs, Socket.io, WebSockets
  - Databases: PostgreSQL, MongoDB, MySQL, Firebase Firestore
  - Cloud & DevOps: AWS, Firebase, Git & GitHub, Docker, Linux & Bash, Vercel, Postman
- Featured Projects:
  1. ReLoop: AI-Driven Donation and Redistribution Platform (SaaS) [2026 (Working)]: AI-powered SaaS platform using React.js, FastAPI, PostgreSQL to connect surplus resources with individuals and communities in need. Implemented intelligent resource matching and demand prediction using Scikit-learn and Pandas, improving distribution efficiency by 35% and reducing resource wastage. Scalable backend APIs, responsive UI, secure auth with AWS and Firebase cloud deployment. (Repo: https://github.com/Praveen-Suthar-08/ReLoop)
  2. Stranger Collaboration: AI-Driven Workspace & Pair Programming: AI-driven engineering workspace & pair programming platform with real-time WebSockets synchronization, intelligent talent matching, GitHub activity feeds, and 2FA authentication (React, Vite, Node.js, MongoDB, Socket.io, Tailwind v4). (Repo: https://github.com/Praveen-Suthar-08/Stranger_Collaboration_Platform.git)
  3. ErrandX MarketPlace: Campus Microtask & Service Platform: Campus microtask and service marketplace with student domain authentication, task lifecycle bidding, and urgency/bounty filtering (React, Node.js, MongoDB, REST APIs, JWT). (Repo: https://github.com/Praveen-Suthar-08/ErrandX_market_place.git)
  4. AI Resume Analyzer: ATS Scoring & Career Optimization SaaS: AI SaaS platform for ATS scoring against job descriptions, skill gap diagnostics, side-by-side version comparison, and interactive AI career coaching (Next.js, Tailwind, OpenAI GPT, PostgreSQL). (Repo: https://github.com/Praveen-Suthar-08/AI-Resume-Analyzer)
  5. AI Customer Support Agent (LangGraph & LangChain): Autonomous, multi-turn customer support system built with LangGraph, LangChain, and Python featuring dynamic tool calling for order tracking, refund processing, and human escalation workflows. (Repo: https://github.com/Praveen-Suthar-08/Ai_Agent_customer_support_agent_langgraph)
  6. Smart Parking Slot Manager (PSM): Enterprise-grade parking management system built with Flask and Vanilla JS (Chart.js & Tailwind CSS) running decoupled microservice portals for real-time slot management, digital QR check-in/out, offline cash drawer reconciliation, and dynamic occupancy price surging. (Repo: https://github.com/Praveen-Suthar-08/Parking_Slot_Manager.git)
  7. Hospital Management System (Web-Based System): Role-based healthcare web application for managing patients, doctors, and appointments with secure access control, real-time scheduling, and automated billing workflows improving operational efficiency by 25% (React, Node.js, MongoDB, Tailwind).
  8. Employee Management System (Web Application): CRUD-based web system with modular architecture and optimized database design, implementing secure authentication and reducing manual management effort by 40% (React, Node.js, MongoDB, JWT).

Instructions:
1. Respond courteously, accurately, and enthusiastically about Praveen Suthar's achievements, skills, and portfolio projects.
2. If asked something beyond your knowledge base, politely state that you do not have that specific information and suggest contacting Praveen at praveensksuthar@gmail.com.
3. Maintain a professional, articulate tone suitable for recruiters, engineering managers, and collaborators.`;

function extractTextFromLyzrResponse(data: any) {
  // The Lyzr agent response shape may vary; try common locations
  if (!data) return null;
  if (typeof data === "string") return data;
  if (data.reply) return data.reply;
  if (data.response) return data.response;
  if (data.output_text) return data.output_text;
  if (data.outputs && Array.isArray(data.outputs) && data.outputs.length) {
    try {
      const out = data.outputs[0];
      if (out && out.content && out.content[0] && out.content[0].text)
        return out.content[0].text;
    } catch (e) {
      /* ignore */
    }
  }
  return JSON.stringify(data);
}

function createSimulatedStreamResponse(text: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        const word = words[i] + (i === words.length - 1 ? "" : " ");
        controller.enqueue(encoder.encode(word));
        await new Promise((resolve) => setTimeout(resolve, 5));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}

function generateFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("who are you")) {
    return "Hello! I'm Praveen Suthar's AI portfolio assistant. I can tell you about Praveen's software projects (like ReLoop, Amazona E-Commerce, MediSuite AI Agent), technical skills, education, certifications, and contact details. What would you like to know?";
  }

  if (q.includes("project") || q.includes("build") || q.includes("built") || q.includes("work")) {
    return `Here are some of Praveen's key projects:
- **ReLoop**: AI-Driven Donation & Redistribution Platform connecting surplus resources with communities using smart matching and demand forecasting.
- **Amazona E-Commerce**: Full-stack Amazon clone (MERN) with category filters, shopping cart, PayPal payments, multi-seller portals, and real-time Socket.io support chat.
- **Stranger Collaboration**: Real-time collaborative workspace and pair programming platform with WebSocket code synchronization.
- **AI Resume Analyzer**: AI SaaS for ATS resume scoring, career gap diagnostics, and interactive coaching.
- **MediSuite AI Agent**: Autonomous medical coding (ICD-10 & CPT-4) and automated insurance claim generation using LLMs and OCR.
- **Parking Slot Manager (PSM)**: Smart parking manager with decoupled microservices, QR ticket check-ins, and dynamic surge pricing.

You can also browse all of them in detail on the /projects page!`;
  }

  if (q.includes("amazona") || q.includes("amazon") || q.includes("ecommerce") || q.includes("e-commerce")) {
    return `**Amazona E-Commerce Platform (Amazon Clone)** is a modern full-stack MERN web application featuring:
- Interactive product catalog, top-seller carousel, and live ratings.
- Real-time shopping cart and subtotal calculator.
- Multi-step checkout wizard with PayPal/Stripe sandbox integration.
- Real-time customer support chat powered by Socket.io.
- Multi-seller marketplace management and admin sales analytics dashboards.
GitHub: https://github.com/Praveen-Suthar-08/Amazona-ECommerce-Website-Clone-of-Amazon-.git`;
  }

  if (q.includes("medisuite") || q.includes("medical") || q.includes("claim") || q.includes("icd")) {
    return `**MediSuite AI Agent** is an intelligent medical coding and autonomous claim generation system:
- Automates patient intake and clinical documentation analysis.
- Maps medical procedures & diagnoses to standardized ICD-10 and CPT-4 codes using a hybrid matching engine (Levenshtein + LLM validation).
- Generates polished CMS-1500 style insurance claim PDFs with ReportLab.
- Dual desktop GUI (Tkinter) and terminal CLI interface with pluggable OpenAI and Mistral AI models.
GitHub: https://github.com/Praveen-Suthar-08/MediSuite-AI_Agent.git`;
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language")) {
    return `Praveen is skilled across the full stack:
- **Languages**: JavaScript (ES6+), Python, Java, C, SQL
- **Frontend**: React (React 19 & 18), Next.js (App Router), Tailwind CSS (v3 & v4), HTML5/CSS3
- **Creative Web**: Three.js, React Three Fiber, Drei
- **Backend**: Node.js, FastAPI, Django, Hono, WebSockets, Socket.io
- **Databases**: PostgreSQL, MongoDB, MySQL, Firebase Firestore
- **Cloud & Tools**: AWS, Docker, Git/GitHub, Linux, Vercel, Postman`;
  }

  if (q.includes("education") || q.includes("college") || q.includes("cgpa") || q.includes("degree")) {
    return `Praveen is pursuing a **Bachelor of Engineering (B.E.) in Computer Science and Engineering** at City Engineering College, Bangalore (2023 - Expected 2027) with a stellar **CGPA of 8.95 / 10.0** (achieving a 9.5 VTU milestone). Prior to engineering, he completed Pre-University education at Narayana PU College.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("message")) {
    return `You can get in touch with Praveen directly:
- **Email**: praveensksuthar@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/praveen-suthar-554b12333
- **GitHub**: https://github.com/Praveen-Suthar-08
- Or use the "Say Hi, Don't Be Shy" contact form right on this page!`;
  }

  if (q.includes("certif") || q.includes("achievement") || q.includes("award")) {
    return `Praveen has earned prominent credentials and honors including:
- **Gemini Certified Student** – Google AI
- **Agentic AI Saksham Program** – Capabl (2026)
- **AWS Solutions Architecture Job Simulation** – Forage (2026)
- **Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate**
- **Rank #242 out of 48,682 competitors** in Virtual: PromptWars (Hack2skill)
- **Introduction to Prompt Engineering with GitHub Copilot** – Microsoft`;
  }

  return `Praveen Suthar is a Full Stack and Creative Developer from Bangalore, India, experienced in MERN, Next.js, Python, AI agents, and real-time platforms. Feel free to ask about his projects (ReLoop, Amazona, MediSuite), skills, education, or reach out at praveensksuthar@gmail.com!`;
}

let ratelimit: Ratelimit | null = null;

function getRateLimiter() {
  if (ratelimit) return ratelimit;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.warn("⚠️ Upstash Redis env vars missing. Chatbot rate limiting is disabled.");
    return null;
  }

  const redis = new Redis({ url, token });
  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(
      Number(process.env.CHATBOT_RATE_LIMIT_REQUESTS || 10),
      (process.env.CHATBOT_RATE_LIMIT_DURATION || "60 s") as any
    ),
    analytics: true,
    prefix: "@upstash/ratelimit/chatbot",
  });

  return ratelimit;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const limiter = getRateLimiter();

    if (limiter) {
      const { success, limit, reset, remaining } = await limiter.limit(ip);

      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          {
            status: 429,
            headers: {
              "X-RateLimit-Limit": limit.toString(),
              "X-RateLimit-Remaining": remaining.toString(),
              "X-RateLimit-Reset": reset.toString(),
            },
          }
        );
      }
    }

    const body = await req.json();
    const { message, history } = body || {};

    if (!message) {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    // Prefer LYZR agent if API key is provided via env
    const LYZR_KEY = process.env.LYZR_API_KEY || process.env.LYZR_AGENT_API_KEY;
    if (LYZR_KEY) {
      const agent_id = process.env.LYZR_AGENT_ID || "6910378800314db53fb681cb";
      const user_id = process.env.LYZR_USER_ID || "anonymous@local";
      const session_id =
        process.env.LYZR_SESSION_ID || `${agent_id}-${Date.now()}`;

      const payload = {
        user_id,
        agent_id,
        session_id,
        message,
      };

      const res = await fetch(
        "https://agent-prod.studio.lyzr.ai/v3/inference/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": LYZR_KEY,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        console.warn("LYZR upstream error, falling back to local engine");
        const fallbackReply = generateFallbackResponse(message);
        return createSimulatedStreamResponse(fallbackReply);
      }

      const data = await res.json();
      const assistant = extractTextFromLyzrResponse(data) || "";

      // Stream the static response back chunk by chunk to simulate streaming
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          // Send words with small delays to mimic streaming
          const words = assistant.split(" ");
          for (let i = 0; i < words.length; i++) {
            const word = words[i] + (i === words.length - 1 ? "" : " ");
            controller.enqueue(encoder.encode(word));
            await new Promise((resolve) => setTimeout(resolve, 5));
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive",
        },
      });
    }

    // Support Google Gemini API if GEMINI_API_KEY is provided
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    if (GEMINI_KEY) {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=${GEMINI_KEY}&alt=sse`;

        // Format history into Gemini format
        const contents: any[] = [];
        if (Array.isArray(history)) {
          for (const item of history) {
            contents.push({
              role: item.from === "user" ? "user" : "model",
              parts: [{ text: item.text }],
            });
          }
        }
        contents.push({
          role: "user",
          parts: [{ text: message }],
        });

        const geminiPayload = {
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        };

        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(geminiPayload),
        });

        if (geminiRes.ok && geminiRes.body) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          const stream = new ReadableStream({
            async start(controller) {
              const reader = geminiRes.body?.getReader();
              if (!reader) {
                controller.close();
                return;
              }

              let buffer = "";
              try {
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;

                  buffer += decoder.decode(value, { stream: true });
                  const lines = buffer.split("\n");
                  buffer = lines.pop() || "";

                  for (const line of lines) {
                    const cleanLine = line.trim();
                    if (!cleanLine || !cleanLine.startsWith("data: ")) continue;

                    try {
                      const jsonStr = cleanLine.substring(6);
                      const parsed = JSON.parse(jsonStr);
                      const text =
                        parsed.candidates?.[0]?.content?.parts?.[0]?.text || "";
                      if (text) {
                        controller.enqueue(encoder.encode(text));
                      }
                    } catch {
                      // ignore parse errors for chunks
                    }
                  }
                }
              } catch (streamErr) {
                controller.error(streamErr);
              } finally {
                controller.close();
              }
            },
          });

          return new Response(stream, {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "no-cache, no-transform",
              Connection: "keep-alive",
            },
          });
        } else {
          console.warn("Gemini API non-200, falling back to local engine");
        }
      } catch (geminiErr) {
        console.warn("Gemini API request failed:", geminiErr);
      }
    }

    // Fallback to OpenAI Chat Completions if configured
    const OPENAI_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_KEY) {
      const fallbackReply = generateFallbackResponse(message);
      return createSimulatedStreamResponse(fallbackReply);
    }

    // Build messages array: system, previous conversation, new user message
    const messages: Array<{ role: string; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.from === "user")
          messages.push({ role: "user", content: item.text });
        else messages.push({ role: "assistant", content: item.text });
      }
    }

    messages.push({ role: "user", content: message });

    const payload = {
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages,
      temperature: Number(process.env.OPENAI_TEMPERATURE || 0.7),
      top_p: Number(process.env.OPENAI_TOP_P || 0.9),
      max_tokens: 800,
      stream: true,
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.warn("OpenAI upstream error, falling back to local engine");
      const fallbackReply = generateFallbackResponse(message);
      return createSimulatedStreamResponse(fallbackReply);
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = res.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            // Keep the last partial line in the buffer
            buffer = lines.pop() || "";

            for (const line of lines) {
              const cleanLine = line.trim();
              if (!cleanLine) continue;
              if (cleanLine === "data: [DONE]") continue;

              if (cleanLine.startsWith("data: ")) {
                try {
                  const jsonStr = cleanLine.substring(6);
                  const parsed = JSON.parse(jsonStr);
                  const content = parsed.choices?.[0]?.delta?.content || "";
                  if (content) {
                    controller.enqueue(encoder.encode(content));
                  }
                } catch (e) {
                  // Ignore parse errors for malformed lines
                }
              }
            }
          }
          // Process any remaining buffer
          if (buffer && buffer.startsWith("data: ")) {
            try {
              const jsonStr = buffer.substring(6).trim();
              if (jsonStr !== "[DONE]") {
                const parsed = JSON.parse(jsonStr);
                const content = parsed.choices?.[0]?.delta?.content || "";
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              }
            } catch (e) {
              // Ignore
            }
          }
        } catch (error) {
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || String(err) },
      { status: 500 }
    );
  }
}
