"use client";
import { useState } from "react";

export default function ServicesEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [services, setServices] = useState(data);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const handleArrayChange = (serviceIndex, field, itemIndex, value) => {
    const updated = [...services];
    updated[serviceIndex][field][itemIndex] = value;
    setServices(updated);
  };

  const addArrayItem = (serviceIndex, field) => {
    const updated = [...services];
    updated[serviceIndex][field].push("");
    setServices(updated);
  };

  const removeArrayItem = (serviceIndex, field, itemIndex) => {
    const updated = [...services];
    updated[serviceIndex][field].splice(itemIndex, 1);
    setServices(updated);
  };

  return (
    <div className="p-8 space-y-12">
      {services.map((service, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-bg-secondary border border-border-primary space-y-6"
        >
          <h2 className="text-xl font-bold">Service #{i + 1}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Title</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={service.title}
                onChange={(e) => handleChange(i, "title", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Icon</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={service.icon}
                onChange={(e) => handleChange(i, "icon", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-text-muted">Description</label>
            <textarea
              className="w-full p-3 rounded bg-bg-primary border"
              value={service.description}
              onChange={(e) => handleChange(i, "description", e.target.value)}
            />
          </div>

          {["features", "process", "deliverables"].map((field) => (
            <div key={field} className="space-y-2">
              <h3 className="font-bold uppercase text-sm text-text-muted">
                {field}
              </h3>

              {service[field].map((item, j) => (
                <div key={j} className="flex gap-2 items-center">
                  <span className="text-xs text-text-muted w-6">{j + 1}.</span>

                  <input
                    className="flex-1 p-2 rounded bg-bg-primary border"
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(i, field, j, e.target.value)
                    }
                  />

                  <button
                    onClick={() => removeArrayItem(i, field, j)}
                    className="px-3 bg-red-500 rounded cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={() => addArrayItem(i, field)}
                className="text-sm text-accent cursor-pointer"
              >
                + Add {field}
              </button>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Turnaround Time</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={service.turnaround}
                onChange={(e) => handleChange(i, "turnaround", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Revisions</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={service.revisions}
                onChange={(e) => handleChange(i, "revisions", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(services, null, 2)}
      </pre>
    </div>
  );
}
