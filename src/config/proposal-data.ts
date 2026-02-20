// ============================================================
// UniMind Proposal – Central Content Configuration
// Edit this file to change ANY text displayed on the proposal.
// ============================================================

export const siteConfig = {
  title: "UniMind – AI Powered Real-Time Academic Community Platform",
  shortTitle: "UniMind",
  tagline:
    "Bridging the gap between Singlish and Sinhala in academic communication — powered by AI, built for collaboration.",
  metaDescription:
    "UniMind is an AI-powered real-time academic community platform enabling Singlish to Sinhala conversion, real-time collaboration, and intelligent learning tools.",
  university: "Sri Lanka Institute of Information Technology",
  module: "IT Project Management – IT3040",
  year: "2025 / 2026",
  supervisorLabel: "Supervisor",
  supervisor: "Prof. Dilshan De Silva",
};

export interface TeamMember {
  name: string;
  id: string;
  module: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dissanayake D A",
    id: "IT23306622",
    module: "Community Feed & Discussions Module",
  },
  {
    name: "Thashmila P H J",
    id: "IT23315600",
    module: "Notes & AI Learning Assistant Module",
  },
  {
    name: "G A M T N Bandara",
    id: "IT23307612",
    module: "Real-Time Communication Module",
  },
  {
    name: "K M D K Karunarathne",
    id: "IT23313620",
    module: "User Management & AI Conversion Engine",
  },
];

export const techBadges: string[] = [
  "Next.js",
  "NestJS",
  "MongoDB",
  "Socket.io",
  "Gemini API",
  "TypeScript",
  "Tailwind CSS",
  "Mongoose",
  "Docker",
  "JWT",
];

/* ---------- Section 2 : Introduction ---------- */
export const introduction = {
  problem: [
    "Sri Lankan university students frequently communicate academic ideas in Singlish — a romanized, informal mix of Sinhala and English.",
    "Existing platforms offer no support for understanding or preserving this linguistic style.",
    "Causes confusion, knowledge loss, and exclusion for Sinhala-only readers due to language barriers.",
  ],
  motivation: [
    "By leveraging Large Language Models (Google Gemini), UniMind bridges the communication gap.",
    "Students can write naturally in Singlish while the platform provides real-time, accurate Sinhala conversions.",
    "Preserves academic intent and cultural nuance while democratizing knowledge sharing.",
  ],
  keyPoints: [
    "No existing platform supports Singlish ↔ Sinhala academic conversion",
    "Students lose valuable knowledge shared informally in chat groups",
    "Lack of structured collaboration tools tailored for Sri Lankan universities",
    "AI-powered solutions can transform how students learn and communicate",
  ],
};

/* ---------- Section 3 : Objectives ---------- */
export const objectives = [
  {
    title: "AI-Powered Academic Community",
    description:
      "Build a full-featured, modular academic community platform where students can post questions, share insights, and engage in discussions — all enhanced by AI capabilities.",
  },
  {
    title: "Singlish to Sinhala Conversion",
    description:
      "Integrate Google Gemini API to perform real-time, context-aware Singlish to Sinhala text conversion with preview and side-by-side comparison.",
  },
  {
    title: "Real-Time Student Collaboration",
    description:
      "Enable private and group real-time messaging through WebSocket (Socket.io), supporting instant communication with message history and synchronization.",
  },
  {
    title: "Enhanced Knowledge Sharing",
    description:
      "Provide AI-powered note summarization, quiz generation, and structured content to help students learn more effectively.",
  },
];

/* ---------- Section 4 : System Overview ---------- */
export interface SystemModule {
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
}

