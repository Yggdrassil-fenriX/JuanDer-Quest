import DefaultImg from "../../assets/Misc/default.png";
import TempCoin from "../../assets/Misc/temp-coin.png";
import { Link } from "react-router-dom";

const QuestCard = (props) => {
    const title = props.title || "Quest Title";
    const description =
        props.description ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quod quae eum placeat corporis eius fdsfdsf dsfsdfs fsdf";
    const location = props.location || "Street, Location";
    const coinCount = props.coinCount || 1;

    return (
        <Link to={`/quests/1`}>
            <div className="flex w-full items-center gap-2 rounded-xl bg-[#e8c49f] p-2">
                <img src={DefaultImg} alt="" className="w-[20%] rounded-lg" />
                <div className="w-[60%]">
                    <h1 className="text-2xl font-extrabold">{title}</h1>
                    <p className="mb-1 text-[.6rem]">{description}</p>
                    <div className="flex items-center gap-1 text-[.52rem]">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{location}</span>
                    </div>
                </div>
                <div className="relative w-[20%]">
                    <img src={TempCoin} alt="Token Image" className="w-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-extrabold text-white italic">
                        <span className="text-4xl">{coinCount}</span>
                        <span className="-mt-1 text-[.6rem]">JDQ</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default QuestCard;
