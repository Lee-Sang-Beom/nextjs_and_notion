import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        {/* 홈페이지 로고 */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            {/* 로고 이미지 */}
            <a className="flex title-font font-medium items-center text-gray-500 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white p-1 bg-gray-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>

              <span className="ml-3 text-xl">
                {/* 홈페이지 명 */}
                <strong> My FrontendWeb</strong>
              </span>
            </a>
          </Link>

          {/* 페이지 이동  */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 font-semibold hover:text-gray-900">HOME</a>
            </Link>
            <Link href="/web">
              <a className="mr-5 font-semibold hover:text-gray-900">WEB</a>
            </Link>
            <Link href="/react">
              <a className="mr-5 font-semibold hover:text-gray-900">REACT</a>
            </Link>
            <Link href="/nextjs">
              <a className="mr-5 font-semibold hover:text-gray-900">NEXT.JS</a>
            </Link>
            <Link href="/notion">
              <a className="mr-5 font-semibold hover:text-gray-900">NOTION</a>
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
