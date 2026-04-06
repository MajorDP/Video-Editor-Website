"use client";

import { useState } from "react";

export default function StatsEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [stats, setStats] = useState(data);

  const handleChange = (index, field, value) => {
    const updated = [...stats];
    updated[index][field] = value;
    setStats(updated);
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

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(stats, null, 2)}
      </pre>
    </div>
  );
}
