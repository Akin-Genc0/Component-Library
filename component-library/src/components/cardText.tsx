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
      <div data-looply>
        <div className="lg:w-[22rem] h-[400px] neu-inset px-10 py-8 flex flex-col gap-6 font-inter sm:w-full md:w-[20rem] h-full">
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
            <button className="neu-btn px-5 py-2 font-medium text-sm text-gray-900 dark:text-gray-100">
              {buttonText1}
            </button>
            <button className="neu-btn px-5 py-2 font-medium text-sm text-gray-500 dark:text-gray-400">
              {buttonText2}
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
