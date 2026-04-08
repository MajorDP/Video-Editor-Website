import crypto from "crypto";

export async function handleLogin(authData) {
  //TODO: Implement auth functionality

  const res = await fetch("http://localhost:3000/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
    credentials: "include",
  });

  const { data, error } = await res.json();

  return { error, data };
}

export function validateToken(token) {
  if (!token?.value) return false;
  const SECRET = process.env.ADMIN_SECRET;

  // recompute the expected hash
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(process.env.EXPECTED_UNHASH) // the original userId or value
    .digest("hex");

  if (token.value === expected) {
    console.log("yes");
  } else {
    console.log(token.value);
    console.log(expected);
    console.log("nova");
  }
  return token.value === expected;
}
