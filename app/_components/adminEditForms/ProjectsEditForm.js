"use client";

import { useState } from "react";

export default function ProjectsEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [projects, setProjects] = useState(data);

  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleArrayChange = (projectIndex, field, itemIndex, value) => {
    const updated = [...projects];
    updated[projectIndex][field][itemIndex] = value;
    setProjects(updated);
  };

  const addArrayItem = (projectIndex, field) => {
    const updated = [...projects];
    if (field === "cat") {
      updated[projectIndex][field].push({ filter: "", label: "" });
    } else {
      updated[projectIndex][field].push("");
    }
    setProjects(updated);
  };

  const removeArrayItem = (projectIndex, field, itemIndex) => {
    const updated = [...projects];
    updated[projectIndex][field].splice(itemIndex, 1);
    setProjects(updated);
  };

  const handleFileChange = (index, e) => {
    const updated = [...projects];
    updated[index].img = e.target.files[0]
      ? URL.createObjectURL(e.target.files[0])
      : "";
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        type: "",

        description: "",
        img: "",
        cat: [{ filter: "", label: "" }],
      },
    ]);
  };

  const removeProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  return (
    <div className="p-8 space-y-12">
      {projects.map((project, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-bg-secondary border border-border-primary space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Project #{i + 1}</h2>
            <button
              onClick={() => removeProject(i)}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm cursor-pointer"
            >
              Remove Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Title</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={project.title}
                onChange={(e) => handleChange(i, "title", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Type</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={project.type}
                onChange={(e) => handleChange(i, "type", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-text-muted">Description</label>
            <textarea
              className="w-full p-3 rounded bg-bg-primary border"
              value={project.description}
              onChange={(e) => handleChange(i, "description", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-text-muted">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(i, e)}
            />
            {project.img && (
              <img
                src={project.img}
                alt={project.title}
                className="mt-2 h-32 object-cover rounded"
              />
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={project.featured || false}
              onChange={(e) => handleChange(i, "featured", e.target.checked)}
              id={`featured-${i}`}
            />
            <label
              htmlFor={`featured-${i}`}
              className="text-sm text-text-muted"
            >
              Featured (include in home page)
            </label>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold uppercase text-sm text-text-muted">
              Categories{" "}
              {"(match existing filters to avoid duplicates in portfolio page)"}
            </h3>
            {project.cat.map((item, j) => (
              <div key={j} className="flex gap-2 items-center">
                <input
                  className="flex-1 p-2 rounded bg-bg-primary border"
                  value={item.label}
                  placeholder="Label"
                  onChange={(e) =>
                    handleArrayChange(i, "cat", j, {
                      ...item,
                      label: e.target.value,
                    })
                  }
                />
                <input
                  className="flex-1 p-2 rounded bg-bg-primary border"
                  value={item.filter}
                  placeholder="Filter"
                  onChange={(e) =>
                    handleArrayChange(i, "cat", j, {
                      ...item,
                      filter: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() => removeArrayItem(i, "cat", j)}
                  className="px-3 bg-red-500 rounded text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => addArrayItem(i, "cat")}
              className="text-sm text-accent cursor-pointer"
            >
              + Add Category
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="px-4 py-2 bg-green-500 text-white rounded text-sm cursor-pointer"
      >
        + Add Project
      </button>

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(projects, null, 2)}
      </pre>
    </div>
  );
}
