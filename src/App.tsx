import "./App.css";
import { useState, useEffect, createContext, SetStateAction } from "react";
import { ArtistBanner } from "./components/ArtistBanner/ArtistBanner";
import { Songs } from "./components/Songs/Songs";
import { SearchSection } from "./components/SearchSection/SearchSection";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer";
import { Song } from "./types";
import { getData } from "./services/getData";
import { convertArrToSongs } from "./utils/utils";

export const MyContext: any = createContext(null);

function App() {
    const [user, setUser] = useState("user");
    const [searchValue, setSearchValue] = useState("");
    const [songs, setSongs] = useState<Array<Song>>([]);
    const [actualSong, setActualSong] = useState<Song>();

    useEffect(() => {
        getData(`https://api.deezer.com/user/2529`).then((data) => {
            setUser(data.name);
        });
    }, []);

    useEffect(() => {
        getData(`https://api.deezer.com/chart`).then((data) => {
            if (data) {
                const arr = data.tracks.data;
                console.log(arr);
                convertArrToSongs(arr, setSongs);
            }
        });
    }, []);

    useEffect(() => {
        getData(`https://api.deezer.com/search?q=${searchValue}`).then(
            (data) => {
                if (data) {
                    const arr = data.data;
                    convertArrToSongs(arr, setSongs);
                }
            }
        );
    }, [searchValue]);

    return (
        <div className="relative flex mx-auto max-w-[1300px]">
            <MusicPlayer song={actualSong} />
            <Sidebar />
            <main className="px-4 pt-4 md:px-10 md:pt-[30px] w-[80%]">
                <MyContext.Provider
                    value={{
                        user,
                        setSearchValue,
                        songs,
                        setActualSong,
                    }}
                >
                    <SearchSection className="mb-4" />
                    <ArtistBanner
                        className="mb-4"
                        artist={"Adele"}
                    />
                    <Songs />
                </MyContext.Provider>
            </main>
        </div>
    );
}

export default App;
