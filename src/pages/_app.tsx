import * as React from 'react';
import { CartProvider } from "@/CartContext";
import ResponsiveAppBar from "@/components/Navbar";
import Container from '@mui/material/Container';
import type { AppProps } from "next/app";
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Tooltip } from '@mui/material';








const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function ThemeSwitcher() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
    <div className="ModoOscuro" style={{ color:"white", backgroundImage: "url(/imagen/Menu1.jpg)" }} 
    >
    <Tooltip title="Modo Oscuro">
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Tooltip>
      </div>
    </>
  );
}



export default function App({ Component, pageProps }: AppProps) {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      // create custom theme
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#FE0018',
          },
          secondary: {
            main: '#810004',
          },
        },
      }),
    [mode],
  );



  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <ResponsiveAppBar />
            <Container style={{
              marginTop: "65px", padding: 0 , marginRight: 0, marginLeft: 0, minWidth: "100%"
            }}>
              <ThemeSwitcher />
              <Component {...pageProps} />
            </Container>
          </CartProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
