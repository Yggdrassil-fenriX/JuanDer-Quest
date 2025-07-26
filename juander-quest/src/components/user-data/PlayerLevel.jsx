import Wood from "../../assets/Canvas/wood-2.png";

const PlayerLevel = (props) => {
    const playerLevel = props.playerLevel || 1;
    const levelStyles = props.levelStyles || "w-8 h-5 mr-1";

    return (
        <div
            className={`relative ${levelStyles} flex items-center justify-center`}
        >
            <img
                src={Wood}
                alt="Level Background"
                className={`absolute h-full w-full`}
            />
            <span className="z-1 text-lg font-bold text-white">
                {playerLevel}
            </span>
        </div>
    );
};

export default PlayerLevel;
