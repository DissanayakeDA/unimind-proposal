# Presentation: UniMind - AI Powered Real-Time Academic Community Platform

## Slide 1: Title Slide
**Title:** UniMind – AI Powered Real-Time Academic Community Platform
**Subtitle:** Bridging the gap between Singlish and Sinhala in academic communication.
**University:** Sri Lanka Institute of Information Technology
**Module:** IT Project Management – IT3040
**Year:** 2025 / 2026

**Supervisor:** Prof. Dilshan De Silva

**Team Members:**
- Dissanayake D A (IT23306622) - Community Feed & Discussions
- Thashmila P H J (IT23315600) - Notes & AI Learning Assistant
- G A M T N Bandara (IT23307612) - Real-Time Communication
- K M D K Karunarathne (IT23313620) - User Management & AI Conversion

---

## Slide 2: Introduction & Problem Statement
**The Problem:**
- Sri Lankan university students frequently use **Singlish** (a mix of Sinhala and English) for academic communication.
- Current platforms do not support or understand this linguistic style.
- This leads to **confusion, knowledge loss**, and exclusion of Sinhala-only readers.

**Our Motivation:**
- Leverage **Google Gemini LLM** to bridge this communication gap.
- allow students to write naturally in Singlish while the platform provides **real-time, accurate Sinhala conversions**.
- Preserve academic intent and cultural nuance while democratizing knowledge sharing.

---

## Slide 3: Project Objectives
1.  **AI-Powered Academic Community:** A modular platform for questions, insights, and discussions.
2.  **Singlish to Sinhala Conversion:** Real-time, context-aware translation using Google Gemini API.
3.  **Real-Time Student Collaboration:** Instant private and group messaging via WebSockets.
4.  **Enhanced Knowledge Sharing:** AI-powered note summarization and quiz generation.

---

## Slide 4: System Overview - Core Modules
The platform consists of six key modules:

1.  **User Management:** Secure authentication (JWT), profiles, and role-based access.
2.  **Community Posts:** Reddit-style feed with threaded comments and voting.
3.  **Private Chat:** 1-on-1 messaging with read receipts and editing.
4.  **Study Groups:** Real-time group chat rooms and resource sharing.
5.  **Notes & AI:** Upload notes for auto-summaries and quizzes.
6.  **Singlish → Sinhala Engine:** AI conversion with side-by-side preview.

---

## Slide 5: Deep Dive - User Management
**Security & Identification**
- **Authentication:** Email/Password registration with JWT stability.
- **Roles:** Clear distinction between **Students** and **Admins**.
- **Profile:** Manage personal details and study history.
- **Security:** Password encryption (bcrypt), account recovery, and rate limiting.

---

## Slide 6: Deep Dive - AI Conversion Engine
**Bridging the Language Gap**
- **How it works:**
    1.  **Input:** User types in Singlish.
    2.  **Process:** Text sent to Gemini API with specialized academic prompt.
    3.  **Preview:** Side-by-side comparison of Singlish vs. Sinhala.
    4.  **Store:** Both versions saved for accessibility.
- **Key Capabilities:** Handles academic jargon, slang, and mixed-language patterns.

---

## Slide 7: Deep Dive - Real-Time Communication
**Instant Collaboration**
- **Technology:** Socket.io with NestJS Gateway and Redis adapter.
- **Private Chat:** 1-on-1 with typing indicators and 5-minute edit window.
- **Study Groups:** Collaborative rooms for subject-specific discussions.
- **Reliability:** Message persistence, offline queue, and delivery receipts.

---

## Slide 8: Deep Dive - Notes & AI Learning Assistant
**Transforming Passive Reading to Active Learning**
- **Note Management:** Upload, tag, and organize academic notes.
- **AI Integration:**
    - **Summarization:** One-click generation of concise summaries.
    - **Quizzes:** Auto-generated MCQs based on note content to test understanding.
    - **Flashcards:** Study mode for key concepts.

---

## Slide 9: System Architecture & Tech Stack
**Architecture:** Monorepo (Nx style) with separate Frontend and Backend apps sharing libraries.

**Frontend:**
- **Next.js 14+** (App Router)
- **Tailwind CSS** (Styling)
- **TypeScript**

**Backend:**
- **NestJS** (Modular Architecture)
- **MongoDB + Mongoose** (Database)
- **Socket.io** (Real-time)
- **Google Gemini API** (AI)

**DevOps & Security:** Doceker, JWT

---

## Slide 10: Security & Scalability
- **Security:**
    - JWT for stateless authentication.
    - Role-Based Access Control (RBAC).
    - Data encryption (TLS/SSL, bcrypt).
    - Input validation to prevent injection attacks.
- **Scalability:**
    - Docker containerization.
    - Redis adapter for WebSocket scaling.
    - Horizontal scaling support.

---

## Slide 11: Expected Outcomes
- **Improved Engagement:** Centralized platform encourages active participation.
- **Language Inclusivity:** Singlish-to-Sinhala conversion removes barriers.
- **Structured Learning:** AI tools turn raw notes into study aids.
- **Better Communication:** Real-time tools foster seamless collaboration.

---

## Slide 12: Future Enhancements (Roadmap)
- **Phase 2:**
    - **Voice-to-Text:** Speak in Singlish, get Sinhala text.
    - **Mobile App:** Native iOS/Android apps (React Native).
- **Phase 3:**
    - **AI Moderation:** Auto-flagging inappropriate content.
    - **Analytics:** Dashboard for engagement insights.
- **Phase 4:**
    - **Multi-Language:** Support for Tamil and other regional languages.

---

## Slide 13: Thank You & Q&A
**UniMind**
*Bridging the gap between Singlish and Sinhala.*

**Any Questions?**
