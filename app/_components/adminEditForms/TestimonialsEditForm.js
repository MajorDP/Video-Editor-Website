"use client";

import { saveData } from "@/app/_lib/services";
import { validationFns } from "@/app/_lib/validation";
import { useState } from "react";

export default function TestimonialsEditForm({ data = [], onSave }) {
  const [testimonials, setTestimonials] = useState(data);

  const [errorData, setErrorData] = useState(
    data.map((field, index) => {
      return { error: null, field: index };
    }),
  );

  const handleChange = (index, field, value) => {
    const updated = [...testimonials];
    updated[index][field] = value;
    setTestimonials(updated);
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = [...testimonials];

    updated[index].preview = URL.createObjectURL(file);
    updated[index].file = file;
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

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // const handleSave = async () => {
  //   const emptyFields = validationFns["testimonials"](testimonials);

  //   if (emptyFields.length > 0) {
  //     console.log(emptyFields);
  //     setErrorData(emptyFields);
  //   } else {
  //     const { error, success } = await saveData(testimonials, "testimonials");

  //     if (error && !success) {
  //       console.log(error);
  //       setErrorData(error);
  //     } else {
  //       setErrorData([]);
  //       alert("Changes saved successfully!");
  //     }
  //   }
  // };
  const handleSave = async () => {
    const emptyFields = validationFns["testimonials"](testimonials);

    if (emptyFields.length > 0) {
      setErrorData(emptyFields);
      return;
    }

    //process newly added images for projects for backend
    const processedTestimonials = await Promise.all(
      testimonials.map(async (testimonial) => {
        let img = testimonial.img;

        if (testimonial.file) {
          img = await fileToBase64(testimonial.file);
        }

        return {
          ...testimonial,
          img,
          file: undefined,
          preview: undefined,
        };
      }),
    );

    const { error, success } = await saveData(
      processedTestimonials,
      "testimonials",
    );

    if (error && !success) {
      setErrorData(error);
    } else {
      setErrorData([]);
      alert("Changes saved successfully!");
      window.location.reload();
    }
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

            {(t.preview || t.img) && (
              <img
                src={t.preview || t.img}
                alt={t.preview}
                className="mt-2 w-45 h-45 object-cover rounded border"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(i, e)}
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
          {errorData.find((e) => e.field === i)?.error && (
            <p className="text-error mt-2">
              {errorData.find((e) => e.field === i)?.error}
            </p>
          )}
        </div>
      ))}

      <button
        onClick={addTestimonial}
        className="px-6 py-3 bg-accent text-black rounded font-semibold cursor-pointer"
      >
        + Add Testimonial
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
        {JSON.stringify(testimonials, null, 2)}
      </pre>
    </div>
  );
}
