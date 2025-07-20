import { Link } from "react-router-dom";

const CategoryNav = (props) => {
    const iconClass = props.iconClass || "fa-solid fa-rectangle-list";
    const navName = props.navName || "Link";

    return (
        <div className="w-max flex flex-col items-center justify-center">
            <Link to="/">
                <button className="rounded-2xl bg-[#4f774d] w-15 h-20 text-4xl text-white">
                    <div>
                        <i className={`${iconClass}`}></i>
                    </div>
                </button>
            </Link>
            <p className="mt-1 text-center text-xs">{navName}</p>
        </div>
    );
};

export default CategoryNav;
