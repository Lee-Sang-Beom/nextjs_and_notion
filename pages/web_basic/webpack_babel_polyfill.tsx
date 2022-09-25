import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";
import BringImage from "../../components/step_bring_Image";

export default function Webpack_Babel_Polyfill() {
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
                                <div className="w-1/6 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-full text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`Webpack, Babel, Polyfill`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 해당 페이지에서는 `}
                                    <strong> {`Webpack, Babel, Polyfill`} </strong>
                                    {`의 등장과 전반적인 개념적 내용을 소개해드릴 예정이에요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 추가적인 사용방법은 따로 다루지 않을거에요. 대신, 추천 영상 및 포스트로 이동하실 수 있도록 내용을 소개드릴게요.`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*2. webpack */}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-1/3 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`Webpack`}
                            </h1>
                            <div className="sm:pl-10 pl-0 mt-4">
                                {/* module */}
                                <div className="flex flex-col mb-4 items-start">
                                    <p className="leading-relaxed text-base">{`- 코드의 재사용/유지보수를 위해 파일을 분리한 것을 `}
                                        <strong>모듈</strong>
                                        {`이라고 해요. 자주 사용하는 코드는 모듈로 분리하는 것이 좋다는 것 정도는 알고 계실거에요. 하지만, 개발 편의성을 위해 모듈을 너무 많이 만들면 어떻게 될까요?`}</p>
                                </div>

                                {/* see step */}
                                <div className="flex flex-col mb-2 items-start">
                                    <p className="leading-relaxed text-base">
                                        {`- `}
                                        <strong>{`저희가 웹 애플리케이션을 만들고, `}</strong>
                                        {`사용자가 저희의 웹 사이트를 보려할 때 내부적으로 아래와 같은 과정이 발생해요.`}</p>
                                </div>
                                <div className="leading-relaxed text-base mb-6">
                                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                        <li className="mb-1 list-decimal">{`웹 애플리케이션 완성 시, 웹 서버에 HTML, CSS, JS 파일을 배포해요`}</li>
                                        <li className="mb-1 list-decimal">{`사용자가 브라우저를 통해 웹 사이트에 접근하면, 브라우저는 사용자에게 웹 사이트를 보여주기 위해 웹 서버에 HTML, CSS, JS 등의 리소스를 요청해요.`}</li>
                                        <li className="mb-1 list-decimal">{`웹 서버는 리소스를 포함해 응답해요. 이 과정이 끝나면 비로소 사용자는 웹 사이트를 볼 수 있게 되요.`}</li>
                                    </ul>
                                </div>

                                {/* problem */}
                                <div className="flex flex-col mb-2 items-start">
                                    <p className="leading-relaxed text-base">
                                        {`- `}
                                        <strong>{`그런데 만약 모듈이 너무 많아지면, `}</strong>
                                        {`아래와 같은 문제가 발생하게 되요.`}
                                    </p>
                                </div>
                                <div className="leading-relaxed text-base">
                                    <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                        <li className="mb-1 list-decimal">{`모듈이 많으면 그만큼 서버에 요청하는 HTTP 통신횟수가 많아져요.`}</li>
                                        <li className="mb-1 list-decimal">{`페이지 로딩시간과 네트워크 비용이 증가해요.`}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap">
                            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex flex-col">
                                <img alt="feature" className="object-center h-full w-full" src="/img/webpack.jpg" />
                                <a
                                    className="text-sm text-center pt-1"
                                    title="이동하기"
                                    href={`https://codex.so/webpack-tutorial`}
                                >
                                    {`이미지 출처 : Khaydarov Murod님의 포스트(H-web)`}
                                </a>
                            </div>

                            <div className="flex flex-col flex-wrap py-3 lg:py-0 -mb-10 lg:w-1/2 lg:pl-12 text-left">
                                <div className="flex flex-col mb-4 lg:items-start items-center">
                                    <p className="leading-relaxed text-base">
                                        {`위의 문제를 해결하기 위해, 서버로 요청하는 HTTP 개수가 감소되도록, 
                                        개발할 때는 모듈로 나눠 개발하고 
                                        웹 서버에 배포할 때는 하나의 파일로 묶어 배포하는 방법을 생각할 수 있어요.`}
                                    </p>
                                </div>
                                <div className="flex flex-col mb-4 lg:items-start items-center">
                                    <p className="leading-relaxed text-base">
                                        {`여기서, 여러 모듈을 하나로 묶는 작업을 `}
                                        <strong>{`번들(Bundle)`}</strong>
                                        {`이라고 하고, 묶어주는 도구를 `}
                                        <strong>{`모듈 번들러(Module Bundler)`}</strong>
                                        {`라고 해요. 
                                        Webpack은 이 모듈 번들러의 하나에요.`}</p>
                                </div>
                                <div className="flex flex-col lg:items-start items-center">
                                    <p className="leading-relaxed text-base">
                                        <strong>{`즉, Webpack은 여러 파일을 하나의 파일로 묶는 모듈 번들러 중 하나라고 정리할 수 있어요. `}</strong>
                                    {`모듈 번들러는 프론트엔드 측에서 서버로 HTTP 요청 시, 요청 개수를 줄여줌으로써 `}
                                    <strong>성능을 향상</strong>
                                    {`시키고, 공백 등을 없애므로 `}
                                    <strong>리소스</strong>
                                    {`를 최적화시켜줘요. 이와 같은 이유로 사용자 경험이 좋아져요. 더 궁금한 내용이 있다면 `}
                                    <a href="https://joshua1988.github.io/webpack-guide/">{`"여기"`}</a>
                                    {`를 클릭해주세요. 추천하는 포스트에요!`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*3. babel */}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-2/3 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`Babel`}
                            </h1>
                        </div>
                        <div className="w-full">

                        </div>
                    </div>

                    {/*4. polyfill */}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-full h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`Polyfill`}
                            </h1>
                        </div>
                        <div className="w-full">

                        </div>
                    </div>

                </section>

                {/*이동하기*/}
                <MoveBtn prev={prev} next={next} />
            </Layout>
        </>
    );
}