export const systemModules: SystemModule[] = [
  {
    title: "User Management",
    icon: "Users",
    description:
      "Authentication, profile management, role-based access (Student / Admin), and account security features.",
    features: [
      "JWT-based authentication",
      "Profile CRUD operations",
      "Role assignment & verification",
      "Password reset & account recovery",
    ],
  },
  {
    title: "Community Posts & Discussions",
    icon: "MessageSquare",
    description:
      "A Reddit-style community feed where students can create posts, comment, up-vote, and discuss academic topics.",
    features: [
      "Create / Edit / Delete posts",
      "Threaded comments",
      "Upvote & Downvote system",
      "Category-based filtering",
    ],
  },
  {
    title: "Private Real-Time Chat",
    icon: "MessageCircle",
    description:
      "One-on-one instant messaging powered by Socket.io with delivery receipts and a 5-minute edit window.",
    features: [
      "Real-time message delivery",
      "5-minute edit / delete window",
      "Read receipts & online status",
      "Media & file sharing",
    ],
  },
  {
    title: "Study Group Chat Rooms",
    icon: "UsersRound",
    description:
      "Create or join study groups with real-time group chat, shared resources, and collaborative discussions.",
    features: [
      "Create / Join groups",
      "Group admin controls",
      "Shared resource library",
      "Real-time group messaging",
    ],
  },
  {
    title: "Notes & AI Summary / Quiz",
    icon: "BookOpen",
    description:
      "Upload academic notes and let AI generate summaries & quizzes to reinforce learning outcomes.",
    features: [
      "Note upload & organization",
      "AI-powered summarization",
      "Auto-generated quizzes",
      "Study-mode flashcards",
    ],
  },
  {
    title: "Singlish → Sinhala Engine",
    icon: "Languages",
    description:
      "Google Gemini-powered NLP engine that converts Singlish text to proper Sinhala script in real-time.",
    features: [
      "Context-aware translation",
      "Side-by-side preview",
      "Stores original + converted",
      "Batch & inline conversion",
    ],
  },
];

/* ---------- Section 5 : User Management ---------- */
export const userManagement = {
  description:
    "The User Management module provides secure, role-based access to the platform. It handles registration, authentication via JWT, profile management, and administrative controls.",
  features: [
    {
      title: "Authentication",
      items: [
        "Email & password registration with validation",
        "JWT access & refresh token flow",
        "Secure password hashing (bcrypt)",
        "Session management & token rotation",
      ],
    },
    {
      title: "Profile Management",
      items: [
        "View & edit profile details",
        "Upload profile picture",
        "Track activity history",
        "Manage notification preferences",
      ],
    },
    {
      title: "Role Management",
      items: [
        "Student role (default)",
        "Admin role (elevated privileges)",
        "Role-based route guards",
        "Permission-based UI rendering",
      ],
    },
    {
      title: "Account Security",
      items: [
        "Email verification flow",
        "Password reset via email",
        "Account deactivation",
        "Rate-limited login attempts",
      ],
    },
  ],
};

/* ---------- Section 6 : AI Conversion Engine ---------- */
export const aiEngine = {
  description:
    "The Singlish to Sinhala Conversion Engine leverages the Google Gemini API to perform real-time, context-aware transliteration. It understands academic jargon, slang, and mixed-language patterns common in Sri Lankan student communication.",
  workflow: [
    {
      step: 1,
      title: "Input Capture",
      description:
        "User types Singlish text in any input field across the platform (posts, chat, notes).",
    },
    {
      step: 2,
      title: "AI Processing",
      description:
        "The text is sent to the Gemini API with a specialized prompt engineered for Singlish → Sinhala academic context.",
    },
    {
      step: 3,
      title: "Preview & Compare",
      description:
        "A side-by-side preview shows the original Singlish and the converted Sinhala text before the user confirms.",
    },
    {
      step: 4,
      title: "Store & Serve",
      description:
        "Both versions are stored in the database. Readers can toggle between Singlish and Sinhala views.",
    },
  ],
  keyCapabilities: [
    "Handles academic terminology, abbreviations, and slang",
    "Preserves tone and intent during conversion",
    "Supports batch processing for long texts",
    "Continuously improving via prompt engineering",
  ],
};

/* ---------- Section 7 : Real-Time Communication ---------- */
export const realtimeComm = {
  description:
    "The Real-Time Communication module uses WebSockets via Socket.io to enable instant messaging. It supports both private one-on-one chats and study group rooms with full message synchronization.",
  architecture: [
    "Socket.io server integrated with NestJS Gateway",
    "Room-based architecture for group chats",
    "Event-driven message broadcasting",
    "Redis adapter for horizontal scaling",
  ],
  features: [
    {
      title: "Private Messaging",
      items: [
        "One-on-one real-time conversation",
        "Typing indicators & online status",
        "Message read receipts",
        "5-minute edit / delete window",
      ],
    },
    {
      title: "Group Chat Rooms",
      items: [
        "Create study group rooms",
        "Admin-managed membership",
        "Shared file & link library",
        "Persistent message history",
      ],
    },
    {
      title: "Message Synchronization",
      items: [
        "Offline message queue",
        "Cross-device sync",
        "Message delivery confirmation",
        "Reconnection handling",
      ],
    },
  ],
};

