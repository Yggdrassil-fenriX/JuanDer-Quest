// Libraries
import { Link } from "react-router-dom";

// Components
import CategoryNav from "../components/home/CategoryNav";
import RecommendedPlace from "../components/home/RecommendedPlace";
import UserTokenStats from "../components/user-data/UserTokenStats";
import PlayerLevel from "../components/user-data/PlayerLevel";
import PlayerName from "../components/user-data/PlayerName";
import PlayerProfile from "../components/user-data/PlayerProfile";

// Assets
import QuizButton from "../assets/Buttons/quiz-button.png";
import LengLeng from "../assets/Misc/lengleng-profile.jpg";

const HomePage = () => {
    return (
        <main className="h-fit bg-gray-50 pb-25">
            <header className="relative mb-15 bg-[url(./assets/Backgrounds/main-background.png)] bg-cover bg-center bg-no-repeat px-3 py-7">
                <section className="flex items-center z-10 relative">

                    <PlayerProfile profileStyles="w-15 rounded-full md:w-24" />
                    <div className="ml-2 w-full z-10 font-medium text-[#712304]">
                        <div className="flex w-full items-center justify-between">
                            <p className="md:text-3xl">Welcome, JuanDerer!</p>
                            <i className="fa-solid fa-bell text-2xl md:text-3xl"></i>
                        </div>
                        <div className="flex w-full items-center justify-between z-100">
                            <div className="flex items-center justify-start font-bold md:text-3xl">
                                <PlayerLevel />
                                <PlayerName />
                            </div>

                            <UserTokenStats />
                        </div>
                    </div>
                </section>

                <h1 className="relative z-100 mt-25 mb-5 text-center text-2xl text-white">
                    Where do you want to go?
                </h1>

                <div className="absolute bottom-[-22%] left-1/2 z-20 w-10/12 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-xl bg-white text-[#888888] shadow-2xl">
                    <input
                        type="text"
                        placeholder="Explore Now"
                        className="w-10/12 bg-white px-4 py-4 font-medium text-black outline-none"
                    />
                    <button className="w-2/12 border-l-[0.2px] border-[#888888] bg-gray-100 py-4 hover:text-black">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#000000b5] to-transparent"></div>
            </header>

            <section className="flex items-center justify-between px-3">
                <CategoryNav iconClass="fa-solid fa-building" navName="All" />
                <CategoryNav
                    iconClass="fa-solid fa-campground"
                    navName="Camping"
                />
                <CategoryNav
                    iconClass="fa-solid fa-building-columns"
                    navName="Heritage"
                />
                <CategoryNav
                    iconClass="fa-solid fa-cart-shopping"
                    navName="Shopping"
                />
                <CategoryNav
                    iconClass="fa-solid fa-map-location-dot"
                    navName="Adventure"
                />
            </section>
            <section className="mt-8 mb-1 px-3">
                <div className="mb-5 flex items-end justify-between">
                    <h2 className="text-xl font-bold">Recommended</h2>
                    <Link to="/map-vote">
                        <p className="">See All</p>
                    </Link>
                </div>
                <div className="hide-scrollbar flex items-center justify-evenly gap-3 overflow-x-auto">
                    <RecommendedPlace />
                    <RecommendedPlace />
                    <RecommendedPlace />
                    <RecommendedPlace />
                    <RecommendedPlace />
                    <RecommendedPlace />
                </div>
            </section>

            <section className="px-3 py-5">
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#e8c49f] p-2">
                    <p className="text-center text-[0.8rem] text-[#712304]">
                        Take a quiz to earn extra tokens and discover fun facts
                        about your destination.
                    </p>
                    <button className="w-25">
                        <img src={QuizButton} alt="" className="w-full" />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
