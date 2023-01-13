import Layout from "../../components/layout";
import Head from "next/head";
import MoveBtn from "../../components/moveBtn";
import Recommend_Youtube from "../../components/recommend_youtube";
import Learn_More from "../../components/learn_More";

export default function RestApi() {
  // 페이지 넘김 정보
  const prev = undefined;
  const next = undefined;

  return (
    <>
      <Layout>
        <Head>
          <title>FrontendWeb</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*내용 설명*/}
        <section className="text-gray-600 body-font">
          {/* 내용 1 : 소개 */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              {/* bar 길이*/}
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-1/4 h-full bg-indigo-500"></div>
              </div>
              {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0 ">
                  {`REST-API`}
                </h1>
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                  {`- REST API란, ...`}
                </p>
              </div>
            </div>
          </div>

          <div className="container px-5 py-24 mx-auto">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-1/2 h-full bg-indigo-500"></div>
            </div>
            <div className="lg:w-4/6 mx-auto mt-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/html.jpg"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 dark:bg-slate-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-bold title-font mt-4 text-gray-900 text-lg">
                      HTML
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      {`HTML은 건물을 만들기 위한 뼈대로 이해하자!`}
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-base mb-4">
                    {`HTML의 `}
                    <strong>{`HT(HyperText)`}</strong>
                    {`는 일반적인 텍스트를 비순차적으로 접근할 수 있는 방법을 제공해요! 같은 페이지 내의 다른 데이터로 이동할 수도 있고, 다른 페이지로도 이동할 수도 있죠!`}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    {<strong>{`ML(Markup Lanauage)`}</strong>}
                    {`은 웹 브라우저에게 내 컨텐츠를 어떻게 표현해야 하는지를 명령하는 언어에요. <태그> 등을 이용하여, 문서나 데이터를 구조적으로 표시해요. 마크업 언어를 쓰면 아래와 같은 효과를 얻을 수 있어요!`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                      <li className="mb-1 text-left">{`컨텐츠 제작자가 원하는 방법대로 문서를 표현하기 위해 웹 브라우저에게 명령을 내릴 수 있어요!`}</li>
                      <li className="mb-1 text-left">{`구조적인 작성 덕분에, 문서 작성에 대해 협업과 유지보수를 쉽게 할 수 있어요!`}</li>
                      <li className="mb-1 text-left">{`찾기 쉽다는 장점은 검색이 가능하다는 것을 의미하기도 해요. 컴퓨터 또한 마크업 언어의 태그를 통해 정보를 수집할 수 있어요!`}</li>
                    </ul>
                  </div>
                  <p className="leading-relaxed text-base mb-4 ">
                    {`즉, `}
                    {<strong>HTML</strong>}
                    {`은 하이퍼텍스트를 가장 중요한 특징으로 하는 마크업이라는 형식을 가진 언어라고 정리할 수 있어요. 웹 페이지를 만들기 위해 표준적으로 사용되는 마크업 언어이기 때문에, 웹 페이지를 만들 때 꼭 필요하죠.`}
                  </p>

                  <Learn_More
                    url={`https://www.youtube.com/watch?v=8kJwTrs6e-4&list=PLFeNz2ojQZjtQc7mt8E9fNzIh9or34A61`}
                    hover_title={`출처 : 유노코딩`}
                  />
                </div>
              </div>
            </div>
          </div>

        </section>

        {/*마무리*/}
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <h1 className="sm:text-2xl text-xl font-bold title-font text-center text-gray-900 mb-12">
              그 외 추천 유튜브 영상
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <Recommend_Youtube
                channel_name={`얄팍한 코딩사전`}
                video_title={`HTML, CSS, JavaScript가 뭔가요?`}
                url={`https://www.youtube.com/watch?v=ffENjt7aEdc`}
              />
              <Recommend_Youtube
                channel_name={`드림코딩`}
                video_title={`CSS 기초 이론 정리. 포트폴리오 만드는 날까지!`}
                url={`https://www.youtube.com/watch?v=gGebK7lWnCk`}
              />
              <Recommend_Youtube
                channel_name={`드림코딩`}
                video_title={`자바스크립트의 역사와 현재 그리고 미래`}
                url={`https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2`}
              />
            </div>
          </div>
        </section> */}

        {/*이동하기*/}
        {/* <MoveBtn prev={prev} next={next} /> */}
      </Layout>
    </>
  );
}
