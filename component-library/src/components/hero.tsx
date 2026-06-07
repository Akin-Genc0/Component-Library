type heroValue = {
  headerBtn: string;
  header: string;
  subHeader: string;
  btn1Text: string;
  btn2Text: string;
};

export default function Hero({
  header,
  subHeader,
  btn1Text,
  btn2Text,
  headerBtn,
}: heroValue) {
  return (
    <div
      data-looply
      className="flex flex-col items-center mt-[6rem] gap-8 w-full font-inter mb-[6rem]"
    >
      <button className="neu-btn py-2 px-6 text-sm font-thin text-gray-600 dark:text-gray-300">
        {headerBtn}
        {" -->"}
      </button>
      <h1 className="text-center w-full text-5xl font-bold dark:text-white">
        {header}
      </h1>
      <p className="text-center lg:w-[69ch] sm:w-[40ch] md:w-[50ch] text-gray-600 dark:text-gray-300">
        {subHeader}
      </p>
      <div className="flex flex-row gap-4 justify-center w-full">
        <button className="neu-btn text-sm cursor-pointer text-gray-900 dark:text-gray-100 py-3 px-8 font-medium">
          {btn1Text}
        </button>
        <button className="neu-btn text-sm cursor-pointer py-3 px-8 text-gray-500 dark:text-gray-400">
          {btn2Text}
        </button>
      </div>
    </div>
  );
}
