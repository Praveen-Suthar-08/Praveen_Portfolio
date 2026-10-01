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
  1. Artificial Intelligence Primer Certification (Infosys, Issued Sep 2026) [Certificate: /certificates/Artificial Intelligence Primer Certification_page-0001.jpg]
  2. Introduction to Deep Learning (Infosys, Issued Sep 2026) [Certificate: /certificates/Introduction to Deep Learning_page-0001.jpg]
  3. AI Skills Passport (EY, Issued Jul 2026) [Certificate: /certificates/ey-ai-skills-passport.jpg]
  4. Introduction to Prompt Engineering with GitHub Copilot (Microsoft, Issued Nov 2025) [Certificate: /certificates/Microsoft_Intro_to_prompt_engg_w_Github_copilotpdf_page-0001.jpg]
  5. Generative models for developers (Infosys, Issued Sep 2026) [Certificate: /certificates/Generative models for developers_page-0001.jpg]
  6. Deep Learning for Developers (Infosys, Issued Sep 2026) [Certificate: /certificates/Deep Learning for Developers_page-0001.jpg]
  7. Agentic AI Saksham Program (Capabl, 2026)
  8. AWS Solutions Architecture Job Simulation (Forage, 2026) [Certificate: /certificates/aws-solutions-architecture.jpg]
  9. Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Oracle, 2025) [Certificate: /certificates/oracle-ai-foundations.jpg]
  10. Web Development with AI Tools (SkillUp - SimpliLearn, 2025–26) [Certificate: /certificates/Web_dev_with_cgpt_simplilearn_page-0001.jpg]
  11. AI-Driven Coding and Project Management with Git (Parvam, 2026)
  12. AI agent development on Azure (Microsoft, 2025) [Certificate: /certificates/azure-ai-agent.jpg]
  13. Foundation course on Green Skills and Artificial Intelligence (Edunet Foundation, 2025) [Certificate: /certificates/green-skills-ai.jpg]
- Achievements:
  1. Top 12 Finalist – National Level AI Hackathon 2026: Ranked among top 12 teams nationally in a 24-hour hackathon building autonomous, agentic AI solutions.
  2. Gemini Certified Student – University (Google / Google AI): Awarded on 31/01/2026 (valid through 31/01/2029) for demonstrated knowledge and core competencies in Google AI and Gemini models.
  3. Virtual: PromptWars (Hack2skill / H2S): Participated and secured Rank #242 out of 48,682 competitors in AI Code Submission with a 90.15 score.
  4. Highest CGPA in Computer Science Engineering (VTU): Secured 9.5 as the highest CGPA under Visvesvaraya Technological University (VTU) curriculum.
- Core Technical Skills:
  - Languages: JavaScript (ES6+), Python, Java, C, SQL
  - Frontend: React.js (React 19 & 18), Next.js (App Router), Vue.js, Tailwind CSS (v3 & v4), HTML5 & Modern CSS3
  - 3D & Creative Web: Three.js, React Three Fiber, Drei
  - Backend & APIs: Node.js, FastAPI, Django (Python), Hono, RESTful APIs, Socket.io, WebSockets
  - Databases: PostgreSQL, MongoDB, MySQL, Firebase Firestore
  - Cloud & DevOps: AWS, Firebase, Git & GitHub, Docker, Linux & Bash, Vercel, Postman
