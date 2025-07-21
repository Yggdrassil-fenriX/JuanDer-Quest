import UserTokenStats from "../user-stats/UserTokenStats.jsx";
import { Link } from "react-router-dom";

const QuestHeader = (props) => {
    const prevPage = props.prevPage || "home";

    const capitalizeWords = (str) =>
        str.replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <div className="flex items-center justify-between">
            <Link to={`/${prevPage}`}>
                <button className="flex items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 text-2xl text-white">
                    <i className="fa-solid fa-angle-left"></i>
                    <span className="text-xs">
                        Back to {capitalizeWords(prevPage)}
                    </span>
                </button>
            </Link>
            <UserTokenStats />
        </div>
    );
};

export default QuestHeader;
