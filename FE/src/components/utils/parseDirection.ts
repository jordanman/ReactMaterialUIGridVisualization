import type { DirectionMap } from "./constant/directions";

export function parseDirection(value: string) {
  const [pos, dirRaw = "North"] = value.trim().split(" ");
  const [x = 0, y = 0] = pos.split(",").map(Number);

  const dir = dirRaw.charAt(0).toUpperCase() + dirRaw.slice(1).toLowerCase();

  return {
    x,
    y,
    direction: dir as DirectionMap,
  };
}
