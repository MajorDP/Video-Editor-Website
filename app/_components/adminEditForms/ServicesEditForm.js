"use client";
import { saveData } from "@/app/_lib/services";
import { validationFns } from "@/app/_lib/validation";
import { useState } from "react";

export default function ServicesEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [services, setServices] = useState(data);

  const [errorData, setErrorData] = useState(
    data.map((field, index) => {
      return { error: null, field: index };
    }),
  );

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

  const handleSave = async () => {
    const emptyFields = validationFns["services"](services);

    if (emptyFields.length > 0) {
      console.log(emptyFields);
      setErrorData(emptyFields);
    } else {
      // const { error, success } = await saveData(services, "services");
      const { error, success } = await onSave(services, "services");

      if (error && !success) {
        console.log(error);
        setErrorData(error);
      } else {
        setErrorData([]);
        alert("Changes saved successfully!");
      }
    }
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
          {errorData.find((e) => e.field === i)?.error && (
            <p className="text-error mt-2">
              {errorData.find((e) => e.field === i)?.error}
            </p>
          )}
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
        {JSON.stringify(services, null, 2)}
      </pre>
    </div>
  );
}
