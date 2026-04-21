import "./Grid.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DirectionMap } from "../utils/directionMapper";

export function Grid() {
  return (
    <>
      <div className="container">
        <div className="top">North</div>
        <div className="middle">
          <div className="left">West</div>
          <table className="table-grid">
            <tbody>
              <tr>
                <td>-</td>
                <td>Col 0</td>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
                <td>Col 4</td>
              </tr>
              <tr>
                <td>Row 0</td>
                <td>
                  X <ArrowUpwardIcon />
                </td>
                <td>
                  X <ArrowDownwardIcon />
                </td>
                <td>
                  X <ArrowBackIcon />
                </td>
                <td>
                  X <ArrowForwardIcon />
                </td>
                <td>X</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>
                  X{" "}
                  <DirectionMap
                    x_axis={1}
                    y_axis={0}
                    direction={"West"}
                    icon={<ArrowBackIcon />}
                  ></DirectionMap>
                </td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Row 2</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Row 3</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Row 4</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
          <div className="right">East</div>
        </div>
        <div className="bottom">South</div>
      </div>
    </>
  );
}
