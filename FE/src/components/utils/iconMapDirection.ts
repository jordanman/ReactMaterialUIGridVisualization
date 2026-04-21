import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { DirectionMap } from "./constant/directions";

export const iconMapDirection: Record<DirectionMap, React.ElementType> = {
  North: ArrowUpwardIcon,
  South: ArrowDownwardIcon,
  East: ArrowForwardIcon,
  West: ArrowBackIcon,
};
