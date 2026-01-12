import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Mohammed Hoque`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/projects">
        <Button variant="ghost" size="sm" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

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

      <Separator className="mb-8" />

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">My Approach</h2>
          <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
        </section>

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

        <section>
          <h2 className="text-xl font-semibold mb-3">Tradeoffs & Decisions</h2>
          <p className="text-muted-foreground leading-relaxed">{project.tradeoffs}</p>
        </section>
      </div>

      <Separator className="my-8" />

      <div className="flex gap-4">
        <Link href={project.github} target="_blank" rel="noopener noreferrer">
          <Button className="gap-2">
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}
