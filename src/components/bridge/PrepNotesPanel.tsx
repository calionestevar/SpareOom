import { useTheme } from "../../theme/ThemeProvider";
import { usePrepNotes } from "../../hooks/usePrepNotes";

interface PrepNotesPanelProps {
  userId: string;
  weekStart: Date;
}

export function PrepNotesPanel({ userId, weekStart }: PrepNotesPanelProps) {
  const { theme } = useTheme();
  const { text, setText, loading } = usePrepNotes(userId, weekStart);

  return (
    <section
      className="rounded-2xl p-6 shadow-sm"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.body,
      }}
    >
      <header className="mb-4">
        <h2
          className="text-lg tracking-wide"
          style={{
            fontFamily: theme.fonts.heading,
            color: theme.colors.textSecondary,
          }}
        >
          Prep Notes
        </h2>
      </header>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        placeholder="Print math worksheets…  
          Bake bread for Tuesday…  
          Library books due Friday…"
        className="
          w-full
          min-h-[160px]
          resize-none
          bg-transparent
          outline-none
          leading-relaxed
          placeholder:opacity-50
        "
        style={{
          fontFamily: theme.fonts.body,
          color: theme.colors.textPrimary,
        }}
      />
    </section>
  );
}
