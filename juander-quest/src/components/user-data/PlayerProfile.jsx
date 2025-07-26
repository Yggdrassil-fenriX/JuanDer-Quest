import LengLengImg from "../../assets/Misc/lengleng-profile.jpg";
import { Link } from "react-router-dom";

const PlayerProfile = (props) => {
    const playerProfileSrc = props.profileSrc || LengLengImg;
    const profileStyles = props.profileStyles || "w-13 rounded-full";

    return (
        <Link to="/profile">
            <img
                src={playerProfileSrc}
                alt="Player Profile"
                className={profileStyles}
            />
        </Link>
    );
};

export default PlayerProfile;
