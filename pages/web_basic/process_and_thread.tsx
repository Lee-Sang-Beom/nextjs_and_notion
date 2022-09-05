import Layout from "../../components/layout";
import Head from "next/head";
import Recommend_Youtube from "../../components/recommend_youtube";
import MoveBtn from "../../components/moveBtn";

export default function Process_and_Thread() {
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
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-col">
                            {/* bar 길이*/}
                            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                                <div className="w-0 h-full bg-indigo-500"></div>
                            </div>
                            {/* 제목 : p태그 설명을 포함할 경우, div py-6 mb-2*/}
                            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                                <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">
                                    {`프로세스와 스레드`}
                                </h1>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-4">
                                    {`- 프로세스와 스레드는 프로그램을 실행하는 데 있어 결코 빠져서는 안되는 필수 요소에요. 이것들은 아래와 같이 짧게 정의할 수 있어요. 짧게 읽어보고 아래에서 좀 더 자세히 살펴보도록 해요.`}
                                </p>
                                {/* 제목 추가 설명을 위한 p태그의 경우 새로 추가된 태그에서 mt-1로 구분감 부여*/}
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- `}<strong>{`프로세스 : `}</strong>{`운영체제로부터 시스템 자원을 할당받는 작업의 단위 (메모리에 올라와 실행되고 있는 프로그램의 인스턴스)`}
                                </p>
                                <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                    {`- `}<strong>{`스레드 : `}</strong>{`프로세스가 운영체제로부터 할당받은 자원을 이용하는 실행 흐름의 단위 (프로세스 내에서 실행되는 여러 흐름의 단위)`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 내용 2 : 프로그램, 프로세스, 스레드 */}
                    <div className="container px-5 py-12 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-1/6 h-full bg-indigo-500"></div>
                        </div>

                        {/* 프로그램 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">Program</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 프로세스 설명을 위해서, 프로그램이 무엇인지 알고 넘어가야 해요. 아래 정리를 보고 프로그램이 뭔지 확인하도록 해요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">{`파일이 저장 장치에 저장되어 있지만 메모리에는 올라가 있지 않은 `}<strong>{`정적인 상태`}</strong>{`인 어떤 작업을 위해 실행할 수 있는 파일`}</p>
                                        <p className="leading-relaxed dark:text-slate-700">{`즉, 어떤 작업을 위해 실행할 수 있는 파일이지만 아직 실행되지 않은 파일 그 자체`}</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">{`메모리에 올라가있지 않다는 말은, 아직 운영체제가 프로그램에게 독립적인 메모리 공간을 할당해주지 않았다는 뜻이에요. `}
                                        <strong>{`모든 프로그램은 운영체제가 실행되기 위한 메모리 공간을 할당해 줘야 실행될 수 있어요.`}</strong></p>
                                        <p className="leading-relaxed dark:text-slate-700">{`정적인 상태라는 말은, 단어 그대로 움직이지 않는 상태라는 뜻이에요. `}<strong>{`한 마디로 아직 실행되지 않고 가만히 있다는 뜻이에요.`}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 프로세스 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">Process</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 프로세스는 위에서 운영체제로부터 시스템 자원을 할당받는 작업 단위라고 했어요. 좀 더 알아보도록 해요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`실행 파일(프로그램)에게 의미를 부여하기 위해서는 프로그램을 실행해야 해요. 
                                            프로그램을 실행하는 순간 해당 파일은 컴퓨터 메모리에 올라가게 되는데, `}
                                            <strong>{`이 상태의 프로그램을 프로세스라고 말해요.`}</strong>
                                            </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">{
                                        `"프로그램을 실행하려고 운영체제로부터 시스템 자원을 할당받기 때문에, 운영체제로부터 할당받는 작업의 단위구나" 라고 이해하면 되요.`}
                                        </p>
                                        <p className="leading-relaxed dark:text-slate-700">
                                            {`프로그램이 실행되어 파일이 컴퓨터 메모리에 올라간 상태를 동적인 상태라고 말해요. 
                                            즉, 프로세스는 실행되고 있는 동적 상태의 프로그램이에요.`}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`프로세스는 운영체제로부터 여러 시스템 자원을 할당받아요. 그 종류는 다음 사진의 아래부분과 같아요.`}
                                            </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`각 프로세스는 최소 하나의 `} <strong>{`스레드`}</strong>{`를 가져요. 스레드가 무엇인지는 곧 다룰거에요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`각 프로세스는 별도 주소공간에서 실행되며, 일반적으로 다른 프로세스의 변수나 자료구조에 접근할 수 없어요. 
                                            왜냐하면 각 프로세스는 독립적이기 때문이에요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`하지만, 커널 영역에서 프로세스들끼리도 서로 데이터를 주고받는 방법이 존재하긴 해요. 그게 바로 `}<strong>{`IPC(Inter Process Communication)에요.`}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 w-full h-full">
                                    <img
                                        className="object-cover object-center rounded mb-1"
                                        alt="hero"
                                        src="/img/memory.png"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 스레드 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">Thread</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 스레드는 위에서, 프로세스 내에서 실행되는 작업의 여러 흐름단위라고 언급했어요. 조금 더 자세히 알아보도록 해요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`유튜브로 비유해보자면, 우리는 영상을 다운받을 수도 있어야하고 동시에 영상을 볼 수도 있어야 해요. 이렇게 한 프로세스 내에서 여러 갈래의 작업이 동시에 진행될수 있어야 하는데, 이 갈래가 바로 `}<strong>{`스레드`}</strong>{`에요.`}</p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`스레드는 프로그램을 하나의 프로세스로 실행했을 때, 프로그램 하나가 단순히 한 가지 작업만을 하게 된다는 단점을 해결하기 위해 등장했어요.`}</p>
                                        <p className="leading-relaxed dark:text-slate-700">{`그래서 우리는 스레드가 프로세스의 코드에 정의된 절차에 따라 실행되는 경로이자, 프로세스 내에서 실행되는 여러 흐름의 단위로 생각할 수 있어요.`}</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`스레드는 프로세스 내에서 각각 별도의 Stack를 갖고있지만, `}
                                            <strong>{`Code, Data, Heap`}</strong>
                                            {`형식의 영역은 공유해요. 즉, 프로세스 내의 할당된 메모리공간을 `}
                                            <strong>{`스레드끼리 공유`}</strong>
                                            {`하면서 실행할 수 있다는 말이에요. 프로세스와 다르게 말이죠.`}
                                            </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`스레드는 프로세스와 다르게 프로세스의 자원을 공유하면서 작동하기 때문에, `}
                                            <strong>{`스레드들은 프로세스 실행 흐름의 일부가 되는 것`}</strong>
                                            {`으로 이해할 수 있어요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`만약, 한 스레드가 프로세스 자원을 변경하면 다른 `}
                                            <strong>{`이웃 스레드(sibling thread)`}</strong>
                                            {`도 그 변경 결과를 즉시 볼 수 있어요. 서로가 같은 프로세스의 자원에 접근할 수 있으니까요.`}
                                        </p>      
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 w-full h-full">
                                    <img
                                        className="object-cover object-center rounded mb-1"
                                        alt="hero"
                                        src="/img/thread.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 내용 3 : 프로세스, 스레드 차이*/}
                    <div className="container px-5 py-12 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-1/3 h-full bg-indigo-500"></div>
                        </div>

                        {/* 차이점 바로 기술 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">차이</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 위의 설명을 보면서 짐작하실 수 있겠지만, 프로세스와 스레드는 분명한 차이를 가지고 있어요. 그 내용을 좀 더 깊게 파고들어봐요.`}
                            </p>             
                        </div>

                        <table className="table_set">
                            <thead>
                                <tr>
                                    <th className="w-1/5">{`구분`}</th>
                                    <th className="w-2/5">{`Process`}</th>
                                    <th className="w-2/5">{`Thread`}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-semibold tracking-widest">{`영역`}</td>
                                    <td>{`운영체제에 의해 각각 독립된 메모리 영역 할당`}</td>
                                    <td>{`프로세스가 할당 받은 메모리 영역에서 Stack영역은 따로 할당받고, `}<strong>{`Code/Data/Heap`}</strong> {`메모리 영역은 공유`}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold tracking-widest">{`공유`}</td>
                                    <td>{`각각 독립된 메모리 영역을 할당받으므로 다른 프로세스의 변수나 자료에 접근 불가`}</td>
                                    <td>{`별도의 Stack영역을 가지고 있지만 Heap 메모리와 같은 영역은 서로 읽고 쓸 수 있음`}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold tracking-widest">{`오류 전파`}</td>
                                    <td>{`각 프로세스의 메모리 영역은 서로 독립적이므로, 오류 전파의 걱정이 적음`}</td>
                                    <td><strong>{`Code/Data/Heap`}</strong>{` 메모리 영역의 내용을 공유하므로 특정 스레드에서 오류 발생 시, 같은 프로세스 내의 다른 스레드에 영향을 미침`}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold tracking-widest">{`단위`}</td>
                                    <td title="시스템 자원 : CPU 할당 시간, 운영을 위한 주소 공간, 독립된 메모리 영역">{`운영체제로부터 `}<strong>{`시스템 자원`}</strong>{`을 할당받는 작업 단위 (운영체제 입장에서 최소 작업 단위)`}</td>
                                    <td>{`프로세스 내에서 실행되는 흐름의 단위 (CPU 입장에서의 최소 작업 단위)`}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 내용 4 : 멀티 프로세스와 멀티 스레드 */}
                    <div className="container px-5 py-12 mx-auto">
                        {/* bar 길이*/}
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-1/2 h-full bg-indigo-500"></div>
                        </div>

                        {/* 멀티 프로세스 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">Multi Process</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                {`- 멀티프로세스는 하나의 응용프로그램을 여러 개의 프로세스로 구성하여 각 프로세스가 하나의 작업(태스크)을 처리하도록 하는 것이에요.`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 멀티프로세스는 각 프로세스의 메모리 구분이 필요하거나, 독립된 주소공간을 가져야 할 경우 사용할 수 있어요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`먼저, 멀티 프로세스의 `}<strong>{`장점`}</strong>{`에 대해 언급해볼게요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`멀티 프로세스는 독립된 메모리 구조를 가지기 때문에, 프로세스 중 하나에 문제가 발생해도 다른 프로세스에게 치명적 영향이 확산되지 않는다는 `}<strong>{`안전성`}</strong>{`이 있어요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`독립된 메모리 구조를 가짐으로 서로의 변수와 자료구조에 접근하지 못하기 때문에 동기화 작업이 별도로 요구되지는 않으나, 만약 프로세스 간 통신이 필요하면 `}<strong>IPC</strong>{`라는 복잡한 기법을 사용해야 해요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`다음으로, 멀티 프로세스의 `}<strong>{`단점`}</strong>{`에 대해 언급해볼게요.`}
                                        </p>
                                        <p className="leading-relaxed dark:text-slate-700">
                                            {`멀티 프로세스는 멀티 스레드보다 더 많은 `}<strong>{`메모리 공간과 CPU 자원`}</strong>{`을 차지해요. 운영체제로부터 시스템 자원을 할당받는 작업 단위가 여러 개니까 더 많은 CPU 자원을 할당한다고 생각하면 되요.`}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        
                                        <p className="leading-relaxed mb-3 dark:text-slate-700" title="캐시 : CPU와 메인메모리 사이에 위치하며 CPU에서 한번 이상 읽어들인 메모리의 데이터를 저장하고 있다가, CPU가 다시 그 메모리에 저장된 데이터를 요구할 때, 메인메모리를 통하지 않고 데이터를 전달해 주는 용도">
                                            <strong>{`Context Switching`}</strong>{`발생 시, 캐시 메모리 초기화 등의 무거운 작업들을 동반하여 비용과 시간이 많이 소모되는 오버헤드가 발생할 수 있어요.
                                             Context Switching은 CPU가 한 번에 하나의 프로세스만 실행 가능하기 때문에 등장한 개념이에요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`좀 더 자세히 설명하자면, CPU에서는 여러 프로세스를 돌아가면서 한 번에 하나씩 작업을 실행해요. 
                                            만약 어떠한 이유로 `}<strong>{`동작 중인 프로세스가 대기 상태로 이동`}</strong>{`해야 한다면, 다음에 이 프로세스가 다시 CPU 자원을 받아 올라왔을 때 작업을 이어서 진행해야 할 거에요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`즉, 프로세스는 대기 상태로 넘어가면서 해당 프로세스의 `}
                                            <strong>{`상태(Context)를 보관해야 해요.`}</strong>
                                            {`같은 맥락으로, 대기하고 있던 다음 순서의 프로세스는 CPU 자원을 할당받아 동작하면서 이전에 보관했던 프로세스의 상태를 복구하는 작업이 동반되어야 하겠죠? `}
                                            <strong>{`이런 일련의 과정이 Context Switching이에요.`}</strong>
                                        </p>

                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* 멀티 스레드 */}
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold title-font text-gray-900 mt-6 mb-2 ">Multi Thread</h1>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1">
                                {`- 멀티스레드는 하나의 응용프로그램을 여러 개의 스레드로 구성하고, 각 스레드로 하여금 하나의 작업을 처리하도록 하는 것이에요. 대표적으로 웹 서버가 있어요.`}
                            </p>
                            <p className="sm:w-full leading-relaxed text-base sm:pl-10 pl-0 mt-1 mb-6">
                                {`- 프로그램이 시작할 때 메인 스레드가 실행되고, 메인 스레드는 작업을 처리하기 위해 새로운 스레드를 생성해요. 이들은 병렬로 실행되며, 실행이 완료되면 메인 스레드와 결과를 동기화하는 방식으로 진행되요.`}
                            </p>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`먼저, 멀티 스레드의 `}<strong>{`장점`}</strong>{`에 대해 언급해볼게요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`프로세스를 생성해 자원을 할당하는 `}<strong>{`system call`}</strong>{`이 줄어들어 자원을 효율적으로 관리할 수 있어요. 즉, 시스템 자원의 소모를 줄임으로써 자원의 효율성을 증대시키고 시스템 처리량이 증가하게 되요. `}
                                            </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`또, 프로세스에 비해 스레드 간 데이터를 주고 받는 것이 `}<strong>{`간단`}</strong>{`하기 때문에 통신 부담이 적고, 마찬가지로 시스템 자원 소모가 줄어들게 되요. 덕분에 스레드 사이의 작업량이 적어 Context Switching이 빨라요.`}
                                        </p>
                                        <p className="leading-relaxed dark:text-slate-700">
                                            {`프로세스에서의 Context Switching은 서로 공유하는 데이터가 없으므로 캐시가 쌓아놓은 데이터들이 무너지고, 새로 캐시 정보를 쌓아야 해요.
                                            하지만, 스레드에서의 캐시 데이터는 스레드가 바뀌어도 공유하는 데이터가 있으므로 의미가 있어요. 그래서 Context Switching이 빠른 거에요.`}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 dark:bg-gray-200 p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`다음으로, 멀티 스레드의 `}<strong>{`단점`}</strong>{`에 대해 언급해볼게요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`멀티 스레드의 경우 자원을 공유하기 때문에, 각 스레드가 같은 공유 자원의 내용에 접근하고, 수정을 가할 경우 `}<strong>동기화 문제</strong>{`가 발생할 우려가 있어요. `}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`그래서, 스레드의 공유 자원 접근에 대해 주의 깊은 설계가 필요하며, 디버깅이 까다로운 점이 있어요.`}
                                        </p>
                                        <p className="leading-relaxed mb-3 dark:text-slate-700">
                                            {`다른 프로세스(프로세스 밖)에서 스레드 각각을 제어할 수 없으며, 하나의 스레드만 오류로 종료되어도 전체 스레드가 종료될 수 있어요.`}
                                        </p>
                                        <p className="leading-relaxed dark:text-slate-700">
                                            {`마지막으로 `}<strong>{`하나의 스레드만 실행중일 때에는 실행시간이 되려 지연`}</strong>{`될 수 있어요. 여러 작업을 할 목적으로 멀티 스레드를 설계했을텐데, 하나의 스레드만 동작한다면 문제가 되겠죠?`}
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                   
                   
                       
                    </div>
                </section>

            </Layout>
        </>
    );
}