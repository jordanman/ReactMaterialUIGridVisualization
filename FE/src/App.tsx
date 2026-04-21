//import { useState } from "react";
import "./styles/App.css";
import { Grid } from "./components/pages/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <ThemeProvider theme={theme}>
        <section id="header">
          <div className="title">
            <h1>5X5 Grid Visualization</h1>
          </div>
        </section>

        <section id="direction">
          <div className="content">
            <div className="lbl">Direction</div>
            <div className="ctrl">
              <TextField defaultValue="0,0 North"></TextField>
            </div>
          </div>
        </section>

        <section id="main">
          <Grid />
        </section>

        <section id="footer">:by jordan mendoza</section>
      </ThemeProvider>
    </>
  );
}

export default App;
