import Layout from "../../components/layout";
import Head from "next/head";
import MoveBtn from "../../components/moveBtn";
import Recommend_Youtube from "../../components/recommend_youtube";
import Learn_More from "../../components/learn_More";

export default function HTML_CSS_JS() {
  // 페이지 넘김 정보
  const prev = undefined;
  const next = "/web_basic/rendering";

  return (
    <>
      <Layout>
        <Head>
          <title>FrontendWeb</title>
          <meta name="description" content="Start Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*내용 설명*/}
        <section className="text-gray-600 body-font">
          {/* 내용 1 : 소개 */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              {/* bar 길이*/}
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-1/4 h-full bg-indigo-500"></div>
              </div>
              {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0 ">
                  {`HTML, CSS, JS`}
                </h1>
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                  {`- HTML, CSS, JS는 웹 프로그래밍을 하려면 반드시 알아두어야 하는
                  상식이에요! 아래 내용을 보면서, 어떤 역할을 하는지에 대해 꼭
                  알아두도록 해요!`}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-hidden ">
                  <img
                    alt="content"
                    className="object-cover object-center h-full mx-auto"
                    src="/img/html_desc.png"
                  />
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
                  HTML
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {`HTML(HyperText Markup Language)은 웹 브라우저를 통해 표시되는 웹 페이지의 콘텐츠를 정의하기 위해 사용되는 언어를 의미해요!
                 이름과 같이 '마크업 언어'인데, 쉽게 생각해서 화면에 요소들이 어떻게 배치되는가를 결정하는 '틀'이라고 생각하면 편해요!`}
                </p>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-hidden ">
                  <img
                    alt="content"
                    className="object-cover object-center h-full mx-auto"
                    src="/img/css_desc.png"
                  />
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
                  CSS
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {`CSS(Cascading Style Sheets)는 계단식으로 스타일을 정의하는 문서에요!
               HTML 문서는 태그가 태그를 포함하는 계단식 구조를 지니고 있기 때문에, CSS는 작성된 HTML이라는 계단식 틀 위에 스타일을 입혀주는 것으로 이해할 수 있어요!`}
                </p>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="h-64 overflow-hidden ">
                  <img
                    alt="content"
                    className="object-cover object-center h-full mx-auto"
                    src="/img/js_desc.png"
                  />
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
                  {`JS (JavaScript)`}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {`JavaScript는 객체 기반의 스크립트 언어. 즉, 프로그래밍 언어에요! 주로 웹 브라우저에서 사용되지만, Node.js와 같은 프레임워크를 사용하면 서버 측 프로그래밍에서도 사용할 수 있어요!
               자바스크립트는 브라우저에서 다양한 일을 수행하고, HTML로 올려놓은 요소들을 변형시키거나, 직접 만들어내는 등의 동작과 상호작용을 정의해요!
              `}
                </p>
              </div>
            </div>
          </div>


          {/* 내용 2 : HTML*/}
          <div className="container px-5 py-24 mx-auto">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-1/2 h-full bg-indigo-500"></div>
            </div>
            <div className="lg:w-4/6 mx-auto mt-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/html.jpg"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 dark:bg-slate-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-bold title-font mt-4 text-gray-900 text-lg">
                      HTML
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      {`HTML은 건물을 만들기 위한 뼈대로 이해하자!`}
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-base mb-4">
                    {`HTML의 `}
                    <strong>{`HT(HyperText)`}</strong>
                    {`는 일반적인 텍스트를 비순차적으로 접근할 수 있는 방법을 제공해요! 같은 페이지 내의 다른 데이터로 이동할 수도 있고, 다른 페이지로도 이동할 수도 있죠!`}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    {<strong>{`ML(Markup Lanauage)`}</strong>}
                    {`은 웹 브라우저에게 내 컨텐츠를 어떻게 표현해야 하는지를 명령하는 언어에요. <태그> 등을 이용하여, 문서나 데이터를 구조적으로 표시해요. 마크업 언어를 쓰면 아래와 같은 효과를 얻을 수 있어요!`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                      <li className="mb-1 text-left">{`컨텐츠 제작자가 원하는 방법대로 문서를 표현하기 위해 웹 브라우저에게 명령을 내릴 수 있어요!`}</li>
                      <li className="mb-1 text-left">{`구조적인 작성 덕분에, 문서 작성에 대해 협업과 유지보수를 쉽게 할 수 있어요!`}</li>
                      <li className="mb-1 text-left">{`찾기 쉽다는 장점은 검색이 가능하다는 것을 의미하기도 해요. 컴퓨터 또한 마크업 언어의 태그를 통해 정보를 수집할 수 있어요!`}</li>
                    </ul>
                  </div>
                  <p className="leading-relaxed text-base mb-4 ">
                    {`즉, `}
                    {<strong>HTML</strong>}
                    {`은 하이퍼텍스트를 가장 중요한 특징으로 하는 마크업이라는 형식을 가진 언어라고 정리할 수 있어요. 웹 페이지를 만들기 위해 표준적으로 사용되는 마크업 언어이기 때문에, 웹 페이지를 만들 때 꼭 필요하죠.`}
                  </p>

                  <Learn_More
                    url={`https://www.youtube.com/watch?v=8kJwTrs6e-4&list=PLFeNz2ojQZjtQc7mt8E9fNzIh9or34A61`}
                    hover_title={`출처 : 유노코딩`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 내용 3 : CSS*/}
          <div className="container px-5 py-24 mx-auto">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-3/4 h-full bg-indigo-500"></div>
            </div>
            <div className="lg:w-4/6 mx-auto mt-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/css.jpg"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100  dark:bg-slate-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-bold title-font mt-4 text-gray-900 text-lg">
                      CSS
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      {`CSS는 건물의 페인트칠 등의 꾸미는 행위로 이해하자!`}
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-base mb-4">
                    <strong>{`CSS`}</strong>
                    {`는`} <strong>{`HTML, XHTML, XML `}</strong>
                    {`같은 문서의 스타일을 꾸밀 때 사용하는 스타일 시트 언어에요!`}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    {
                      <strong>{`1996년 12월, W3C에서 CSS가 도입되기 전까지는`}</strong>
                    }
                    {`HTML언어 하나로, 문서의 뼈대와 꾸밈 작업을 함께했어요. 하지만, `}
                    {<strong>{`CSS`}</strong>}
                    {`가 도입되면서, 문서의 내용과 표현이 분리될 수 있었어요. 작성 방법은 아래와 같아요.`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                      <li className="mb-1 font-semibold text-left">
                        {`Inline Style Sheet`}
                        <p className="ml-1 mt-1 mb-2 text-xs font-normal">
                          {`- HTML 태그의 style 속성에 css 코드를 넣는 방법`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`Internal Style Sheet`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- HTML 문서 내의 <style> </style> 안에 css 코드를 넣는 방법`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`Linking Style Sheet ★`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- 별도 css 파일을 만들고, HTML 문서와 연결하는 방법`}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <p className="leading-relaxed text-base mb-4 ">
                    {`즉, `}
                    {<strong>CSS</strong>}
                    {`는 구조와 디자인을 분리하기 위해 태어난 언어라고 정리할 수 있어요. `}
                    {<strong>CSS</strong>}
                    {`는 HTML 요소들의 크기, 디자인, 배치 등을 조절하고 가공해요!`}
                  </p>
                  <Learn_More
                    url={`https://www.youtube.com/watch?v=yZq_B6cQ9mo`}
                    hover_title={`출처 : 유노코딩`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 내용 4 : JS*/}
          <div className="container px-5 py-24 mx-auto">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-full h-full bg-indigo-500"></div>
            </div>
            <div className="lg:w-4/6 mx-auto mt-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img/js.jpg"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 dark:bg-slate-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                        clipRule="evenodd"
                      />
                      <path d="M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-bold title-font mt-4 text-gray-900 text-lg">
                      JS
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      {`JS(JavaScript)는 건물 내 각종 기능을 만들고 수리하는 행위로
                      이해하자!`}
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-base mb-4">
                    <strong>{`JS(JavaScript)`}</strong>
                    {`는 웹 페이지에서 복잡한 기능을 구현할 수 있도록 웹 문서에 삽입해서 사용하는 스크립팅 언어 또는 프로그래밍 언어에요! 웹 브라우저에서 웹 문서를 실행할 때 프로그램 코드가 해석되요.`}
                  </p>
                  <p className="leading-relaxed text-base mb-4 ">
                    {`객체 지향적인 성격을 가지고 있고, 컴파일 과정을 거치지 않는 인터프리터 형태를 가지기 때문에, 비교적 자료형 조사를 철저히 하지 않는 언어에요!`}
                  </p>
                  <p className="leading-relaxed text-base mb-4">
                    {`우리가 웹 페이지를 이용할 때, 가만히 정적인 정보만 보여주는 것이 아니라, 주기적으로 갱신되거나 마우스를 클릭할 때 상호작용이 발생되는 등의 모습을 본 적이 있을 거에요. 
                  이런 경우에는 자바스크립트가 관여하고 있다고 볼 수 있어요! `}
                  </p>
                  <p className="leading-relaxed text-base mb-4 ">
                    {`자바스크립트는 브라우저에서만 쓸 목적으로 고안된 언어이지만, 지금은 다양한 환경에서 쓰이고 있어요. 
                  자바스크립트는 브라우저뿐만 아니라 서버에서도 실행할 수 있어요.`}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    {`이외에도 자바스크립트 엔진(JavaScript engine)이라 불리는 특별한 프로그램이 들어 있는 모든 디바이스에서도 동작해요. 브라우저 내에는 '자바스크립트 가상 머신'이라 불리는 엔진이 내장되어 있는데, 종류는 아래처럼 다양해요.`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                      <li className="mb-1 font-semibold text-left">
                        {`V8`}
                        <p className="ml-1 mt-1 mb-2 text-xs font-normal">
                          {`- Chrome과 Opera에서 쓰여요.`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`SpiderMonkey`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- Firefox에서 쓰여요.`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`Trident / Chakra`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- IE에서 쓰이며, 버전에 따라 각각을 사용해요.`}
                        </p>
                      </li>
                      <li className="mb-1 font-semibold text-left">
                        {`ChakraCore`}
                        <p className="mt-1 mb-2 text-xs font-normal">
                          {`- Microsoft Edge에서 쓰여요.`}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <p className="leading-relaxed text-base mb-2 ">
                    {`자바스크립트는 다양한 장점을 가지고 있어요.`}
                  </p>
                  <div className="leading-relaxed text-base mb-8">
                    <ul className="list-disc ml-7 mt-2 text-sm text-slate-500 dark:text-slate-300">
                      <li className="mb-1 font-normal text-left">
                        {`HTML/CSS와 완전히 통합할 수 있고, HTML 파일 내에서 작성되므로 개발속도가 빨라요.`}
                      </li>
                      <li className="mb-1 font-normal text-left">
                        {`운영체제의 영향을 받지 않고, 주요 브라우저에서 대부분 지원되요. 그리고 기본언어로 사용되요!`}
                      </li>
                    </ul>
                  </div>

                  <p className="leading-relaxed text-base mb-4 ">
                    {`오늘날 자바스크립트는 브라우저 환경에서 가장 널리 사용되는 언어로 자리매김했어요. 그렇기에 내가 웹 사이트를 만들겠다고 다짐했다면, 꼭 알고 있어야 해요!`}
                  </p>

                  <Learn_More
                    url={`https://www.youtube.com/watch?v=9olX2yyXnVA`}
                    hover_title={`출처 : 유노코딩`}
                  />
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
                channel_name={`얄팍한 코딩사전`}
                video_title={`HTML, CSS, JavaScript가 뭔가요?`}
                url={`https://www.youtube.com/watch?v=ffENjt7aEdc`}
              />
              <Recommend_Youtube
                channel_name={`드림코딩`}
                video_title={`CSS 기초 이론 정리. 포트폴리오 만드는 날까지!`}
                url={`https://www.youtube.com/watch?v=gGebK7lWnCk`}
              />
              <Recommend_Youtube
                channel_name={`드림코딩`}
                video_title={`자바스크립트의 역사와 현재 그리고 미래`}
                url={`https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2`}
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
