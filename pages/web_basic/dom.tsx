import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Dom() {
  // 페이지 넘김 정보
  // const prev = "/web_basic/html_css_js";
  // const next = "/web_basic/dom";
  return (
    <>
      <Layout>
        <Head>
          <title>FrontendWeb</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font">
          {/* 내용 1 : 소개 */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              {/* bar 길이*/}
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-1/5 h-full bg-indigo-500"></div>
              </div>
              {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                  {`시작하기 전에..`}
                </h1>
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                  {`- JavaScript는 웹 브라우저 기반의 객체 위에서 동작해요. 그렇기 때문에 여러분이 웹 개발자를 꿈꾼다면, DOM과 BOM에 대해 자세히 알아야 할 필요가 있어요.`}
                </p>
              </div>
            </div>
            {/* dom, bom 소개시작 */}
            <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
              <div className="sm:w-1/2 mb-10 px-4 ">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="/img/bom.jpg" />
                </div>
                <a
                  className="text-sm"
                  title="이동하기"
                  href={`https://sharryhong.github.io/2016/12/28/javascript-bom/`}
                >
                  {`이미지 출처 : hong's님의 포스트(H-web)`}
                </a>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{`BOM(Browser Object Model)`}</h2>
                <p className="leading-relaxed text-base">{`브라우저와 관련된 객체들의 집합`}</p>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="/img/dom.png" />
                </div>
                <a
                  className="text-sm"
                  title="이동하기"
                  href={`https://sharryhong.github.io/2016/12/28/javascript-dom/`}
                >
                  {`이미지 출처 : hong's님의 포스트(H-web)`}
                </a>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{`DOM(Document Object Model)`}</h2>
                <p className="leading-relaxed text-base">{`XML/HTML와 같은 문서에 접근하기 위한 인터페이스`}</p>
              </div>
            </div>
          </div>

          {/* 내용 2 : BOM */}
          <div className="container px-5 py-24 mx-auto flex flex-col flex-wrap">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-2/5 h-full bg-indigo-500"></div>
            </div>
            <div className="md:flex py-6 md:text-left items-center">
              <h2 className="animate-bounce sm:text-3xl text-2xl text-gray-900 font-bold title-font py-6 mb-2 w-full md:pt-10 md:w-2/5 text-center">
                {`BOM`}
              </h2>
              <div className="w-full md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base mb-4">
                  {`모든 서비스는 웹 브라우저를 바탕으로 실행되기 때문에, 웹 서비스 개발은 브라우저와 밀접한 관련이 있어요.`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  {`이 브라우저와 관련된 객체 집합이 `} 
                  <strong>{`BOM(브라우저 객체 모델)`}</strong>
                  {`이에요. 이것을 이용해서, 브라우저와 관련된 기능을 구성할 수 있어요.`}
                </p>
                <p className="leading-relaxed text-base mb-2">
                  {`아래에서 다룰 `}
                  <strong>{`DOM은`}</strong>
                  {` BOM 중 하나이며, 이 BOM의 최상위객체는 `} 
                  <strong>{`window`}</strong>
                  {`객체에요. window객체는 모든 객체가 소속된 객체이고, 전역 객체이면서 창이나 프레임을 의미해요. 
                  아래와 같은 종류가 존재해요.`}
                </p>
                <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                      <li className="mb-1 font-semibold text-left">
                        {`window.screen`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- 사용자 환경의 디스플레이 객체`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`window.location`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- 현재 페이지의 url을 다루는 객체`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`window.navigator`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- 웹 브라우저 및 브라우저 환경 정보 객체`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`window.history`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- 현재 브라우저가 접근해왔던 url history(기록)`}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <p className="leading-relaxed text-base mb-4">
                  {`참고로, 브라우저에서 제공하는 이 모든 기능을 통틀어 `}<strong>{`Web API`}</strong>{`라고 해요.
                   Web API는 자바스크립트의 기능은 아니지만 자바스크립트 등에 의해 제어될 수 있도록 브라우저에서 제공하고 있어요.`}
                  </p>
                  <Learn_More
                    url={`https://geniee.tistory.com/33`}
                    hover_title={`출처 : realhee님의 포스트`}
                  />
              </div>
            </div>
          </div>

          {/* 내용 3 : DOM */}
          <div className="container px-5 py-24 mx-auto flex flex-col flex-wrap">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-3/5 h-full bg-indigo-500"></div>
            </div>
            <div className="md:flex py-6 md:text-left items-center">
            <h2 className="animate-bounce sm:text-3xl text-2xl text-gray-900 font-bold title-font py-6 mb-2 w-full md:pt-10 md:w-2/5 text-center">
                {`DOM`}
              </h2>
              <div className="w-full md:w-3/5 md:pl-6">
                <p className="leading-relaxed text-base mb-4">
                  {`우리가 웹 사이트에 접속하면, 웹 브라우저는 HTML 문서를 읽어들이고 해석해요.
                   이 브라우저가 HTML코드를 해석하는 과정을 `}<strong>{`"파싱"`}</strong>{`이라 불러요.`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  {`파싱이 완료되면 화면을 통해 해석된 결과물을 보여줘요. 해석한 HTML 코드를 화면에 보여주는 과정을 `}
                  <strong>{`"렌더링"`}</strong>{`이라고 부르고, 해석된 결과물에는 DOM이 존재해요.`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  {`좀 더 자세히 말하자면, 브라우저는 HTML 코드를 해석하여 HTML 요소들을 트리 형태로 구조화하여 표현하는 웹 문서를 생성해요. 
                  이 트리 전체를 `}<strong>{`DOM`}</strong>{`이라 하며, 브라우저는 DOM을 통해 화면에 웹 콘텐츠들을 렌더링하게 되요.`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  <strong>{`DOM(Document Object Model)`}</strong>{`은 HTML/XML 문서의 프로그래밍 interface라고 정의되고 있어요. 즉, 문서와 상호작용할 수 있는 API라고 이해할 수 있어요.`}
                </p>
                <p className="leading-relaxed text-base mb-2">
                  {`DOM은 문서의 구조화된 표현을 제공하며 프로그래밍 언어가 XML/HTML로 작성된 문서 구조에 접근할 수 있는 방법을 제공해요.
                   즉, 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다는 뜻이에요.`}
                </p>
                <div className="leading-relaxed text-base mb-8">
                  <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                    <li className="mb-1 text-left">{`DOM을 구성하는 트리의 요소 하나하나를 `}<strong>{`노드(Node)`}</strong>{`라고 불러요.`}</li>
                    <li className="mb-1 text-left">{`DOM은 `}<strong>{`window.document객체`}</strong>{`에요. 즉, DOM은 window객체의 하위 객체에요.`}</li>
                  </ul>
                </div>
                  <p className="leading-relaxed text-base mb-4">
                  {`우리는 JavaScript와 같은 스크립팅 언어를 이용해 DOM을 수정하고 웹 페이지 요소를 제어할 수 있어요. 
                   이렇게 할 수 있는 이유는, 웹 콘텐츠(HTML요소)를 제어/조작할 수 있는 `}
                   <strong>{`DOM API`}</strong>
                   {`라는 것이 제공되고 있기 때문이에요.`}
                  </p>
                  <Learn_More
                    url={`https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction`}
                    hover_title={`출처 : MDN`}
                  />
              </div>
            </div>
          </div>

          {/* 내용 4 : CRP */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              {/* bar 길이*/}
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-4/5 h-full bg-indigo-500"></div>
              </div>
              {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                <h1 className="sm:w-4/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                  {`CRP(Critical Rendering Path)`}
                </h1>
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                  {`- 웹 브라우저가 원본 HTML문서를 읽어들인 후, 스타일을 입히고 대화형 페이지로 만들어 뷰 포트에 표시하기까지의 과정을 의미해요. 이 과정은 DOM과 밀접한 관련이 있으니, 살펴보고 가도록 해요!`}
                </p>
              </div>
            </div>
            {/*CRP STEP*/}
            <div className="flex-col sm:-ml-18 md:-ml-28">
              {/* step 1 */}
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 mt-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  1
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 22 23" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">파싱</h2>
                    <p className="leading-relaxed text-sm">{`- 브라우저의 렌더링 엔진은 서버로부터 받은 HTML, CSS파일 등을 해석하는 과정을 거쳐요.`}</p>
                  </div>
                </div>
              </div>
              {/* step 2 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  2
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">DOM 트리 구축</h2>
                    <p className="leading-relaxed text-sm">{`- 렌더링 엔진은 HTML 문서를 파싱하여, DOM 트리를 만들어요.`}</p>
                  </div>
                </div>
              </div>
              {/* step 3 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  3
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">CSSOM 트리 구축</h2>
                    <p className="leading-relaxed text-sm">{`- 렌더링 엔진은 <style> 태그를 만나게 되면, HTML파싱을 멈추고 CSS파싱 작업을 시작하여 CSSOM 트리를 구축해요.`}</p>
                  </div>
                </div>
              </div>
              {/* step 4 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  4
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">JS실행</h2>
                    <p className="leading-relaxed mb-1 text-sm">{`- 이 과정은 DOM 트리를 구성하는 과정 사이에 일어날 수도 있어요.`}</p>
                    <p className="leading-relaxed mb-1 text-sm">{`- HTML 파싱 중, JS를 의미하는 <script> 태그나 외부 스크립트 참조 구문을 만나게 되면, DOM 파싱을 중지하고 JS엔진에게 제어 권한을 넘겨 스크립트를 실행해요.`}</p>
                    <p className="leading-relaxed text-sm">{`- 스크립트 실행이 끝나고 나면, 다시 DOM 트리를 그리기 시작해요.`}</p>
                  </div>
                </div>
              </div>
              {/* step5 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  5
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">렌더 트리 구축</h2>
                    <p className="leading-relaxed text-sm">{`- DOM 트리와 CSSOM 트리를 결합해 렌더 트리를 형성해요.`}</p>
                  </div>
                </div>
              </div>
              {/* step6 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  6
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">레이아웃 생성</h2>
                    <p className="leading-relaxed text-sm">{`- 디바이스 viewport 내에서, 노드들의 정확한 위치와 크기를 계산하는 레이아웃 단계를 거쳐요.`}</p>
                  </div>
                </div>
              </div>
              {/* step7 */}
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full mb-10 w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  7
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 -2 25 26" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>

                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 ">
                    <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">페인트</h2>
                    <p className="leading-relaxed mb-1 text-sm">{`- 렌더링 엔진은 Paint Event를 발생시켜요.`}</p>
                    <p className="leading-relaxed text-sm">{`- 해당 단계에서는, 렌더 트리를 탐색하며 레이아웃 단계를 거쳐 알아낸 구성 노드 정보를 이용해, 노드들을 화면에 표현해요.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
