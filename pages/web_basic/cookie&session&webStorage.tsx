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
                                <div className="w-1/7 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`쿠키, 세션, 웹 스토리지`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4 mb-2">
                                    {`- 기본적으로 HTTP 프로토콜 환경은 "connectionless, stateless"한 특성을 가지기 때문에 이를 보완하기 위해서 쿠키 또는 세션을 사용해요.`}
                                </p>
                                <div className="leading-relaxed text-base mb-2">
                                    <ul className="list-disc ml-20 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="mb-1 font-semibold text-left">
                                            {`connectionless(비연결성)`}
                                            <p className="mt-1 mb-2 text-xs font-normal">
                                                <strong>{`- 클라이언트가 요청을 한 후 응답을 받으면, 그 연결을 끊어버려요.`}</strong>
                                                {` 이는 계속해서 통신연결을 하지 않기 때문에, 서버의 자원을 효율적으로 관리할 수 있도록 하고, 클라이언트 요청에도 대응할 수 있도록 도와줘요.`}
                                            </p>
                                        </li>
                                        <li className="mb-1 font-semibold text-left">
                                            {`stateless(무상태)`}
                                            <p className="mt-1 mb-2 text-xs font-normal">
                                                <strong>{`- 통신이 끝나면 서버는 클라이언트의 이전 상태정보를 유지하지 않는 특징이 있어요.`}</strong>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 내용 2 : 쿠키 */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-2/7 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
                                    <strong>{`1. 쿠키 (Cookie)`}</strong>
                                </h1>

                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`클라이언트(브라우저)에 저장되는 키와 같이 들어있는 작은 파일을 뜻하고 있어요.`}
                                </p>
                                <div className="leading-relaxed text-base sm:pl-5 mb-2 py-2 ">
                                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="ml-1 mb-1 font-semibold text-left ">
                                            {`클라이언트 상태 정보를 로컬에 저장했다가 참조해요!`}
                                        </li>
                                        <li className="ml-1 mb-1 font-semibold text-left ">
                                            {`사용자 인증이 유효한 시간을 명시할 수 있으며, 유효 시간이 정해지면 브라우저가 종료되어도 인증이 유지된다는 특징이 있어요!`}
                                        </li>
                                        <li className="ml-1 mb-1 font-semibold text-left ">
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
                    {/* 내용 2-3 : 쿠키 동작 방식 */}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-3/7 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center">
                                <strong>{`쿠키 동작 방식`}</strong>
                            </h1>
                            <div className="w-full py-6">
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
                                            {`클라이언트가 페이지를 요청해요(사용자가 웹 사이트에 접근해요!)`}
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
                                            {`서버에서 쿠키를 생성해요`}
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
                                            {`HTTP 헤더에 쿠키를 포함 시켜 응답해요.`}
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
                                            STEP 4
                                        </h2>
                                        <p className="leading-relaxed mb-2">
                                            {`넘겨받은 쿠키는 클라이언트가 로컬 pc에서 갖고있다가 다시 서버에 요청할때 요청과 함께 쿠키를 전송해요.`}
                                        </p>
                                        <div className="leading-relaxed text-base">
                                            <ul className="list-disc ml-7 text-sm text-slate-500 dark:text-slate-300 ">
                                                <li className="mb-1 text-left">{`브라우저가 종료되어도 쿠키 만료 기간이 있다면 클라이언트에서 보관하고 있어요.`}</li>

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
                                            STEP 5
                                        </h2>
                                        <p className="leading-relaxed">
                                            {`동일 사이트 재방문 등 같은 요청을 할 경우, 클라이언트 pc에 해당 쿠키가 있는 경우 요청페이지와 함께 HTTP 헤더에 쿠키를 함께 보내요.`}
                                        </p>

                                    </div>
                                </div>
                                {/* 과정 6 */}
                                <div className="flex relative pb-12">
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
                                            {`서버에서 쿠키를 읽어 이전 상태 정보를 변경 할 필요가 있을 때 쿠키를 업데이트 하여 변경된 쿠키를 HTTP 헤더에 포함시켜 응답해요.`}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 내용 3 : 세션*/}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-4/7 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
                                    <strong>{`2. 세션 (Session)`}</strong>
                                </h1>

                                {/* => 220901_1513 (이미 1~7 내용은 내용 3-3 세션 동작 방식에 탑재해두었음.)
                                    1. 클라이언트가 페이지를 요청한다 (사용자가 웹 사이트 접근)
                                    2. 서버는 접근한 클라이언트의 request-header필드의 cookie를 확인해, 클라이언트가 해당 세션id를 보냈는지 확인
                                    3. 만약 session-id가 존재하지 않으면, 서버는 session-id를 생성해 클라이언트에 함께 돌려줌
                                        - 서버쪽에서는, 세션저장소에 해당 session-id값을 저장하여 차후 구분할 수 있도록 함
                                    4. 클라이언트는 세션 ID를 받으면, 이걸 쿠키를 사용해서 저장하고 가지고 있음
                                    5. 클라이언트는 이제 같은 요청 등의 재접속의 목적으로 서버에 요청할 때, http요청에 이 쿠키의 세션 ID를 같이 서버에 전달해서 요청
                                    6. 서버는 세션 ID를 전달 받고, 세션저장소에서 해당 session-id 값을 찾아 클라이언트 정보를 가져와서 클라이언트를 구분한다. 그리고 각 클라이언트의 요구에 맞는 서비스를 제공
                                    7. 클라이언트 정보를 가지고, 서버 요청을 처리하여 클라이언트에게 응답
                                */}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`사용자 정보를 브라우저에서 저장하는 `}
                                    <strong>{`쿠키`}</strong>
                                    {`와 달리, `} 
                                    <strong>{`세션`}</strong>
                                    {`은 서버측에서 관리해요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`서버에서 클라이언트를 구분하기 위해`} 
                                    <strong>{`세션 ID`}</strong>
                                    {`라는 것을 부여하는데, 이를 통해 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때 까지 인증상태를 유지해요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`접속 시간에 제한을 두어, 일정 시간 응답이 없으면 정보가 유지되지 않게 처리할 수 있어요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`데이터를 서버에 두기 때문에, `}
                                    <strong>{`쿠키`}</strong>
                                    {`보다 보안에 좋아요. 하지만 사용자가 많아질수록 서버 메모리를 많이 차지해요.`}
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
                                <li className="mb-2 font-semibold text-left">
                                    {`웹 서버에 웹 컨테이너 상태 유지를 위한 정보를 저장해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`각 클라이언트에게 고유 ID를 부여해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`세션 ID로 클라이언트를 구분해서 클라이언트의 요구에 맞는 서비스를 제공해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`보안 면에서 쿠키보다 우수해요.`}
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`사용자가 많아질수록 서버 메모리를 많이 차지해요.`}
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 즉, 서버의 자원을 사용하기 때문에 무분별하게 만들다보면 서버 메모리가 감당할 수 없고 속도가 느려지게 되는 단점이 있어요.`}
                                    </p>
                                </li>
                                {/* jwt를 설명하는 자료 추가 */}
                                <li className="mb-2 font-semibold text-left">
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
                        <div className="leading-relaxed text-base mb-2">
                            <ul className="list-disc ml-14 text-sm text-slate-500 dark:text-slate-300">
                                <li className="mb-1 font-semibold text-left py-2">
                                    {`로그인 같이 보안상 중요한 작업을 수행할 때 사용해요.`}
                                </li>
                            </ul>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                        </div>
                        {/* 내용 3-3 : 쿠키와 세션의 차이 */}
                        <p className="leading-relaxed sm:pl-7 mb-4">
                            <strong>{`쿠키와 세션의 차이점`}</strong>{`은 다음과 같아요.`}
                        </p>
                        <div className="leading-relaxed text-base mb-2 py-2">
                            <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                <li className="mb-2 font-semibold text-left">
                                    {`데이터 저장위치`}
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 쿠키 : 클라이언트(브라우저)`}
                                    </p>
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 세션 : 서버`}
                                    </p>
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`보안`}
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {` - 쿠키 : 저장위치 때문에 request에서 스니핑에 당할 우려가 있어요.`}
                                    </p>
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {` - 세션 : 쿠키를 이용해 세션 아이디만 저장하고 그것으로 클라이언트를 구분하여 서버에서 처리 해요. `}
                                    </p>
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 보안성 측면: `}
                                        <strong>{`쿠키 < 세션`}</strong>
                                    </p>
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`Life Cycle`}
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 쿠키 : 브라우저를 종료해도 만료기간이 남아있으면 존재`}
                                    </p>
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 세션 : 브라우저 종료 시 만료기간에 상관없이 종료`}
                                    </p>
                                </li>
                                <li className="mb-2 font-semibold text-left">
                                    {`속도`}
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 쿠키 : 브라우저에 정보가 있어서 빨라요.`}
                                    </p>
                                    <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                        {`- 세션 : 서버에 정보가 있어서 느려요.`}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 내용 3-4 : 세션 동작 방식 */}
                    <div className="container px-5 py-24 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-5/7 h-full bg-indigo-500"></div>
                        </div>
                        {/* 제목 : 제목 내, p태그 미포함 시 div : py-6*/}
                        <div className="flex flex-wrap sm:flex-row flex-col py-6">
                            <h1 className="w-full sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center">
                                {`세션 동작 방식`}
                            </h1>
                            <div className="w-full py-6">
                                {/* 동작 방식 그림 들어갈 자리 [220830_1321]*/}</div>
                            {/* 과정 1 */}
                            <div className="flex relative pb-12 w-full">
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
                            <div className="flex relative pb-12 w-full">
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
                    {/* 내용 4 : 웹 스토리지(WebStorage) */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-6/7 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}

                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
                                    <strong>{`3. 웹 스토리지 (Web Storage)`}</strong>
                                </h1>

                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`서버 전송 없이 `}
                                    <strong>{`클라이언트에 데이터를 저장할 수 있도록, HTML5`}</strong>
                                    {`부터 추가된 저장소에요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`간단한 `}
                                    <strong>{`Key-Value`}</strong>
                                    {` 데이터 저장 형태로 구성되어 있어요.`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`쿠키와 같이 해당 도메인에 대한 데이터를 브라우저에 저장해요.`}
                                </p>
                                <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                    <li className="mb-1 font-semibold text-left py-1">
                                        {`HTML에서는 쿠키의 단점(매번 서버에 전송되고, 저장용량 작고, 보안이 취약)을 보완해 등장한 웹 스토리지를 사용해요.`}
                                    </li>
                                </ul>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`서버가 HTTP 헤더를 통해 스토리지 객체를 조작할 수 없어요.`}
                                </p>
                                <ul className="list-disc ml-14 text-sm  text-slate-500 dark:text-slate-300">
                                    <li className="mb-1 font-semibold text-left py-1">
                                        {`웹 스토리지 객체 조작은 JavaScript 내에서만 수행해요.`}
                                    </li>
                                </ul>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-7 pl-0 mt-4">
                                    {`지속성에 따라 `}
                                    <strong>{`로컬 스토리지(Local Storage)`}</strong>
                                    {`와 `}
                                    <strong>{`세션 스토리지(Session Storage)로 분류`}</strong>
                                    {`할 수 있고, 같은 Storage 객체를 상속하기 때문에 메서드가 동일해요.`}
                                </p>
                            </div>
                            <div className="flex border-t border-gray-200">
                            </div>
                            {/* 내용 4-1 : 로컬/세션 스토리지 */}
                            <div className="flex flex-col">
                                {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                                {/* 내용 4-1-1 : 로컬 스토리지*/}
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                    <h1 className="sm:w-4/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                        {`로컬 스토리지 (Local Storage)`}
                                    </h1>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`사용자가 데이터를 지우지 않는 이상, 브라우저나 OS를 종료해도 계속 브라우저에 남아있어요.`}
                                        <strong>{`(영구성)`}</strong>
                                    </p>
                                    <ul className="list-disc ml-16 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="mb-1 font-semibold text-left py-1">
                                            {`단, 동일한 브라우저를 사용할 때만 해당해요.`}
                                        </li>
                                    </ul>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`자동 로그인처럼 지속적으로 필요한 데이터를 저장해요.`}
                                    </p>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`정리하면, 브라우저 자체에 `}
                                        <strong>{`반영구적`}</strong>{`으로 데이터를 저장하며, 브라우저를 종료해도 데이터가 유지됩니다.`}
                                    </p>
                                    <ul className="list-disc ml-16 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="mb-1 font-semibold text-left py-1">
                                            <strong>{`다만 도메인(domain)이 다른 경우`}</strong>
                                            {`로컬 스토리지에 접근할 수 없어요.`}
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex border-t border-gray-200">
                                </div>
                                {/* 내용 4-1-2 : 세션 스토리지*/}
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                    <h1 className="sm:w-4/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                        {`세션 스토리지 (Session Storage)`}
                                    </h1>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`데이터가 `}
                                        <strong>{`브라우저 탭에도 종속(탭 윈도우 단위로 생성)`}</strong>
                                        {`되기 때문에, 윈도우나 브라우저 탭을 닫을 경우 제거해요.`}
                                    </p>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`일회성 로그인 정보, 입력폼 저장 처럼 일시적으로 필요한 데이터를 저장해요.`}
                                    </p>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`정리하면, 각 세션마다 데이터가 개별 저장되며, 브라우저 탭 닫을 시 데이터가 제거되요.`}
                                    </p>
                                </div>
                                <div className="flex border-t border-gray-200">
                                </div>
                                {/* 내용 4-1-3 : 데이터 사용에 따른 스토리지와 쿠키 비교*/}
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                    <h1 className="sm:w-4/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                        {`데이터 사용에 따른 쿠키와 스토리지 비교`}
                                    </h1>

                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        <strong>{`- 다시보기 팝업 : 쿠키`}</strong>
                                    </p>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        <strong>{`- 자동로그인 : 로컬 스토리지`}</strong>
                                    </p>

                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        <strong>{`- 입력 폼 정보, 비로그인 장바구니 : 세션 스토리지`}</strong>
                                    </p>
                                </div>
                                <div className="flex border-t border-gray-200">
                                </div>
                                {/* 내용 4-1-4 : 캐시 정의, 세션이랑 쿠키에 대해 차이점*/}
                                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                    <h1 className="sm:w-4/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                        {`캐시 (Cache)`}
                                    </h1>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`리소스 파일들의 임시 저장소에요.`}
                                    </p>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`같은 웹 페이지에 접속할 때 사용자의 PC에서 로드하기 때문에 서버를 거치지 않아도 돼요.`}
                                    </p>
                                    <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                        {`페이지 속도 개선`}
                                    </p>
                                    <ul className="list-disc ml-16 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="mb-1 font-semibold text-left py-1">
                                            {`이전에 사용되었던 데이터는 다시 사용될 가능성이 높아요.`}
                                        </li>
                                        <li className="mb-1 font-semibold text-left">
                                            {`다시 사용될 확률이 있는 데이터들을 빠르게 접근 가능한 저장소에 저장해요.`}
                                        </li>
                                    </ul>
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
                                channel_name={`Code ON 코드온`}
                                video_title={`면접 단골 질문! 브라우저 저장소 (쿠키, 웹스토리지, 로컬스토리지, 세션스토리지)`}
                                url={`https://www.youtube.com/watch?v=5s--sLWzuZc`}
                            />
                            <Recommend_Youtube
                                channel_name={`
                                우아한Tech`}
                                video_title={`[10분 테코톡] 🦄 디토의 웹스토리지 & 쿠키`}
                                url={`https://www.youtube.com/watch?v=-4ZsGy1LOiE`}
                            />
                            <Recommend_Youtube
                                channel_name={`코드없는 프로그래밍`}
                                video_title={`세션,쿠키로 로그인을 어떻게 유지시키는가?`}
                                url={`https://www.youtube.com/watch?v=cWUtMHTKdj0`}
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