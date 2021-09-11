import { createTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: "#725EF2" },
    secondary: { main: "#e64a19" },
    error: { main: "#FF1654" },
    // background: { default: "#f5f7fb" },
    type: "dark",
  },
  typography: {
    useNextVariants: true,
  },
  zIndex: {
    // appBar: 1200,
    // drawer: 1100,
  },
  overrides: {},
});

export default responsiveFontSizes(theme);