- Featured Projects:
  1. AI Agriculture Assistant (Krishi Sahayak): Enterprise multimodal AI advisory platform empowering farmers with real-time crop disease diagnosis, Whisper voice input, Orpheus TTS audio output, and Groq prompt prefix caching. (Repo: https://github.com/Praveen-Suthar-08/AI-Agriculture-Assistant.git)
  2. ApexAuto AI Marketplace: Intelligent car marketplace with Google Gemini AI computer vision search, test drive reservation ledger, ArcJet rate limiting, and Clerk RBAC. (Repo: https://github.com/Praveen-Suthar-08/ApexAuto-AI-Intelligent-Car-Marketplace.git)
  3. Cognitive RAG Platform: Next-generation Agentic Retrieval-Augmented Generation platform pairing Google Gemini 3072-dim embeddings with Qdrant Vector Cloud and LangGraph stateful graph reasoning. (Repo: https://github.com/Praveen-Suthar-08/Cognitive-RAG-AI-Blog-Intelligence.git)
  4. CGAN for CIFAR-10: Class-Conditional GAN synthesizing 10 class categories with WGAN-GP objective, FP16 mixed precision, Streamlit Web Studio, and FastAPI serving. (Repo: https://github.com/Praveen-Suthar-08/-CGAN-for-CIFAR-10.git)
  5. ReLoop: AI-Driven Donation and Redistribution Platform (SaaS): AI-powered SaaS platform connecting surplus resources with communities using intelligent resource matching and demand prediction. (Repo: https://github.com/Praveen-Suthar-08/ReLoop---AI-Powered-Circular-Donation-Platform.git)
  6. Amazona E-Commerce Platform: Full-stack MERN e-commerce with category filters, shopping cart, PayPal payments, multi-seller portals, and real-time Socket.io support chat. (Repo: https://github.com/Praveen-Suthar-08/Amazona-ECommerce-Website-Clone-of-Amazon-.git)
  7. Stranger Collaboration Platform: AI-driven engineering workspace & pair programming platform with real-time WebSockets synchronization. (Repo: https://github.com/Praveen-Suthar-08/Stranger_Collaboration_Platform.git)
  8. AI Resume Analyzer: AI SaaS platform for ATS scoring against job descriptions, skill gap diagnostics, and side-by-side version comparison. (Repo: https://github.com/Praveen-Suthar-08/AI-powered-Resume-Analyzer.git)

Instructions:
1. STRICT CONSTRAINT: Answer ONLY the exact question asked. Be direct, concise, and focused. Do NOT include unrequested sections, extra project lists, or unrelated background.
2. If asked about education, college, or CGPA, provide ONLY the educational information.
3. If asked about a specific project, provide ONLY that project's details and link.
4. If asked about contact info, provide ONLY the contact channels.
5. If asked something beyond your knowledge base, state that politely and provide praveensksuthar@gmail.com.
6. Maintain a professional, articulate tone suitable for recruiters and engineering managers.`;

function extractTextFromLyzrResponse(data: any) {
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
  const q = query.toLowerCase().trim();

  const hasWord = (word: string) => new RegExp(`\\b${word}\\b`, "i").test(q);
  const hasAnyWord = (...words: string[]) => words.some((w) => hasWord(w));

  // 0. Portfolio Specific Meta Questions ("when was this portfolio made?", "who built this website?")
  if (
    q.includes("portfolio") ||
    q.includes("website") ||
    q.includes("site")
  ) {
    if (q.includes("when") || q.includes("date") || q.includes("year") || q.includes("created") || q.includes("made") || q.includes("built")) {
      return `🌐 **About This Portfolio**:
- **Built & Published**: Designed and built by Praveen Suthar in **2026**.
- **Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Three.js dynamic graphics, and custom AI Chatbot engine.
- **Source Code**: https://github.com/Praveen-Suthar-08`;
    }
  }

  // 1. CGPA / Marks / Grades specifically
  if ((hasAnyWord("cgpa", "marks", "grades", "score", "percentage") || q.includes("gpa")) && !q.includes("project")) {
    return `📊 **Praveen Suthar's Academic Performance**:
- **Current CGPA**: **8.95 / 10.0** in B.E. Computer Science & Engineering.
- **VTU Milestone**: Achieved a peak **9.5 SGPA** under Visvesvaraya Technological University (VTU).`;
  }

  // 2. Specific College / University Inquiry
  if ((hasAnyWord("college", "university", "vtu", "degree") || q.includes("city engineering")) && !q.includes("school")) {
    return `🏫 **College & Degree**:
- **Degree**: Bachelor of Engineering (B.E.) in Computer Science & Engineering (2023 – Expected 2027)
- **Institution**: City Engineering College, Bangalore (Affiliated with VTU)
- **Academic Record**: **8.95 CGPA** (9.5 SGPA peak under VTU)
- **Core Focus**: Data Structures & Algorithms, DBMS, Computer Networks, Operating Systems, Web Technologies, and Software Engineering.`;
  }

  // 3. School / Pre-University specifically
  if (hasAnyWord("school", "12th", "10th", "puc", "schooling") || q.includes("pu college") || q.includes("narayana")) {
    return `🏫 **Schooling & Pre-University**:
- **Pre-University (11th & 12th)**: Narayana PU College (2021 – 2023, PCMC Stream)
- **Primary & Secondary Schooling**: Narayana Primary & Higher School (Completed 2021)`;
  }

  // 4. General Educational Background
  if (hasAnyWord("education", "educational", "academic", "academics", "qualification", "qualifications", "study", "studied", "background")) {
    return `🎓 **Praveen Suthar's Educational Background**:

1. **Bachelor of Engineering (B.E.) in Computer Science & Engineering**
   - 🏫 **Institution**: City Engineering College, Bangalore (VTU)
   - 📅 **Period**: 2023 – Expected 2027
   - 📊 **Performance**: **8.95 CGPA** (9.5 SGPA peak milestone)
   - 💻 **Core Subjects**: Data Structures & Algorithms, DBMS, Computer Networks, Operating Systems, Web Technologies, Software Engineering.

2. **Pre-University Education (11th & 12th)**
   - 🏫 **Institution**: Narayana PU College (2021 – 2023, PCMC)

3. **Schooling (1st – 10th)**
   - 🏫 **Institution**: Narayana Primary & Higher School (Till 2021)`;
  }

  // 5. Greetings & Persona (Use word boundary to avoid "this", "which", "history" triggering greetings)
  if (hasAnyWord("hi", "hello", "hey", "greetings", "sup") || q === "hi" || q === "hello" || q.includes("who are you") || q.includes("who is praveen")) {
    return "Hello! 👋 I'm Praveen Suthar's AI portfolio assistant. I can answer questions about Praveen's **educational background**, **software projects**, **technical skills**, **certifications**, and **contact details**. What would you like to know?";
  }

  // 6. Specific Projects (Returns ONLY that project)
  if (q.includes("agri") || q.includes("krishi") || q.includes("farmer") || q.includes("crop")) {
    return `🌾 **AI Agriculture Assistant (Krishi Sahayak)**:
- **Multimodal Interaction**: Supports text, Whisper voice input, and Orpheus TTS spoken response playback.
- **Crop Disease Diagnosis**: Leaf disease and pest infestation recognition using Llama-4 Vision multimodal models.
- **Stateful Memory & Token Caching**: Redis memory store with local failover and dynamic prompt prefix caching (50% cost/latency discount on Groq).
- 🔗 **GitHub Repo**: https://github.com/Praveen-Suthar-08/AI-Agriculture-Assistant.git`;
  }

  if (q.includes("apex") || q.includes("car") || q.includes("marketplace") || q.includes("auto")) {
    return `🚗 **ApexAuto AI — Intelligent Car Marketplace**:
- **AI Visual Search**: Upload any car photo for Google Gemini Vision to automatically detect Make, Body Class, and Color.
- **Test Drive Ledger**: Real-time conflict-free reservation management calendar.
- **ArcJet & Clerk**: Cyber attack defense, rate limiting, and role-based access control.
- 🔗 **GitHub Repo**: https://github.com/Praveen-Suthar-08/ApexAuto-AI-Intelligent-Car-Marketplace.git`;
  }

  if (q.includes("rag") || q.includes("blog") || q.includes("qdrant") || q.includes("langgraph") || q.includes("vector")) {
    return `🧠 **Cognitive RAG — AI Blog Intelligence Platform**:
- **LangGraph Stateful Reasoning**: Zero-hallucination agent state machine for multi-turn technical Q&A.
- **DOM Cleansing Engine**: HTML noise stripping and sentence-aware 1200-char boundary splitting with overlap.
- **Qdrant Vector Cloud**: Dedicated vector collection per URL eliminating cross-memory pollution.
- 🔗 **GitHub Repo**: https://github.com/Praveen-Suthar-08/Cognitive-RAG-AI-Blog-Intelligence.git`;
  }

  if (q.includes("cgan") || q.includes("cifar") || q.includes("gan") || q.includes("image synthesis")) {
    return `🎨 **Class-Conditional GAN (CGAN) for CIFAR-10**:
- **WGAN-GP Objective**: Conditional Minimax & Wasserstein GAN with 1-Lipschitz gradient penalty.
- **FP16 Mixed Precision**: $2\\times$ training acceleration on Tensor Core GPUs.
- **Multi-Interface**: Streamlit Web Studio, OpenAPI REST microservices, and TFLite model export.
- 🔗 **GitHub Repo**: https://github.com/Praveen-Suthar-08/-CGAN-for-CIFAR-10.git`;
  }

  if (q.includes("reloop") || q.includes("donation") || q.includes("circular")) {
    return `🔄 **ReLoop: Circular Donation & Redistribution SaaS**:
- **Smart Resource Matching**: ML demand prediction improving distribution efficiency by 35%.
- **Cloud Infrastructure**: Scalable REST APIs with React.js, FastAPI, PostgreSQL, AWS, and Firebase.
- 🔗 **GitHub Repo**: https://github.com/Praveen-Suthar-08/ReLoop---AI-Powered-Circular-Donation-Platform.git`;
  }

  if (q.includes("amazona") || q.includes("amazon") || q.includes("ecommerce") || q.includes("e-commerce")) {
    return `🛒 **Amazona E-Commerce Platform (Amazon Clone)**:
- **Full-Stack MERN**: React, Node.js, Express, MongoDB, and JWT authentication.
- **Shopping & Checkout**: PayPal/Stripe sandbox integration, top-seller carousel, and live ratings.
- **Real-Time Support**: Instant live customer messaging powered by Socket.io.
- 🔗 **GitHub Repo**: https://github.com/Praveen-Suthar-08/Amazona-ECommerce-Website-Clone-of-Amazon-.git`;
  }

  // 7. Projects Overview (Only if general project query)
  if (hasAnyWord("project", "projects", "work", "apps", "applications") || q.includes("what did you build") || q.includes("what have you built")) {
    return `🚀 **Praveen's Key Featured Projects**:
- **AI Agriculture Assistant (Krishi Sahayak)**: Multimodal crop advisory with Llama-4 Vision & Whisper voice.
- **ApexAuto AI Marketplace**: Gemini Vision car photo search & test drive booking calendar.
- **Cognitive RAG Platform**: LangGraph stateful RAG engine with Qdrant Vector Cloud.
- **CGAN for CIFAR-10**: Class-conditional GAN image synthesis with WGAN-GP.
- **ReLoop**: AI-driven circular resource donation SaaS platform.
- **Amazona E-Commerce**: Full-stack MERN Amazon clone with PayPal & Socket.io chat.

💡 Visit **/projects** to explore live demos and source code!`;
  }

  // 8. Technical Skills
  if (hasAnyWord("skill", "skills", "tech", "stack", "language", "languages", "framework", "frameworks", "tools")) {
    return `⚡ **Praveen Suthar's Technical Stack**:
- **Languages**: JavaScript (ES6+), Python, Java, C, SQL
- **Frontend**: React.js, Next.js, Vue.js, Tailwind CSS, HTML5/CSS3
- **3D & Creative**: Three.js, React Three Fiber, Drei
- **Backend & DB**: Node.js, FastAPI, Django, Hono, WebSockets, PostgreSQL, MongoDB, MySQL
- **Cloud & DevOps**: AWS, Docker, Git/GitHub, Linux, Vercel`;
  }

  // 9. Certifications & Achievements
  if (hasAnyWord("certification", "certifications", "certificate", "certificates", "achievement", "achievements", "award", "awards", "hackathon", "honor", "honors")) {
    return `🏆 **Highlights & Certifications**:
- 🥇 **Top 12 Finalist** – National Level AI Hackathon (2026)
- 📜 **Artificial Intelligence Primer Certification** – Infosys (2026)
- 📜 **Introduction to Deep Learning** – Infosys (2026)
- 📜 **AI Skills Passport** – EY (2026)
- 📜 **Generative models for developers** – Infosys (2026)
- 📜 **Deep Learning for Developers** – Infosys (2026)
- 📜 **Introduction to Prompt Engineering with GitHub Copilot** – Microsoft (2025)
- 🎖️ **Gemini Certified Student** – Google AI`;
  }

  // 10. Contact Details
  if (hasAnyWord("contact", "email", "reach", "hire", "linkedin", "github", "phone", "location")) {
    return `📫 **Contact Information**:
- ✉️ **Email**: praveensksuthar@gmail.com
- 💼 **LinkedIn**: https://www.linkedin.com/in/praveen-suthar-554b12333
- 🐙 **GitHub**: https://github.com/Praveen-Suthar-08
- 📍 **Location**: Bangalore, Karnataka, India`;
  }

  // 11. Experience & Availability
  if (hasAnyWord("experience", "job", "available", "availability", "internship", "role")) {
    return `💻 **Current Status & Experience**:
Praveen is a B.E. Computer Science student at City Engineering College, Bangalore, actively building AI SaaS platforms and web applications.
🟢 **Availability**: Available for software engineering internships, freelance projects, and AI development roles! Email: praveensksuthar@gmail.com`;
  }

  // Direct accurate fallback when query doesn't match any specific predefined pattern
  return `I don't have specific details on "${query}", but Praveen Suthar is a Full-Stack Web & Creative Developer (B.E. Computer Science, CGPA: 8.95). You can ask me about his **education**, **projects**, **technical skills**, **certifications**, or **contact info**!`;
}

let ratelimit: Ratelimit | null = null;

function getRateLimiter() {
  if (ratelimit) return ratelimit;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
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

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
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

    let message = "";
    let history: any[] = [];
    try {
      const body = await req.json();
      message = body?.message || "";
      history = body?.history || [];
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

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

      try {
        const res = await fetchWithTimeout(
          "https://agent-prod.studio.lyzr.ai/v3/inference/chat/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": LYZR_KEY,
            },
            body: JSON.stringify(payload),
          },
          1500
        );

        if (res.ok) {
          const data = await res.json();
          const assistant = extractTextFromLyzrResponse(data) || "";
          return createSimulatedStreamResponse(assistant);
        }
      } catch {
        console.warn("LYZR upstream timeout/error, falling back to local engine");
      }
    }

    // Support Google Gemini API if GEMINI_API_KEY is provided
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    if (GEMINI_KEY) {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?key=${GEMINI_KEY}&alt=sse`;

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

        const geminiRes = await fetchWithTimeout(
          geminiUrl,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(geminiPayload),
          },
          1500
        );

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
        }
      } catch {
        console.warn("Gemini API timeout/error, falling back to local engine");
      }
    }

    // Default fast local knowledge engine fallback
    const fallbackReply = generateFallbackResponse(message);
    return createSimulatedStreamResponse(fallbackReply);
  } catch (err: any) {
    console.error("Chatbot POST Error:", err);
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}
