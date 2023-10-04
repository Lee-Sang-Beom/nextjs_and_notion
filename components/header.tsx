import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      {/* 홈페이지 로고 */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-500 mb-4 md:mb-0"
        >
          {/* 로고 이미지 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-white p-1 bg-gray-600 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <span className="ml-3 text-xl">
            <strong> My FrontendWeb</strong>
          </span>
        </Link>

        {/* 페이지 이동  */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 font-semibold hover:text-gray-900">
            HOME
          </Link>
          <Link href="/web" className="mr-5 font-semibold hover:text-gray-900">
            WEB
          </Link>
          <Link
            href="/react"
            className="mr-5 font-semibold hover:text-gray-900"
          >
            REACT
          </Link>
          <Link
            href="/nextjs"
            className="mr-5 font-semibold hover:text-gray-900"
          >
            NEXT.JS
          </Link>
          <Link
            href="/notion"
            className="mr-5 font-semibold hover:text-gray-900"
          >
            NOTION
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
