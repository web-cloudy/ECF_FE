import "@/styles/globals.css";
// import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from '@mui/material'

// Create the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#009045'
    }
  }
})

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize styles */}
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Provider>
  );
}
