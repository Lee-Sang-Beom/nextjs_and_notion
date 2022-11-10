import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React, { Component } from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

// img
import Image from "next/image";
import jsAndCallstack from "../../public/img/jsAndCallstack.jpg";
import jsAndCallStackCode from "../../public/img/jsAndCallStackCode.jpg";

export default function Dom() {
    // 페이지 넘김 정보
    const prev = undefined;
    const next = undefined;

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
                                    {`설명 과정`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4 mb-1">
                                    - <strong>실행 컨텍스트</strong>{`는 복합적인 개념을 포함하고 있기 때문에, 이번 Section에서는 `}<strong>개념을 환기할 수 있는 예시를 들어가며,</strong>{` 실행 컨텍스트의 내용에 접근해 볼 거에요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mb-1">
                                    {`- 설명은 아래의 순서로 진행하도록 할게요!`}
                                </p>
                            </div>
                        </div>

                        {/* 소개 순서 환기 */}
                        <div className="flex flex-wrap sm:pl-10 pl-2">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                    1. 자바스크립트와 콜 스택
                                </h2>
                                <p className="leading-relaxed text-sm mb-4">
                                    {`> 자바스크립트 코드 수행에 따른 콜 스택 상황 파악하기`}
                                </p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                    2. 호이스팅과 환경 레코드
                                </h2>
                                <p className="leading-relaxed text-sm mb-4">
                                    {`> 환경 레코드의 개념과 호이스팅과의 연관성 파악하기`}
                                </p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                    3. Outer와 스코프체인
                                </h2>
                                <p className="leading-relaxed text-sm mb-4">
                                    {`> Outer와 스코프체인의 연관성 파악하기`}
                                </p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                    4. 실행 컨텍스트란
                                </h2>
                                <p className="leading-relaxed text-sm mb-4">
                                    {`> 이전 과정으로부터 분석한 내용을 토대로 실행 컨텍스트 개념 정리하기`}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/*2. 자바스크립트와 콜 스택*/}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-2/5 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`자바스크립트와 콜 스택`}
                            </h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4 mb-1">
                                {`- 해당 Section에서는 자바스크립트 코드의 실행에 따라 `}<strong>콜 스택</strong>{`이 어떻게 동작하는 지에 대한 예시를 들면서 환기할 예정이에요.`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mb-1">
                                {`- 비동기 처리를 포함한 이벤트 루프와 관련된 사항은 나중에 다뤄보도록 할게요!`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0">
                                {`- 또한, 이제 실행 컨텍스트라는 용어를 사용할텐데, 일단 `}<strong>{`"실행 컨텍스트에는 환경 레코드와 Outer라는 게 들어가는구나"`} </strong>{`라고 이해해주시면 되요!`}
                            </p>
                        </div>
                        <div className="w-full">
                            <div className="w-full px-4 mb-1 flex-col text-center justify-center">
                            <Image src ={jsAndCallStackCode} alt="Code Picture of callstack and js" className="lg:w-full rounded-lg"/>
                            <Image src ={jsAndCallstack} alt="Picture of callstack and js" className="lg:w-full rounded-lg"/>
                            </div>
                            <div className="lg:w-full md:pl-10 py-6">
                                {/* 과정 1 */}
                                <div className="flex relative pb-12">
                                    {returnStepLogo(1)}
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            STEP 1
                                        </h2>
                                        <p className="leading-relaxed mb-4">
                                            {`자바스크립트 코드를 실행시키면, 자바스크립트 엔진은 콜 스택이라는 통에 전역 실행 컨텍스트를 먼저 담습니다`}
                                        </p>
                                        <p className="leading-relaxed">
                                            {`text`}
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
                                        <p className="leading-relaxed mb-4">
                                            {`text`}
                                        </p>
                                        <p className="leading-relaxed">
                                            {`text`}
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
                                            {`text`}
                                        </p>
                                        <p className="leading-relaxed mb-2">
                                            {`이 때, 스타일은 아래에 나열한 순서대로 적용되고, 나중에 처리된 스타일이 우선적으로 적용되요.`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left list-decimal">{`text1`}</li>
                                                <li className="mb-1 text-left list-decimal">{`text2`}</li>
                                                <li className="mb-1 text-left list-decimal">{`text3`}</li>
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
                                        <p className="leading-relaxed mb-4">
                                            {`text`}
                                        </p>
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
                                    {returnStepLogo(5)}
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
                                    </div>
                                </div>

                                {/* 과정 6 */}
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
                                            {`text`}
                                        </p>

                                        <p className="leading-relaxed">
                                            {`text`}

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
