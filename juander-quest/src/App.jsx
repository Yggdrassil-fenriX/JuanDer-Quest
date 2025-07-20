import {Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route path="/start" element={<StartPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
