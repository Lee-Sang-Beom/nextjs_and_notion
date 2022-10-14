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
                                <div className="w-1/3 h-full bg-indigo-500"></div>
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
                </section>
            </Layout>
        </>
    );
}