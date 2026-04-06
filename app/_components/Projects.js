"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects({ allEdits = [], categories = [] }) {
  const [currCat, setCurrCat] = useState("all");

  const filteredCategories = allEdits.filter((edit) => {
    console.log(edit);
    return currCat == "all"
      ? edit
      : edit.cat.some((categ) => categ.filter === currCat);
  });

  console.log(currCat);
  return (
    <section className="px-4 lg:px-12 xl:px-24 py-24">
      <ul className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 items-center gap-8 text-text-muted">
        <li className="col-span-1 sm:col-span-3 xl:col-span-6">FILTER BY</li>
        {categories.map((cat) => (
          <li
            key={cat.label}
            className={`${cat.filter.includes(currCat) ? "rounded border border-accent text-accent drop-shadow-accent-hover/25 drop-shadow-md bg-accent-hover/20" : "rounded border border-border-secondary bg-bg-secondary hover:border-accent hover:text-accent hover:drop-shadow-accent-hover/25 hover:drop-shadow-md hover:bg-accent-hover/20 duration-200"} cursor-pointer px-4 py-2`}
            onClick={() => setCurrCat(cat.filter)}
          >
            {cat.label.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-20">
        {filteredCategories.map((edit, index) => {
          const colspan = index % 2 === 0 ? "xl:col-span-2" : "";

          return (
            <div
              key={edit.title}
              className={`${index % 2 === 0 ? "xl:col-span-2" : ""} relative h-96 rounded group cursor-pointer`}
            >
              <div className="absolute inset-0 w-full h-full bg-bg-primary z-1 opacity-0 group-hover:opacity-30 duration-200" />

              <Image
                src={edit.img}
                alt={edit.title}
                fill
                className="object-cover rounded"
              />

              <div className="z-20 relative flex flex-col justify-end gap-2 h-full px-4 py-2 tracking-[1.05] overflow-hidden">
                <p
                  className={`${
                    index % 2 === 0 ? "text-[#DD8AFF]" : "text-accent"
                  } text-sm font-semibold`}
                >
                  {edit.type.toUpperCase()}
                </p>

                <h3 className="font-bold text-3xl">
                  {edit.title.toUpperCase()}
                </h3>

                <div className="h-0 group-hover:h-full max-h-fit transition-all duration-200">
                  <p className="text-text-muted opacity-0 group-hover:opacity-100 transition-all duration-200">
                    {edit.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