/* ---------- Section 8 : Notes & AI Learning ---------- */
export const notesAI = {
  description:
    "The Notes & AI Learning Assistant empowers students to upload academic notes and leverage AI to generate concise summaries and interactive quizzes — transforming passive reading into active learning.",
  features: [
    {
      title: "Upload & Organize Notes",
      items: [
        "Drag-and-drop file upload",
        "Tag and categorize notes",
        "Full-text search across notes",
        "Share notes with study groups",
      ],
    },
    {
      title: "AI Summary Generation",
      items: [
        "One-click Gemini-powered summarization",
        "Customizable summary length",
        "Key concepts extraction",
        "Chapter-wise breakdown",
      ],
    },
    {
      title: "AI Quiz Generation",
      items: [
        "Auto-generate MCQ quizzes from notes",
        "Difficulty-level selection",
        "Instant grading & feedback",
        "Spaced-repetition scheduling",
      ],
    },
  ],
};

/* ---------- Section 9 : System Architecture ---------- */
export const architecture = {
  description:
    "UniMind follows a Monorepo architecture using a unified repository structure. The frontend (Next.js) and backend (NestJS) live in separate apps/ directories, sharing common libraries and types.",
  structure: [
    {
      name: "apps/frontend",
      tech: "Next.js 14+ (App Router)",
      description:
        "Client-side application with SSR, dynamic routing, and responsive UI.",
    },
    {
      name: "apps/backend",
      tech: "NestJS",
      description:
        "RESTful API server with WebSocket gateway, service layer, and database integration.",
    },
    {
      name: "packages/shared",
      tech: "TypeScript",
      description:
        "Shared types, DTOs, constants, and utility functions used by both apps.",
    },
    {
      name: "packages/config",
      tech: "ESLint / Prettier / TSConfig",
      description:
        "Shared configuration files ensuring consistent code quality and formatting.",
    },
  ],
  apiFlow: [
    "Client sends HTTP / WebSocket request",
    "API Gateway validates JWT & rate-limits",
    "Controller routes to appropriate Service",
    "Service executes business logic",
    "Repository layer interacts with MongoDB",
    "Response returned to client",
  ],
};

/* ---------- Section 10 : Technology Stack ---------- */
export interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export const techStack: TechItem[] = [
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "React framework with App Router, SSR, and file-based routing.",
    icon: "Globe",
  },
  {
    name: "NestJS",
    category: "Backend",
    description:
      "Progressive Node.js framework for scalable server-side applications.",
    icon: "Server",
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "Flexible NoSQL document database with high scalability and rich query support.",
    icon: "Database",
  },
  {
    name: "Socket.io",
    category: "Real-Time",
    description:
      "WebSocket library for bi-directional, event-based communication.",
    icon: "Radio",
  },
  {
    name: "Google Gemini",
    category: "AI / LLM",
    description:
      "Large Language Model API for Singlish → Sinhala conversion and learning tools.",
    icon: "Sparkles",
  },
  {
    name: "TypeScript",
    category: "Language",
    description:
      "Strongly typed superset of JavaScript for safer, maintainable code.",
    icon: "Code2",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description:
      "Utility-first CSS framework for rapid, consistent UI development.",
    icon: "Paintbrush",
  },
  {
    name: "Mongoose",
    category: "ODM",
    description:
      "Elegant MongoDB object modeling with schema validation and middleware support.",
    icon: "Layers",
  },
  {
    name: "Docker",
    category: "DevOps",
    description:
      "Containerization platform for consistent development and deployment.",
    icon: "Container",
  },
  {
    name: "JWT",
    category: "Security",
    description:
      "JSON Web Tokens for stateless, secure authentication across services.",
    icon: "Shield",
  },
];

