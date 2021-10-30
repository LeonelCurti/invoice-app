const getThemeTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#725EF2",
            dark: "#5D4DC4",
          },
          error: { main: "#dc3545" },
          background: {
            default: "#f7f7f7",
            // paper: "#232740",
            dark: "#5e5e5e",
            darker: "#4a4a4a",
            light: "#f9f9f9",
            topMenu: "#232740",
            sideMenu: "#232740",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#725EF2",
            dark: "#5D4DC4",
          },
          error: { main: "#dc3545" },
          background: {
            default: "#151826",
            paper: "#232740",
            light: "#2a2f4e",
            topMenu: "#232740",
            sideMenu: "#232740",
          },
        }),
  },
  typography: {
    useNextVariants: true,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: `${
            mode === "light" ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none"
          }`,
        },
      },
    },
  },
});
export default getThemeTokens;
