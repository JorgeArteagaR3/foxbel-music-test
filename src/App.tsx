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

    const [masterAudio, setMasterAudio] = useState<string>("");
    const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        getData(`https://api.deezer.com/user/2529`).then((data) => {
            setUser(data.name);
        });
    }, []);

    useEffect(() => {
        getData(`https://api.deezer.com/chart`).then((data) => {
            if (data) {
                const arr = data.tracks.data;
                convertArrToSongs(arr, setSongs);
            }
        });
    }, []);

    useEffect(() => {
        getData(`https://api.deezer.com/search?q=${searchValue}`).then(
            (data) => {
                if (data) {
                    const arr = data.data;
                    console.log(data.data);
                    convertArrToSongs(arr, setSongs);
                }
            }
        );
    }, [searchValue]);

    useEffect(() => {
        if (masterAudio) {
            if (audioPlayer) {
                audioPlayer.pause();
                setIsPlaying(false);
            }
            const newAudioPlayer = new Audio(masterAudio);
            setAudioPlayer(newAudioPlayer);
            newAudioPlayer.volume = 0.5;
            newAudioPlayer.play();
            setIsPlaying(true);
        }
    }, [masterAudio]);

    const handlePlayMusic = () => {
        if (audioPlayer) {
            if (isPlaying) {
                audioPlayer.pause();
                setIsPlaying(false);
            } else {
                audioPlayer.volume = 0.5;
                audioPlayer.play();
                setIsPlaying(true);
            }
        }
    };
    return (
        <div className="relative flex mx-auto max-w-[1300px]">
            <MyContext.Provider
                value={{
                    user,
                    setSearchValue,
                    songs,
                    setActualSong,
                    masterAudio,
                    isPlaying,
                    setMasterAudio,
                    handlePlayMusic,
                    actualSong,
                }}
            >
                <MusicPlayer
                    song={actualSong}
                    audioPlayer={audioPlayer}
                    handlePlayMusic={handlePlayMusic}
                />
                <Sidebar />
                <main className="px-4 pt-4 md:px-10 md:pt-[30px] w-[80%]">
                    <SearchSection className="mb-4" />
                    <ArtistBanner className="mb-4" />
                    <Songs />
                </main>
            </MyContext.Provider>
        </div>
    );
}

export default App;
