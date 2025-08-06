import { useState } from "react";
import "./App.css";
import "primeicons/primeicons.css";
import GamesPreview from "./components/games";
import SocialPreview from "./components/social";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row">
        {/* Menu lateral */}
        <div className="flex items-center h-screen ml-10">
          <div className="bg-[#00453F] xl:h-140 2xl:h-220 xl:w-22 2xl:w-27 rounded-[45px] shadow-lg shadow-[#00000010]">
            <div className="flex flex-col items-center justify-center gap-30">
              <img src="src/assets/img/logo.png" className="mt-7 h-9"></img>
              <div className="flex flex-col justify-between gap-7">
                <div className="flex items-center justify-center bg-[#3DBDA7] w-10 h-10 rounded-full shadow-xl shadow-[#329c8b] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#5ea89c]">
                  <i className="pi pi-home text-1xl"></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-4xl cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <i className="pi pi-users text-1xl "></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-4xl cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <i className="pi pi-inbox text-1xl "></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-4xl cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <i className="pi pi-shop text-1xl "></i>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-4xl cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <i className="pi pi-star text-1xl "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Conteudo Central */}
        <div className="flex flex-col w-full h-screen justify-center gap-20">
          <div className="flex flex-row justify-between items-center h-10 w-full pl-12 pr-12">
            <h1 className="font-[poppins] font-semibold text-xl">
              Olá,
              <span className="text-[#3DBDA7]"> Guilherme</span>
            </h1>
            <div className="flex flex-row  pl-[1.2rem] w-full max-w-md h-[45px] bg-[#00453F] rounded-3xl">
              <span className="flex items-center">
                <i className="pi pi-search text-1xl "></i>
              </span>
              <input
                type="text"
                className="grow pl-7"
                placeholder="Procure por algo..."
              ></input>
            </div>
            <div className="flex justify-between gap-7">
              <span className="bg-[#00453F] w-11 h-11 rounded-full flex items-center justify-center">
                <i className="pi pi-bell text-1xl "></i>
              </span>
              <span className="bg-[#00453F] w-11 h-11 rounded-full flex items-center justify-center">
                <i className="pi pi-shopping-bag text-1xl "></i>
              </span>
            </div>
          </div>
          <div className="w-full">
            <GamesPreview />
          </div>
        </div>
        {/* Social */}
        <div className="flex items-center h-screen mr-10">
          <SocialPreview />
        </div>
      </div>
    </>
  );
}

export default App;
