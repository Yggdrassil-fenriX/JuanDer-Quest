// Import routing utilities from React Router
import { Routes, Route } from "react-router-dom";

// Import page components
import LoadingPage from "./pages/LoadingPage.jsx";   // Landing/loading screen
import StartPage from "./pages/StartPage.jsx";       // Onboarding or start screen
import HomePage from "./pages/HomePage.jsx";         // Main homepage/dashboard
import QuestsPage from "./pages/QuestsPage.jsx";     // List of all available quests
import WalletPage from "./pages/WallletPage.jsx";    // Wallet page for managing assets
import QuestPage from "./pages/quest/QuestPage.jsx"; // Details for a specific quest (dynamic route)

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route path="/start" element={<StartPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/quests" element={<QuestsPage />} />
                <Route path="/quests/:id" element={<QuestPage />} />
                <Route path="/wallet" element={<WalletPage />} />
            </Routes>
        </>
    );
}

export default App;
