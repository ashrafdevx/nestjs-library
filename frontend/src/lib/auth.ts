const TOKEN_KEY = "library_access_token";

export function saveToken(token: string) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(TOKEN_KEY, token);
  document.cookie = `${TOKEN_KEY}=${encodeURIComponent(token)}; path=/; max-age=86400; SameSite=Lax`;
}

export function getToken() {
  if (typeof window === "undefined") {
    return null;
  }

  const storedToken = localStorage.getItem(TOKEN_KEY);
  if (storedToken) {
    return storedToken;
  }

  const cookieToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${TOKEN_KEY}=`));

  if (!cookieToken) {
    return null;
  }

  return decodeURIComponent(cookieToken.split("=")[1]);
}

export function removeToken() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(TOKEN_KEY);
  document.cookie = `${TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
}
