import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#725EF2" },
    // secondary: { main: "#e64a19" },
    error: { main: "#dc3545" },
    mode: "dark",
    background: {
      default: "#151826",
      paper: "#232740",
    },
  },
  typography: {
    useNextVariants: true,
  },
  zIndex: {
    // appBar: 1200,
    // drawer: 1100,
  },
  components: {
    // MuiCardActionArea: {
    //   styleOverrides: {
    //     root: {
    //       "&:hover $focusHighlight": {
    //         opacity: 0.04,
    //       },
    //       "&$focusVisible $focusHighlight": {
    //         opacity: 0.2,
    //       },
    //     },
    //     focusHighlight: {
    //       opacity: 0,
    //       backgroundColor: "currentcolor",
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:'none'
        },        
      },
    },
  },
});

export default responsiveFontSizes(theme);
