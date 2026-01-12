import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
          <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
            View Project
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
