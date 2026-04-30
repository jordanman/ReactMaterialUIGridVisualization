import "./GridTable.css";
import { DirectionControl } from "../DirectionControl";
import { useState } from "react";
import { iconMapDirection } from "../utils/iconMapDirection";
import { parseDirection } from "../utils/parseDirection";
import { validateInput } from "../utils/validateInput";
import { ValidationControl } from "../ValidationControl";
import type { InputProps } from "./props";

export function Grid({ initialInput = "" }: InputProps) {
  const [input, setInput] = useState(initialInput);

  const sizeFiveLayout = 5;

  const { isValid, errors } = validateInput(input);

  const { x, y, direction } = parseDirection(input);

  const Icon = iconMapDirection[direction];

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
                    {Array.from({ length: sizeFiveLayout }).map((_, row) => (
                      <tr key={row}>
                        <td>{sizeFiveLayout - 1 - row}</td>
                        {Array.from({ length: sizeFiveLayout }).map(
                          (_, col) => (
                            <td key={col}>
                              {row === sizeFiveLayout - 1 - y && col === x ? (
                                <span style={{ color: "green" }}>
                                  <Icon />
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      {Array.from({ length: sizeFiveLayout }).map((_, col) => (
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
