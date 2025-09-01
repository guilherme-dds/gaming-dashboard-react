import "../App.css";
import "primeicons/primeicons.css";

const SocialPreview = () => {
  return (
    <>
      <div className="flex flex-col 2xl:gap-10 xl:gap-4">
        <div className="2xl:w-20 2xl:h-130 xl:w-17 xl:h-87 bg-[#00453F] rounded-3xl"></div>
        <div className="2xl:w-20 2xl:h-77 xl:w-17 xl:h-57 bg-[#00453F] rounded-3xl">
          <div className="flex flex-col items-center h-full xl:gap-4">
            <i className="pi pi-comments xl:text-xl xl:pt-4"></i>
            <div className="flex flex-col gap-1 justify-between h-full pt-4 pb-4">
              <img src="src/assets/img/avatar1.png" className="xl:h-10"></img>
              <img src="src/assets/img/avatar1.png" className="xl:h-10"></img>
              <img src="src/assets/img/avatar1.png" className="xl:h-10"></img>
              <img src="src/assets/img/avatar1.png" className="xl:h-10"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialPreview;
