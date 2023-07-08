import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hi Yang</title>
        <meta name="description" content="Yang 的小窩"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
