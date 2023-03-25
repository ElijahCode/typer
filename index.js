export function convertValueFromString(value) {
  if (typeof value !== "string") return value;

  if (value === "false") return false;
  if (value === "true") return true;

  if (value === "null") return null;
  if (value === "undefined") return undefined;

  const numberVal = Number(value);
  if (!Number.isNaN(numberVal)) return numberVal;
  return value;
}

export function typer(target) {
  const targetKeys = Object.keys(target);
  const result = Array.isArray(target) ? [] : {};

  for (let i = 0; i < targetKeys.length; i += 1) {
    const key = targetKeys[i];
    const value = target[key];

    if (Array.isArray(value) || typeof value === "object") {
      result[key] = typer(value);
    } else {
      result[key] = convertValueFromString(value);
    }
  }

  return result;
}
