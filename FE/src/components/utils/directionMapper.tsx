import type { DirectionMapProps } from "../pages/props";
/* 
export const directionIconMap = {
  North: "ArrowUpward",
  South: "ArrowDownward",
  East: "ArrowForward",
  West: "ArrowBack",
} as const;

const Icon = Icons[directionIconMap.North];
 */
export function DirectionMap({
  x_axis,
  y_axis,
  direction,
  icon,
}: DirectionMapProps) {
  return (
    <div>
      <div>
        Position: {x_axis}, {y_axis}
      </div>
      <div>
        Direction: {direction} {icon}
      </div>
    </div>
  );
}
