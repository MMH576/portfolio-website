import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/CopyButton";

export const metadata = {
  title: "Contact | Mohammed Hoque",
  description: "Get in touch with Mohammed Hoque",
};

const EMAIL = "mohammed.hoque@example.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Contact</h1>
        <p className="text-muted-foreground">
          Let&apos;s connect! Feel free to reach out via email or social media.
        </p>
      </div>

      <div className="space-y-8">
        {/* Email */}
        <div className="rounded-lg border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p className="text-sm text-muted-foreground">Best way to reach me</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <code className="rounded bg-muted px-3 py-2 text-sm">
              {EMAIL}
            </code>
            <CopyButton text={EMAIL} label="Copy Email" />
          </div>
        </div>

        {/* Social Links */}
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold mb-4">Social Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/MMH576"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/mohammed-hoque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="rounded-lg bg-muted/50 p-6">
          <p className="text-muted-foreground">
            I&apos;m always interested in discussing backend architecture, distributed
            systems, or potential collaboration opportunities. Don&apos;t hesitate to
            reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
