# ✨ Praveen Suthar - Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.5_Flash-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A modern, high-performance, interactive personal portfolio website engineered with Next.js App Router, React 19, TypeScript, and Framer Motion. Features an AI-powered interactive chatbot assistant (powered by Google Gemini 2.5 Flash), dynamic 3D cursor effects, responsive project showcase with video/image previews, and an automated contact delivery pipeline.

---

## 🌟 Highlights & Features

- 🤖 **Interactive AI Assistant**: Embedded AI chatbot trained on Praveen's resume, skills, and projects, powered by **Google Gemini 2.5 Flash** with streaming responses and an offline knowledge fallback engine.
- 🎨 **Creative Design & Micro-Interactions**:
  - Custom radial magnetic cursor with dynamic rotating SVG text (`VIEW DETAILS`).
  - Terminal-inspired live code progress bar tracking scroll depth.
  - Text-scramble headline typography loops.
  - Lenis smooth momentum scrolling.
- 💼 **Featured Project Showcase**:
  - High-resolution preview mockups and hover tilt animations.
  - Interactive project detail cards with live demo links and verified GitHub repository badges.
  - Dedicated `/projects` index for browsing complete full-stack work.
- 📬 **Direct Contact & Humorous Notification System**:
  - Automated message forwarding directly to Praveen's inbox.
  - Interactive popup modal displaying witty college developer quotes upon sending.
  - Serverless delivery with optional Gmail SMTP & Prisma ORM database logging.
- ⚡ **SEO & Performance Optimized**:
  - Full OpenGraph, Twitter Cards, Schema.org Person & Website JSON-LD metadata.
  - Automated dynamic `sitemap.xml`, `robots.txt`, and machine-readable `llms.txt`.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling & Animation** | Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Lucide Icons |
| **AI & LLMs** | Google Gemini API (`gemini-2.5-flash`), Streaming HTTP SSE |
| **Backend & APIs** | Next.js API Routes, Serverless Edge Handlers, Nodemailer, Upstash Redis |
| **Database & ORM** | PostgreSQL, Prisma ORM |

---

## 📂 Project Structure

```bash
Portfolio-main/
├── app/
│   ├── api/
│   │   ├── chatbot/route.ts   # Gemini streaming chatbot endpoint + fallback engine
│   │   ├── contact/route.ts   # Form submission & automated email forwarding
│   │   └── profile/route.ts   # Machine-readable profile JSON API
│   ├── llms.txt/route.ts      # LLM-friendly plain text resume & project schema
│   ├── projects/page.tsx      # Complete project catalog screen
│   ├── layout.tsx             # Root layout with SEO JSON-LD & fonts
│   ├── page.tsx               # Main portfolio landing page
│   ├── robots.ts              # Search engine crawling rules
│   └── sitemap.ts             # Dynamic XML sitemap generator
├── components/
│   ├── ui/                    # Reusable primitives (Buttons, Cards, Dialogs, etc.)
│   ├── chatbot.tsx            # Floating conversational AI widget
│   ├── contact-section.tsx    # Contact form with funny quote popups
│   ├── experience-section.tsx # Experience & credentials timeline
│   ├── hero-section.tsx       # Hero banner & intro animation
│   ├── projects-section.tsx   # Homepage featured project carousel
│   └── skills-section.tsx     # Categorized tech stack grid
├── lib/
│   └── portfolio-data.ts      # Single source of truth for projects, skills & bio
├── public/
│   ├── icons/                 # High-resolution tech stack icons
│   └── projects/              # Application preview screenshots
└── .env                       # Environment configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.x or v20.x+)
- **npm** or **pnpm** or **yarn**

### 2. Installation
Clone the repository and install project dependencies:
```bash
git clone https://github.com/Praveen-Suthar-08/Portfolio.git
cd Portfolio/Portfolio-main
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Next.js Public URL
NEXT_PUBLIC_SITE_URL="http://localhost:3005"

# Google Gemini API Key (for Chatbot)
GEMINI_API_KEY="your-gemini-api-key"

# Optional Email Configuration (for contact form SMTP)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-google-app-password"

# Optional PostgreSQL Database (for Prisma contact logging)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/portfolio?schema=public"
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3005](http://localhost:3005) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 👨‍💻 Author

**Praveen Suthar**  
- **Role**: Full Stack Web Developer & Creative Developer  
- **Location**: Bangalore, Karnataka, India  
- **GitHub**: [@Praveen-Suthar-08](https://github.com/Praveen-Suthar-08)  
- **LinkedIn**: [praveen-suthar-554b12333](https://www.linkedin.com/in/praveen-suthar-554b12333)  
- **Email**: [praveensksuthar@gmail.com](mailto:praveensksuthar@gmail.com)  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
