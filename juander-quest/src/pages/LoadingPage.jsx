import JuanDerLogo from "../assets/Logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/start");
        }, 3000);
        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigate]);

    return (
        <>
            <style>
                {`
                    .loader {
                        width: 200px;
                        height: 20px;
                        background:
                        linear-gradient(green 0 0) 0/0% no-repeat
                        white;
                        animation: l1 3s infinite linear;
                        border-radius: 20px;
                        border: black 2px solid;
                        box-shadow: 2px 2px 0 rgba(0,0,0);
                    }
                    @keyframes l1 {
                        100% {background-size:100%}
                    }
                `}
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
