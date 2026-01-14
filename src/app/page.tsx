"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <FadeIn>
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Mohammed Monjorul Hoque
              </h1>
              <p className="mt-2 text-xl font-medium text-primary md:text-2xl">
                Backend Engineer
              </p>

              {/* Key Info Pills - LinkedIn Style */}
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Computer Science @ York University
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-primary" />
                  Toronto, Canada
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
                  <Briefcase className="h-4 w-4 text-primary" />
                  Open to Opportunities
                </span>
              </div>

              {/* About Section */}
              <div className="mt-6 rounded-lg border bg-card p-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">About</h2>
                <p className="mt-2 text-foreground leading-relaxed">
                  CS student at York University passionate about building transactional, event-driven systems.
                  I specialize in Node.js, PostgreSQL, and Redis to create reliable backend
                  infrastructure that scales. Currently seeking internship and co-op opportunities.
                </p>
              </div>

              {/* Tech Stack Highlight */}
              <div className="mt-4 rounded-lg border bg-card p-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tech Stack</h2>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Backend & APIs</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Node.js", "NestJS", "Express", "TypeScript", "Prisma"].map((tech) => (
                        <span key={tech} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Databases & Caching</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["PostgreSQL", "MongoDB", "Redis", "Supabase"].map((tech) => (
                        <span key={tech} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Frontend & Mobile</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["React", "Next.js", "React Native", "Expo", "TailwindCSS"].map((tech) => (
                        <span key={tech} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">Tools & Infrastructure</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Docker", "Vercel", "Socket.IO", "Stripe", "JWT", "Clerk"].map((tech) => (
                        <span key={tech} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 self-center md:self-start">
              <div className="relative h-52 w-52 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                <Image
                  src="/images/profile.jpeg"
                  alt="Mohammed Monjorul Hoque"
                  fill
                  className="object-cover object-center scale-125"
                  priority
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resume">
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                Contact Me
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Featured Projects */}
      <section className="pb-20">
        <FadeIn delay={0.4}>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/projects">
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
