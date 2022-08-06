import Head from "next/head";
import Layout from "../components/layout";

export default function Nextjs() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p> Next.js </p>
      </Layout>
    </>
  );
}
