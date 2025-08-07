import "../App.css";
import "primeicons/primeicons.css";
import PopularCard from "./popularCard";
import RecentlyCard from "./RecentlyPlayed";

const games = [
  {
    name: "Expedition 33",
    price: "R$ 179,99",
    imageUrl: "src/assets/img/expedition-cover.jpg",
  },
  {
    name: "The Alters",
    price: "199,90",
    imageUrl: "src/assets/img/thealters-cover.jpg",
  },
  {
    name: "Fortnite",
    price: "Gratuito",
    imageUrl: "src/assets/img/fortnite-cover.jpg",
  },
  {
    name: "Spider-Man",
    price: "299,90",
    imageUrl: "src/assets/img/miles-cover.jpg",
  },
  {
    name: "Watch Dogs Legion",
    price: "R$ 199,90",
    imageUrl: "src/assets/img/watchdogs-cover.jpg",
  },
];

const RecentlyPlayed = [
  {
    imageUrl: "src/assets/img/expedition-cover.jpg",
    name: "Clair Obscur: Expedition 33",
    timePlayed: 27,
  },
  {
    imageUrl: "src/assets/img/spiderman-cover.jpg",
    name: "Marvel's Spider-Man Remastered",
    timePlayed: 19,
  },
  {
    imageUrl: "src/assets/img/watchdogs-cover.jpg",
    name: "Watch Dogs Legion",
    timePlayed: 12,
  },
];

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
            {RecentlyPlayed.map((games, index) => (
              <RecentlyCard
                key={index}
                imageUrl={games.imageUrl}
                name={games.name}
                timePlayed={games.timePlayed}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col 2xl:gap-7 xl:gap-4">
          <h1 className="font-[poppins] font-semibold text-lg">Populares</h1>
          <div className="flex flex-row justify-between">
            {games.map((games, index) => (
              <PopularCard
                key={index}
                name={games.name}
                price={games.price}
                imageUrl={games.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesPreview;
