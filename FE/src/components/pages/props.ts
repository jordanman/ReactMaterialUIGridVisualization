import type { ReactNode } from "react";

export interface DirectionMapProps {
  x_axis: number;
  y_axis: number;
  direction: "North" | "South" | "East" | "West";
  icon: ReactNode;
}

export interface InputProps {
  initialInput?: string;
}
