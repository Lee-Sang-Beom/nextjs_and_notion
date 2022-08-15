import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";

export default function Rendering() {
  return (
    <Layout>
      <Head>
        <title>FrontendWeb</title>
        <meta name="description" content="Start Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*내용 설명*/}
      <section className="text-gray-600 body-font">
        {/* 내용 1 : 소개 */}
        <div className="container px-5 py-24 mx-auto md:flex-row flex-col items-center">
          <div className="flex flex-col">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-1/4 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                {`렌더링 (Rendering)`}
              </h1>
              <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                - 웹 개발을 하면서, 또는 그 웹을 사용하면서 우리는 알게모르게
                렌더링을 많이 접하고 있어요. 중요한 내용이니 꼭 알고 넘어가도록
                해요!
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-8">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-3 text-center">
            <img
              className="object-cover object-center rounded mb-1"
              alt="hero"
              src="/img/rendering_main.png"
            />
            <a
              className="text-sm"
              title="이동하기"
              href={`https://velog.io/@ksh4820/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9B%90%EB%A6%AC`}
            >
              이미지 출처 : kangdari님의 포스트
            </a>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              렌더링이란?
            </h1>
            <p className="mb-4 leading-relaxed">
              {`웹 브라우저는 HTML문서를 해석하고, 화면을 통해 해석된 결과를 보여줘요.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`HTML, CSS, JS 등 개발자가 작성한 문서를 브라우저에서 그래픽 형태로 출력해 주는 과정이 `}
              <span className="font-bold">렌더링</span>
              {`이에요.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`웹 브라우저가 원본 HTML, CSS, JS문서를 읽어들인 후, 스타일을 입히고 대화형 페이지로 만들어 View port에 표시하기까지의 과정을 `}
              <span className="font-bold">{`Critical Rendering Path`}</span>
              {`라고 불러요.`}
            </p>
            <p className="mb-2 leading-relaxed">
              {`브라우저마다 렌더링을 수행하는 렌더링 엔진이라는 것을 가지는데, 그 종류는 아래와 같아요.`}
            </p>
            <div className="leading-relaxed text-base mb-8">
              <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                <li className="mb-1 text-left">{`크롬 : 블링크(Blink)`}</li>
                <li className="mb-1 text-left">{`사파리 : 웹킷(Webkit)`}</li>
                <li className="mb-1 text-left">{`파이어폭스 : 게코(Gecko)`}</li>
              </ul>
            </div>
          </div>
        </div>

        {/*2. 렌더링 과정 기술*/}
        <div className="container px-5 py-24 mx-auto">
          {/* bar 길이*/}
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/2 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap w-full mt-10">
            <img
              className="lg:w-3/5 md:w-1/2 h:1/2 object-cover object-center rounded-lg md:mt-0 mb-12"
              src="/img/rendering_path.png"
              alt="step"
            />
            <div className="lg:w-2/5 md:w-1/2 md:pl-10 md:py-6">
              {/* 과정 1 */}
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font text-sm"
                >
                  1
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    {`브라우저는 서버로 부터 HTML, CSS 등 웹 사이트에 필요한 리소스를 다운로드 받아요.`}
                  </p>
                </div>
              </div>
              {/* 과정 2 */}
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                >
                  2
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    {`렌더링 엔진은 HTML 문서를 파싱하여, `}{" "}
                    <span className="font-bold">DOM 트리</span>
                    {`를 만들어요.`}
                  </p>
                </div>
              </div>
              {/* 과정 3 */}
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                >
                  3
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {`외부 CSS 파일과 함께 포함된 스타일 요소를 파싱하여, `}
                    <span className="font-bold">CSSOM 트리</span>
                    {`를 만들어요.`}
                  </p>

                  <p className="leading-relaxed mb-2">
                    {`이 때, 스타일은 아래에 나열한 순서대로 적용되고, 나중에 처리된 스타일이 우선적으로 적용되요.`}
                  </p>
                  <div className="leading-relaxed text-base">
                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                      <li className="mb-1 text-left list-decimal">{`브라우저의 자체 스타일`}</li>
                      <li className="mb-1 text-left list-decimal">{`사용자 정의 스타일`}</li>
                      <li className="mb-1 text-left list-decimal">{`HTML태그에 적용된 스타일`}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 과정 4 */}
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                >
                  4
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed mb-2">
                    {`DOM트리와 CSSOM을 결합해 `}
                    <span className="font-bold">렌더링 트리</span>
                    {`를 형성해요.`}
                  </p>
                  <div className="leading-relaxed text-base">
                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                      <li className="mb-1 text-left">{`화면에 드러나지 않는 할당요소는 렌더링 트리에 포함되지 않아요.`}</li>
                      <li className="mb-1 text-left">{`렌더링 트리에는 페이지를 렌더링 하는데 필요한 노드만 포함되요.`}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 과정 5 */}
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                >
                  5
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 5
                  </h2>
                  <p className="leading-relaxed mb-2">
                    {`디바이스 viewport 내에서, 노드들의 정확한 위치와 크기를 계산해요.`}
                  </p>
                  <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                    <li className="mb-1 text-left">
                      {`이 단계를 `}
                      <span className="font-bold">레이아웃</span>
                      {` 단계라고 불러요.`}
                    </li>
                    <li className="mb-1 text-left">{`이 작업이 끝나면 렌더링 엔진은 각 요소가 어디에 어떤 크기로 표현되는지 알게 되요.`}</li>
                  </ul>
                </div>
              </div>
              {/* 과정 6 */}
              <div className="flex relative">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                >
                  6
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    {`렌더링 엔진은 `}
                    <span className="font-bold">Paint Event</span>
                    {`를 발생시켜 렌더링 트리(개별 노드)를 화면에 그려요.`}
                  </p>
                </div>
              </div>
              <div className = "w-full text-right pt-4">
              <a
              className="text-sm"
              title="이동하기"
              href={`https://alledy.netlify.app/posts/critical-rendering-path-1/`}
            >
              이미지 출처 : Kang DaYoung님의 포스트
            </a>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
