import Token from "../..//assets/Icons/Token.png";
import { Link } from "react-router-dom";

const UserTokenStats = (props) => {
    const userTokens = props.userTokens || "12 000";

    return (
        <div className="flex items-center justify-center">
            <img
                src={Token}
                className="z-0 w-8 md:w-12"
                alt="JuanDerQuest Token"
            />
            <div className="ml-[-7px] flex w-23 items-center justify-center bg-[#7ed957] text-[0.8rem] font-extrabold text-white italic md:ml-[-12px] md:w-27 md:text-lg">
                <span>{userTokens}</span>
            </div>
            <Link to={"/wallet"}>
                <button className="rounded-r-sm bg-[#4f774d] px-1 py-0.5 text-xs font-extrabold text-white md:px-2 md:py-2">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </Link>
        </div>
    );
};

export default UserTokenStats;
