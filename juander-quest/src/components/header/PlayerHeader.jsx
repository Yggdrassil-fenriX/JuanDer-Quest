import PlayerLevel from "../user-data/PlayerLevel";
import PlayerName from "../user-data/PlayerName";
import UserTokenStats from "../user-data/UserTokenStats";
import PlayerProfile from "../user-data/PlayerProfile";

const PlayerHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-[#712304]">
                <PlayerProfile />
                <div className="flex items-center">
                    <PlayerLevel />
                    <PlayerName />
                </div>
            </div>
            <UserTokenStats />
        </div>
    );
};

export default PlayerHeader;
