import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
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
