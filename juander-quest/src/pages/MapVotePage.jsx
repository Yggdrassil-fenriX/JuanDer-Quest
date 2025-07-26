import PlayerHeader from "../components/header/PlayerHeader";
import MapVoteSign from "../assets/Signs/map-vote-sign.png";
import MapVoteBox from "../components/map-vote/MapVoteBox";

const MapVotePage = () => {
    return (
        <main className="bg-[url('./src/assets/Backgrounds/background-blur.png')] px-5 py-7 pb-30">
            <PlayerHeader />
            <br />
            <img
                src={MapVoteSign}
                alt="Map Vote Sign"
                className="mx-auto w-10/12"
            />
            <br />
            <div className="rounded-xl bg-[#f1d9b9] p-3 pb-7">
                <div className="mb-3">
                    <h3 className="font-bold">JuanDerers decide!</h3>
                    <p className="text-xs">
                        Vote for the destination that wowed you most!
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-y-6 place-items-center">
                    <MapVoteBox />
                    <MapVoteBox />
                    <MapVoteBox />
                    <MapVoteBox />
                    <MapVoteBox />
                    <MapVoteBox />
                </div>
            </div>
        </main>
    );
};

export default MapVotePage;
