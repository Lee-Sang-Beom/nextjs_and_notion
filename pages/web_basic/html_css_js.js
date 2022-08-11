import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function HTML_CSS_JS() {
  return (
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
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                HTML, CSS, JS
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                HTML, CSS,JS는 웹 프로그래밍을 하려면 반드시 알아두어야 하는
                상식이에요! 아래 내용을 보면서, 어떤 역할을 하는지에 대해 꼭
                알아두도록 해요!
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
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
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    HTML
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    HTML은 건물을 만들기 위한 뼈대로 이해하자!
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-base mb-4">
                  {`HTML의, `}<strong>{`HT(HyperText)`}</strong>{`은 일반적인 텍스트를 비순차적으로 접근할 수 있는 방법을 제공해요! 같은 페이지 내의 다른 데이터로 이동할 수도 있고, 다른 페이지로도 이동할 수도 있죠!`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  {<strong>{`ML(Markup Lanauage)`}</strong>}{`은 웹 브라우저에게 내 컨텐츠를 어떻게 표현해야 하는지를 명령하는 언어에요. <태그> 등을 이용하여, 문서나 데이터를 구조적으로 표시해요. 마크업 언어를 쓰면 아래와 같은 효과를 얻을 수 있어요!`}
                  <div>
                  <ul className="list-disc ml-10 mt-2 text-sm">
                    <li className="mb-1">{`컨텐츠 제작자가 원하는 방법대로 문서를 표현하기 위해 웹 브라우저에게 명령을 내릴 수 있어요!`}</li>
                    <li className="mb-1">{`구조적인 작성 덕분에, 문서 작성에 대해 협업과 유지보수를 쉽게 할 수 있어요!`}</li>
                    <li className="mb-1">{`찾기 쉽다는 장점은 검색이 가능하다는 것을 의미하기도 해요. 컴퓨터 또한 마크업 언어의 태그를 통해 정보를 수집할 수 있어요!`}</li>
                 </ul>
                  </div>
                </p>
                <p className="leading-relaxed text-base mb-4 ">
                  {`즉, `}{<strong>HTML</strong>}{`은 하이퍼텍스트를 가장 중요한 특징으로 하는 마크업이라는 형식을 가진 언어라고 정리할 수 있어요. 웹 페이지를 만들기 위해 표준적으로 사용되는 마크업 언어이기 때문에, 웹 페이지를 만들 때 꼭 필요하죠.`}
                </p>

                <p className="leading-relaxed text-sm mb-2">
                  <strong className="text-emerald-600 dark:text-yellow-400">아래 버튼</strong>을 누르면, 저희가 추천하는 강의 영상으로 이동할 수 있어요!
                </p>
                <a className="text-indigo-500 inline-flex items-center cursor-pointer" href={`https://www.youtube.com/watch?v=8kJwTrs6e-4&list=PLFeNz2ojQZjtQc7mt8E9fNzIh9or34A61`} title="출처 : 유노코딩">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
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
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
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
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    CSS
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    CSS는 건물의 페인트칠 등의 꾸미는 행위로 이해하자!
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-base mb-4">
                  {`HTML의, `}<strong>{`HT(HyperText)`}</strong>{`은 일반적인 텍스트를 비순차적으로 접근할 수 있는 방법을 제공해요! 같은 페이지 내의 다른 데이터로 이동할 수도 있고, 다른 페이지로도 이동할 수도 있죠!`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  {<strong>{`ML(Markup Lanauage)`}</strong>}{`은 웹 브라우저에게 내 컨텐츠를 어떻게 표현해야 하는지를 명령하는 언어에요. <태그> 등을 이용하여, 문서나 데이터를 구조적으로 표시해요. 마크업 언어를 쓰면 아래와 같은 효과를 얻을 수 있어요!`}
                  <div>
                  <ul className="list-disc ml-10 mt-2 text-sm">
                    <li className="mb-1">{`컨텐츠 제작자가 원하는 방법대로 문서를 표현하기 위해 웹 브라우저에게 명령을 내릴 수 있어요!`}</li>
                    <li className="mb-1">{`구조적인 작성 덕분에, 문서 작성에 대해 협업과 유지보수를 쉽게 할 수 있어요!`}</li>
                    <li className="mb-1">{`찾기 쉽다는 장점은 검색이 가능하다는 것을 의미하기도 해요. 컴퓨터 또한 마크업 언어의 태그를 통해 정보를 수집할 수 있어요!`}</li>
                 </ul>
                  </div>
                </p>
                <p className="leading-relaxed text-base mb-4 ">
                  {`즉, `}{<strong>HTML</strong>}{`은 하이퍼텍스트를 가장 중요한 특징으로 하는 마크업이라는 형식을 가진 언어라고 정리할 수 있어요. 웹 페이지를 만들기 위해 표준적으로 사용되는 마크업 언어이기 때문에, 웹 페이지를 만들 때 꼭 필요하죠.`}
                </p>

                <p className="leading-relaxed text-sm mb-2">
                  <strong className="text-emerald-600 dark:text-yellow-400">아래 버튼</strong>을 누르면, 저희가 추천하는 강의 영상으로 이동할 수 있어요!
                </p>
                <a className="text-indigo-500 inline-flex items-center cursor-pointer" href={`https://www.youtube.com/watch?v=8kJwTrs6e-4&list=PLFeNz2ojQZjtQc7mt8E9fNzIh9or34A61`} title="출처 : 유노코딩">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
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
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
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
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {`JS (JavaScript)`}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    {`JavaScript는 건물 내 기능을 추가하고 관리하는 작업으로 이해하자!`}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-base mb-4">
                  {`HTML의, `}<strong>{`HT(HyperText)`}</strong>{`은 일반적인 텍스트를 비순차적으로 접근할 수 있는 방법을 제공해요! 같은 페이지 내의 다른 데이터로 이동할 수도 있고, 다른 페이지로도 이동할 수도 있죠!`}
                </p>
                <p className="leading-relaxed text-base mb-4">
                  {<strong>{`ML(Markup Lanauage)`}</strong>}{`은 웹 브라우저에게 내 컨텐츠를 어떻게 표현해야 하는지를 명령하는 언어에요. <태그> 등을 이용하여, 문서나 데이터를 구조적으로 표시해요. 마크업 언어를 쓰면 아래와 같은 효과를 얻을 수 있어요!`}
                  <div>
                  <ul className="list-disc ml-10 mt-2 text-sm">
                    <li className="mb-1">{`컨텐츠 제작자가 원하는 방법대로 문서를 표현하기 위해 웹 브라우저에게 명령을 내릴 수 있어요!`}</li>
                    <li className="mb-1">{`구조적인 작성 덕분에, 문서 작성에 대해 협업과 유지보수를 쉽게 할 수 있어요!`}</li>
                    <li className="mb-1">{`찾기 쉽다는 장점은 검색이 가능하다는 것을 의미하기도 해요. 컴퓨터 또한 마크업 언어의 태그를 통해 정보를 수집할 수 있어요!`}</li>
                 </ul>
                  </div>
                </p>
                <p className="leading-relaxed text-base mb-4 ">
                  {`즉, `}{<strong>HTML</strong>}{`은 하이퍼텍스트를 가장 중요한 특징으로 하는 마크업이라는 형식을 가진 언어라고 정리할 수 있어요. 웹 페이지를 만들기 위해 표준적으로 사용되는 마크업 언어이기 때문에, 웹 페이지를 만들 때 꼭 필요하죠.`}
                </p>

                <p className="leading-relaxed text-sm mb-2">
                  <strong className="text-emerald-600 dark:text-yellow-400">아래 버튼</strong>을 누르면, 저희가 추천하는 강의 영상으로 이동할 수 있어요!
                </p>
                <a className="text-indigo-500 inline-flex items-center cursor-pointer" href={`https://www.youtube.com/watch?v=8kJwTrs6e-4&list=PLFeNz2ojQZjtQc7mt8E9fNzIh9or34A61`} title="출처 : 유노코딩">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
