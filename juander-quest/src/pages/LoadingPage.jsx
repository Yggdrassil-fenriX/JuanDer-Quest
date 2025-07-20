import JuanDerLogo from "../assets/Logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/start");
        }, 3000); // Simulate loading for 5 seconds
        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigate]);

    return (
        <>
            <style>
                {`.loader {
                        width: 50%;
                        height: 20px;
                        transform: skewX(-45deg);
                        background: 
                            linear-gradient(#d4a373 0 0) left -30px top 0/30px 20px no-repeat 
                            #606c38;
                        animation: l3 1s infinite linear;
                        border: 3px solid #bc6c25;
                    }

                    @keyframes l3 {
                        100% {background-position: right -30px top 0}
                    }`}
            </style>
            <div className="h-full bg-[url(./assets/Backgrounds/main-background.png)] bg-cover bg-no-repeat">
                <div className="flex h-full flex-col items-center justify-between py-20">
                    <img
                        src={JuanDerLogo}
                        className="w-11/12"
                        alt="JuanDerQuest Logo"
                    />
                    <div className="loader"></div>
                </div>
            </div>
        </>
    );
};

export default LoadingPage;
