import "./GridTable.css";
import { DirectionControl } from "../DirectionControl";
import { useState } from "react";
import { iconMapDirection } from "../utils/iconMapDirection";
import { parseDirection } from "../utils/parseDirection";
import { validateInput } from "../utils/validateInput";
import { ValidationControl } from "../ValidationControl";

export function Grid() {
  const defaultDirection = "0,0 North";
  const [input, setInput] = useState(defaultDirection);

  const sizeFive = 5;

  const { isValid, errors, data } = validateInput(input);

  const { x, y, direction } = parseDirection(input);

  const Icon = iconMapDirection[direction];

  console.log(data);
  return (
    <>
      <div className="container">
        <DirectionControl value={input} onChange={setInput}></DirectionControl>
        <ValidationControl errors={errors}></ValidationControl>
        <div className="content-grid">
          {isValid && (
            <>
              <div className="top">North</div>
              <div className="middle">
                <div className="left">West</div>
                <table className="table-grid">
                  <tbody>
                    {Array.from({ length: sizeFive }).map((_, row) => (
                      <tr key={row}>
                        <td>{sizeFive - 1 - row}</td>
                        {Array.from({ length: sizeFive }).map((_, col) => (
                          <td key={col}>
                            {row === sizeFive - 1 - y && col === x ? (
                              <span style={{ color: "green" }}>
                                <Icon />
                              </span>
                            ) : (
                              ""
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      {Array.from({ length: sizeFive }).map((_, col) => (
                        <td key={`col-${col}`}>{col}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <div className="right">East</div>
              </div>
              <div className="bottom">South</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
