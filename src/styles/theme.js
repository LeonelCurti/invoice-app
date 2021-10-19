import { createTheme, responsiveFontSizes } from "@mui/material";
const PRIMARY = {
  // light: "#a98cff",
  main: "#725EF2",
  // dark: "#5D4DC4",
  // contrastText: "#fff",
};

const BACKGROUND = {
  default: "#151826",
  paper: "#232740",
  light:"#2a2f4e",
};

const theme = createTheme({
  palette: {
    primary: { ...PRIMARY },
    error: { main: "#dc3545" },
    mode: "dark",
    background: { ...BACKGROUND },
  },
  typography: {
    useNextVariants: true,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
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
          backgroundImage: "none",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
