"use client";

import { saveData } from "@/app/_lib/services";
import { validationFns } from "@/app/_lib/validation";
import { useState } from "react";

export default function ContactEditForm({ data = [], onSave }) {
  const [contactInfo, setContactInfo] = useState(data);

  const [errorData, setErrorData] = useState(
    data.map((_, index) => ({
      field: index,
      error: null,
    })),
  );

  const handleChange = (index, field, value) => {
    const updated = [...contactInfo];
    updated[index][field] = value;
    setContactInfo(updated);
  };

  const handleSocialChange = (parentIndex, index, field, value) => {
    const updated = [...contactInfo];
    updated[parentIndex].socialMedia[index][field] = value;
    setContactInfo(updated);
  };

  const addSocial = (parentIndex) => {
    const updated = [...contactInfo];
    updated[parentIndex].socialMedia.push({ href: "", label: "" });
    setContactInfo(updated);
  };

  const removeSocial = (parentIndex, index) => {
    const updated = [...contactInfo];
    updated[parentIndex].socialMedia.splice(index, 1);
    setContactInfo(updated);
  };

  const handleSave = async () => {
    const emptyFields = validationFns["contactInfo"](contactInfo);

    if (emptyFields.length > 0) {
      setErrorData(emptyFields);
    } else {
      // const { error, success } = await saveData(contactInfo, "contactInfo");
      const { error, success } = await onSave(contactInfo, "contactInfo");

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
      {contactInfo.map((item, parentIndex) => (
        <div key={parentIndex} className="space-y-6">
          {/* Top fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.email}
                onChange={(e) =>
                  handleChange(parentIndex, "email", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Phone</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.phone}
                onChange={(e) =>
                  handleChange(parentIndex, "phone", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Location</label>
              <input
                className="p-3 rounded bg-bg-primary border"
                value={item.location}
                onChange={(e) =>
                  handleChange(parentIndex, "location", e.target.value)
                }
              />
            </div>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Social Media Links</h2>

            {item.socialMedia.map((sm, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  className="flex-1 p-2 rounded bg-bg-primary border"
                  value={sm.label}
                  placeholder="Label"
                  onChange={(e) =>
                    handleSocialChange(parentIndex, i, "label", e.target.value)
                  }
                />

                <input
                  className="flex-2 p-2 rounded bg-bg-primary border"
                  value={sm.href}
                  placeholder="URL"
                  onChange={(e) =>
                    handleSocialChange(parentIndex, i, "href", e.target.value)
                  }
                />

                <button
                  onClick={() => removeSocial(parentIndex, i)}
                  className="px-3 bg-red-500 rounded text-white"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={() => addSocial(parentIndex)}
              className="px-6 py-3 bg-accent text-black rounded font-semibold"
            >
              + Add Social
            </button>
          </div>

          {/* Error display */}
          {errorData.find((e) => e.field === parentIndex)?.error && (
            <p className="text-error">
              {errorData.find((e) => e.field === parentIndex)?.error}
            </p>
          )}
        </div>
      ))}

      <button
        onClick={handleSave}
        className="w-full px-6 py-3 bg-accent rounded font-semibold"
      >
        SAVE CHANGES
      </button>

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(contactInfo, null, 2)}
      </pre>
    </div>
  );
}
