import DefaultImg from "../../assets/Misc/default.png";
import { Link } from "react-router-dom";

const RecommendedPlace = (props) => {
    const imageUrl = props.imageUrl || DefaultImg;
    const placeName = props.placeName || "Dagupan City Resort";
    const location = props.location || "Pangasinan, Philippines";
    const ratings = props.ratings || 4.5;
    const toLink = props.toLink || 1;

    return (
        <Link to={`/place/${toLink}`}>
            <div className="w-35 rounded-xl bg-[#dfefdd] p-1 pb-2 shrink-0">
                <img
                    src={imageUrl}
                    alt="Destination Image"
                    className="h-35 w-full rounded-xl"
                />
                <div className="">
                    <div className="flex items-center">
                        <span className="text-[0.6rem] font-bold text-[#3d3d3d]">
                            Rating:{" "}
                        </span>
                        <span className="ml-1 text-xs text-yellow-500">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </div>
                    <h3 className="text-xs font-bold">{placeName}</h3>
                    <div className="flex items-end gap-1 text-sm">
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="text-[0.6rem]">{location}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RecommendedPlace;
