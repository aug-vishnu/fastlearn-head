import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../styles/styles.css";
import "../styles/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position="top-center" />
      <Head>
        <title>FastLearn</title>
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
