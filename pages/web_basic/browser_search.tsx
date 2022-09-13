import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Browser_search() {
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
                <section className="text-gray-600 body-font">
                    {/* 내용 1 : 소개 */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-1/2 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-full text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`브라우저 주소창에 URL을 입력하면?`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 개발자로서 웹이 어떤 과정을 거쳐 우리의 요청을 처리하는 지 정도는 간단히라도 알고 있어야 해요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 전체적인 단계는 간단히 설명하고, 알아두어야 할 세부적인 내용이 있으면 조금 자세히 설명드릴 예정이에요. 양이 그렇게 많지 않으니 `}<strong>가벼운 마음</strong>{`으로 읽어주세요!`}
                                </p>
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
                                {`처리 과정`}
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
                                            {`렌더링 엔진은 HTML 문서를 파싱하여, `}
                                            <strong>{`DOM 트리`}</strong>
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
                                            {`DOM 트리와 CSSOM 트리를 결합해 `}
                                            <strong>{`렌더 트리`}</strong>
                                            {`를 형성해요.`}
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
                                        <p className="leading-relaxed mb-4">
                                            {`HTML 파싱 중, JS를 의미하는 `}
                                            <strong>{`<script>`}</strong>
                                            {`태그를 만나게 되면, DOM파싱을 중지하고 `}
                                            <strong>{`JS엔진`}</strong>
                                            {`에게 제어권한을 넘겨요. 그리고 스크립트를 모두 실행하면, 다시 DOM을 그리기 시작해요.`}
                                        </p>
                                        <p className="leading-relaxed mb-2">
                                            {`브라우저의 JS엔진은 서버에서 응답한 JS를 파싱하여, `}
                                            <strong>{`AST(추상 구문 트리)`}</strong>
                                            {`를 생성하고, 바이트코드로 변환하여 실행해요.`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left">
                                                    {`서버로부터 응답된 JS코드는 각각의 의미를 갖는 토큰으로 분해되며, 이 토큰이 결합되어 `}
                                                    <strong>{`AST`}</strong>
                                                    {`를 형성해요.`}
                                                </li>
                                                <li className="mb-1 text-left">
                                                    {`생성된 AST는 `}
                                                    <strong>{`인터프리터`}</strong>
                                                    {`가 가상머신이 이해할 수 있는 `}
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
                                                    {`JS코드가 DOM, CSSOM을 변경하여 HTML노드를 생성하는 경우, HTML 파싱이 완료되어 있어야 하기 때문에, <script>는 되도록 `}
                                                    <strong>{`<body>`}</strong>
                                                    {`가 끝나는 부분에 위치하는 편이 좋을 수 있어요.`}
                                                </li>
                                                <li className="mb-1 text-left list-decimal">
                                                    {`하지만, <script>가 <body> 맨 아래에 위치할 때, 사용자가 JS코드 파싱 중에 웹 상호작용을 시도한다면 비정상적으로 작동할 수 있어요.`}
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
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        6
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            STEP 6
                                        </h2>
                                        <p className="leading-relaxed mb-2">
                                            {`디바이스 view port 내에서, 노드들의 정확한 위치와 크기를 계산해요.`}
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
                                        <p className="leading-relaxed">
                                            {`렌더링 엔진은 `}
                                            <strong>Paint Event</strong>
                                            {`를 발생시켜 렌더 트리(개별 노드)를 화면에 그려요.`}
                                        </p>
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
