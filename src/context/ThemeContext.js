import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import getThemeTokens from '../styles/theme'

const ColorModeContext = React.createContext();
ColorModeContext.displayName = "colorMode";


const ThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(getThemeTokens(mode))),
    [mode]
  );
  const data = {
    colorMode,
  };

  return (
    <ColorModeContext.Provider value={data}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
export { ThemeProvider };
export default ColorModeContext;
