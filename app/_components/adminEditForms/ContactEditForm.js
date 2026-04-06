"use client";

import { useState } from "react";

export default function ContactEditForm({ data = [], onSave }) {
  //TODO: ADD SAVE FUNCTIONALITY
  const [contactInfo, setContactInfo] = useState(data);

  const handleChange = (field, value) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleSocialChange = (index, field, value) => {
    const updated = [...contactInfo.socialMedia];
    updated[index][field] = value;
    setContactInfo({ ...contactInfo, socialMedia: updated });
  };

  const addSocial = () => {
    setContactInfo({
      ...contactInfo,
      socialMedia: [...contactInfo.socialMedia, { href: "", label: "" }],
    });
  };

  const removeSocial = (index) => {
    const updated = [...contactInfo.socialMedia];
    updated.splice(index, 1);
    setContactInfo({ ...contactInfo, socialMedia: updated });
  };

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-text-muted">Email</label>
          <input
            className="p-3 rounded bg-bg-primary border"
            value={contactInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-text-muted">Phone</label>
          <input
            className="p-3 rounded bg-bg-primary border"
            value={contactInfo.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-text-muted">Location</label>
          <input
            className="p-3 rounded bg-bg-primary border"
            value={contactInfo.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Social Media Links</h2>
        {contactInfo.socialMedia.map((sm, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              className="flex-1 p-2 rounded bg-bg-primary border"
              value={sm.label}
              placeholder="Label (e.g. Github)"
              onChange={(e) => handleSocialChange(i, "label", e.target.value)}
            />
            <input
              className="flex-2 p-2 rounded bg-bg-primary border"
              value={sm.href}
              placeholder="URL"
              onChange={(e) => handleSocialChange(i, "href", e.target.value)}
            />
            <button
              onClick={() => removeSocial(i)}
              className="px-3 bg-red-500 rounded text-white cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          onClick={addSocial}
          className="px-6 py-3 bg-accent text-black rounded font-semibold cursor-pointer"
        >
          + Add Social
        </button>
      </div>

      <pre className="bg-black text-white p-4 rounded text-xs overflow-auto">
        {JSON.stringify(contactInfo, null, 2)}
      </pre>
    </div>
  );
}
