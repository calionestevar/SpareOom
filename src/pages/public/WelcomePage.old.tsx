import { Page } from "../../components/layout/Page";
import { Section } from "../../components/layout/Section";
import { Heading } from "../../components/typography/Heading";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export const WelcomePage = () => {
  return (
    <Page>
      {/* Hero */}
      <Section className="text-center">
        <Heading level="display" className="mb-6">
          Spare Oom
        </Heading>

        <p className="mx-auto max-w-2xl text-lg text-[rgb(var(--text-secondary))]">
          A thoughtful homeschool planner designed around real family rhythms —
          year-long planning, gentle catch-up days, and space for learning to
          breathe.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="secondary">View Demo</Button>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Heading level="h3" className="mb-2">
              Plan the Whole Year
            </Heading>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              See your entire school year at once, with flexible weeks and built-in
              buffer days for real life.
            </p>
          </Card>

          <Card>
            <Heading level="h3" className="mb-2">
              Gentle Catch-Up Flow
            </Heading>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              Automatically adapts when days are skipped or partially completed —
              no guilt, no chaos.
            </p>
          </Card>

          <Card>
            <Heading level="h3" className="mb-2">
              Built for Families
            </Heading>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              Multi-child support, reading logs, daily notes, and optional faith-based
              reflections.
            </p>
          </Card>
        </div>
      </Section>

      {/* Closing */}
      <Section className="text-center">
        <Card className="inline-block">
          <Heading level="h2" className="mb-4">
            A Planner That Respects the Story
          </Heading>
          <p className="mb-6 text-[rgb(var(--text-secondary))]">
            Homeschooling isn’t just checklists — it’s moments, rhythms, and growth
            over time.
          </p>
          <Button>Start Planning</Button>
        </Card>
      </Section>
    </Page>
  );
};
