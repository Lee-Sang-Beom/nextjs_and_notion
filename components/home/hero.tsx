import Link from "next/link";
import Animation from "../animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="mb-8 font-sans hover:text-blue-600 title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
          프론트엔드 개발에 발을 들이신 여러분, 안녕하세요
        </h1>
        <p className="mb-4 leading-relaxed">
          프론트엔드 개발자가 되기위해, 여러분들은 기초적인 HTML, CSS, JS부터
          시작하여 다양한 라이브러리와 프레임워크들을 만나게 될 거에요.
        </p>
        <p className="mb-4 leading-relaxed">
          기초적인 문법도 중요하지만, 그만큼 웹에서 사용되는 다양한 용어와 그
          내용을 알아둘 필요가 있어요.
        </p>
        <p className="mb-8 leading-relaxed">
          만약, 내가 이러한 부분에 자신이 없고, 배워나가고 싶다는 마음가짐이
          있다면, 아래 버튼을 눌러보세요
        </p>
        <div className="flex justify-center">
          <Link href="/web" className="btn-project hover:animate-pulse">
            웹 기초 개념 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
