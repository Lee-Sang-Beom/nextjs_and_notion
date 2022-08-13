import Link from "next/link";

export default function Learn_More({ url, hover_title }) {
  return (
    <>
      <p className="leading-relaxed text-sm mb-2">
        <strong className="text-emerald-600 dark:text-yellow-400">
          아래 버튼
        </strong>
        을 누르면, 저희가 추천하는 강의 영상으로 이동할 수 있어요!
      </p>
      <a
        className="text-indigo-500 inline-flex items-center cursor-pointer mt-2"
        href={url}
        title={hover_title}
      >
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
    </>
  );
}
