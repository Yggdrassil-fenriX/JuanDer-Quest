import { Link } from "react-router-dom";

const NavLink = (props) => {
    const { to, iconClass, label } = props;

    return (
        <Link to={`/${to}`}>
            <button
                className={`flex h-15 w-15 flex-col items-center justify-center rounded-full bg-amber-400`}
            >
                <i className={`${iconClass}`}></i>
                <span className="text-[.65rem]">{label}</span>
            </button>
        </Link>
    );
};

export default NavLink;
