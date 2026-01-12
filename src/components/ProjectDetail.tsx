"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/MotionWrapper";
import { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <FadeIn>
        <Link href="/projects">
          <Button variant="ghost" size="sm" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-semibold mb-2">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.tagline}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </FadeIn>

      <Separator className="mb-8" />

      <div className="space-y-8">
        <FadeIn delay={0.3}>
          <section>
            <h2 className="text-xl font-semibold mb-3">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section>
            <h2 className="text-xl font-semibold mb-3">My Approach</h2>
            <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section>
            <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section>
            <h2 className="text-xl font-semibold mb-3">Tradeoffs & Decisions</h2>
            <p className="text-muted-foreground leading-relaxed">{project.tradeoffs}</p>
          </section>
        </FadeIn>
      </div>

      <Separator className="my-8" />

      <FadeIn delay={0.7}>
        <div className="flex gap-4">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <ExternalLink className="h-4 w-4" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
