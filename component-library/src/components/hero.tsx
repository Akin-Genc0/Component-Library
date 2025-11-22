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
    <div className="flex flex-col items-center mt-[6rem] gap-8 w-full font-inter mb-[6rem]">
      <button
        className="bg-gray-200 py-1 px-5 rounded-xl text-sm font-thin transition-colors 
      duration-200 hover:bg-gray-300 hover:text-black"
      >
        {headerBtn}
        {" -->"}
      </button>
      <h1 className=" text-center w-full text-5xl font-bold ">{header}</h1>
      <p className="text-center lg:w-[69ch] sm:w-[40ch] md:w-[50ch]">
        {subHeader}
      </p>
      <div className="flex flex-row gap-4 justify-center w-full">
        <button
          className="text-sm bg-black cursor-pointer text-white py-3 px-8 rounded-xl
         transition-colors duration-200 hover:bg-gray-800 hover:text-gray-200"
        >
          {btn1Text}
        </button>
        <button
          className="text-sm cursor-pointer py-3 px-8 rounded-xl transition-colors 
        duration-200 hover:bg-gray-100 hover:text-black"
        >
          {btn2Text}
        </button>
      </div>
    </div>
  );
}
