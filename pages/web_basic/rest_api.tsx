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
                  {`- REST API란, 여러 자원들을 이름으로 표현하여 해당 자원의 상태 및 정보를 주고받는 것을 의미하는 `}<strong>REST</strong>{`를 기반으로 한 API를 의미해요.`}
                </p>
                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                  {`- 이는, 개발자들 사이에서 데이터를 명시/접근/수정을 진행하는 데에 널리 알려지는 개발자들 사이의 약속이기도 해요.`}
                </p>
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                  {`- REST API를 알아보기 전에, CRUD와 REST라는 것이 무엇인지부터 알아보도록 해요.`}
                </p>
              </div>
            </div>
          </div>

          {/* 내용 2 : CRUD */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              {/* bar 길이*/}
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-1/2 h-full bg-indigo-500"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-8">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-3 text-center">
            <img
              className="object-cover object-center rounded mb-1"
              alt="hero"
              src="/img/crud.jpg"
            />
            <a
              className="text-sm"
              title="이동하기"
              href={`https://www.wallarm.com/what/crud-meaning`}
            >
              {`이미지 출처 : wallarm`}
            </a>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              {`CRUD는 무엇일까?`}
            </h1>
            <p className="mb-4 leading-relaxed">
              {`텍스트`}
            </p>
            <p className="mb-2 leading-relaxed">
              {`마지막 줄 텍스트`}
            </p>
            
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
