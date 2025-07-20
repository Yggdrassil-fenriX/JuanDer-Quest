// Components
import CategoryNav from "../components/CategoryNav";
import NavOverlay from "../components/NavOverlay";
import RecommendedPlace from "../components/RecommendedPlace";

// Assets
import QuizButton from "../assets/Buttons/quiz-button.png";
import Token from "../assets/Icons/Token.png";
import LengLeng from "../assets/Misc/lengleng-profile.jpg";
import Wood from "../assets/Canvas/wood-2.png";

const HomePage = () => {
    return (
        <>
            <main className="h-full bg-gray-50 pb-[1000px]">
                <header className="relative mb-15 bg-[url(./assets/Backgrounds/main-background.png)] bg-cover bg-center bg-no-repeat px-3 py-7">
                    <section className="z-20 flex items-center">
                        <img
                            src={LengLeng}
                            alt=""
                            className="w-14 rounded-full md:w-24"
                        />
                        <div className="ml-2 w-full font-medium text-[#712304]">
                            <div className="flex w-full items-center justify-between">
                                <p className="md:text-3xl">
                                    Welcome, JuanDerer!
                                </p>
                                <i className="fa-solid fa-bell text-2xl md:text-3xl"></i>
                            </div>
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center justify-start font-bold md:text-3xl">
                                    <div className="relative mr-1 flex w-7 items-center justify-center">
                                        <img
                                            src={Wood}
                                            alt="Level Background"
                                            className="absolute z-0 h-5"
                                        />
                                        <span className="z-1 text-lg text-white">
                                            1
                                        </span>
                                    </div>
                                    <span>Lengleng</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={Token}
                                        className="z-0 w-8 md:w-12"
                                        alt="JuanDerQuest Token"
                                    />
                                    <div className="ml-[-7px] flex w-23 items-center justify-center bg-[#7ed957] text-[0.8rem] font-extrabold text-white italic md:ml-[-12px] md:w-27 md:text-lg">
                                        <span>12 000</span>
                                    </div>
                                    <button className="rounded-r-sm bg-[#4f774d] px-1 py-0.5 text-xs font-extrabold text-white md:px-2 md:py-2">
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
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
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#00000086] to-transparent"></div>
                </header>

                <section className="flex items-center justify-between px-3">
                    <CategoryNav
                        iconClass="fa-solid fa-building"
                        navName="All"
                    />
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
                        <p className="">See All</p>
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
                            Take a quiz to earn extra tokens and discover fun
                            facts about your destination.
                        </p>
                        <button className="w-25">
                            <img src={QuizButton} alt="" className="w-full" />
                        </button>
                    </div>
                </section>
            </main>
            <NavOverlay />
        </>
    );
};

export default HomePage;
