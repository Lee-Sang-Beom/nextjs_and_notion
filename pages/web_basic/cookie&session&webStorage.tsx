import Layout from "../../components/layout";
import Head from "next/head";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Hoisting() {
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
                                    {`쿠키, 세션, 웹 스토리지`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 기본적으로 HTTP 프로토콜 환경은 "connectionless, stateless"한 특성을 가지기 때문에 이를 보완하기 위해서 쿠키 또는 세션을 사용해요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    <div className="leading-relaxed text-base mb-2">
                                        <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                                            <li className="mb-1 font-semibold text-left">
                                                {`connectionless(비연결성)`}
                                                <p className="mt-1 mb-2 text-xs font-normal">
                                                    {`- 클라이언트가 요청을 한 후, 응답을 받으면, 그 연결을 끊어버려요.`}
                                                </p>
                                            </li>
                                            <li className="mb-1 font-semibold text-left">
                                                {`stateless(무상태)`}
                                                <p className="mt-1 mb-2 text-xs font-normal">
                                                    {`- 통신이 끝나면 상태를 유지하지 않는 특징이 있어요.`}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 웹 스토리지는 쿠키와 달리 자동 전송의 위험성이 없고 클라이언트에 저장만 할 뿐 서버로 전송되지 않아요.`}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 내용 2 : 쿠키 */} {/* py-24 속성 삭제 [220830_1306]*/}
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-1/3 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
                                    {`1. 쿠키(Cookie)`}
                                </h1>

                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`클라이언트(브라우저)에 저장되는 키와 같이 들어있는 작은 파일을 뜻하고 있어요.`}
                                </p>
                                <div className="leading-relaxed text-base sm:pl-5 mb-2 py-2 ">
                                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="mb-1 font-semibold text-left py-1">
                                            {`클라이언트 상태 정보를 로컬에 저장했다가 참조해요!`}

                                        </li>
                                        <li className="mb-1 font-semibold text-left py-1">
                                            {`사용자 인증이 유효한 시간을 명시할 수 있으며, 유효 시간이 정해지면 브라우저가 종료되어도 인증이 유지된다는 특징이 있어요!`}
                                        </li>
                                        <li className="mb-1 font-semibold text-left py-1">
                                            {`쿠키는 클라이언트의 상태 정보를 로컬에 저장했다가 참조해요!`}
                                        </li>
                                    </ul>
                                </div>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-2">
                                    {`Response Header에 Set-Cookie 속성을 사용하면 클라이언트에 쿠키를 만들 수 있어요!`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`쿠키는 사용자가 따로 요청하지 않아도 브라우저가 Request 할 때 Request Header를 자동으로 넣어 서버에 전송해요!`}
                                </p>
                            </div>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                        </div>
                        {/* 내용 2-1 : 쿠키의 특징 */}
                        <p className="leading-relaxed sm:pl-7 mb-4">
                            <strong>{`쿠키의 특징`}</strong>{`은 아래의 내용과 같아요.`}
                        </p>
                        <div className="leading-relaxed text-base mb-2 py-2">
                            <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`이름, 값, 만료일(저장 기간 설정), 경로 정보로 구성되어 있어요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`클라이언트에 총 300개의 쿠키를 저장할 수 있어요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`하나의 도메인 당 20개의 쿠키를 가질 수 있어요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`하나의 쿠키는 4KB(=4096byte)까지 저장 가능해요.`}
                                </li>
                            </ul>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                        </div>
                        {/* 내용 2-2 : 쿠키의 사용 예 */}
                        <p className="leading-relaxed sm:pl-7 mb-4">
                            <strong>{`쿠키의 사용 예`}</strong>{`에 대해 알아볼까요?`}
                        </p>
                        <div className="leading-relaxed text-base mb-2 py-2">
                            <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                <li className="mb-1 font-semibold text-left py-1">
                                    {`방문 사이트에서 로그인 시, "아이디와 비밀번호를 저장하시겠습니까?"`}
                                </li>
                                <li className="mb-1 font-semibold text-left py-1">
                                    {`로그인 하지 않은 상태에서의 쇼핑몰의 장바구니 기능`}
                                </li>
                                <li className="mb-1 font-semibold text-left py-1">
                                    {`자동로그인, 팝업에서 "오늘 더 이상 이 창을 보지 않음" 체크 또는 쇼핑몰의 장바구니"`}
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 내용 3 : 세션*/}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-2/3 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`2. 세션(Session)`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`사용자 정보를 브라우저에서 저장하는 쿠키와 달리, 세션은 서버측에서 관리해요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`서버에서 클라이언트를 구분하기 위해 세션 ID라는 것을 부여하는데, 이를 통해 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때 까지 인증상태를 유지해요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`접속 시간에 제한을 두어, 일정 시간 응답이 없으면 정보가 유지되지 않게 처리할 수 있어요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`데이터를 서버에 두기 때문에, 쿠키보다 보안에 좋다. 하지만 사용자가 많아질수록 서버 메모리를 많이 차지해요.`}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    {/* 내용 2 : 쿠키 */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-2/3 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}

                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
                                    {`1. 쿠키(Cookie)`}
                                </h1>

                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`클라이언트(브라우저)에 저장되는 키와 같이 들어있는 작은 파일을 뜻하고 있어요.`}
                                </p>
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