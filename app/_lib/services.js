const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app/api"
    : "http://localhost:3000/api";

export async function getHomePageData() {
  const res = await fetch(BASE_URL + `/homePage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function getPortfolioPageData() {
  const res = await fetch(BASE_URL + `/portfolioPage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function getServicesPageData() {
  const res = await fetch(BASE_URL + `/servicesPage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function getAboutPageData() {
  const res = await fetch(BASE_URL + `/aboutPage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function getContactPageData() {
  const res = await fetch(BASE_URL + `/contactPage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function getProjectData(projectId) {
  const res = await fetch(BASE_URL + `/portfolioPage/` + projectId, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function getAdminData(token) {
  const res = await fetch(BASE_URL + `/admin/get`, {
    cache: "no-store",
    credentials: "include",
    headers: {
      Cookie: `token=${token}`,
    },
  });

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data: data.data };
}

export async function resetData(token) {
  const res = await fetch("http://localhost:3000/api/admin/reset", {
    method: "POST",
    headers: {
      Cookie: `token=${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      error: data.error,
      data: null,
    };
  }

  return { error: data.error, success: data.success };
}

export async function saveData(data, field, token) {
  const res = await fetch("http://localhost:3000/api/admin/edit", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${token}`,
    },
    body: JSON.stringify({ data, field }),
  });

  const saveData = await res.json();

  if (!res.ok) {
    return {
      error: saveData.error,
      success: false,
    };
  }

  return { error: saveData.errorFields, success: saveData.success };
}
