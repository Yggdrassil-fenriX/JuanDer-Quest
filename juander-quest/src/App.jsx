// Import routing utilities from React Router
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Import page components
import LoadingPage from "./pages/LoadingPage.jsx"; // Landing/loading screen
import StartPage from "./pages/StartPage.jsx"; // Onboarding or start screen
import HomePage from "./pages/HomePage.jsx"; // Main homepage/dashboard
import QuestsPage from "./pages/QuestsPage.jsx"; // List of all available quests
import WalletPage from "./pages/WallletPage.jsx"; // Wallet page for managing assets
import QuestPage from "./pages/quest/QuestPage.jsx"; // Details for a specific quest (dynamic route)
import RecommendedPlace from "./pages/place/RecommendedPlace.jsx";
import NavOverlay from "./components/navigation/NavOverlay.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MapVotePage from "./pages/MapVotePage.jsx";

function App() {
    const hideNavLocations = ["/", "/start"];
    const determineDisplayNav = !hideNavLocations.includes(
        useLocation().pathname,
    );

    return (
        <>
            <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route path="/start" element={<StartPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/quests" element={<QuestsPage />} />
                <Route path="/quests/:id" element={<QuestPage />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/place/:id" element={<RecommendedPlace />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/map-vote" element={<MapVotePage />} />
            </Routes>
            {determineDisplayNav && <NavOverlay />}
        </>
    );
}

export default App;
