import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config";

export default function Notion({ projectData }) {
  
  const teamUrl = "https://www.notion.so/Study-FrontEnd-Develop-a4e3dbc37feb4f2093b1211be7cd32a2";
  
  return (
    <>
      <Layout>
        <Head>
        <title>FrontendWeb</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-screen">
        {projectData.map((data) => (
            <div className="project-card" key={data.id}>
              <h1 className="font-bold text-2xl ">
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
                <span className="font-semibold">Github</span> : <a href = {data.properties.github.url}> {data.properties.github.url}</a>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Notion</span> : <a href = {teamUrl}> {teamUrl}</a>
              </p>
              <div className="mt-3">
                <p
                  className="
                text-left
                px-2 py-1
                "
                >
                  {/* {data.properties.tag.multi_select[0].name} */}
                  {data.properties.tag.multi_select.map((tagname)=>(
                    <sapn key={tagname.id} className="
                    inline mr-4 px-4 py-2 rounded-md bg-sky-200 
                    dark:bg-sky-500/50  
                    ">
                      {tagname.name}
                    </sapn>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Layout>
    </>
  );
}


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
  projects = projects.results.slice(2);
  const projectData = projects.map((aProject) => aProject);
  return {
    props: {
      projectData: projects,
    },
  };
}
