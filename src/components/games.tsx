import "../App.css";
import "primeicons/primeicons.css";

const GamesPreview = () => {
  return (
    <>
      <div className="flex flex-col 2xl:gap-12 xl:gap-7 pl-12 pr-12">
        <div className="flex flex-row w-full justify-between">
          <div className="relative 2xl:w-220 xl:w-140 2xl:h-80 xl:h-50 bg-[#1e0045] rounded-4xl">
            <img
              src="src/assets/img/cyberpunk-background2.jpg"
              className="h-full absolute right-0 rounded-r-4xl mask-l-from-50%"
            ></img>
            <img
              src="src/assets/img/cyberpunk-character.png"
              className="2xl:h-92 xl:h-60 absolute bottom-0"
            ></img>
            <div className="flex flex-col items-center absolute right-7 top-7 2xl:gap-32 xl:gap-15 h-full">
              <img
                src="src/assets/img/cyberpunk-logo.png"
                className="2xl:h-20 xl:h-11"
              ></img>
              <button className="bg-white w-40 h-10 rounded-2xl shadow-lg shadow-[#000000] text-[#232323] font-[poppins] font-medium cursor-pointer flex flex-row items-center justify-center gap-2">
                Saiba mais{" "}
                <i className="pi pi-plus-circle 2xl:text-1xl xl:text-sm"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-[poppins] font-semibold text-lg">
              Jogados Recentementes
            </h1>
            <div className="2xl:w-140 2xl:h-19 xl:w-90 xl:h-12 bg-[#00453F] rounded-2xl"></div>
            <div className="2xl:w-140 2xl:h-19 xl:w-90 xl:h-12 bg-[#00453F] rounded-2xl"></div>
            <div className="2xl:w-140 2xl:h-19 xl:w-90 xl:h-12 bg-[#00453F] rounded-2xl"></div>
          </div>
        </div>
        <div className="flex flex-col 2xl:gap-7 xl:gap-4">
          <h1 className="font-[poppins] font-semibold text-lg">Populares</h1>
          <div className="flex flex-row justify-between">
            <div className="relative 2xl:w-60 2xl:h-80 xl:w-36 xl:h-48 rounded-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:-rotate-4 hover:scale-104">
              <img
                src="src/assets/img/expedition-cover.jpg"
                className="absolute rounded-4xl opacity-40"
              ></img>
              <h2 className="absolute font-[poppins] font-bold 2xl:text-lg xl:text-sm 2xl:bottom-20 2xl:pl-7 2xl:pr-7 xl:bottom-14 xl:pl-4 xl:pr-2">
                Expedition 33
              </h2>
              <div className="absolute flex flex-row gap-2 items-center 2xl:bottom-12 2xl:pl-7 2xl:pr-7 xl:bottom-7 xl:pl-4 xl:pr-2">
                <h2 className="font-[poppins] font-medium 2xl:text-lg xl:text-sm">
                  R$ 179,99
                </h2>
                <i className="pi pi-plus-circle 2xl:text-1xl xl:text-sm"></i>
              </div>
            </div>
            <div className="2xl:w-60 2xl:h-80 xl:w-36 xl:h-48 rounded-4xl">
              <img
                src="src/assets/img/thealters-cover.jpg"
                className="rounded-4xl opacity-40"
              ></img>
            </div>
            <div className="2xl:w-60 2xl:h-80 xl:w-36 xl:h-48 bg-[#00453F] rounded-4xl"></div>
            <div className="2xl:w-60 2xl:h-80 xl:w-36 xl:h-48 bg-[#00453F] rounded-4xl"></div>
            <div className="2xl:w-60 2xl:h-80 xl:w-36 xl:h-48 bg-[#00453F] rounded-4xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesPreview;
