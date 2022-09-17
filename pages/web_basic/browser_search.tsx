import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";
import BringImage from "../../components/step_bring_Image";

export default function Browser_search() {
    // 페이지 넘김 정보
    const prev = '/web_basic/process_and_thread';
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
                                <div className="w-1/2 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-full text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`브라우저 주소창에 URL을 입력하면?`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 개발자로서 웹이 어떤 과정을 거쳐 우리의 요청을 처리하는 지 정도는 간단히라도 알고 있어야 해요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 전체적인 단계는 간단히 설명하고, 알아두어야 할 세부적인 내용이 있으면 조금 자세히 설명드릴 예정이에요. 양이 많지 않으니 `}<strong>가벼운 마음</strong>{`으로 읽어주세요!`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*2. 처리 과정 기술*/}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-full h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full title-font text-2xl font-bold text-gray-900">
                                {`처리 과정`}
                            </h1>
                        </div>
                        <div className="w-full">
                            <div className="lg:w-full md:pl-10 md:py-6">
                                {/* 과정 1 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font text-sm"
                                    >
                                        1
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            {`사용자가 주소창에 이동하기를 원하는 도메인을 입력한다.`}
                                        </h2>
                                        <p className="leading-relaxed mb-4">
                                            {`- 특정 웹사이트에 접속하기 위해서 도메인이 아닌 IP 주소가 필요해요. 모든 URL들에는 고유의 IP 주소가 지정되어있는데, 이 IP 주소를 통해서 해당 웹사이트를 호스팅하고 있는 서버 컴퓨터에 접근할 수 있어요. `}
                                        </p>
                                        <p className="leading-relaxed mb-4">
                                            <strong>{`- DNS(Domain Name System)`}</strong>{`은(는) URL의 이름과 IP주소를 저장하고 있는 데이터베이스에요. 도메인의 Hostname을 IP주소로 바꾸거나, 반대의 변환을 수행할 수 있도록 도와줘요.`}
                                        </p>
                                        <p className="leading-relaxed">
                                            {`- 내용을 정리해보면, `}
                                            <strong>{`"사용자가 특정 URL을 입력하면, 그에 매핑되는 DNS에 저장된 IP주소를 얻게 되고, 브라우저는 해당 과정을 통해 해당 IP주소로 접속할 수 있게 되는 것이다."`}</strong>
                                            {` 정도에요. 일단 해당 단계에서는 사용자가 브라우저 주소창에 URL을 입력한다는 과정이라고 이해하고 넘어가도록 해요.`}
                                        </p>
                                    </div>
                                </div>
                                {/* 과정 2 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        2
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            {`브라우저는 캐싱된 DNS기록이 있는지 체크한다.`}
                                        </h2>
                                        <p className="leading-relaxed mb-2">
                                            <strong>{`- DNS`}</strong>{`기록을 찾기 위해서, 브라우저는 네 개의 캐시를 확인해요. 그 순서는 아래와 같아요.`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left list-decimal">{`우선 `}<strong>브라우저 캐시</strong>{`를 확인해요. 브라우저는 내가 이전에 방문한 웹 사이트의 DNS기록을 일정 기간 저장해요.`}</li>
                                                <li className="mb-1 text-left list-decimal">{`브라우저 캐시에서 원하는 DNS 기록을 찾지 못하면, 브라우저는 `}<strong>OS 캐시</strong>{`를 확인해요. 이 과정은 브라우저가 OS에 System Call을 통해 DNS기록을 가져와요.`}</li>
                                                <li className="mb-1 text-left list-decimal">{`OS 캐시에서 원하는 DNS 기록을 찾지 못하면, 브라우저는 `}<strong>라우터 캐시</strong>{`를 확인해요.`}</li>
                                                <li className="mb-1 text-left list-decimal">{`라우터 캐시에서 원하는 DNS 기록을 찾지 못하면, 마지막으로 `}<strong>ISP 캐시</strong>{`를 확인해요. ISP는 인터넷 서비스 제공자, 즉 인터넷 서비스를 제공하는 주체를 의미해요`}</li>
                                            </ul>
                                        </div>
                                        <p className="leading-relaxed mb-4">
                                            {`- 여기서 `}<strong>캐시</strong>{`란, 자주 사용하는 데이터나 값을 미리 복사해 놓은 임시 장소로, 네트워크 트래픽을 조절하고 데이터 전송 시간을 줄여줘요.`}
                                        </p>
                                    </div>
                                </div>
                                {/* 과정 3 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        3
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            {`요청한 URL이 캐시에 없으면 ISP의 DNS server가 재귀적으로 도메인 이름을 찾는다.`}
                                        </h2>
                                        <BringImage
                                            img_path = {`/img/Recursive_Search.png`}
                                            from_user = {`nesoy`}
                                            from_url = {`https://nesoy.github.io/articles/2018-06/What-happens-search-google`} />
                                        
                                        <p className="leading-relaxed mb-4">
                                            {`만약 캐시에 사용자가 입력한 URL과 관련된 DNS기록이 없으면, ISP의 DNS서버는 `}<strong>Root DNS</strong>{`에게 해당 도메인에 해당하는 IP주소를 어디서 찾을 수 있는지 물어보며 조회해요.`}
                                        </p>
                                        <p className="leading-relaxed mb-4">
                                            {`만약에 [.com]으로 끝나는 도메인이면, Root DNS는 [.com]으로 끝나는 도메인들을 담당하는 `}<strong>Top-Level 서버</strong>{`의 IP주소를 반환해요.`}
                                        </p>
                                        <p className="leading-relaxed mb-4">
                                            {`이후, Top-Level서버에게 같은 방법으로 요청하고, google.com으로 끝나는 도메인 정보를 가진 `}<strong>Second-Level 서버</strong>{`의 IP주소를 반환해요. 이렇게 원하는 IP주소를 얻을 때까지 검색을 반복해요.`}
                                        </p>
                                        <p className="leading-relaxed">
                                            {`이렇게 재귀적으로, 여러 다른 DNS 서버들을 검색하며 연결하기를 원하는 사이트의 IP 주소를 찾는 과정을 `}<strong>Recursive Search</strong>{`라고 불러요.`}
                                        </p>
                                    </div>
                                </div>
                                {/* 과정 4 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        4
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        {`브라우저가 서버와 TCP Connection을 진행한다.`}
                                        </h2>
                                        <p className="leading-relaxed mb-4">
                                            {`브라우저가 원하는 IP주소를 얻게 되면, 해당 IP주소를 가진 서버와 `}<strong>TCP Connection</strong>{`을 시도해요. 이 TCP Connection이 완료되면 `}
                                            <strong>HTTP 통신을 진행할 수 있어요.</strong>
                                        </p>
                                        <p className="leading-relaxed mb-4">
                                            {`클라이언트와 서버 간에 데이터가 오가기 위해서는 TCP Connection 상태가 되어야 해요.
                                              이 상태를 만들기 위해, 클라이언트와 서버는 `}<strong>TCP/IP three-way handshake</strong>{`라는 프로세스를 사용해요.`}
                                        </p>
                                        <BringImage
                                            img_path = {`/img/three_way_handshake.png`}
                                            from_user = {`초록양파`}
                                            from_url = {`https://sjlim5092.tistory.com/35`} />
                                        <p className="leading-relaxed mb-2">
                                            <strong>TCP</strong>
                                            {`는 장치들 사이에 논리적인 접속을 성립(establish)하기 위해 사용하는(신뢰성을 중시하는) 프로토콜이에요. 
                                            위의 사진과 함께, TCP/IP three-way handshake를 이해하기 쉽게 설명해볼게요.`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left list-decimal">{`클라이언트는 서버에게 접속 요청을 한다는 메시지인 `}
                                                    <strong> SYN 패킷</strong>
                                                    {`을 보내요. 이 때, 클라이언트는 서버로부터 SYN/ACK 패킷을 받기를 기다리는 상태가 되는데, 이 상태가 `}
                                                    <strong>SYN_SENT에요.</strong>
                                                    </li>
                                                <li className="mb-1 text-left list-decimal">{`서버는 SYN요청을 받고 클라이언트에게 요청을 수락한다는 `}
                                                    <strong>ACK와 SYN 패킷</strong>
                                                    {`을 전송해요. 그리고 다시 클라이언트가 ACK 패킷을 보내주기를 기다리는 상태가 되는데, 이 상태가 `}
                                                    <strong>SYN_RECEIVED에요</strong>
                                                    </li>
                                                <li className="mb-1 text-left list-decimal">
                                                    {`클라이언트가 서버로부터 SYN/ACK 패킷을 받으면, 다시 서버에게 ACK 패킷을 보내요. `}
                                                    <strong>{`이 때부터 논리적 연결(establish)이 이루어지고, 데이터가 오갈 수 있는 상태가 되요.`}</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* 과정 5 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        5
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            {`브라우저가 웹 서버에게 HTTP Request를 한다.`}
                                        </h2>
                                        <p className="leading-relaxed mb-4">
                                            {`TCP Connection 상태가 되었으니, 이제 클라이언트와 서버는 HTTP 프로토콜을 사용하여 데이터를 전송하고 받을 수 있어요.`}
                                        </p>
                                        <p className="leading-relaxed mb-4">
                                            {`원래의 사용자 목적인 웹 페이지를 받아와야 하니, 클라이언트의 브라우저는 GET 요청을 통해 서버로부터 `}
                                            <strong>{`웹 페이지 www.google.com`}</strong>
                                            {`에 대한 리소스를 달라고 요청해요.`}
                                        </p>
                                        <p className="leading-relaxed mb-4">
                                            {`이 때 생성된 HTTP Request Message는 `} 
                                            <strong>{`TCP 프로토콜을 사용하여 IP 주소의 컴퓨터로 전송되요.`}</strong>
                                        </p>
                                        <p className="leading-relaxed mb-2">
                                            {`Request Message에는 요청을 위한 여러 정보 등이 담겨 있어요. `}
                                            <strong>HTTP 요청</strong>
                                            {`에 대해 좀 더 자세히 언급해보면 아래와 같아요.`}
                                        </p>
                                        <div className="leading-relaxed text-base mb-8">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left">
                                                    <strong>Request Line</strong>
                                                    {` : URL정보, 요구 동작(GET), HTTP 버전 정보가 담겨요.`}
                                                </li>
                                                <li className="mb-1 text-left">

                                                    <strong>Request Header</strong>
                                                    {` : 요청에 대한 추가 정보를 서버에 전달하기 위해 사용되요. `}
                                                    <strong>{`Host, User-Agent, Accept, Cookie 등 다양한 요소가 있어요.`}</strong>
                                                    {`궁금하면 `}
                                                    <a href="https://goddaehee.tistory.com/169">{`"여기"`}</a>
                                                    {`를 클릭해주세요.`}
                                                </li>
                                                <li className="mb-1 text-left">
                                                    <strong>Request Body</strong>
                                                    {` : 추가 컨텐츠를 서버로 보내기 위해 사용되는 부분이에요. JSON이나 XML과 같은 파일 유형이 있어요.`}
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* 과정 6 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        6
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            STEP 6
                                        </h2>
                                        <p className="leading-relaxed mb-2">
                                            {`text`}
                                        </p>
                                        <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                            <li className="mb-1 text-left">
                                                {`text`}
                                            </li>
                                            <li className="mb-1 text-left">{`text`}</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 과정 7 */}
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center
                 justify-center bg-indigo-500 text-white relative title-font font-medium text-sm"
                                    >
                                        7
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            STEP 7
                                        </h2>
                                        <p className="leading-relaxed mb-2">
                                            {`text`}
                                        </p>
                                        <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                            <li className="mb-1 text-left">
                                                {`text`}
                                            </li>
                                            <li className="mb-1 text-left">{`text`}</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 과정 8 */}
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
                                        <p className="leading-relaxed">
                                            {`text`}
                                        </p>
                                    </div>
                                </div>
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
                                channel_name={`아프리카도서관`}
                                video_title={`웹 브라우저의 동작 순서 (6분 순삭)`}
                                url={`https://www.youtube.com/watch?v=FQHNg9gCWpg`}
                            />
                            <Recommend_Youtube
                                channel_name={`널널한 개발자`}
                                video_title={`웹 브라우저에 URL 입력하면 일어나는 일 - 인프라 위주`}
                                url={`https://www.youtube.com/watch?v=GAyZ_QgYYYo`}
                            />
                            <Recommend_Youtube
                                channel_name={`가장 쉬운 웹개발 with Boaz`}
                                video_title={`브라우저에 URL 을 입력하면? CS 기본부터 공부하기`}
                                url={`https://www.youtube.com/watch?v=T2WqQcqssoE`}
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
