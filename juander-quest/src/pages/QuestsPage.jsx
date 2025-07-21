// UI components
import QuestHeader from "../components/quest/QuestHeader.jsx";
import QuestCard from "../components/quest/QuestCard.jsx";
import NavOverlay from "../components/navigation/NavOverlay.jsx";

// Assets
import QuestSign from "../assets/Signs/quests-sign.png";

const QuestPage = () => {
    return (
        <>
            <main
                className={`h-full bg-[url('./assets/Backgrounds/background-blur.png')] bg-repeat px-3 py-7 pb-[1100px]`}
            >
                <QuestHeader prevPage="home" />

                <img src={QuestSign} alt="" className="mx-auto my-8 w-10/12" />
                <div className="flex flex-col gap-4">
                    <QuestCard />
                    <QuestCard />
                    <QuestCard />
                    <QuestCard />
                    <QuestCard />
                    <QuestCard />
                </div>
            </main>
            <NavOverlay />
        </>
    );
};

export default QuestPage;
