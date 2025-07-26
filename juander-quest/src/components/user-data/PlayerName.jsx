const PlayerName = (props) => {
    const playerName = props.playerName || "LengLeng";
    const styleClass = props.styleClass || "";

    return <span className={styleClass}>{playerName}</span>;
};

export default PlayerName;
