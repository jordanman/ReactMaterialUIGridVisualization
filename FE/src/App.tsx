//import { useState } from "react";
import "./styles/App.css";
import { Grid } from "./components/pages/GridTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <section id="header">
          <div className="title">
            <h1>5X5 Grid Visualization</h1>
          </div>
        </section>

        <section id="main">
          <Grid />
        </section>

        <section id="footer">Prepared by: jordan mendoza</section>
      </ThemeProvider>
    </>
  );
}

export default App;
