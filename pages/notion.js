import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config";

export default function Notion({projectsUrl}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>나의 notion 주소 </h1>
        {projectsUrl.map((url)=>(
          <p key={url}> {url} </p>
        ))}
      </Layout>
    </>
  );
}

// 빌드 때 호출되어, 데이터를 미리 가져오고 화면에 렌더링 (딱 한번)
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  const projectUrl = projects.results.map(
    (aProject) => aProject.url
  ).splice(1,3);

  console.log(`projectNames : ${projectUrl}`);

  return {
    props: {
      projectsUrl : projectUrl
    },
  };
}
