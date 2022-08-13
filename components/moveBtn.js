import Link from "next/link";

export default function MoveBtn({prev, next}) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto mt-20 flex px-5 mb-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <div className="flex justify-center">
            {prev && 
                <Link href={prev}>
                <a>
                <button
                    className="
                rounded-lg px-5 py-2 ml-5 mr-5
                transition ease-in-out duration-500
                text-gray-200 dark:text-gray-700
                bg-gray-700 dark:bg-gray-100
                hover:-translate-y-1 hover:scale-110
                hover:text-gray-700 dark:hover:text-gray-200
                hover:bg-gray-200 dark:hover:bg-gray-700 "
                >
                    PREV
                </button>
                </a>
            </Link>
            }
            
            {next && 
            <Link href={next}>
            <a>
              <button
                className="
              rounded-lg px-5 py-2 ml-5 mr-5
              transition ease-in-out duration-500
              text-gray-200 dark:text-gray-700
              bg-gray-700 dark:bg-gray-100
              hover:-translate-y-1 hover:scale-110
              hover:text-gray-700 dark:hover:text-gray-200
              hover:bg-gray-200 dark:hover:bg-gray-700 "
              >
                NEXT
              </button>
            </a>
          </Link>
          }
            
          </div>
        </div>
      </div>
    </section>
  );
}
