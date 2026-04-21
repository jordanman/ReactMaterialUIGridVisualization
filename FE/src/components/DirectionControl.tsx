import TextField from "@mui/material/TextField";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function DirectionControl({ value, onChange }: Props) {
  return (
    <div className="ctrl">
      <TextField
        label="Position (x,y, Direction)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
