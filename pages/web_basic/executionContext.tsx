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
import jsAndHoistingVar from "../../public/img/jsAndHoistingVar.jpg";
import jsAndHoistingLetConst from "../../public/img/jsAndHoistingLetConst.jpg";

export default function Dom() {
    // 페이지 넘김 정보
    const prev = undefined;
    const next = undefined;

    // 설명순서 (index)
    const descOrder = (title: string, desc: string) => {
        return (
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    {title}
                </h2>
                <p className="leading-relaxed text-sm mb-4">
                    {desc}
                </p>
            </div>
        )

    }
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

    // 자바스크립트와 콜 스택 step 내용
    const jsAndCallstackSection = () => {
        return (
            <div className="lg:w-full md:pl-10 py-6">
                {/* 과정 1 */}
                <div className="flex relative pb-12">
                    {returnStepLogo(1)}
                    <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 1
                        </h2>
                        <p className="leading-relaxed mb-4">
                            {`자바스크립트 코드를 실행시키면, 자바스크립트 엔진은 `}<strong>{`콜 스택(Call Stack)`}</strong>{`이라는 통에 `}<strong>전역 실행 컨텍스트</strong>{`를 담아요.`}
                        </p>
                        <p className="leading-relaxed">
                            <strong>{`여기서 콜 스택이란, `}</strong>
                            {`자바스크립트 코드가 실행되며 생성되는 실행 컨텍스트를 저장하는 자료 구조를 의미해요.`}
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
                            {`전역에서 함수 a를 실행시키면, `}<strong>{`함수 a의 실행 컨텍스트를 생성해 콜 스택에 담아요.`}</strong>
                        </p>
                        <p className="leading-relaxed">
                            {`이 때, 콜 스택 안에는 `}<strong>{`가장 최근에 추가된 실행 컨텍스트(함수 a의 컨텍스트)만 활성화`}</strong>{`되게 됩니다.`}
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
                            {`함수 a에서 함수 b가 호출되면, 또 콜 스택에 `}
                            <strong>함수 b의 실행 컨텍스트</strong>
                            {`를 생성해 담습니다.`}
                        </p>
                        <p className="leading-relaxed">
                            {`이 때, 함수 b의 실행이 종료되면 콜 스택에서 `}
                            <strong>함수 b의 실행 컨텍스트</strong>
                            {`는 사라집니다.`}
                        </p>
                    </div>
                </div>
                {/* 과정 4 */}
                <div className="flex relative pb-12">
                    {returnStepLogo(4)}
                    <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 4
                        </h2>
                        <p className="leading-relaxed">
                            {`마찬가지로, 함수 a가 종료되면 콜 스택에서 함수 a의 실행 컨텍스트도 사라집니다.`}
                        </p>
                    </div>
                </div>

                {/* 과정 5 */}
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
                        <p className="leading-relaxed ">
                            {`전역 코드가 마지막 라인까지 실행되면, 전역 실행컨텍스트도 콜 스택에서 사라집니다`}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    // 변수 호이스팅과 환경 레코드 step 내용
    const variableHoisitingAndEnvRecordSection = () => {
        return (
            <div className="lg:w-full md:pl-10 py-6">
                {/* 과정 1 */}
                <div className="flex relative pb-12">
                    {returnStepLogo(1)}
                    <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 1
                        </h2>
                        <p className="leading-relaxed mb-4">
                            {`자바스크립트 코드를 실행시키면, 자바스크립트 엔진은 `}<strong>{`콜 스택(Call Stack)`}</strong>{`이라는 통에 `}<strong>전역 실행 컨텍스트</strong>{`를 담아요.`}
                        </p>
                        <p className="leading-relaxed">
                            <strong>{`여기서 콜 스택이란, `}</strong>
                            {`자바스크립트 코드가 실행되며 생성되는 실행 컨텍스트를 저장하는 자료 구조를 의미해요.`}
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
                            {`전역에서 함수 a를 실행시키면, `}<strong>{`함수 a의 실행 컨텍스트를 생성해 콜 스택에 담아요.`}</strong>
                        </p>
                        <p className="leading-relaxed">
                            {`이 때, 콜 스택 안에는 `}<strong>{`가장 최근에 추가된 실행 컨텍스트(함수 a의 컨텍스트)만 활성화`}</strong>{`되게 됩니다.`}
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
                            {`함수 a에서 함수 b가 호출되면, 또 콜 스택에 `}
                            <strong>함수 b의 실행 컨텍스트</strong>
                            {`를 생성해 담습니다.`}
                        </p>
                        <p className="leading-relaxed">
                            {`이 때, 함수 b의 실행이 종료되면 콜 스택에서 `}
                            <strong>함수 b의 실행 컨텍스트</strong>
                            {`는 사라집니다.`}
                        </p>
                    </div>
                </div>
                {/* 과정 4 */}
                <div className="flex relative pb-12">
                    {returnStepLogo(4)}
                    <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 4
                        </h2>
                        <p className="leading-relaxed">
                            {`마찬가지로, 함수 a가 종료되면 콜 스택에서 함수 a의 실행 컨텍스트도 사라집니다.`}
                        </p>
                    </div>
                </div>

                {/* 과정 5 */}
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
                        <p className="leading-relaxed ">
                            {`전역 코드가 마지막 라인까지 실행되면, 전역 실행컨텍스트도 콜 스택에서 사라집니다`}
                        </p>
                    </div>
                </div>
            </div>
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
                            {descOrder(`1. 자바스크립트와 콜 스택`, `> 자바스크립트 코드 수행에 따른 콜 스택 상황 파악하기`)}
                            {descOrder(`2. 호이스팅과 환경 레코드`, `> 환경 레코드의 개념과 호이스팅과의 연관성 파악하기`)}
                            {descOrder(`3. Outer와 스코프체인`, `> Outer와 스코프체인의 연관성 파악하기`)}
                            {descOrder(`4. 실행 컨텍스트란`, `> 이전 과정으로부터 분석한 내용을 토대로 실행 컨텍스트 개념 정리하기`)}
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
                                {`- 지금부터는 `}<strong>실행 컨텍스트</strong>{`라는 용어를 사용할텐데, 일단 `}<strong>{`"실행 컨텍스트는 뭔지 잘 모르겠지만, 여기에는 환경 레코드와 Outer라는 게 들어가는구나!"`} </strong>{`라고 이해해주시면 되요!`}
                            </p>
                        </div>
                        <div className="w-full">
                            <div className="w-full px-4 mb-1 flex-col text-center justify-center">
                                <Image src={jsAndCallStackCode} alt="Code Picture of callstack and js" className="lg:w-full rounded-lg" />
                                <Image src={jsAndCallstack} alt="Picture of callstack and js" className="lg:w-full rounded-lg" />
                            </div>
                            {jsAndCallstackSection()}
                        </div>
                    </div>

                    {/*3. 호이스팅 발생과 실행 컨텍스트*/}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-3/5 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`호이스팅 발생과 실행 컨텍스트`}
                            </h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4 mb-1">
                                {`- 호이스팅 현상이 발생하는 이유는 선언문이 있는 코드라인을 물리적으로 최상단으로 끌어올린 게 아니라, `}
                                <strong>{`자바스크립트 엔진이 먼저 전체 코드를 스캔하면서 변수같은 정보를 실행 컨텍스트 어딘가에 미리 기록해놓기 때문`}</strong>
                                {`이에요.`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0">
                                {`- 이 때 정보를 기록해 놓는곳이 `}
                                <strong>{`환경 레코드(environment record)이고`}</strong>
                                {`, 이는 식별자와 식별자에 바인딩된 값을 기록해두는 객체라고 이해하시면 되요.`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0">
                                - <strong>{` 호이스팅`}</strong>
                                {`이 무엇인지 잘 모르겠다면, `}
                                <Link href="./hoisting">
                                    {`"여기"`}
                                </Link>
                                {`를 클릭해주세요.`}
                            </p>
                        </div>
                        <div className="w-full">
                            <div className="w-full px-4 mb-1 flex-col text-center justify-center">
                                <Image src={jsAndHoistingVar} alt="Code Picture of callstack and js" className="lg:w-full rounded-lg" />
                    
                            </div>
                            {variableHoisitingAndEnvRecordSection()}
                        </div>

                    </div>

                </section>

            </Layout>
        </>
    );
}
