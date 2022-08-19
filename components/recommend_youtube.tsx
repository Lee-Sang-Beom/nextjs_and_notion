import Link from "next/link";

interface Props {
  channel_name : string;
  video_title : string;
  url:string
}


export default function Recommend_Youtube( props : Props) {
  return (
    <div className="p-4 md:w-1/3 flex">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {props.channel_name}
        </h2>
        <p className="leading-relaxed text-base">{props.video_title}</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center" href={props.url}>
          유튜브 보러가기
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
  );
}
