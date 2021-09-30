import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./styles/App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
