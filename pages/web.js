import Head from "next/head";
import Layout from "../components/layout";
import WebMain from "../components/web_main";

export default function Web() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <WebMain />
      </Layout>
    </>
  );
}
