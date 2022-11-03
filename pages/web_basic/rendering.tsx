import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Rendering() {
  // 페이지 넘김 정보
  const prev = "/web_basic/html_css_js";
  const next = "/web_basic/dom";

  const returnStepLogo = (stepNum: number) => {
    return (
      <>
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
               justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
        >
          {stepNum}
        </div>
      </>
    )
  }

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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-1/4 h-full bg-indigo-500"></div>
            </div>
            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                {`렌더링 (Rendering)`}
              </h1>
              <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                {`- 웹 개발을 하면서, 또는 그 웹을 사용하면서 우리는 알게모르게
                  렌더링을 많이 접하고 있어요. 중요한 내용이니 꼭 알고 넘어가도록
                  해요!`}
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
              {`이미지 출처 : kangdari님의 포스트`}
            </a>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              {` 렌더링이란? `}
            </h1>
            <p className="mb-4 leading-relaxed">
              {`웹 브라우저는 HTML문서를 해석하고, 화면을 통해 해석된 결과를 보여줘요.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`HTML, CSS, JavaScript 등 개발자가 작성한 문서를 브라우저에서 그래픽 형태로 출력해 주는 과정이 `}
              <strong>{`렌더링`}</strong>
              {`이에요.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`웹 브라우저가 원본 HTML, CSS, JavaScript문서를 읽어들인 후, 스타일을 입히고 대화형 페이지로 만들어 view port에 표시하기까지의 과정을 `}
              <strong>{`Critical Rendering Path`}</strong>
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
            <div className="w-3/4 h-full bg-indigo-500"></div>
          </div>
          {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
          <div className="flex flex-wrap sm:flex-row flex-col py-6">
            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
              {`렌더링 과정`}
            </h1>
          </div>
          <div className="w-full py-6">
            <img
              className="lg:w-full rounded-lg md:mt-0 mb-12"
              src="/img/rendering_path.png"
              alt="step"
            />
            <div className="lg:w-full md:pl-10 md:py-6">
              {/* 과정 1 */}
              <div className="flex relative pb-12">
                {returnStepLogo(1)}
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {`브라우저는 서버로부터 HTML, CSS 등 웹 사이트에 필요한 리소스를 다운로드 받아요. 이제 사용자에게 출력할 일만 남았어요.`}
                  </p>
                  <p className="leading-relaxed">
                    {`이제 렌더링 엔진은 서버로부터 받은 데이터를 웹 표준화기구인 W3C명세에 따라 해석하는데, 이 해석 과정을 "파싱"이라고 불러요.`}
                  </p>
                </div>
              </div>
              {/* 과정 2 */}
              <div className="flex relative pb-12">
                {returnStepLogo(2)}

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    {`렌더링 엔진은 HTML 문서를 파싱하여, `}
                    <strong>{`DOM 트리`}</strong>
                    {`를 만들어요.`}
                  </p>
                </div>
              </div>
              {/* 과정 3 */}
              <div className="flex relative pb-12">
                {returnStepLogo(3)}

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {`렌더링 엔진은 <style> 태그를 만난다면, HTML파싱 작업을 중지하고, CSS 파싱 작업을 시작하여, `}
                    <strong>{`CSSOM 트리`}</strong>
                    {`를 만들어요.`}
                  </p>

                  <p className="leading-relaxed mb-2">
                    {`이 때, 스타일은 아래에 나열한 순서대로 적용되고, 나중에 처리된 스타일이 우선적으로 적용되요.`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
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
                {returnStepLogo(4)}

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed mb-2">
                    {`DOM 트리와 CSSOM 트리를 결합해 `}
                    <strong>{`렌더 트리`}</strong>
                    {`를 형성해요. 렌더 트리를 생성하는 과정까지를 `}
                    <strong>{`Construction`}</strong>
                    {`이라고 해요.`}
                  </p>
                  <div className="leading-relaxed text-base">
                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                      <li className="mb-1 text-left">{`화면에 드러나지 않는 할당요소는 렌더 트리에 포함되지 않아요.`}</li>
                      <li className="mb-1 text-left">{`렌더 트리에는 페이지를 렌더링 하는데 필요한 노드만 포함되요.`}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 과정 5 */}
              <div className="flex relative pb-12">
                {returnStepLogo(5)}

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 5
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {`HTML 파싱 중, JavaScript를 의미하는 `}
                    <strong>{`<script>`}</strong>
                    {`태그를 만나게 되면, DOM파싱을 중지하고 `}
                    <strong>{`JavaScript 엔진`}</strong>
                    {`에게 제어권한을 넘겨요. 그리고 스크립트를 모두 실행하면, 다시 DOM을 그리기 시작해요.`}
                  </p>
                  <p className="leading-relaxed mb-2">
                    {`브라우저의 JavaScript 엔진은 서버에서 응답한 JavaScript를 파싱하여, `}
                    <strong>{`AST(추상 구문 트리)`}</strong>
                    {`를 생성하고, 바이트코드로 변환하여 실행해요.`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                      <li className="mb-1 text-left">
                        {`서버로부터 응답된 JavaScript 코드는 각각의 의미를 갖는 토큰으로 분해되며, 이 토큰이 결합되어 `}
                        <strong>{`AST`}</strong>
                        {`를 형성해요.`}
                      </li>
                      <li className="mb-1 text-left">
                        {`인터프리터는 생성된 AST를 가상머신이 이해할 수 있는 `}
                        <strong>{`바이트코드`}</strong>
                        {`로 변환해요.`}
                      </li>
                    </ul>
                  </div>
                  <p className="leading-relaxed mb-4">
                    {`이 때, 자바스크립트는 `}
                    <strong>{`DOM API`}</strong>
                    {`를 통해 DOM이나 CSSOM을 변경할 수 있으며, 변경된 DOM과 CSSOM은 다시 `}
                    <strong>{`렌더링 트리`}</strong>
                    {`로 결합되요.`}
                  </p>
                  <p className="leading-relaxed mb-2">
                    {`이 부분에서 `}
                    <strong>{`<script>`}</strong>
                    {`의 위치에 대해 중요한 내용을 아래에 적어봤어요. 꼭 천천히 읽어보고 넘어가도록 해요.`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                      <li className="mb-1 text-left list-decimal">
                        <strong>{`HTML파싱`}</strong>
                        {`은 위에서 아래로 동기적으로 이루어지기 때문에, HTML파싱은 <script>의 위치에 따라 지연될 수 있어요.`}
                      </li>
                      <li className="mb-1 text-left list-decimal">
                        {`JavaScript 코드가 DOM, CSSOM을 변경하여 HTML노드를 생성하는 경우, HTML 파싱이 완료되어 있어야 하기 때문에, <script>는 되도록 `}
                        <strong>{`<body>`}</strong>
                        {`가 끝나는 부분에 위치하는 편이 좋을 수 있어요.`}
                      </li>
                      <li className="mb-1 text-left list-decimal">
                        {`하지만, <script>가 <body> 맨 아래에 위치할 때, 사용자가 JavaScript 코드 파싱 중에 웹 상호작용을 시도한다면 비정상적으로 작동할 수 있어요.`}
                      </li>
                      <li className="mb-1 text-left list-decimal">
                        {`그렇기 때문에 브라우저는 스크립트 파일을 병렬로 불러오는 방식으로 DOM 렌더 과정을 막지 않게 선언할 수 있어요. 이를 가능하게 하는 키워드는 `}
                        <strong>{`async, defer`}</strong>
                        {`가 있어요.`}
                      </li>
                      <li className="ml-8 mb-1 text-left">
                        <strong>{`async`}</strong>
                        {` 스크립트는 <script>를 만나고, DOM 렌더 과정을 방해하지 않도록 스크립트 파일의 로딩을 `}
                        <strong>{`병렬`}</strong>
                        {`로 처리해요.
                         하지만, 파일의 로딩을 마치게 되면 `}
                        <strong>{`그 즉시 DOM 렌더를 멈추고 `}</strong>
                        {`async방식으로 불러온 스크립트 파일의 해석을 시작하기 때문에,
                         실행 순서가 보장되지 않아요. 불러온 스크립트 파일의 해석이 언제 끝날지 모르니까요!`}
                      </li>
                      <li className="ml-8 mb-1 text-left">
                        <strong>{`defer`}</strong>
                        {` 스크립트도 <script>를 만나고, DOM 렌더 과정을 방해하지 않도록 스크립트 파일의 로딩을 `}
                        <strong>{`병렬`}</strong>
                        {`로 처리해요.
                         하지만, defer 스크립트는 `}
                        <strong>{`모든 DOM이 로드된 후에 실행`}</strong>
                        {`되요. 
                         또한, defer 스크립트는 선언한대로 실행순서가 보장되기 때문에, 실제도 더 빨리 로드된 스크립트가 있다 하더라도, 실행은 항상 선언한 순서대로 이루어져요.`}
                      </li>
                      <li className="ml-8 mb-1 text-left">
                        {`따라서, 기본적으로 DOM의 모든 엘리먼트에 접근할 수 있고, 실행 순서도 보장하기 때문에 async보다는 `}
                        <strong>{`defer`}</strong>
                        {`가 범용적으로 사용할 수 있는 속성으로 정리할 수 있어요.`}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 과정 6 */}
              <div className="flex relative pb-12">
                {returnStepLogo(6)}

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 6
                  </h2>
                  <p className="leading-relaxed mb-2">
                    {`렌더링 엔진은 디바이스 view port 내에서, 렌더 트리의 노드들을 화면의 올바른 곳에 표시하기 위해 정확한 위치와 크기를 계산해요.`}
                  </p>
                  <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                    <li className="mb-1 text-left">
                      {`이 단계를 `}
                      <strong>{`레이아웃`}</strong>
                      {` 단계라고 불러요.`}
                    </li>
                    <li className="mb-1 text-left">{`이 작업이 끝나면 렌더링 엔진은 각 요소가 어디에 어떤 크기로 표현되는지 알게 되요.`}</li>
                  </ul>
                </div>
              </div>
              {/* 과정 7 */}
              <div className="flex relative">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                >
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    {`FINISH`}
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {`UI BackEnd는 Render Tree의 노드들을 돌며, UI를 그리는 `}
                    <strong>Paint Event</strong>
                    {`를 발생시켜요.`}
                  </p>
                  <p className="leading-relaxed mb-4">
                    {`그 다음, 노드들의 레이어를 순서대로 구성하는`} <strong>{`Composition`}</strong>{`단계를 거쳐요. 이 과정은 z-index가 낮은 요소를 먼저 놓고, 높은 요소를 놓는 과정으로 생각해주시면 되요.`}
                  </p>
                  <p className="leading-relaxed">
                    {`Layout단계부터 Composition까지의 과정을 `}
                    <strong>Operation</strong>
                    {`이라고 해요.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*3. 리플로우와 리페인트*/}
      <div className="container px-5 py-24 mx-auto">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-full h-full bg-indigo-500"></div>
        </div>
        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
        <div className="flex flex-wrap sm:flex-row flex-col py-6">
          <h1 className="w-full title-font text-2xl font-bold text-gray-900">
            {`리플로우와 리페인트`}
          </h1>
        </div>
        <div className="flex flex-wrap py-6 ">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="block ml-0 m-1 py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest text-center dark:bg-slate-600 dark:text-slate-300 hover:font-semibold">레이아웃이 변경될 때</span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{`리플로우(Reflow)`}</h2>
            <p className="leading-relaxed mb-4">
              {`생성된 DOM 요소의 레이아웃 수치(너비, 높이, 위치 등) 변경 시 영향을 받은 모든 노드의 위치를 다시 계산하는 과정을 의미해요. `}
              <strong>{`레이아웃 단계`}</strong>{`를 다시 수행하는 것으로 생각할 수 있어요.`}
            </p>
            <p className="leading-relaxed mb-2 hidden md:block">
              {`리플로우를 발생시키는 일부 속성들은 아래와 같아요.`}
            </p>
            <table className="table_set hidden md:table">
              <tbody>
                <tr>
                  <td>{`width`}</td>
                  <td>{`height`}</td>
                  <td>{`margin`}</td>
                  <td>{`padding`}</td>
                </tr>
                <tr>
                  <td>{`top`}</td>
                  <td>{`right`}</td>
                  <td>{`left`}</td>
                  <td>{`bottom`}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{`border`}</td>
                  <td>{`border-width`}</td>
                  <td>{`font-size`}</td>
                  <td>{`font-weight`}</td>
                </tr>
                <tr>
                  <td>{`text-align`}</td>
                  <td>{`vertical-align`}</td>
                  <td>{`line-height`}</td>
                  <td>{`font-family`}</td>
                </tr>
                <tr>
                  <td>{`overfiow`}</td>
                  <td>{`white-space`}</td>
                  <td>{`min-height`}</td>
                  <td>{`position`}</td>
                </tr>
              </tbody>
            </table>
            <Learn_More
              url={`https://www.youtube.com/watch?v=XoyWzOh3Sy4`}
              hover_title={`출처 : Code States(권오연 교육 엔지니어)`}
            />


          </div>
          <div className="p-12 md:w-1/2 flex flex-col md:flex-none items-start">
            <div className="flex flex-wrap flex-row flex-shrink-0">
              <span className="block ml-0 m-1 py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest text-center dark:bg-slate-600 dark:text-slate-300 hover:font-semibold">레이아웃이 변경될 때</span>
              <span className="block ml-0 m-1 py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest text-center dark:bg-slate-600 dark:text-slate-300 hover:font-semibold">레이아웃이 변경되지 않을 때 </span>
            </div>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{`리페인트(Repaint)`}</h2>
            <p className="leading-relaxed mb-4">
              {`변경된 요소를 실제로 화면에 그려주는 작업을 리페인트라고 해요.`}
            </p>
            <p className="leading-relaxed mb-4">
              {`만약, 노드의 위치를 재계산하는 리플로우가 발생한다면 `}<strong>{`필연적으로`}</strong> {`리페인트가 실행된다고 볼 수 있어요. `}
            </p>
            <p className="leading-relaxed mb-2 hidden md:block">
              {`리페인트를 발생시키는 대표 속성은 아래와 같아요.`}
            </p>
            <table className="table_set hidden md:table">
              <tbody>
                <tr>
                  <td>{`background`}</td>
                  <td>{`background-image`}</td>
                  <td>{`background-position`}</td>
                  <td>{`background-repeat`}</td>
                </tr>
                <tr>
                  <td>{`background-size`}</td>
                  <td>{`visibilty`}</td>
                  <td className="font-semibold">{`border-radius`}</td>
                  <td className="font-semibold">{`border-style`}</td>
                </tr>
                <tr>
                  <td>{`box-shadow`}</td>
                  <td>{`color`}</td>
                  <td>{`line-style`}</td>
                  <td className="font-semibold">{`outline`}</td>
                </tr>
                <tr>
                  <td>{`outline-style`}</td>
                  <td>{`outline-color`}</td>
                  <td>{`outline-width`}</td>
                  <td>{`text-decoration`}</td>
                </tr>
              </tbody>
            </table>
            <Learn_More
              url={`https://www.youtube.com/watch?v=XoyWzOh3Sy4`}
              hover_title={`출처 : Code States(권오연 교육 엔지니어)`}
            />
          </div>
        </div>
      </div>

      {/*마무리*/}
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <h1 className="sm:text-2xl text-xl font-bold title-font text-center text-gray-900 mb-12">
            그 외 추천 유튜브 영상
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <Recommend_Youtube
              channel_name={`우아한 Tech`}
              video_title={`[10분 테코톡] ☕️ 체프의 브라우저 렌더링`}
              url={`https://www.youtube.com/watch?v=sJ14cWjrNis`}
            />
            <Recommend_Youtube
              channel_name={`코드온`}
              video_title={`웹 브라우저가 하는 일 : 렌더링 6단계 (현업에 적용하는 CS. 4편)`}
              url={`https://www.youtube.com/watch?v=hITJM_t1WWY`}
            />
            <Recommend_Youtube
              channel_name={`아프리카도서관`}
              video_title={`웹 브라우저의 동작 순서 (6분 순삭)`}
              url={`https://www.youtube.com/watch?v=FQHNg9gCWpg`}
            />
          </div>
        </div>
      </section>

      {/*이동하기*/}
      <MoveBtn prev={prev} next={next} />
    </Layout>
  );
}
