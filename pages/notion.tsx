import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config";


type Props = {
  projectData : object[];
}

const Notion: NextPage<Props> = ({ projectData }) => {
  
  return (
    <>
      <Layout>
        <Head>
        <title>FrontendWeb</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* width : sm(640px) 미만  */}
        <div className="flex flex-col justify-center items-center min-h-screen sm:hidden">
          <span className="m-8 rounded-md border-slate-800 dark:border-white border-y border-dashed p-4" >
          Notion API를 활용한 페이지입니다.
          </span>
          <span className="m-8 text-sm" >
           화면이 보이지 않으면, 가로모드나 데스크탑에서 내용을 확인해보세요.
          </span>
        </div>


        {/* width : sm(640px) 이상  */}
        <div className="min-h-screen hidden sm:block">
        {projectData.map((data:any) => (
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
                <span className="font-semibold">Github</span> {`->`} <a href = {data.properties.github.url}> 이동하기 </a>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Notion</span> {`->`} <a href = {data.properties.notion.url}> 이동하기 </a>
              </p>
              <div className="mt-3">
                <p
                  className="
                text-left
                px-2 py-1
                "
                >
                  {/* {data.properties.tag.multi_select[0].name} */}
                  {data.properties.tag.multi_select.map((tagname:{id:string, name:string, color: string})=>(
                    <span key={tagname.id} className="
                    inline mr-4 px-4 py-2 rounded-md bg-sky-200 
                    dark:bg-sky-500/50  
                    ">
                      {tagname.name}
                    </span>
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

export default Notion;

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
  return {
    props: {
      projectData: projects,
    },
  };
}
