export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app/api"
    : "http://localhost:3000/api";

export async function getHomePageData() {
  const res = await fetch(`${BASE_URL}/homePage`);

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data };
}

export async function getPortfolioPageData() {
  const res = await fetch(`${BASE_URL}/portfolioPage`);

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data };
}

export async function getServicesPageData() {
  const res = await fetch(`${BASE_URL}/servicesPage`);

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data };
}

export async function getAboutPageData() {
  const res = await fetch(`${BASE_URL}/aboutPage`);

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data };
}

export async function getContactPageData() {
  const res = await fetch(`${BASE_URL}/contactPage`);

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data };
}

export async function getAdminData() {
  const res = await fetch(`${BASE_URL}/admin/get`);

  if (!res.ok) {
    return {
      error: "",
      data: null,
    };
  }

  const data = await res.json();

  return { error: null, data };
}
