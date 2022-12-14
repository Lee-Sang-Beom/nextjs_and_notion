import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Webpack_Babel_Polyfill() {
    // 페이지 넘김 정보
    const prev = undefined;
    const next = "/web_basic/scope";

    return (
        <>
            <Layout>
                <Head>
                    <title>FrontendWeb</title>
                    <meta name="description" content="Start Next.Js" />
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
                                        <li className="mb-1 list-decimal">{`웹 애플리케이션 완성 시, 웹 서버에 HTML, CSS, JavaScript 파일을 배포해요`}</li>
                                        <li className="mb-1 list-decimal">{`사용자가 브라우저를 통해 웹 사이트에 접근하면, 브라우저는 사용자에게 웹 사이트를 보여주기 위해 웹 서버에 HTML, CSS, JavaScript 등의 리소스를 요청해요.`}</li>
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
                                        <a href="https://joshua1988.github.io/webpack-guide/" className="text-blue-600">{`여기`}</a>
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
                        <div className="sm:pl-10 pl-0">
                            {/* module */}
                            <div className="flex flex-col mb-2 items-start">
                                <p className="leading-relaxed text-base">
                                    {`- Babel이 탄생하게 된 이유는 `}
                                    <strong>크로스 브라우징</strong>
                                    {`과 관련이 있어요.`}
                                </p>
                            </div>
                            <div className="flex flex-col mb-2 items-start">
                                <p className="leading-relaxed text-base">
                                    - <strong> 크로스 브라우징</strong>
                                    {`은 브라우저 및 플랫폼에 따라 기본적으로 요소들이 보여지는 모습이 다르기 때문에, 이러한 차이를 최소화하기 위한 작업들을 의미해요. 만약 일부 최신 브라우저에만 동작하는 기능을 다른 브라우저에 구현해야 하는 경우가 발생하면, 그 기능을 단순화하거나 생략해야 하는 일이 발생할 수 있어요.`}</p>
                            </div>
                        </div>
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-6 mx-auto flex flex-wrap">
                                {/* introduce */}
                                <div className="lg:w-1/2 w-full mb-5 lg:mb-0 rounded-lg overflow-hidden">
                                    <img alt="feature" className="object-cover object-center h-full w-full" src="/img/babel.png" />
                                </div>
                                <div className="flex flex-col flex-wrap lg:py-6 -mb-5 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                    <div className="flex flex-col mb-5 lg:items-start items-center">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Babel</h2>
                                            <p className="leading-relaxed mb-2 text-base text-start">- 이 이슈를 해결하기 위해 생겨난 툴이 <strong>{`Babel(바벨)`}</strong>이에요.</p>
                                            <p className="leading-relaxed mb-2 text-base text-start">{`- 바벨은 ES6+ 버전 코드를 하위버전 코드로 변환해주는`} <strong>자바스크립트 컴파일러에요.</strong></p>
                                            <p className="leading-relaxed mb-2 text-base text-start">{`- 정리하면, 바벨은 ES6+ 버전의 자바스크립트 코드를 하위버전(ES5)으로 변환함으로써 최신버전의 자바스크립트가 지원되지 않는 다른 브라우저에서도 동작할 수 있도록 하는 자바스크립트 컴파일러에요.`}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="container py-6 mx-auto">
                                {/* step */}
                                <div className="ml-0 md:ml-10 flex flex-col mb-2 items-start">
                                    <p className="leading-relaxed text-base">
                                        {`- Babel의 처리단계는 크게 3단계로 나뉘어요. 사용방법에 대해 자세히 알아보고 싶으시다면 `}
                                        <a href="https://joshua1988.github.io/webpack-guide/" className="text-blue-600">{`여기`}</a>
                                        {`를 클릭해주세요.`}
                                    </p>
                                </div>
                                <div className="my-2 divide-y-2 divide-gray-100">
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="ml-0 md:ml-4 md:w-56 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font dark:text-white">STEP 1</span>
                                            <span className="mt-1 text-gray-500 text-sm dark:text-white">파싱</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="title-font font-medium text-gray-900 text-lg mb-2">코드를 읽고 AST로 변환하는 과정</h2>
                                            <p className="leading-relaxed text-base mb-2">
                                                {`- Babel은 자바스크립트 코드를 받아서 AST를 만들고, 
                                                그걸 활용하여 새로운 자바스크립트 코드를 출력해요.`}
                                            </p>
                                            <p className="leading-relaxed text-base">
                                                {`- AST(추상구문트리)는 프로그래밍 언어 문법에 따라 소스코드의 구조를 나타내는 계층적 프로그램 표현이에요.`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="ml-0 md:ml-4 md:w-56 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font dark:text-white">STEP 2</span>
                                            <span className="mt-1 text-gray-500 text-sm dark:text-white">변환</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="title-font font-medium text-gray-900 mb-2 text-lg">적용된 플러그인을 통해 AST를 탐색하고 변경하는 과정</h2>
                                            <p className="leading-relaxed text-base mb-2">
                                                {`- AST를 변환하는 단계는 사실 Babel의 플러그인이 담당해요. 플러그인은 코드를 어떻게 변환할지에 대한 규칙을 정의해요.`}
                                            </p>
                                            <p className="leading-relaxed text-base mb-2">
                                                {`- 여기서, 플러그인의 묶음을 프리셋(preset)이라 해요.
                                            프리셋을 설정하여 필요한 플러그인들을 목적에 따라 세트로 묶어서 적용하기도 해요.`}

                                            </p>
                                            <p className="leading-relaxed text-base">
                                                {`- 현재 바벨은 env 하나로 합쳐서 편리하게 사용할 수 있어요. 대표적인 프리셋은 ES6+로 변환하는 preset-env가 있어요.`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="ml-0 md:ml-4 md:w-56 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font dark:text-white">STEP 3</span>
                                            <span className="text-sm text-gray-500 dark:text-white">출력</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="title-font font-medium text-gray-900 text-lg mb-2">수정된 AST에서 새로운 코드를 생성하고, 변환된 결과물을 출력하는 과정</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
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
                        <div className="sm:pl-10 pl-0">
                            {/* 개념 */}
                            <div className="flex flex-col mb-2 items-start">
                                <p className="leading-relaxed text-base mb-2 ">
                                    {`- 하지만, Babel만으로는 모든 ES6+ 코드를 변환할 수 없어요.`}
                                </p>
                                <p className="leading-relaxed text-base mb-2 ">
                                    {`- 어떤 ES6+ 문법은 정상적으로 Babel에 의해 컴파일되지만, 어떤 문법은 컴파일되지 못해요. 이 때 필요한 게 Polyfill이에요.`}
                                </p>
                                <p className="leading-relaxed text-base mb-2 ">
                                    {`- MDN에서는 Polyfill를 `}
                                    <strong>{`"이전 브라우저에서 기본적으로 지원하지 않는 최신 기능을 제공하는 데 필요한 코드입니다"`}</strong>
                                    {`라고 정의하고 있어요.`}
                                </p>
                                <p className="leading-relaxed text-base mb-2">
                                    {`- 이 부분에서, Babel과 Polyfill의 개념이 헷갈리기 시작할 수 있어요. 
                                    아래 내용을 보고 정리하도록 해요.`}
                                </p>
                            </div>

                        </div>

                        {/* 차이 */}
                        <div className="flex flex-wrap py-6 ">
                            <div className="p-12 md:w-1/2 flex flex-col items-start">
                                <span className="block ml-0 m-1 py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest text-center dark:bg-slate-600 dark:text-slate-300 hover:font-semibold">구 브라우저에서도 최신 문법을 읽을 수 있게, 문법을 바꿔줘요</span>
                                <h2 className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4 flex">
                                    {`Babel(바벨)`}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                    </svg>
                                </h2>
                                <p className="leading-relaxed mb-2">
                                    {`구 브라우저에서, 최신 자바스크립트 코드를 사용할 수 있도록 변환해주는 컴파일러(트랜스파일러)에요.`}
                                </p>
                                <p className="leading-relaxed mb-2">
                                    {`ES5에서 자바스크립트 문법이 아니었던 ES6+의 문법들을 구 브라우저에서 사용할 수 있도록 변환해줘요.`}
                                </p>
                                <p className="leading-relaxed mb-2">
                                    {`컴파일 시간(Compile-time)에 코드를 구 브라우저에서 사용가능하게 변환해요.`}
                                </p>
                                <Learn_More
                                    url={`https://medium.com/@larkigdrs/babel-babel-polyfill-%EC%99%9C-%EA%B0%99%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C-b5f806ae64a1`}
                                    hover_title={`출처 : lark님의 포스트`}
                                />
                            </div>
                            <div className="p-12 md:w-1/2 flex flex-col md:flex-none items-start">
                                <div className="flex flex-wrap flex-row flex-shrink-0">
                                    <span className="block ml-0 m-1 py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest text-center dark:bg-slate-600 dark:text-slate-300 hover:font-semibold">Babel이 변환하지 못했던 새 객체/함수/메소드를 구 브라우저에서 사용할 수 있게 변환해줘요</span>
                                </div>
                                <h2 className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4 flex">
                                    {`Polyfill(폴리필)`}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                    </svg>
                                </h2>
                                <p className="leading-relaxed mb-2">
                                    {`브라우저가 이해할 수 없는 코드에 대하여, 이해할 수 있는 코드 소스를 제공해줘요.`}
                                </p>
                                <p className="leading-relaxed mb-2 hidden md:block" title="전역 객체: 자바스크립트 실행되기 이전에 생성되는 최상위 객체">
                                    {`ES5의 전역 객체에 포함되지 않은 새로운 객체, 기존 객체의 새 메소드, 새 함수를 변환할 때 필요해요.`}
                                </p>
                                <p className="leading-relaxed mb-2">
                                    {`자바스크립트 문법으로 읽히지만, 정의되지 않은 객체/메소드/함수를 정의해줘요.`}
                                </p>
                                <p className="leading-relaxed mb-2">
                                    {`Babel이 컴파일하지 못한 전역 객체/메소드/함수들을 브라우저에서 실행되는 시점인 실행 시간(Run-time)에 변환해줘요.`}
                                </p>
                                <Learn_More
                                    url={`https://happysisyphe.tistory.com/m/49`}
                                    hover_title={`출처 : 행복한 시지프님의 포스트`}
                                />
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
                            channel_name={`짐코딩의 CODING GYM`}
                            video_title={`Webpack 기초 강좌 | 웹팩 이란 | 모듈번들러 | 프론트엔드 날개달기`}
                            url={`https://www.youtube.com/watch?v=NGVc-zw2FG8`}
                        />
                        <Recommend_Youtube
                            channel_name={`생활코딩`}
                            video_title={`Webpack`}
                            url={`https://www.youtube.com/watch?v=cp_MeXO2fLg&list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA`}
                        />
                        <Recommend_Youtube
                            channel_name={`개발 레시피`}
                            video_title={`[모던웹 개발 - 자바스크립트편] webpack과 babel 설정하기`}
                            url={`https://www.youtube.com/watch?v=LKkg0h7f6-U`}
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
