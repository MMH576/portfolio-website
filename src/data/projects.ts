export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  tech: string[];
  problem: string;
  approach: string;
  highlights: string[];
  tradeoffs: string;
  github: string;
}

export const projects: Project[] = [
  {
    slug: "order-payments-platform",
    title: "Transactional Order & Payments Platform",
    tagline: "ACID-compliant checkout with Stripe integration",
    tags: ["Transactions", "Payments", "Backend"],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Docker"],
    problem:
      "E-commerce platforms often struggle with maintaining data consistency during checkout, leading to issues like double charges, orphaned orders, or inventory mismatches when failures occur mid-transaction.",
    approach:
      "Built a transactional order processing system using PostgreSQL's ACID guarantees with Prisma. Implemented the Saga pattern for distributed transactions across order creation, payment processing, and inventory updates. Used Stripe webhooks for reliable payment confirmation.",
    highlights: [
      "Zero data inconsistencies in production with atomic transactions",
      "Implemented idempotency keys to prevent duplicate payments",
      "Built comprehensive rollback mechanisms for failed transactions",
      "Achieved sub-200ms checkout latency under load",
    ],
    tradeoffs:
      "Chose synchronous transactions over eventual consistency for simplicity, accepting slightly higher latency in exchange for stronger guarantees. This works well for current scale but may need revisiting for high-throughput scenarios.",
    github: "https://github.com/MMH576/order-payments-platform",
  },
  {
    slug: "event-processing-platform",
    title: "Event Processing Platform",
    tagline: "Scalable event-driven architecture with Redis Streams",
    tags: ["Events", "Streaming", "Backend"],
    tech: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "Bull"],
    problem:
      "Traditional request-response architectures create tight coupling between services and struggle to handle spiky workloads, leading to cascading failures and poor user experience during peak traffic.",
    approach:
      "Designed an event-driven system using Redis Streams for message persistence and Bull for job processing. Implemented consumer groups for horizontal scaling, dead letter queues for failed events, and backpressure mechanisms to prevent overload.",
    highlights: [
      "Handles 10,000+ events per second with horizontal scaling",
      "Built-in retry logic with exponential backoff",
      "Real-time event monitoring and alerting dashboard",
      "Graceful degradation during downstream service failures",
    ],
    tradeoffs:
      "Redis Streams chosen over Kafka for operational simplicity at current scale. The system is designed to migrate to Kafka if throughput requirements increase significantly.",
    github: "https://github.com/MMH576/event-processing-platform",
  },
  {
    slug: "webhook-delivery-system",
    title: "Webhook Delivery System",
    tagline: "Reliable webhook delivery with guaranteed at-least-once semantics",
    tags: ["Reliability", "Webhooks", "Backend"],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    problem:
      "Webhook delivery is inherently unreliable - endpoints go down, networks fail, and without proper retry logic, critical events get lost. Most implementations lack visibility into delivery status and debugging capabilities.",
    approach:
      "Built a webhook delivery service with persistent storage of all webhook attempts, configurable retry policies with exponential backoff, and cryptographic signatures for security. Implemented a dashboard for monitoring delivery status and debugging failed webhooks.",
    highlights: [
      "99.9% delivery success rate with intelligent retry logic",
      "HMAC-SHA256 signatures for webhook verification",
      "Configurable retry policies per endpoint",
      "Full audit trail of all delivery attempts",
    ],
    tradeoffs:
      "Prioritized delivery reliability over raw throughput. The synchronous verification step adds latency but ensures endpoints receive authenticated payloads. Batch processing could improve throughput if needed.",
    github: "https://github.com/MMH576/webhook-delivery-system",
  },
  {
    slug: "pushlogr",
    title: "PushLogr",
    tagline: "Mobile fitness tracking app with push notification reminders",
    tags: ["Mobile", "Fitness", "Full Stack"],
    tech: ["React Native", "Expo", "TypeScript", "Kotlin"],
    problem:
      "Maintaining consistent workout habits is challenging without proper tracking and timely reminders. Many fitness apps are bloated with features while lacking the core functionality of simple, reliable workout logging.",
    approach:
      "Built a streamlined mobile fitness tracking application using React Native and Expo for cross-platform deployment. Implemented push notifications to help users stay consistent with their workout schedules. Used TypeScript throughout for type safety and maintainability.",
    highlights: [
      "Cross-platform support for iOS and Android via Expo",
      "Push notification system for workout reminders",
      "Clean, focused UI for quick workout logging",
      "TestFlight-ready with comprehensive deployment documentation",
    ],
    tradeoffs:
      "Chose Expo over bare React Native for faster iteration and easier deployment, accepting some limitations in native module customization. The focused feature set prioritizes core functionality over extensive customization options.",
    github: "https://github.com/MMH576/pushlogr",
  },
  {
    slug: "medical-notes-generator",
    title: "Medical Notes Generator",
    tagline: "AI-powered PDF to study notes converter for medical students",
    tags: ["AI", "Education", "Full Stack"],
    tech: ["Next.js 15", "TypeScript", "TailwindCSS", "Shadcn UI", "Edge Runtime"],
    problem:
      "Medical students spend excessive time converting dense textbook content into digestible study materials. Manual note-taking from complex medical PDFs is time-consuming and often misses key terminology.",
    approach:
      "Created an application to intelligently extract and summarize content from medical PDFs. Built with Next.js 15 App Router for optimal performance and deployed on Edge Runtime for fast response times globally.",
    highlights: [
      "Instant PDF analysis with AI-driven content extraction",
      "Preserves medical terminology while simplifying explanations",
      "Drag-and-drop upload with progress indicators",
      "Export functionality with clipboard copy support",
    ],
    tradeoffs:
      "Focused on accuracy in medical content extraction. Implemented usage tiers to balance accessibility with sustainable operation costs.",
    github: "https://github.com/MMH576/medical-notes-generator",
  },
  {
    slug: "animeguess",
    title: "AnimeGuess",
    tagline: "Interactive anime character guessing game with leaderboards",
    tags: ["Gaming", "Full Stack", "Authentication"],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Clerk", "Vercel"],
    problem:
      "Anime fans lack engaging ways to test and improve their character knowledge. Existing quiz platforms are generic and don't cater to the anime community's specific interests.",
    approach:
      "Built an interactive guessing game using Next.js with Supabase for real-time database functionality and Clerk for seamless user authentication. Deployed on Vercel for optimal performance and continuous deployment.",
    highlights: [
      "Real-time leaderboards powered by Supabase",
      "Secure user authentication via Clerk integration",
      "Responsive design for mobile and desktop play",
      "Database-backed scoring with PLpgSQL procedures",
    ],
    tradeoffs:
      "Chose Supabase over custom backend for rapid development and built-in real-time capabilities. Clerk handles authentication complexity, trading some customization for robust security out of the box.",
    github: "https://github.com/MMH576/animeguess",
  },
  {
    slug: "yapp-chat",
    title: "YAPP Chat",
    tagline: "Real-time messaging platform with customizable themes",
    tags: ["Real-time", "Full Stack", "Authentication"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "TailwindCSS", "JWT"],
    problem:
      "Many chat applications prioritize features over user experience, resulting in cluttered interfaces. Users want simple, fast real-time communication with personalization options.",
    approach:
      "Developed a full-stack MERN application with Socket.IO for instant message delivery. Implemented JWT authentication with secure cookie sessions, and added a customizable theme system for personalization. Built responsive UI with TailwindCSS and DaisyUI.",
    highlights: [
      "Real-time messaging with Socket.IO for instant delivery",
      "Multiple theme options with user preference persistence",
      "Online/offline status indicators and typing notifications",
      "Secure authentication with JWT and cookie-based sessions",
    ],
    tradeoffs:
      "Selected MongoDB for flexible schema evolution during rapid development. Chose Socket.IO over raw WebSockets for built-in reconnection handling and fallback support across different network conditions.",
    github: "https://github.com/MMH576/ChatApp-MERN-STACK",
  },
];

export const allTags = [...new Set(projects.flatMap((p) => p.tags))];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}
