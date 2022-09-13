import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Browser_search() {
    // 페이지 넘김 정보
    const prev = '/web_basic/process_and_thread';
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
                                    {`- 전체적인 단계는 간단히 설명하고, 알아두어야 할 세부적인 내용이 있으면 조금 자세히 설명드릴 예정이에요. 양이 많지 않으니 `}<strong>가벼운 마음</strong>{`으로 읽어주세요!`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*2. 처리 과정 기술*/}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-full h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`처리 과정`}
                            </h1>
                        </div>
                        <div className="w-full">
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
                                            {`text`}
                                        </p>
                                        <p className="leading-relaxed">
                                            {`text`}
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
                                            {`text`}
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
                                            {`text`}
                                        </p>

                                        <p className="leading-relaxed mb-2">
                                            {`text`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left list-decimal">{`text`}</li>
                                                <li className="mb-1 text-left list-decimal">{`text`}</li>
                                                <li className="mb-1 text-left list-decimal">{`text`}</li>
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
                                            {`text`}
                                        </p>
                                        <div className="leading-relaxed text-base">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left">{`text`}</li>
                                                <li className="mb-1 text-left">{`text`}</li>
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
                                            {`text`}
                                        </p>
                                        <p className="leading-relaxed mb-2">
                                            {`text`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left">
                                                    {`text`}
                                                </li>
                                                <li className="mb-1 text-left">
                                                    {`text`}
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="leading-relaxed mb-4">
                                            {`text`}
                                        </p>
                                        <p className="leading-relaxed mb-2">
                                            {`text`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left list-decimal">
                                                    {`text`}
                                                </li>
                                                <li className="mb-1 text-left list-decimal">
                                                    {`text`}
                                                </li>
                                                <li className="mb-1 text-left list-decimal">
                                                    {`text`}
                                                </li>
                                                <li className="mb-1 text-left list-decimal">
                                                    {`text`}
                                                </li>
                                                <li className="ml-8 mb-1 text-left">
                                                    {`text`}
                                                </li>
                                                <li className="ml-8 mb-1 text-left">
                                                    {`text`}
                                                </li>
                                                <li className="ml-8 mb-1 text-left">
                                                    {`text`}
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
                                            {`text`}
                                        </p>
                                        <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                            <li className="mb-1 text-left">
                                                {`text`}
                                            </li>
                                            <li className="mb-1 text-left">{`text`}</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 과정 7 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        7
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            STEP 7
                                        </h2>
                                        <p className="leading-relaxed mb-2">
                                            {`text`}
                                        </p>
                                        <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                            <li className="mb-1 text-left">
                                                {`text`}
                                            </li>
                                            <li className="mb-1 text-left">{`text`}</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 과정 8 */}
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
                                            {`text`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*마무리*/}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto">
                        <h1 className="sm:text-2xl text-xl font-bold title-font text-center text-gray-900 mb-12">
                            그 외 추천 유튜브 영상
                        </h1>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <Recommend_Youtube
                                channel_name={`아프리카도서관`}
                                video_title={`웹 브라우저의 동작 순서 (6분 순삭)`}
                                url={`https://www.youtube.com/watch?v=FQHNg9gCWpg`}
                            />
                            <Recommend_Youtube
                                channel_name={`널널한 개발자`}
                                video_title={`웹 브라우저에 URL 입력하면 일어나는 일 - 인프라 위주`}
                                url={`https://www.youtube.com/watch?v=GAyZ_QgYYYo`}
                            />
                            <Recommend_Youtube
                                channel_name={`가장 쉬운 웹개발 with Boaz`}
                                video_title={`브라우저에 URL 을 입력하면? CS 기본부터 공부하기`}
                                url={`https://www.youtube.com/watch?v=T2WqQcqssoE`}
                            />
                        </div>
                    </div>
                </section>

                {/*이동하기*/}
                <MoveBtn prev={prev} next={next} />
            </Layout>
        </>
    );
}
