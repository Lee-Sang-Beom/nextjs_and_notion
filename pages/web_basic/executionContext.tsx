import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";
import Image from "next/image";

export default function Dom() {
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
                </section>


            </Layout>
        </>
    );
}
