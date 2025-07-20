import JuanDerLogo from "../assets/Logo/logo.png";
import StartButton from "../assets/Buttons/start-button.png";
import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div className="h-full bg-[url(./assets/Backgrounds/main-background.png)] bg-cover bg-no-repeat py-20">
            <div className="flex h-full flex-col items-center justify-between">
                <img
                    src={JuanDerLogo}
                    className="w-11/12"
                    alt="JuanDerQuest Logo"
                />
                <Link to="/home" className="flex w-full justify-center">
                    <button id="start-btn" className="w-10/12">
                        <img src={StartButton} alt="Start Button" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default StartPage;
