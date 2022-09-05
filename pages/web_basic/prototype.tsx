import Layout from "../../components/layout";
import Head from "next/head";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Prototype() {
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
                                <div className="w-1/6 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`프로토타입(Prototype)`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 자바스크립트는 `}<strong>{`프로토타입`}</strong>{`을 기반으로 상속을 구현하고 있어요!`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 상속은 불필요한 중복을 제거하고 코드를 재사용하는 부분에서 중요한만큼 `}
                                    <strong>{`프로토타입`}</strong>{`에 대해 더 자세히 알아보아요!`}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 내용 2 : 프로토타입 */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-1/6 h-full bg-indigo-500"></div>
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
                                channel_name={`준비 중`}
                                video_title={`준비 중`}
                                url={`준비 중`}
                            />
                            <Recommend_Youtube
                                channel_name={`준비 중`}
                                video_title={`준비 중`}
                                url={`준비 중`}
                            />
                            <Recommend_Youtube
                                channel_name={`준비 중`}
                                video_title={`준비 중`}
                                url={`준비 중`}
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