import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";

export default function Rendering() {
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
        <div className="container px-5 py-24 mx-auto md:flex-row flex-col items-center">
          <div className="flex flex-col">
            {/* bar 길이*/}
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-1/4 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                {`렌더링 (Rendering)`}
              </h1>
              <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                - 웹 개발을 하면서, 또는 그 웹을 사용하면서 우리는 알게모르게
                렌더링을 많이 접하고 있어요. 중요한 내용이니 꼭 알고 넘어가도록
                해요!
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-8">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-3 text-center">
            <img
              className="object-cover object-center rounded mb-1"
              alt="hero"
              src="/img/rendering_main.png"
            />
            <a className="text-sm" title="이동하기" href={`https://velog.io/@ksh4820/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9B%90%EB%A6%AC`}> 이미지 출처 : kangdari님의 포스트</a>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              렌더링이란?
            </h1>
            <p className="mb-4 leading-relaxed">
              {`웹 브라우저는 HTML문서를 해석하고, 화면을 통해 해석된 결과를 보여줘요.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`HTML, CSS, JS 등 개발자가 작성한 문서를 브라우저에서 그래픽 형태로 출력해 주는 과정이 `}
              <strong>렌더링</strong>
              {`이에요.`}
            </p>
            <p className="mb-4 leading-relaxed">
              {`웹 브라우저가 원본 HTML문서를 읽어들인 후, 스타일을 입히고 대화형 페이지로 만들어 View port에 표시하기까지의 과정을 `}
              <strong>{`Critical Rendering Path`}</strong>
              {`라고 불러요.`}
            </p>
            <p className="mb-2 leading-relaxed">
              {`브라우저마다 렌더링을 수행하는 렌더링 엔진이라는 것을 가지는데, 그 종류는 아래와 같아요.`}
            </p>
            <div className="leading-relaxed text-base mb-8">
              <ul className="list-disc ml-10 text-sm text-slate-500 dark:text-slate-300 ">
                <li className="mb-1 text-left">{`크롬 : 블링크(Blink)`}</li>
                <li className="mb-1 text-left">{`사파리 : 웹킷(Webkit)`}</li>
                <li className="mb-1 text-left">{`파이어폭스 : 게코(Gecko)`}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
