import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // adjust import
import { formatISO } from "date-fns";

export function usePrepNotes(userId: string, weekStart: Date) {
  const weekId = formatISO(weekStart, { representation: "date" });
  const ref = doc(db, "users", userId, "prepNotes", weekId);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  // Load once per week change
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const snap = await getDoc(ref);

      if (!cancelled) {
        if (snap.exists()) {
          setText(snap.data().text ?? "");
        } else {
          setText("");
        }
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [weekId]);

  // Save (debounced-lite)
  useEffect(() => {
    if (loading) return;

    const timeout = setTimeout(() => {
      setDoc(
        ref,
        {
          weekStart: weekId,
          text,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, [text, weekId, loading]);

  return {
    text,
    setText,
    loading,
  };
}
