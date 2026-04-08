"use client";

import { saveData } from "@/app/_lib/services";
import { validationFns } from "@/app/_lib/validation";
import { useState } from "react";

export default function ExperienceEditForm({ data = [], onSave }) {
  const [experience, setExperience] = useState(data);

  const [errorData, setErrorData] = useState(
    data.map((field, index) => {
      return { error: null, field: index };
    }),
  );

  const handleChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handleAchievementChange = (expIndex, achIndex, value) => {
    const updated = [...experience];
    updated[expIndex].achievements[achIndex] = value;
    setExperience(updated);
  };

  const addAchievement = (expIndex) => {
    const updated = [...experience];
    updated[expIndex].achievements.push("");
    setExperience(updated);
  };

  const removeAchievement = (expIndex, achIndex) => {
    const updated = [...experience];
    updated[expIndex].achievements.splice(achIndex, 1);
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        title: "",
        company: "",
        date: "",
        description: "",
        achievements: [],
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = [...experience];
    updated.splice(index, 1);
    setExperience(updated);
  };

  const handleSave = async () => {
    const emptyFields = validationFns["experience"](experience);

    if (emptyFields.length > 0) {
      console.log(emptyFields);
      setErrorData(emptyFields);
    } else {
      // const { error, success } = await saveData(experience, "experience");

      const { error, success } = await onSave(experience, "experience");

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
      {experience.map((exp, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-bg-secondary border border-border-primary space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Role #{i + 1}</h2>
            <button
              onClick={() => removeExperience(i)}
              className="text-sm text-red-500 cursor-pointer"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Job Title</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={exp.title}
                onChange={(e) => handleChange(i, "title", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Company</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={exp.company}
                onChange={(e) => handleChange(i, "company", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-text-muted">Date Range</label>
            <input
              className="p-3 rounded bg-bg-primary border"
              value={exp.date}
              onChange={(e) => handleChange(i, "date", e.target.value)}
              placeholder="e.g. 2022 - Present"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-text-muted">Description</label>
            <textarea
              className="p-3 rounded bg-bg-primary border"
              value={exp.description}
              onChange={(e) => handleChange(i, "description", e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-text-muted">
              Achievements
            </h3>

            {exp.achievements.map((ach, j) => (
              <div key={j} className="flex gap-2 items-center">
                <span className="text-xs text-text-muted w-6">{j + 1}.</span>

                <input
                  className="flex-1 p-2 rounded bg-bg-primary border"
                  value={ach}
                  onChange={(e) =>
                    handleAchievementChange(i, j, e.target.value)
                  }
                />

                <button
                  onClick={() => removeAchievement(i, j)}
                  className="px-3 bg-red-500 rounded cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={() => addAchievement(i)}
              className="text-sm text-accent cursor-pointer"
            >
              + Add achievement
            </button>
            {errorData.find((e) => e.field === i)?.error && (
              <p className="text-error mt-2">
                {errorData.find((e) => e.field === i)?.error}
              </p>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="px-6 py-3 bg-accent text-black rounded font-semibold cursor-pointer"
      >
        + Add Role
      </button>

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
        {JSON.stringify(experience, null, 2)}
      </pre>
    </div>
  );
}
