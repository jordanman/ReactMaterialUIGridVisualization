import type { DirectionMap } from "./constant/directions";

export function validateInput(input: string) {
  const errors: string[] = [];

  if (!input.trim()) {
    errors.push("Input cannot be empty.");
    return {
      isValid: false,
      errors,
      data: { x: 0, y: 0, direction: '' },
    };
  }

  const [pos, dirRaw] = input.trim().split(" ");

  const [xStr, yStr] = pos?.split(",") || [];

  const x = Number(xStr);
  const y = Number(yStr);

  const direction = dirRaw as DirectionMap;

  // Validate X
  if (!Number.isInteger(x) || x < 0 || x > 4) {
    errors.push("X must be an integer between 0 and 4.");
  }

  // Validate Y
  if (!Number.isInteger(y) || y < 0 || y > 4) {
    errors.push("Y must be an integer between 0 and 4.");
  }

  // Validate direction
  const DIRECTIONS = ["North", "South", "East", "West"] as const;
  if (!DIRECTIONS.includes(direction)) {
    errors.push("Direction must be North, East, South, or West.");
  }

  return {
    isValid: errors.length === 0,
    errors,
    data: {
      x,
      y,
      direction,
    },
  };
}
