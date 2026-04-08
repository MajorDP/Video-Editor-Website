//CONTAINS VALIDATION FOR EACH PIECE OF EDITABLE DATA
export const validationFns = {
  stats: (data) => {
    const errorFields = data
      .map((item, index) => {
        if (typeof item.label !== "string" || typeof item.stat !== "string") {
          return {
            field: index,
            error: "Only text is allowed in these fields.",
          };
        }

        if (!item.label.trim() || !item.stat.trim()) {
          return { field: index, error: "Please fill in all fields." };
        }

        return null;
      })
      .filter(Boolean);

    return errorFields;
  },
  //TODO: add file validation for images
  allEdits: (data) => {
    if (data.length > 10) {
      return [
        {
          field: null,
          error: "Maximum number of projects allowed is 10.",
        },
      ];
    }
    const errorFields = data
      .map((item, index) => {
        if (
          typeof item.title !== "string" ||
          typeof item.type !== "string" ||
          //   typeof item.preview !== "string" ||
          typeof item.description !== "string"
        ) {
          return {
            field: index,
            error:
              "Only text is allowed in these fields (Title, Type, Description).",
          };
        }

        if (
          !item.title.trim() ||
          !item.type.trim() ||
          //   !item.preview.trim() ||
          !item.description.trim()
        ) {
          return {
            field: index,
            error: "Please fill in all fields (Title, Type, Description).",
          };
        }

        if (!item.cat.length > 0) {
          return {
            field: index,
            error: "Please add at least one category for this project.",
          };
        }

        if (
          item.cat.some(
            (category) => !category.label.trim() || !category.filter.trim(),
          )
        ) {
          return {
            field: index,
            error: "Please fill all fields for categories.",
          };
        }

        if (!item.img && !(item.preview && item.file)) {
          return {
            field: index,
            error: "Please add a featured image for this project.",
          };
        }

        const slugify = (str) =>
          str
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "") // remove weird chars
            .replace(/\s+/g, "-") // spaces → dashes
            .replace(/-+/g, "-"); // collapse multiple dashes

        const slug = slugify(item.title);

        if (!slug || slug === "-") {
          return {
            field: index,
            error:
              "Please use letters or numbers in the title. Special characters alone are not allowed.",
          };
        }
      })
      .filter(Boolean);

    // title check for ensuring SEO-focused non-duplicate ids for URLs on /portfolio/[projectId]
    const titleMap = {};

    data.forEach((item, index) => {
      const title = item.title.trim().toLowerCase();

      if (!titleMap[title]) {
        titleMap[title] = [index];
      } else {
        titleMap[title].push(index);
      }
    });

    Object.values(titleMap).forEach((indexes) => {
      if (indexes.length > 1) {
        indexes.forEach((i) => {
          errorFields.push({
            field: i,
            error:
              "Duplicate project title. Titles accross projects must be unique.",
          });
        });
      }
    });

    return errorFields;
  },

  //TODO: add file validation for images
  testimonials: (data) => {
    const errorFields = data
      .map((item, index) => {
        if (
          typeof item.name !== "string" ||
          typeof item.title !== "string" ||
          typeof item.description !== "string"
        ) {
          return {
            field: index,
            error:
              "Only text is allowed in these fields (Name, Title, Description).",
          };
        }

        if (
          !item.name.trim() ||
          !item.title.trim() ||
          !item.description.trim()
        ) {
          return {
            field: index,
            error: "Please fill in all fields (Name, Title, Description).",
          };
        }

        if (!item.img && !(item.preview && item.file)) {
          return {
            field: index,
            error: "Please add a featured image for this project.",
          };
        }

        return null;
      })
      .filter(Boolean);

    return errorFields;
  },

  services: (data) => {
    const errorFields = data
      .map((item, index) => {
        if (
          typeof item.title !== "string" ||
          typeof item.description !== "string" ||
          typeof item.icon !== "string" ||
          typeof item.turnaround !== "string" ||
          typeof item.revisions !== "string"
        ) {
          return {
            field: index,
            error:
              "Only text is allowed in basic fields (Title, Description, Icon, Turnaround, Revisions).",
          };
        }

        if (
          !item.title.trim() ||
          !item.description.trim() ||
          !item.icon.trim() ||
          !item.turnaround.trim() ||
          !item.revisions.trim()
        ) {
          return {
            field: index,
            error:
              "Please fill in all required fields (Title, Description, Icon, Turnaround, Revisions).",
          };
        }

        if (
          !Array.isArray(item.features) ||
          !Array.isArray(item.process) ||
          !Array.isArray(item.deliverables)
        ) {
          return {
            field: index,
            error: "Features, Process, and Deliverables must be arrays.",
          };
        }

        if (
          item.features.length === 0 ||
          item.process.length === 0 ||
          item.deliverables.length === 0
        ) {
          return {
            field: index,
            error:
              "Features, Process, and Deliverables must each have at least one item.",
          };
        }

        const invalidFeature = item.features.some(
          (f) => typeof f !== "string" || !f.trim(),
        );

        const invalidProcess = item.process.some(
          (p) => typeof p !== "string" || !p.trim(),
        );

        const invalidDeliverable = item.deliverables.some(
          (d) => typeof d !== "string" || !d.trim(),
        );

        if (invalidFeature || invalidProcess || invalidDeliverable) {
          return {
            field: index,
            error:
              "All Features, Process, and Deliverables must be non-empty text.",
          };
        }

        return null;
      })
      .filter(Boolean);

    return errorFields;
  },

  experience: (data) => {
    const errorFields = data
      .map((item, index) => {
        if (
          typeof item.title !== "string" ||
          typeof item.company !== "string" ||
          typeof item.date !== "string" ||
          typeof item.description !== "string"
        ) {
          return {
            field: index,
            error:
              "Only text is allowed in these fields (Title, Company, Date, Description).",
          };
        }

        if (
          !item.title.trim() ||
          !item.company.trim() ||
          !item.date.trim() ||
          !item.description.trim()
        ) {
          return {
            field: index,
            error:
              "Please fill in all fields (Title, Company, Date, Description).",
          };
        }

        // Letting Positions be editable without achievements
        // if (!item.achievements.length > 0) {
        //   return {
        //     field: index,
        //     error: "Please add at least one achievement for this position.",
        //   };
        // }

        // If there are achievements, there must be text
        if (item.achievements.some((achievement) => !achievement.trim())) {
          return {
            field: index,
            error: "Please fill all fields for achievements.",
          };
        }

        return null;
      })
      .filter(Boolean);

    return errorFields;
  },

  stack: (data) => {
    const errorFields = data
      .map((item, index) => {
        if (typeof item.label !== "string" || typeof item.icon !== "string") {
          return {
            field: index,
            error: "Only text is allowed in these fields.",
          };
        }

        if (!item.label.trim() || !item.icon.trim()) {
          return { field: index, error: "Please fill in all fields." };
        }

        return null;
      })
      .filter(Boolean);

    return errorFields;
  },

  contactInfo: (data) => {
    const errorFields = data
      .map((item, index) => {
        if (
          typeof item.email !== "string" ||
          typeof item.location !== "string" ||
          typeof item.phone !== "string"
        ) {
          return {
            field: index,
            error:
              "Only text is allowed in these fields (Email, Location, Phone).",
          };
        }

        if (!item.email.trim() || !item.location.trim() || !item.phone.trim()) {
          return {
            field: index,
            error: "Please fill in all fields (Email, Location, Phone).",
          };
        }

        if (
          item.socialMedia.length > 0 &&
          item.socialMedia.some((el) => !el.href.trim() || !el.label.trim())
        ) {
          return {
            field: index,
            error: "Please fill in all fields for your socials.",
          };
        }

        return null;
      })
      .filter(Boolean);

    return errorFields;
  },
};
