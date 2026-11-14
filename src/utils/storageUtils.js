import { spaces as defaultSpaces }
  from "../data/spaces";

const STORAGE_KEY =
  "cityu-library-spaces";

const LAST_UPDATED_KEY =
  "cityu-library-last-updated";

export function getSpaces() {

  const savedData =
    localStorage.getItem(
      STORAGE_KEY
    );

  if (!savedData) {
    return defaultSpaces;
  }

  try {

    return JSON.parse(savedData);

  }
  catch {

    return defaultSpaces;

  }

}

export function saveSpaces(
  spaces
) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(spaces)
  );

}

export function resetSpaces() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(defaultSpaces)
  );

}
export function getLastUpdated() {

  return localStorage.getItem(
    LAST_UPDATED_KEY
  );

}

export function updateLastUpdated() {

  const now =
    new Date().toLocaleString(
      [],
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }
    );

  localStorage.setItem(
    LAST_UPDATED_KEY,
    now
  );

}
