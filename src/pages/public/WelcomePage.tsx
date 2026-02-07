import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { BibleVerseCard } from "../../components/ui/BibleVerseCard";
import { ThemeSelector } from "../../components/theme/ThemeSelector";
import { useTheme } from "../../theme/ThemeProvider";
import { useState } from "react";
import { BridgePage } from "../bridge/BridgePage";

interface WelcomePageProps {
  onStart?: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.body,
      }}
    >
      {/* Top bar */}
      <div className="flex justify-end px-6 pt-6">
        <ThemeSelector />
      </div>

      {/* Hero */}
      <header className="px-6 py-24 text-center">
        <h1
          className="
            font-heading
            text-4xl
            sm:text-5xl
            tracking-wide
          "
        >
          Spare Oom
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg mb-10"
          style={{ color: theme.colors.textSecondary }}
        >
          A calm, flexible homeschool planner inspired by stories, tradition,
          and the rhythm of real family life.
        </p>

        <Button onClick={onStart}>Begin Your Journey</Button>
      </header>

      {/* Bible Verse */}
      <section className="px-6 mb-20">
        <BibleVerseCard
          verse="Let all that you do be done in love."
          reference="1 Corinthians 16:14"
        />
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto grid gap-6 px-6 pb-24 md:grid-cols-3">
        <Card>
          <p>Plan the entire school year with ease</p>
        </Card>

        <Card>
          <p>Automatically adjust for missed or partial school days</p>
        </Card>

        <Card>
          <p>Designed for real homeschool families, not rigid systems</p>
        </Card>
      </section>
    </div>
  );
}
