import "@/styles/globals.css";
// import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
