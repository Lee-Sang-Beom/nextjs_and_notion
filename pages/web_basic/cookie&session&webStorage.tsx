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
                                {`- 웹 스토리지는 쿠키와 달리 자동 전송의 위험성이 없고 클라이언트에 저장만 할 뿐 서버로 전송되지 않아요.`}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* 내용 2 : 쿠키 */} 
                    {/* py-24 속성 삭제 [220830_1306]*/}
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
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
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
                        <div className="flex border-t border-gray-200 py-2">
                        </div>
                        {/* 내용 3-1 : 세션의 특징 */}
                        <p className="leading-relaxed sm:pl-7 mb-4">
                            <strong>{`세션의 특징`}</strong>{`은 아래의 내용과 같아요.`}
                        </p>
                        <div className="leading-relaxed text-base mb-2 py-2">
                            <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`웹 서버에 웹 컨테이너 상태 유지를 위한 정보를 저장해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`각 클라이언트에게 고유 ID를 부여해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`세션 ID로 클라이언트를 구분해서 클라이언트의 요구에 맞는 서비스를 제공해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`보안 면에서 쿠키보다 우수해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`사용자가 많아질수록 서버 메모리를 많이 차지해요.`}
                                </li>
                                <li className="ml-8 mb-1 text-left">
                                    {`즉, 서버의 자원을 사용하기 때문에 무분별하게 만들다보면 서버 메모리가 감당할 수 없고 속도가 느려지게 되는 단점이 있어요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left list-decimal">
                                    {`토큰기반 인증방식인 JWT가 있어요.`}
                                </li>
                            </ul>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                        </div>
                        {/* 내용 3-2 : 세션의 사용 예 */}
                        <p className="leading-relaxed sm:pl-7 mb-4">
                            <strong>{`세션의 사용 예`}</strong>{`에 대해 알아볼까요?`}
                        </p>
                        <div className="leading-relaxed text-base mb-2 py-2">
                            <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                <li className="mb-1 font-semibold text-left py-1">
                                    {`로그인 같이 보안상 중요한 작업을 수행할 때 사용해요.`}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 내용 3-3 : 세션 동작 방식 */} 
                    {/* py-24 속성 삭제 [220830_1306]*/}
                    <div className="container px-5 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-3/4 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center">
                                {`세션 동작 방식`}
                            </h1>
                            <div className="w-full py-6">
                                {/* 동작 방식 그림 들어갈 자리 [220830_1321]*/}</div>
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
                                        STEP 1
                                    </h2>
                                    <p className="leading-relaxed">
                                        {`사용자가 웹 사이트에 접근했을 때 클라이언트가 페이지를 요청해요.`}
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
                                        STEP 2
                                    </h2>
                                    <p className="leading-relaxed">
                                        {`서버는 접근한 클라이언트의 request-header필드의 cookie를 확인해, 클라이언트가 해당 세션id를 보냈는지 확인해요.`}
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
                                        STEP 3
                                    </h2>
                                    <p className="leading-relaxed">
                                        {`만약 session-id가 존재하지 않으면, 서버는 session-id를 생성해 클라이언트에 함께 돌려줘요`}
                                    </p>
                                    <div className="leading-relaxed text-base">
                                        <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                            <li className="mb-1 text-left">{`서버쪽에서는, 세션저장소에 해당 session-id값을 저장하여 차후 구분할 수 있도록 해요`}</li>
                                        </ul>
                                    </div>
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
                                        STEP 4
                                    </h2>
                                    <p className="leading-relaxed mb-2">
                                        {`클라이언트는 세션 ID를 받으면, 이걸 쿠키를 사용해서 저장하고 가지고 있어요.`}
                                    </p>
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
                                        STEP 5
                                    </h2>
                                    <p className="leading-relaxed">
                                        {`클라이언트는 이제 같은 요청 등의 재접속의 목적으로 서버에 요청할 때, http요청에 이 쿠키의 세션 ID를 같이 서버에 전달해서 요청해요.`}
                                    </p>

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
                                    <p className="leading-relaxed">
                                        {`서버는 세션 ID를 전달 받고,  세션저장소에서 해당 session-id 값을 찾아 클라이언트 정보를 가져와서 클라이언트를 구분하면 각 클라이언트의 요구에 맞는 서비스를 제공해요.`}
                                    </p>

                                </div>
                            </div>
                            {/* 과정 7*/}
                            <div className="flex relative pb-12">
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
                                        {`클라이언트 정보를 가지고 서버 요청을 처리하여 클라이언트에게 응답해요.`}
                                    </p>

                                </div>
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