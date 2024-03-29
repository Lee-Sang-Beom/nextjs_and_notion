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
              desc = {`HTML, CSS, JS가 무엇인지 들어보셨나요? 프론트엔드 개발자가 되기 위해서 이것들은 꼭 익혀두셔야 해요! 웹 페이지에서 이것들이 각자 어떠한 역할을 하고 있는지, 궁금하다면 아래 Learn 버튼을 눌러주세요!`}/>
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
              desc={`DOM이라는 용어를 들어보셨나요? 웹 페이지에서의 DOM은 웹 요소의 구성과 사용자와의 상호작용과 깊은 관련이 있어요! 이것이 무엇인지 궁금하다면 아래 Learn 버튼을 눌러주세요!`}/>
          </div>

          {/*두 번째 라인 : 여기서부터 컴포넌트 분리해야함*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 4*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`}
              title={`REST API`}
              url={`/web_basic/rest_api`}
              desc={`REST API는 말 그대로 REST를 기반으로 API를 구성한 것을 뜻해요. 이는 개발자들 사이에서 데이터를 관리 및 처리함에 있어 굉장히 중요하고, 널리 쓰이는 개념이에요. 이것이 무엇인지 궁금하다면 아래 Learn 버튼을 눌러주세요!`}/>

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
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`}
              title={`Webpack, Babel, Polyfill`}
              url={`/web_basic/webpack_babel_polyfill`}
              desc={`Webpack, Babel, Polyfill에 대해 들어보셨나요? 아마 JavaScript를 문법위주로 공부해오신 분들이라면 생소할 이름일 수 있을 것 같아요.
               Webpack은 모듈과 관련이 있고, Babel, Polyfill은 크로스 브라우징과 관련이 있어요. 전반적인 개념에 대해 알고싶다면, 아래 Learn 버튼을 눌러주세요!`}/>

            {/* box 17*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`}
              title={`Scope(스코프)`}
              url={`/web_basic/scope`}
              desc={`스코프는 우리말로, '범위'라는 뜻이에요. JavaScript에서 스코프는 과연 무엇을 의미하는 것인지 알고 계신가요? 
              바로 다음에 공부할 실행 컨텍스트 개념을 이해하기 위해서는 꼭 알고 넘어가야 하니, 공부하길 원한다면 아래 Learn 버튼을 눌러주세요!`}/>

            {/* box 18*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`}
              title={`Execution Context(실행 컨텍스트)`}
              url={`/web_basic/executionContext`}
              desc={`실행 컨텍스트는 쉽게 말해 자바스크립트의 코드가 동작할 수 있도록 제공하는 총체적 환경을 의미해요.
               호이스팅, 콜 스택, 스코프 등의 모든 개념을 알아야 이 주제를 이해할 수 있어요. 
               준비가 되셨다면, 아래 Learn 버튼을 눌러주세요!`}/>

          </div>

          {/*일곱 번째 라인*/}
          <div className="flex flex-wrap -m-4 mt-4">
            {/* box 19*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`} 
              title={`Hoisting`} 
              url={`/web_basic/hoisting`}
              desc = {`면접 질문 단골고객 Hoisting에 대해 들어보셨나요? 자바스크립트에서의 선언은 이것을 빼고 논할 수 없어요! 궁금하다면 아래 Learn 버튼을 눌러주세요!`}/>
              
            {/* box 20*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`} 
              title={`프로세스와 스레드`} 
              url={`/web_basic/process_and_thread`}
              desc = {`우리가 사용하는 프로그램은 프로세스, 스레드라는 용어와 깊이 연관되어 있어요. 이것들을 잘못 알고 있으면, 디버깅 및 오류 해결에 어려움을 겪을 수 있어요. 꼭 알고 넘어가도록 해요.`}/>
              
            {/* box 21*/}
            <ChooseTopic 
              category={`CATEGORY : WEB BASIC`} 
              title={`브라우저 주소창에 URL을 입력하면?`} 
              url={`/web_basic/browser_search`}
              desc = {`이전에 HTML/CSS/JS가 무엇인지, 렌더링이 무엇인지 다루어보았었죠? 이번에는 렌더링을 하기 이전 과정에서, 우리가 검색창에 URL을 입력할 때 어떤 일이 발생하고, 어떻게 리소스 자원들을 받아오는지를 알아볼거에요.`}/>
          </div>
        </div>
      </section>
    </>
  );
}
