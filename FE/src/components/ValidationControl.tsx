import { Alert } from "@mui/material";

type ValidationProps = {
  errors: string[];
};

export function ValidationControl({ errors }: ValidationProps) {
  if (!errors.length) return null;

  return (
    <div className="validation">
      <Alert severity="error" style={{ marginTop: 10 }}>
        {errors.map((err, i) => (
          <div key={i}>{err}</div>
        ))}
      </Alert>
    </div>
  );
}
