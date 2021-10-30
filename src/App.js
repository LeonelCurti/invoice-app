import "./styles/App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
