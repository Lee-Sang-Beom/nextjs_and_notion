import Head from "next/head";
import Layout from "../components/layout";

export default function React() {
  return (
    <>
      <Layout>
                <Head>
                    <title>FrontendWeb</title>
                    <meta name="description" content="Start Next.js" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="flex flex-row text-center justify-center w-full h-screen items-center">
                    <span className="animate-pulse font-semibold border-x-2 w-1/2 h-1/6 flex items-center justify-center text-2xl dark:border-white border-black ">준비 중 입니다.</span>
                </div>
            </Layout>
    </>
  );
}
