"use client";

import { useState } from "react";

export default function TestimonialsEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [testimonials, setTestimonials] = useState(data);

  const handleChange = (index, field, value) => {
    const updated = [...testimonials];
    updated[index][field] = value;
    setTestimonials(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...testimonials];
    updated[index].img = file;
    updated[index].preview = URL.createObjectURL(file);
    setTestimonials(updated);
  };

  const addTestimonial = () => {
    setTestimonials([
      ...testimonials,
      {
        name: "",
        title: "",
        description: "",
        img: null,
        preview: "",
      },
    ]);
  };

  const removeTestimonial = (index) => {
    const updated = [...testimonials];
    updated.splice(index, 1);
    setTestimonials(updated);
  };

  return (
    <div className="p-8 space-y-12">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-bg-secondary border border-border-primary space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Testimonial #{i + 1}</h2>
            <button
              onClick={() => removeTestimonial(i)}
              className="text-sm text-red-500 cursor-pointer"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Name</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={t.name}
                onChange={(e) => handleChange(i, "name", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-text-muted">Title / Role</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={t.title}
                onChange={(e) => handleChange(i, "title", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-text-muted">Profile Image</label>

            <img
              src={t.preview || null}
              alt="preview"
              className="w-20 h-20 object-cover rounded border"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(i, e.target.files[0])}
              className="text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-text-muted">Testimonial Text</label>
            <textarea
              className="p-3 rounded bg-bg-primary border"
              value={t.description}
              onChange={(e) => handleChange(i, "description", e.target.value)}
              rows={4}
            />
          </div>
        </div>
      ))}

      <button
        onClick={addTestimonial}
        className="px-6 py-3 bg-accent text-black rounded font-semibold cursor-pointer"
      >
        + Add Testimonial
      </button>

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(testimonials, null, 2)}
      </pre>
    </div>
  );
}
