import TouristSpot from "../../assets/Misc/tourist-spot.jpg";
import PlaceLocationMap from "../../components/mapbox/PlaceLocationMap.jsx";
import { Link } from "react-router-dom";

const RecommendedPlace = () => {
    return (
        <main className="relative h-full">
            <header className="z-0 h-[35%] bg-cover bg-center text-white">
                <img
                    src={TouristSpot}
                    alt=""
                    className="z-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 px-5 pt-7 text-3xl">
                    <Link to="/home">
                        <button>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                    </Link>
                </div>
            </header>
            <article className="absolute -mt-13 h-11/12 w-full rounded-t-[55px] bg-[#DFEFDD] px-7 pt-5">
                <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#3d3d3d]">
                        Rating:
                    </span>
                    <span className="text-lg text-yellow-500">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
                <h1 className="text-2xl font-bold">Mayon Volcano</h1>
                <div className="flex items-center gap-1 text-sm text-[#1f1f1f]">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="text-[.7rem]">Street, Location</span>
                </div>

                <PlaceLocationMap className="my-3 h-30 w-full overflow-hidden rounded-sm border border-black" />

                <div className="text-justify text-xs leading-[1.5em]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit veritatis dolore illo ad hic doloribus? Officiis
                        atque architecto nesciunt. Earum itaque blanditiis amet
                        cumque aliquam et quas facilis impedit fugiat!
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit veritatis dolore illo ad hic doloribus? Officiis
                        atque architecto nesciunt. Earum itaque blanditiis amet
                        cumque aliquam et quas facilis impedit fugiat!
                    </p>
                </div>
            </article>
        </main>
    );
};

export default RecommendedPlace;
