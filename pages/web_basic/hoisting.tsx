import Layout from "../../components/layout";
import Head from "next/head";

export default function Hoisting() {
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
                                <div className="w-1/3 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`호이스팅(Hoisting)`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- JavaScript를 공부하면서 var, let, const로 선언된 변수들을 한 번 쯤은 보셨을 거에요!
                                    이것들의 차이를 잘 말할 줄 아는 개발자가 되기 위해서는 `}<strong>{`호이스팅(Hoisting)`}</strong>{`에 대해 꼭 알고 있어야 해요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 이것은 `}<strong>{`실행 컨텍스트`}</strong>{`와도 깊은 연관이 있어요. 이 페이지에서는 호이스팅(Hoisting)이 무엇인지, 어떻게 적용되고 있는지 전반적으로 이해 하는 것을 목표로 두도록 해요!`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-8">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-3 text-center">
                            <img
                                className="object-cover object-center rounded mb-1"
                                alt="hero"
                                src="/img/hoisting.png"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
                                {`호이스팅이란?`}
                            </h1>
                            <p className="mb-4 leading-relaxed">
                                {`호이스팅의 의미 자체는`}
                                <strong>{` 코드에 선언된 변수 및 함수를 코드의 상단으로 끌어올려, 해당 변수 및 함수 유효범위의 최상단에 선언하는 것`}</strong>
                                {`으로 정의되고 있어요.`}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                {`자바스크립트에서 소스 코드를 실행하는 과정은 `}<strong>생성 단계</strong>, <strong>실행 단계</strong>{`로 구분할 수 있어요.`}
                            </p>
                            <div className="leading-relaxed text-base mb-8">
                                <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                                    <li className="mb-1 font-semibold text-left">
                                        {`생성 단계`}
                                        <p className="mt-1 mb-2 text-xs font-normal">
                                            {`- 코드를 순차적으로 실행하기 전, 실행 컨텍스트를 생성하면서 여러 식별자들을 스캔하며 준비하는 단계`}
                                        </p>
                                    </li>
                                    <li className="mb-1 font-semibold text-left">
                                        {`실행 단계`}
                                        <p className="mt-1 mb-2 text-xs font-normal">
                                            {`- 스캔 후, 선언문 외의 나머지 코드를 순차적으로 실행하는 단계`}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <p className="mb-4 leading-relaxed">
                                <strong>{`자바스크립트 Parser(엔진)`}</strong>{`는 코드를 실행하기 전에 함수 안을 훑으면서, 실행 가능한 코드를 형상화하고 구분하는 과정을 거쳐요. 이것은 실행 컨텍스트를 위한 과정이에요`}
                            </p>
                            <p className="mb-4 leading-relaxed">
                                {`이 실행 컨텍스트를 위한 과정에서 발생하는 것이 `}
                                <strong>{`호이스팅`}</strong>
                                {`이에요. 즉, 위에서 언급한 `}
                                <strong>{`생성 단계`}</strong>
                                {`에서 스코프 안에 존재하는 `}
                                <strong>{`선언된 식별자들에 대한 정보`}</strong>
                                {`를 기억하기 위해, 아래쪽에 존재하는 내용 중 필요한 변수와 함수의 선언을 스코프 범위의 최상단으로 `}
                                <strong>{`내부적으로 끌어올려 처리`}</strong>
                                {`하는 것이 바로 `}<strong>{`호이스팅`}</strong> {`이라고 볼 수 있어요.`}
                            </p>
                            <p className="mb-4 leading-relaxed">
                                {`스코프 상단에 선언부들이 내부적으로 끌어올려지는 것이기 때문에, 자바스크립트의 모든 선언에는 호이스팅이 일어난다고 볼 수 있어요.`}
                            </p>
                            <p className="mb-4 leading-relaxed">
                                <strong>{`var 변수 선언과 함수 선언문`}</strong>
                                {`은 호이스팅이 정상적으로 동작하는 것으로 보이지만, `}
                                <strong>{`let, const, class를 이용한 선언문`}</strong>
                                {`은 호이스팅이 발생하지 않는 것처럼 동작해요. 이것들을 이제 천천히 살펴보도록 해요. `}
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}