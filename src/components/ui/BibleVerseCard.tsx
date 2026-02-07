import { useTheme } from "../../theme/ThemeProvider";

interface BibleVerseCardProps {
  verse: string;
  reference: string;
}

export function BibleVerseCard({ verse, reference }: BibleVerseCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className="p-6 rounded-xl max-w-2xl mx-auto"
      style={{
        backgroundColor: theme.colors.surfaceMuted,
        fontFamily: theme.fonts.body,
      }}
    >
      <p className="italic mb-3">“{verse}”</p>
      <p
        className="text-sm text-right"
        style={{ color: theme.colors.textMuted }}
      >
        — {reference}
      </p>
    </div>
  );
}
