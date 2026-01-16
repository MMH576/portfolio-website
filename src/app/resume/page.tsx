import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Resume | Mohammed Monjorul Hoque",
  description: "Download Mohammed Monjorul Hoque's resume - Backend Engineer",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Resume</h1>
        <p className="text-muted-foreground">
          Download my resume or view it online
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/Resume_v11.pdf" download>
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </Link>
        <Link href="/Resume_v11.pdf" target="_blank">
          <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
            <ExternalLink className="h-4 w-4" />
            View in Browser
          </Button>
        </Link>
      </div>

      <div className="mt-12 rounded-lg border bg-muted/50 p-8">
        <h2 className="text-xl font-semibold mb-4">Quick Summary</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="font-medium text-foreground">Focus Areas</h3>
            <p>Backend Development, Distributed Systems, Event-Driven Architecture</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Technologies</h3>
            <p>Node.js, TypeScript, PostgreSQL, Redis, Docker, NestJS, React, Next.js</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Education</h3>
            <p>Computer Science @ York University, Toronto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
