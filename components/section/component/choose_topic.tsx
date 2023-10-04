import Link from "next/link";

interface Props {
  category: string;
  title: string;
  desc: string;
  url: string;
}

export default function ChooseTopic(props: Props) {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 px-8 pt-14 pb-10 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {/* 카테고리 */}
          {props.category}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {/* 카테고리 내 주제 제목 */}
          {props.title}
        </h1>
        <p className="leading-relaxed mb-3">
          {/* 간략한 설명 */}
          {props.desc}
        </p>
        <Link
          href={props.url}
          className="text-indigo-500 inline-flex items-center mt-5 cursor-pointer"
        >
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
        </Link>
      </div>
    </div>
  );
}
