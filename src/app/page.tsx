"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Hi, I&apos;m Mohammed Hoque
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
            Backend Engineer
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            CS student focused on building transactional, event-driven systems.
            I work with Node.js, PostgreSQL, and Redis to create reliable backend
            infrastructure that scales.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
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
