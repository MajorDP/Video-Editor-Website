"use client";

import { useState } from "react";

export default function StackEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [stack, setStack] = useState(data);

  const handleChange = (index, field, value) => {
    const updated = [...stack];
    updated[index][field] = value;
    setStack(updated);
  };

  const addTool = () => {
    setStack([...stack, { label: "", icon: "" }]);
  };

  const removeTool = (index) => {
    const updated = [...stack];
    updated.splice(index, 1);
    setStack(updated);
  };

  return (
    <div className="p-8 space-y-8">
      {stack.map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-bg-secondary border border-border-primary space-y-4"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Tool #{i + 1}</h2>
            <button
              onClick={() => removeTool(i)}
              className="text-sm text-red-500 cursor-pointer"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Tool Name</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.label}
                onChange={(e) => handleChange(i, "label", e.target.value)}
                placeholder="e.g. Photoshop"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">
                Icon (Short Text)
              </label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.icon}
                onChange={(e) => handleChange(i, "icon", e.target.value)}
                placeholder="e.g. Ps"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addTool}
        className="px-6 py-3 bg-accent text-black rounded font-semibold cursor-pointer"
      >
        + Add Tool
      </button>

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(stack, null, 2)}
      </pre>
    </div>
  );
}
