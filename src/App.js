import "./styles/App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";
import { ThemeProvider } from "./context/theme.context";
import { InvoicesProvider } from "./context/invoice.context";

function App() {
  return (
    <ThemeProvider>
      <InvoicesProvider>
        <CssBaseline />
        <Routes />
      </InvoicesProvider>
    </ThemeProvider>
  );
}

export default App;