/* ---------- Section 11 : Security & Scalability ---------- */
export const security = {
  items: [
    {
      title: "JWT Authentication",
      description:
        "Stateless authentication using access and refresh tokens with automatic rotation and revocation support.",
      icon: "KeyRound",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Fine-grained permission system ensuring students and admins see only what they are authorized to access.",
      icon: "ShieldCheck",
    },
    {
      title: "Rate Limiting",
      description:
        "API-level throttling to prevent abuse, DDoS attempts, and ensure fair usage across all users.",
      icon: "Gauge",
    },
    {
      title: "Horizontal Scalability",
      description:
        "Docker-based deployment with load balancing and Redis adapter for scaling WebSocket connections.",
      icon: "Scaling",
    },
    {
      title: "Data Encryption",
      description:
        "TLS/SSL for data in transit, bcrypt for password hashing, and encrypted sensitive fields at rest.",
      icon: "Lock",
    },
    {
      title: "Input Validation",
      description:
        "Server-side validation using class-validator and class-transformer to prevent injection and malformed data.",
      icon: "CheckCircle",
    },
  ],
};

/* ---------- Section 12 : Expected Outcomes ---------- */
export const expectedOutcomes = [
  {
    title: "Improved Academic Engagement",
    description:
      "A unified platform encourages students to participate in academic discussions, share resources, and collaborate in real-time — leading to higher engagement rates.",
    icon: "TrendingUp",
  },
  {
    title: "Better Sinhala Digital Communication",
    description:
      "By providing accurate Singlish → Sinhala conversion, the platform preserves linguistic integrity and makes academic content accessible to Sinhala-only readers.",
    icon: "Languages",
  },
  {
    title: "Structured Knowledge Sharing",
    description:
      "AI-generated summaries and quizzes transform raw notes into structured learning materials, improving knowledge retention and exam preparation.",
    icon: "BookOpen",
  },
  {
    title: "Reduced Communication Barriers",
    description:
      "Students from diverse linguistic backgrounds can communicate seamlessly, fostering a more inclusive academic community.",
    icon: "Handshake",
  },
];

/* ---------- Section 13 : Future Enhancements ---------- */
export const futureEnhancements = [
  {
    title: "Voice-Based Singlish Conversion",
    description:
      "Integrate speech-to-text capabilities to allow students to speak in Singlish and receive real-time Sinhala text output.",
    icon: "Mic",
    timeline: "Phase 2",
  },
  {
    title: "Mobile Application",
    description:
      "Develop native iOS and Android applications using React Native for on-the-go access to all platform features.",
    icon: "Smartphone",
    timeline: "Phase 2",
  },
  {
    title: "AI Moderation System",
    description:
      "Implement AI-powered content moderation to automatically detect and flag inappropriate or off-topic content.",
    icon: "Bot",
    timeline: "Phase 3",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Provide detailed analytics on student engagement, popular topics, and learning patterns for educators.",
    icon: "BarChart3",
    timeline: "Phase 3",
  },
  {
    title: "Multi-Language Support",
    description:
      "Extend the conversion engine to support Tamil and other regional languages spoken in Sri Lankan universities.",
    icon: "Globe2",
    timeline: "Phase 4",
  },
];

/* ---------- Navigation ---------- */
export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: "Home" },
  { id: "introduction", label: "Introduction", icon: "FileText" },
  { id: "objectives", label: "Objectives", icon: "Target" },
  { id: "system-overview", label: "System Overview", icon: "LayoutGrid" },
  { id: "user-management", label: "User Management", icon: "Users" },
  { id: "ai-engine", label: "AI Engine", icon: "Sparkles" },
  { id: "realtime", label: "Real-Time Comm.", icon: "Radio" },
  { id: "notes-ai", label: "Notes & AI", icon: "BookOpen" },
  { id: "architecture", label: "Architecture", icon: "Server" },
  { id: "tech-stack", label: "Tech Stack", icon: "Code2" },
  { id: "security", label: "Security", icon: "Shield" },
  { id: "outcomes", label: "Outcomes", icon: "TrendingUp" },
  { id: "future", label: "Future", icon: "Rocket" },
];
