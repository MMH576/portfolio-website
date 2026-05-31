import { BookOpen, GraduationCap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { coopPortfolio } from "@/data/coop";

export const metadata = {
  title: "COOP 2100 Professional Development Portfolio | Mohammed Monjorul Hoque",
  description: "COOP 2100 professional development portfolio for Mohammed Monjorul Hoque",
};

function DetailGrid({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((item) => (
        <StaggerItem key={item.title}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

export default function CoopPortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <FadeIn>
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" />
            Professional Development
          </Badge>
          <h1 className="text-3xl font-semibold mb-2">{coopPortfolio.title}</h1>
          <p className="text-xl text-muted-foreground">{coopPortfolio.subtitle}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BookOpen className="h-5 w-5 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {coopPortfolio.introduction.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.2}>
          <section className="space-y-5">
            <SectionHeading>Learning Objectives</SectionHeading>
            <DetailGrid items={coopPortfolio.learningObjectives} />
          </section>
        </FadeIn>

        <Separator />

        <FadeIn delay={0.3}>
          <section className="space-y-5">
            <SectionHeading>Engineering Competencies</SectionHeading>
            <DetailGrid items={coopPortfolio.engineeringCompetencies} />
          </section>
        </FadeIn>

        <Separator />

        <FadeIn delay={0.4}>
          <section className="space-y-5">
            <SectionHeading>Reflection Framework</SectionHeading>
            <DetailGrid items={coopPortfolio.reflectionFramework} />
          </section>
        </FadeIn>

        <Separator />

        <FadeIn delay={0.5}>
          <section className="space-y-5">
            <SectionHeading>Career Goals</SectionHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {coopPortfolio.careerGoals.map((group) => (
                <Card key={group.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {group.goals.map((goal) => (
                        <li
                          key={goal}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
