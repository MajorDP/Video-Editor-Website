"use client";

import { saveData } from "@/app/_lib/services";
import { validationFns } from "@/app/_lib/validation";
import { useState } from "react";

export default function StatsEditForm({ data = [], onSave }) {
  const [stats, setStats] = useState(data);

  const [errorData, setErrorData] = useState(
    data.map((field, index) => {
      return { error: null, field: index };
    }),
  );

  const handleChange = (index, field, value) => {
    const updated = [...stats];
    updated[index][field] = value;
    setStats(updated);
  };

  const handleSave = async () => {
    const emptyFields = validationFns["stats"](stats);

    if (emptyFields.length > 0) {
      setErrorData(emptyFields);
    } else {
      // const { error, success } = await saveData(stats, "stats");
      const { error, success } = await onSave(stats, "stats");

      console.log(error, success);
      if (error && !success) {
        setErrorData(error);
      } else {
        setErrorData([]);
        alert("Changes saved successfully!");
      }
    }
  };

  return (
    <div className="p-8 space-y-8">
      {stats.map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-bg-secondary border border-border-primary space-y-4"
        >
          <h2 className="text-lg font-bold">Stat #{i + 1}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Label</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.label}
                onChange={(e) => handleChange(i, "label", e.target.value)}
              />
              {errorData.find((e) => e.field === i)?.error && (
                <p className="text-error mt-2">
                  {errorData.find((e) => e.field === i)?.error}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Stat Value</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.stat}
                onChange={(e) => handleChange(i, "stat", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        className="cursor-pointer w-full drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
        onClick={handleSave}
      >
        SAVE CHANGES
      </button>
      {errorData[0]?.field === null && errorData[0]?.error && (
        <p className="text-error text-center mt-2">{errorData[0]?.error}</p>
      )}

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(stats, null, 2)}
      </pre>
    </div>
  );
}
