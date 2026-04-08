"use client";

import { useState } from "react";

export default function ResetButton({ handleReset }) {
  const [error, setError] = useState(null);

  const onClick = async () => {
    const confirmed = confirm(
      "⚠️ WARNING: This will completely overwrite your current website content with the original version as it was handed over to you. " +
        "All edits you have made since then will be permanently lost. " +
        "Press OK to proceed, or Cancel to keep your current data.",
    );
    if (!confirmed) return;

    const userInput = prompt(
      "Type RESET to confirm that you want to overwrite your current website content with the original version.",
    );

    if (userInput !== "RESET") return;

    const { error, success } = await handleReset();

    if (error || !success) {
      setError(error);
    } else {
      setError(null);
      window.location.reload();
    }
  };
  return (
    <>
      {error && <p className="text-error">{error}</p>}
      <button
        onClick={onClick}
        className="cursor-pointer drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
      >
        RESET WEBSITE DATA
      </button>
    </>
  );
}
