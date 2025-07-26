import DefaultImg from "../../assets/Misc/default.png";
import VoteButton from "../../assets/Buttons/vote-button.png";

const MapVoteBox = () => {
    return (
        <div className="flex w-10/12 flex-col items-center justify-center gap-2 rounded-sm bg-[#d0b08f] p-2">
            <img
                src={DefaultImg}
                alt="Place Map"
                className="h-25 w-full rounded-sm"
            />
            <div className="flex items-center justify-center">
                <button className="w-7/12">
                    <img
                        src={VoteButton}
                        alt="Vote Button"
                        className="w-full"
                    />
                </button>
            </div>
        </div>
    );
};

export default MapVoteBox;
