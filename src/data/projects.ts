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
];

export const allTags = [...new Set(projects.flatMap((p) => p.tags))];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}
