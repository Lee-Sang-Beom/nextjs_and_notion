import Link from "next/link";
import ChooseTopic from "./component/choose_topic";

export default function WebMain() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/*첫 번째 라인*/}
          <div className="flex flex-wrap -m-4">
            {/* box 1*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`} 
              title={`HTML, CSS, JS`} 
              url={`/web_basic/html_css_js`}
              desc = {`HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 프론트엔드 개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 웹 페이지에서 이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면 아래 Learn 버튼을 눌러주세요!`}/>
            {/* box 2*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`}
              title={`렌더링`}
              url={`/web_basic/rendering`}
              desc = {`웹 페이지에서 새로고침을 통해 페이지를 다시 불러오신 경험이 있나요? 이것과 관련해, 렌더링이라는 용어가 있어요! 렌더링에 대해 잘 모르겠다면, 아래 Learn 버튼을 눌러주세요!`}/>
            {/* box 3*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`}
              title={`DOM`}
              url={`/web_basic/dom`}
              desc={`DOM이 무엇인지 들어보셨나요? 웹 페이지에서의 DOM은 사용자와의 상호작용과 깊은 관련이 있어요! 이것이 무엇인지 궁금하다면 아래 Learn 버튼을 눌러주세요!`}/>
          </div>

          {/*두 번째 라인 : 여기서부터 컴포넌트 분리해야함*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 4*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  REST-API
                </h1>
                <p className="leading-relaxed mb-3">
                  REST API라는 용어를 들어보셨나요? 컴퓨터 시스템끼리 정보를
                  안전하게 교환하기 위한 방법으로 알려져 있는 REST-API에 대해
                  궁금하다면, 아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 5*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  이벤트 루프와 테스트 큐
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 웹 페이지에서
                  이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면 아래 Learn
                  버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 6*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  CSS와 JS 애니메이션
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 웹 페이지에서
                  이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면 아래 Learn
                  버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*세 번째 라인*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 7*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  브라우저의 동작
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 프론트엔드
                  개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 웹
                  페이지에서 이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 8*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  CORS
                </h1>
                <p className="leading-relaxed mb-3">
                  웹 페이지에서 새로고침을 통해 페이지를 다시 불러오신 경험이
                  있나요? 이것과 관련해, 렌더링이라는 용어가 있어요! 렌더링에
                  대해 잘 모르겠다면, 아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 9*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  CSR과 SSR
                </h1>
                <p className="leading-relaxed mb-3">
                  DOM이 무엇인지 들어보셨나요? 웹 페이지에서의 DOM은 사용자와의
                  상호작용과 깊은 관련이 있어요! 이것이 무엇인지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*네 번째 라인*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 10*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  쿠키, 세션, 그리고 웹 스토리지
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 프론트엔드
                  개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 웹
                  페이지에서 이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 11*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  프로토타입
                </h1>
                <p className="leading-relaxed mb-3">
                  웹 페이지에서 새로고침을 통해 페이지를 다시 불러오신 경험이
                  있나요? 이것과 관련해, 렌더링이라는 용어가 있어요! 렌더링에
                  대해 잘 모르겠다면, 아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 12*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {`클로져 (Closure)`}
                </h1>
                <p className="leading-relaxed mb-3">
                  DOM이 무엇인지 들어보셨나요? 웹 페이지에서의 DOM은 사용자와의
                  상호작용과 깊은 관련이 있어요! 이것이 무엇인지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*다섯 번째 라인*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 13*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  var, let, const
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 프론트엔드
                  개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 웹
                  페이지에서 이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 14*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {`Callback, Promise, Await & Async`}
                </h1>
                <p className="leading-relaxed mb-3">
                  웹 페이지에서 새로고침을 통해 페이지를 다시 불러오신 경험이
                  있나요? 이것과 관련해, 렌더링이라는 용어가 있어요! 렌더링에
                  대해 잘 모르겠다면, 아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 15*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  이벤트 버블링, 이벤트 캡처링
                </h1>
                <p className="leading-relaxed mb-3">
                  DOM이 무엇인지 들어보셨나요? 웹 페이지에서의 DOM은 사용자와의
                  상호작용과 깊은 관련이 있어요! 이것이 무엇인지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*여섯 번째 라인*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 16*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Webpack, Babel, Polyfill
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 프론트엔드
                  개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 이것들이
                  각자 어떠한 역할을 하고 있는지 궁금하다면, 아래 Learn 버튼을
                  눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 17*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  웹 사이트 성능 최적화
                </h1>
                <p className="leading-relaxed mb-3">
                  웹 페이지에서 새로고침을 통해 페이지를 다시 불러오신 경험이
                  있나요? 이것과 관련해, 렌더링이라는 용어가 있어요! 렌더링에
                  대해 잘 모르겠다면, 아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 18*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  실행 컨텍스트
                </h1>
                <p className="leading-relaxed mb-3">
                  DOM이 무엇인지 들어보셨나요? 웹 페이지에서의 DOM은 사용자와의
                  상호작용과 깊은 관련이 있어요! 이것이 무엇인지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*일곱 번째 라인*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 19*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Hoisting
                </h1>
                <p className="leading-relaxed mb-3">
                  HTML, CSS, JS가 무엇인지 많이 들어보셨나요? 프론트엔드
                  개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 이것들이
                  각자 어떠한 역할을 하고 있는지 궁금하다면, 아래 Learn 버튼을
                  눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 20*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY : WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  프로세스와 스레드
                </h1>
                <p className="leading-relaxed mb-3">
                  웹 페이지에서 새로고침을 통해 페이지를 다시 불러오신 경험이
                  있나요? 이것과 관련해, 렌더링이라는 용어가 있어요! 렌더링에
                  대해 잘 모르겠다면, 아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* box 21*/}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY - WEB BASIC
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  브라우저 주소창에 URL을 입력하면?
                </h1>
                <p className="leading-relaxed mb-3">
                  DOM이 무엇인지 들어보셨나요? 웹 페이지에서의 DOM은 사용자와의
                  상호작용과 깊은 관련이 있어요! 이것이 무엇인지, 궁금하다면
                  아래 Learn 버튼을 눌러주세요!
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-5">
                  Learn
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
