type cardText = {
  header: string;
  subHeader: string;
  mainText: string;
  buttonText1: string;
  buttonText2: string;
};

export default function CardText({
  header,
  subHeader,
  mainText,
  buttonText1,
  buttonText2,
}: cardText) {
  return (
    <>
      <div className="">
        <div className="lg:w-[22rem] h-[400px] border border-black dark:border-gray-700 rounded-lg px-7 py-5 flex flex-col gap-6 font-inter sm:w-full md:w-[20rem] dark:bg-gray-900 h-full">
          <section>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {header}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {subHeader}
            </p>
          </section>
          <section>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {mainText}
            </p>
          </section>
          <section className="flex flex-row gap-3 mt-auto">
            <button className="bg-black dark:bg-gray-100 text-white dark:text-black px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-gray-200 dark:hover:text-black">
              {buttonText1}
            </button>
            <button className="text-gray-900 dark:text-gray-100 px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-gray-100 border dark:border-gray-700 bg-white dark:bg-gray-900">
              {buttonText2}
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
