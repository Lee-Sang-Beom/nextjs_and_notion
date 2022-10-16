import Layout from "../../components/layout";
import Head from "next/head";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Scope() {
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
                <section className="text-gray-600 body-font overflow-hidden">
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
                                    {`스코프(Scope)`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- JavaScript뿐 아니라, 많은 프로그래밍 언어들은 스코프의 개념을 아주 많이 활용하고 있어요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 우리는 프로그래밍 언어의 세계에서의 스코프가 기본적으로 `} 
                                    <strong>
                                    변수에 접근할 수 있는 범위
                                    </strong>
                                    {`라는 개념을 내포하고 있음을 알고 넘어갈 필요가 있어요.`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 내용 2 : 스코프 분류 */}
                    <div className="container px-5 py-12 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-1/3 h-full bg-indigo-500"></div>
                        </div>

                        {/* 분류 */}
                        <div className="mb-12">
                            <h1 className="text-2xl font-bold title-font text-gray-900 mt-6 mb-2 ">전역 스코프와 지역 스코프</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                {`- 스코프란, 식별자를 찾아내기 위한 규칙으로 사용되며, 변수에 접근할 수 있는 범위를 의미해요.`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- JavaScript에서의 스코프는 참조 범위에 따라, 아래와 같이 2가지로 분류할 수 있어요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-5 dark:text-slate-700">{`먼저, 코드 어디서나 참조할 수 있는 `}<strong>전역 스코프</strong>{`라는 것이 있어요. 전역 스코프에 있는 변수는 코드 어디서나 참조할 수 있어요.`}</p>
                                        
                                        <p className="leading-relaxed dark:text-slate-700">{`다음으로, 함수 선언 시 만들어지는 블록 내의 스코프로, 함수 자신과 함수 몸체 내에 선언된 하위 함수에서만 참조할 수 있는 `}
                                        <strong>지역 스코프</strong>{`라는 것도 있어요.`}</p>  
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/2 w-full">
                                    <img
                                        alt="content"
                                        className="object-cover object-center mx-auto"
                                        src="/img/globalScope.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 프로세스 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">Process</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 프로세스는 위에서 운영체제로부터 시스템 자원을 할당받는 작업 단위라고 했어요. 좀 더 알아보도록 해요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`실행 파일(프로그램)에게 의미를 부여하기 위해서는 프로그램을 실행해야 해요. 
                                            프로그램을 실행하는 순간 해당 파일은 컴퓨터 메모리에 올라가게 되는데, `}
                                            <strong>{`이 상태의 프로그램을 프로세스라고 말해요.`}</strong>
                                            </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">{
                                        `"프로그램을 실행하려고 운영체제로부터 시스템 자원을 할당받기 때문에, 운영체제로부터 할당받는 작업의 단위구나" 라고 이해하면 되요.`}
                                        </p>
                                        <p className="leading-relaxed dark:text-slate-700">
                                            {`프로그램이 실행되어 파일이 컴퓨터 메모리에 올라간 상태를 동적인 상태라고 말해요. 
                                            즉, 프로세스는 실행되고 있는 동적 상태의 프로그램이에요.`}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`프로세스는 운영체제로부터 여러 시스템 자원을 할당받아요. 그 종류는 다음 사진의 아래부분과 같아요.`}
                                            </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`각 프로세스는 최소 하나의 `} <strong>{`스레드`}</strong>{`를 가져요. 스레드가 무엇인지는 곧 다룰거에요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`각 프로세스는 별도 주소공간에서 실행되며, 일반적으로 다른 프로세스의 변수나 자료구조에 접근할 수 없어요. 
                                            왜냐하면 각 프로세스는 독립적이기 때문이에요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`하지만, 커널 영역에서 프로세스들끼리도 서로 데이터를 주고받는 방법이 존재하긴 해요. 그게 바로 `}<strong>{`IPC(Inter Process Communication)에요.`}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 w-full h-full">
                                    <img
                                        className="object-cover object-center rounded mb-1"
                                        alt="hero"
                                        src="/img/memory.png"
                                    />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </Layout>
        </>
    );
}