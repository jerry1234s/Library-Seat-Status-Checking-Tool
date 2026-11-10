import { spaces as defaultSpaces }
  from "../data/spaces";

const STORAGE_KEY =
  "cityu-library-spaces";

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
