import { BriefcaseBusiness, Building2, CalendarDays, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { coopExperience } from "@/data/coop";

export const metadata = {
  title: "Current Co-op Experience | Mohammed Monjorul Hoque",
  description: "Current co-op experience for Mohammed Monjorul Hoque",
};

function OverviewCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default function CoopExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <FadeIn>
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Current Co-op Experience
          </Badge>
          <h1 className="text-3xl font-semibold mb-2">{coopExperience.title}</h1>
          <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <Building2 className="h-4 w-4 text-primary" />
              {coopExperience.company}
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <MapPin className="h-4 w-4 text-primary" />
              {coopExperience.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              {coopExperience.duration}
            </span>
          </div>
        </div>
      </FadeIn>

      <div className="space-y-10">
        <FadeIn delay={0.1}>
          <OverviewCard title="Company Overview">
            <p className="leading-relaxed text-muted-foreground">
              {coopExperience.companyOverview}
            </p>
          </OverviewCard>
        </FadeIn>

        <FadeIn delay={0.2}>
          <OverviewCard title="Role Overview">
            <p className="leading-relaxed text-muted-foreground">
              {coopExperience.roleOverview}
            </p>
          </OverviewCard>
        </FadeIn>

        <Separator />

        <FadeIn delay={0.3}>
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">Key Responsibilities</h2>
            <Card>
              <CardContent>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {coopExperience.keyResponsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </FadeIn>

        <Separator />

        <FadeIn delay={0.4}>
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">Skills Developed</h2>
            <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {coopExperience.skillsDeveloped.map((skill) => (
                <StaggerItem key={skill.title}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        <Separator />

        <FadeIn delay={0.5}>
          <OverviewCard title="Key Takeaways">
            <div className="space-y-4">
              {coopExperience.keyTakeaways.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </OverviewCard>
        </FadeIn>
      </div>
    </div>
  );
}
