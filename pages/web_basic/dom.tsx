import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Learn_More from "../../components/learn_More";
import React from "react";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Dom() {
  // 페이지 넘김 정보
  // const prev = "/web_basic/html_css_js";
  // const next = "/web_basic/dom";
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
                <div className="w-1/4 h-full bg-indigo-500"></div>
              </div>
              {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                  {`시작하기 전에..`}
                </h1>
                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                  {`- JavaScript는 웹 브라우저 기반의 객체 위에서 동작해요. 그렇기 때문에 여러분이 웹 개발자를 꿈꾼다면, DOM과 BOM에 대해 자세히 알아야 할 필요가 있어요.`}
                </p>
              </div>
            </div>
            {/* dom, bom 소개시작 */}
            <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
              <div className="sm:w-1/2 mb-10 px-4 ">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="/img/bom.jpg" />
                </div>
                <a
                  className="text-sm"
                  title="이동하기"
                  href={`https://sharryhong.github.io/2016/12/28/javascript-bom/`}
                >
                  {`이미지 출처 : hong's님의 포스트(H-web)`} 
                </a>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{`BOM(Browser Object Model)`}</h2>
                <p className="leading-relaxed text-base">{`브라우저와 관련된 객체들의 집합`}</p>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="/img/dom.png" />
                </div>
                <a
                  className="text-sm"
                  title="이동하기"
                  href={`https://sharryhong.github.io/2016/12/28/javascript-dom/`}
                >
                  {`이미지 출처 : hong's님의 포스트(H-web)`} 
                </a>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{`DOM(Document Object Model)`}</h2>
                <p className="leading-relaxed text-base">{`XML/HTML와 같은 문서에 접근하기 위한 인터페이스`}</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
