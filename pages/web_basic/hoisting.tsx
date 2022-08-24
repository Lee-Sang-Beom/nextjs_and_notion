import Layout from "../../components/layout";
import Head from "next/head";

export default function Hoisting() {
    // 페이지 넘김 정보
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
                                <div className="w-1/5 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`호이스팅(Hoisting)`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- JavaScript를 공부하면서 var, let, const로 선언된 변수들을 한 번 쯤은 보셨을 거에요!
                                    이것들의 차이를 잘 말할 줄 아는 개발자가 되기 위해서는 `}<strong>{`호이스팅(Hoisting)`}</strong>{`에 대해 꼭 알고 있어야 해요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- 이것은 `}<strong>{`실행 컨텍스트`}</strong>{`와도 깊은 연관이 있어요. 이 페이지에서는 호이스팅(Hoisting)이 무엇인지, 어떻게 적용되고 있는지 전반적으로 이해 하는 것을 목표로 두도록 해요!`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-8">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-3 text-center">
                            <img
                                className="object-cover object-center rounded mb-1"
                                alt="hero"
                                src="/img/hoisting.png"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
                                {`호이스팅이란?`}
                            </h1>
                            <p className="mb-4 leading-relaxed">
                                {`호이스팅의 의미 자체는`}
                                <strong>{` 코드에 선언된 변수 및 함수를 코드의 상단으로 끌어올려, 해당 변수 및 함수 유효범위의 최상단에 선언하는 것`}</strong>
                                {`으로 정의되고 있어요.`}
                            </p>
                            <p className="mb-2 leading-relaxed">
                                {`자바스크립트에서 소스 코드를 실행하는 과정은 `}<strong>생성 단계</strong>, <strong>실행 단계</strong>{`로 구분할 수 있어요.`}
                            </p>
                            <div className="leading-relaxed text-base mb-8">
                                <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                                    <li className="mb-1 font-semibold text-left">
                                        {`생성 단계`}
                                        <p className="mt-1 mb-2 text-xs font-normal">
                                            {`- 코드를 순차적으로 실행하기 전, 실행 컨텍스트를 생성하면서 여러 식별자들을 스캔하며 준비하는 단계`}
                                        </p>
                                    </li>
                                    <li className="mb-1 font-semibold text-left">
                                        {`실행 단계`}
                                        <p className="mt-1 mb-2 text-xs font-normal">
                                            {`- 스캔 후, 선언문 외의 나머지 코드를 순차적으로 실행하는 단계`}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <p className="mb-4 leading-relaxed">
                                <strong>{`JavaScript Parser(엔진)`}</strong>{`는 코드를 실행하기 전에 함수 안을 훑으면서, 실행 가능한 코드를 형상화하고 구분하는 과정을 거쳐요. 이것은 실행 컨텍스트를 위한 과정이에요`}
                            </p>
                            <p className="mb-4 leading-relaxed">
                                {`이 실행 컨텍스트를 위한 과정에서 발생하는 것이 `}
                                <strong>{`호이스팅`}</strong>
                                {`이에요. 즉, 위에서 언급한 `}
                                <strong>{`생성 단계`}</strong>
                                {`에서 스코프 안에 존재하는 `}
                                <strong>{`선언된 식별자들에 대한 정보`}</strong>
                                {`를 기억하기 위해, 아래쪽에 존재하는 내용 중 필요한 변수와 함수의 선언을 스코프 범위의 최상단으로 `}
                                <strong>{`내부적으로 끌어올려 처리`}</strong>
                                {`하는 것이 바로 `}<strong>{`호이스팅`}</strong>{`이라고 볼 수 있어요.`}
                            </p>
                            <p className="mb-4 leading-relaxed">
                                {`스코프 상단에 선언부들이 내부적으로 끌어올려지는 것이기 때문에, 자바스크립트의 모든 선언에는 호이스팅이 일어난다고 볼 수 있어요.`}
                            </p>
                            <p className="mb-4 leading-relaxed">
                                <strong>{`var 변수 선언과 함수 선언문`}</strong>
                                {`은 호이스팅이 정상적으로 동작하는 것으로 보이지만, `}
                                <strong>{`let, const, class를 이용한 선언문`}</strong>
                                {`은 호이스팅이 발생하지 않는 것처럼 동작해요. 이것들을 이제 천천히 살펴보도록 해요. `}
                            </p>
                        </div>
                    </div>

                    {/* 내용 2 : 변수 호이스팅 */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-2/5 h-full bg-indigo-500"></div>
                            </div>
                        </div>
                        
                        {/* var 호이스팅 */}
                        <div className="lg:w-full mx-auto flex flex-wrap py-6 mb-4">
                            {/* flexbox - left 내용 */}
                            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">{`변수 호이스팅 (var)`}</h1>
                                <p className="leading-relaxed mb-4">{`var 키워드로 선언된 변수를 호이스팅하는 경우, `} <strong>{`JavaScript Parser(엔진)`}</strong>
                                {`은 선언과 함께 `}<strong>{`undefined로 변수를 초기화해`}</strong>{`, 메모리에 저장해요.`}</p>
                                <div className="flex border-t border-gray-200 py-2">
                                </div>
                                <p className="leading-relaxed mb-4">
                                    {`변수는 3단계에 걸쳐 생성되는데, var 키워드로 생성된 변수는 `}
                                    <strong>{`선언과 초기화 단계가 함께 일어나요. `}</strong>
                                    {`즉, 스코프에 변수를 등록(선언 단계)하고 메모리에 변수를 위한 공간을 확보한 후, undefined로 초기화하는 과정이 함께 일어난다는 뜻이에요.`}
                                </p>
                                <div className="flex border-t border-gray-200 py-2">
                                </div>
                                <p className="leading-relaxed mb-4">
                                    {`따라서 선언문 이전에 해당 변수에 접근하더라도, 스코프에 호이스팅된 변수가 존재하기 때문에 에러가 발생하지 않아요. `}
                                    <strong>{`초기화과정에서 저장한 undefined를 반환하기 때문`}</strong>{`이에요. 이후 변수 할당문에 도달하면 해당 변수에는 비로소 값이 할당되요.`}
                                </p>
                                <div className="flex border-t border-gray-200 py-2">
                                </div>
                                <p className="leading-relaxed mb-4">
                                    {`아래는 `}<strong>{`변수 생성단계`}</strong>{`에 대한 내용이에요. 읽어보고 넘어가도록 해요.`}
                                </p>
                                <div className="leading-relaxed text-base mb-8">
                                    <ul className="list-disc ml-7 text-sm  text-slate-500 dark:text-slate-300">
                                        <li className="mb-2 font-semibold text-left list-decimal">
                                            {`선언 단계`}
                                            <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                                {`- 변수를 실행 컨텍스트에 등록해, JS엔진에 변수의 존재를 알리는 단계`}
                                            </p>
                                            <p className="ml-1 mb-1 text-xs font-normal">
                                                {`- 이 변수 객체는 스코프가 참조하는 대상이 되요.`}
                                            </p>
                                        </li>
                                        <li className="mb-2 font-semibold text-left list-decimal">
                                            {`초기화 단계`}
                                            <p className="ml-1 mt-1 mb-1 text-xs font-normal">
                                                {`- 변수 객체에 등록된 변수를 위한 공간을 메모리에 확보하는 단계`}
                                            </p>
                                            <p className="ml-1 mb-1 text-xs font-normal ">
                                                {`- 이 단계에서 변수는 undefined로 초기화되요.`}
                                            </p>
                                        </li>
                                        <li className="mb-2 font-semibold text-left list-decimal">
                                            {`할당 단계`}
                                            <p className="mt-1 mb-1 text-xs font-normal">
                                                {`- undefined로 초기화된 변수에 실제 값을 할당하는 단계`}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* flexbox - right 내용 */}
                            <div className="gataby-highlight">
                                <pre className="language-jsx">
                                    <code className="language-jsx">
                                        <div className="language-jsx">
                                            {`console`}
                                            <span className="token_punctuation">.</span>
                                            <span className="token_function">log</span>
                                            <span className="token_punctuation">{`(`}</span>
                                            {`name_1`}
                                            <span className="token_punctuation">{`);`}</span>
                                            <span className="token_comment">{` // 출력 결과는 무엇일까?`}</span>
                                        </div>
                                        <div className="language-jsx">
                                            <span className="token keyword">var</span>
                                            {` name_1 `}
                                            <span className="token operator">=</span>
                                            {` "Alice";`}
                                        </div>
                                    </code>
                                </pre>
                                <div className="text-center py-6 text-sm">{`↓ ↓ ↓ (javascript parser 내부에서 처리되는 결과)`}</div>
                                <pre className="language-jsx">
                                    <code className="language-jsx">
                                        <div className="language-jsx">
                                            <div className="token_comment">{`// 호이스팅: 선언문이 유효범위의 최상단으로 올라옴`}</div>
                                            <span className="token keyword">var</span>
                                            {` name_1 `}
                                            <span className="token operator">=</span>
                                            {` undefined; `}
                                        </div>
                                        
                                        <div className="language-jsx">
                                            {`console`}
                                            <span className="token_punctuation">.</span>
                                            <span className="token_function">log</span>
                                            <span className="token_punctuation">{`(`}</span>
                                            {`name_1`}
                                            <span className="token_punctuation">{`);`}</span>
                                            <span className="token_comment">{` // undefined 출력`}</span>
                                        </div>

                                        <div className="language-jsx">
                                            {`name_1 `}
                                            <span className="token operator">=</span>
                                            {` "Alice";`}
                                            <span className="token_comment">{` // 할당 단계 : 변수에 값 할당`}</span>
                                        </div>
                                        
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* let, const 호이스팅 */}
                        <div className="lg:w-full mx-auto flex flex-wrap py-6 mt-4 mb-2">
                            {/* flexbox - left 내용 */}
                            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">{`변수 호이스팅 (let, const)`}</h1>
                                <p className="leading-relaxed mb-4">{`let, const 키워드로 선언된 변수들도 var 키워드로 선언된 변수처럼 `} <strong>{`JavaScript Parser(엔진)`}</strong>
                                {`에 의해, 선언문이 해당 스코프의 최상단으로 끌어올려지기 때문에 호이스팅이 일어난다고 볼 수 있어요. `}
                                <strong>{`즉, 선언이 코드 실행 이전에, 메모리에 저장되는 과정은 맞다는 의미에요.`}</strong></p>
                                
                                <div className="flex border-t border-gray-200 py-2">
                                </div>
                                <p className="leading-relaxed mb-4">
                                    {`하지만, var 키워드로 선언된 변수와는 다르게, let, const 키워드로 선언된 변수들은 `}
                                    <strong>{`호이스팅이 발생하지 않는 것처럼 동작해요.`}</strong>
                                    {` 왜냐하면 초기화되지 않은 상태로 `}
                                    <strong>{`선언 자체만 메모리에 저장`}</strong>{`되기 때문이에요.`}
                                </p>
                                <div className="flex border-t border-gray-200 py-2">
                                </div>
                                <p className="leading-relaxed mb-4">
                                    {`let, const로 선언된 변수의 경우, var로 선언된 변수와는 다르게 `}
                                    <strong>{`선언 단계와 초기화 단계가 분리되어 실행되요. `}</strong>
                                    {`JavaScript Parser(엔진)이 식별자를 기록하긴 하지만 값을 초기화하지 않기 때문에 선언문 이전에 식별자 값을 참조하려 하면 `}
                                    <strong>{`Reference Error`}</strong>
                                    {`가 발생하는 것이에요.`}
                                </p>
                                <div className="flex border-t border-gray-200 py-2">
                                </div>
                                <p className="leading-relaxed mb-4">
                                    {`이렇게 let, const으로 선언되는 변수의 경우, 스코프의 최상단 지점으로 끌어올려진 선언부 지점이 아니라, `}
                                    <strong>{`변수를 실질적으로 선언하는 라인을 실행하기 이전에는 `}</strong>
                                    {`식별자를 참조할 수 없다는 특징이 있어요. 이 참조 불가능한 구역을 `}
                                    <strong>{`일시적 사각지대(TDZ : Temporal Dead Zone)`}</strong>
                                    {`라고 해요.`}
                                </p>
                            </div>
                            {/* flexbox - right 내용 */}
                            <div className="gataby-highlight">
                                <pre className="language-jsx">
                                    <code className="language-jsx">
                                        <div className="language-jsx">
                                            {`console`}
                                            <span className="token_punctuation">.</span>
                                            <span className="token_function">log</span>
                                            <span className="token_punctuation">{`(`}</span>
                                            {`name_1`}
                                            <span className="token_punctuation">{`);`}</span>
                                            <span className="token_comment">{` // 출력 결과는 무엇일까?`}</span>
                                        </div>
                                        <div className="language-jsx">
                                            <span className="token keyword">let</span>
                                            {` name_1 `}
                                            <span className="token operator">=</span>
                                            {` "Alice";`}
                                        </div>
                                    </code>
                                </pre>
                                <div className="text-center py-6 text-sm">{`↓ ↓ ↓ (javascript parser 내부에서 처리되는 결과)`}</div>
                                <pre className="language-jsx">
                                    <code className="language-jsx">
                                        <div className="language-jsx">
                                            <div className="token_comment">{`// 호이스팅 발생! 하지만 초기화되지 않음.`}</div>
                                            <span className="token keyword">let</span>
                                            {` name_1 `}
                                            <span className="token operator">=</span>
                                        </div>
                                        
                                        <div className="language-jsx">
                                            {`console`}
                                            <span className="token_punctuation">.</span>
                                            <span className="token_function">log</span>
                                            <span className="token_punctuation">{`(`}</span>
                                            {`name_1`}
                                            <span className="token_punctuation">{`);`}</span>
                                            <span className="token_comment">{` // reference error 발생!`}</span>
                                        </div>

                                        <div className="language-jsx">
                                            {`name_1 `}
                                            <span className="token operator">=</span>
                                            {` "Alice";`}
                                            <span className="token_comment">{` // 할당 단계 : 변수에 값 할당`}</span>
                                        </div>
                                        
                                    </code>
                                </pre>
                            </div>
                        </div>

                    </div>
                </section>
            </Layout>
        </>
    );
}