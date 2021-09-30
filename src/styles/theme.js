import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#725EF2" },
    secondary: { main: "#e64a19" },
    error: { main: "#FF1654" },
    backgroundInvoicePage: { main: "#151826" },
    mode: "dark",
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
