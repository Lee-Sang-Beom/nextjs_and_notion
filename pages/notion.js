import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config";

export default function Notion({ projectData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-screen">
        {projectData.map((data) => (
            <div className="project-card" key={data.id}>
              <h1 className="font-bold text-2xl">
                {data.properties.name.title[0].plain_text}
              </h1>
              <h3 className="mt-4 text-lg">
                {data.properties.desc.rich_text[0].text.content}
              </h3>
              <p className="mt-4 mb-2">
                <span className="font-semibold">DATE</span> : {" "}
                {data.properties.workField.date.start} ~
                {data.properties.workField.date.end}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Github</span> : {" "}
                {data.properties.github.url}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Notion</span> : {data.url}
              </p>
              <div className="mt-3">
                <p
                  className="
                float-right 
              text-center
              px-2 py-1
              rounded-md bg-sky-200 
              dark:bg-sky-800/50 w-44
              "
                >
                  {data.properties.tag.multi_select[0].name}
                </p>
              </div>
            </div>
          ))}
        </div>

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

  let projects = await res.json();
  projects = projects.results.slice(1);
  console.log(projects);

  const projectData = projects.map((aProject) => aProject);

  console.log(`projectNames : ${projectData}`);

  console.log(projects);
  return {
    props: {
      projectData: projects,
    },
  };
}
