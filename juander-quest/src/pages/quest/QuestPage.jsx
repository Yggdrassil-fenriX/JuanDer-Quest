import QuestHeader from "../../components/quest/QuestHeader";
import { Link } from "react-router-dom";

// Assets
import QuestSign from "../../assets/Signs/quests-sign.png";
import ScrollImg from "../../assets/Canvas/scroll.png";
import DefaultImg from "../../assets/Misc/default.png";

const QuestPage = (props) => {
    const title = props.title || "Quest Title";
    const location = props.location || "Street, Location";
    const description =
        props.description ||
        "This is placeholder text used to demonstrate the visual form of a document or a typeface without relying on meaningful content. It helps designers focus on layout and design rather than the actual words. You can replace this with real content once it's available. Until then, feel free to use this text as a visual stand-in.";

    return (
        <main className="h-full bg-[url('./assets/Backgrounds/background-blur.png')] bg-repeat px-3 py-7">
            <QuestHeader prevPage="quests" />
            <img
                src={QuestSign}
                alt="Quest Sign"
                className="mx-auto my-8 w-10/12"
            />
            <div className="relative">
                <img src={ScrollImg} alt="Scroll Canvas" className="h-110" />
                <div className="absolute inset-0 px-17 py-18">
                    <div className="mb-4 flex items-center gap-2">
                        <img
                            src={DefaultImg}
                            alt="Quest Icon"
                            className="w-15"
                        />
                        <div className="">
                            <h2 className="text-2xl font-extrabold">{title}</h2>
                            <div className="flex items-center gap-1 text-xs">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 text-justify text-xs">
                        <p>{description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="rounded-sm border-2 border-black bg-[#69cd3e] px-2 py-1 text-[0.7rem] font-extrabold text-white shadow-xl">
                            Submit
                        </button>
                    </div>
                </div>
                <Link to="/quests">
                    <button className="absolute top-3 right-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#e60008] text-white shadow-[0px_2px_0px_rgba(0,0,0)]">
                        <i className="fas fa-xmark"></i>
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default QuestPage;
