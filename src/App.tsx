import "./App.css";
import { ArtistBanner } from "./components/ArtistBanner/ArtistBanner";
import { Songs } from "./components/Songs/Songs";
import { SearchSection } from "./components/SearchSection/SearchSection";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer";

function App() {
    return (
        <div className="relative flex mx-auto max-w-[1300px]">
            <MusicPlayer />
            <Sidebar />
            <main className="px-4 pt-4 md:px-10 md:pt-[30px] w-[80%]">
                <SearchSection className="mb-4" />
                <ArtistBanner
                    className="mb-4"
                    artist={"Adele"}
                />
                <Songs />
            </main>
        </div>
    );
}

export default App;
