// Library
import { Link } from "react-router-dom";

// Assets - Images
import LengLengImg from "../assets/Misc/lengleng-profile.jpg";
import Wood2Img from "../assets/Canvas/wood-2.png";
import BadgesEarnedSign from "../assets/Signs/badges-earned.png";
import BaeWatcher from "../assets/Icons/baewatcher.png";
import GubaTron from "../assets/Icons/gubatron.png";
import JuanDerFull from "../assets/Icons/juanderfull.png";

// Components
import UserTokenStats from "../components/user-data/UserTokenStats";
import Badge from "../components/badges/Badge";
import PlayerLevel from "../components/user-data/PlayerLevel";

const ProfilePage = () => {
    return (
        <main className="bg-[url('./assets/Backgrounds/background.jpg')] bg-cover bg-center min-[376px]:h-full">
            <div className="h-full bg-[#00000067] px-5 py-7 pb-30">
                <div className="mb-5 flex items-center justify-between text-2xl text-white">
                    <Link to="/home">
                        <button>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </Link>
                    <button>
                        <i className="fa-solid fa-bell"></i>
                    </button>
                </div>
                <div className="item-center mb-15 flex gap-2">
                    <div className="h-30 w-30 overflow-hidden rounded-full border-5 border-white">
                        <img
                            src={LengLengImg}
                            alt=""
                            className="h-full w-full scale-150 object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <UserTokenStats />
                        <div className="flex items-center gap-2">
                            <PlayerLevel levelStyles="h-6 w-9" />
                            <h1 className="text-3xl font-bold text-[#f1d9b9]">
                                Lengleng
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto mb-3 w-11/12 rounded-lg bg-[#db9d5f] px-1 py-0.5">
                    <div className="w-full rounded-lg bg-[#f8ecd2] p-3">
                        <img
                            src={BadgesEarnedSign}
                            alt="Badges Earned Sign"
                            className="mx-auto -mt-15 mb-5 w-10/12"
                        />
                        <div className="flex items-center justify-evenly">
                            <Badge
                                badgeName="BaeWatcher"
                                badgeSrc={BaeWatcher}
                            />
                            <Badge badgeName="GubaTron" badgeSrc={GubaTron} />
                            <Badge
                                badgeName="JuanDerFull"
                                badgeSrc={JuanDerFull}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto mb-3 w-11/12 rounded-lg bg-[#db9d5f] px-1 py-0.5">
                    <div className="w-full rounded-lg bg-[#f8ecd2] p-3">
                        <div className="flex items-center justify-evenly">
                            <Badge
                                badgeName="BaeWatcher"
                                badgeSrc={BaeWatcher}
                            />
                            <Badge badgeName="GubaTron" badgeSrc={GubaTron} />
                            <Badge
                                badgeName="JuanDerFull"
                                badgeSrc={JuanDerFull}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto w-11/12 rounded-lg bg-[#db9d5f] px-1 py-0.5">
                    <div className="w-full rounded-lg bg-[#f8ecd2] p-3">
                        <div className="flex items-center justify-evenly">
                            <Badge
                                badgeName="BaeWatcher"
                                badgeSrc={BaeWatcher}
                            />
                            <Badge badgeName="GubaTron" badgeSrc={GubaTron} />
                            <Badge
                                badgeName="JuanDerFull"
                                badgeSrc={JuanDerFull}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;
