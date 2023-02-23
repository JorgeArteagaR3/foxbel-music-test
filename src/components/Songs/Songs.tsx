import { useContext, useState, useEffect } from "react";
import { SongCard } from "../SongCard/SongCard";
import { MyContext } from "../../App";
import { Song } from "../../types";

export const Songs = () => {
    const { songs }: { songs: Song[] } = useContext(MyContext);

    const [masterAudio, setMasterAudio] = useState<string>("");
    const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (masterAudio) {
            if (audioPlayer) {
                audioPlayer.pause();
                setIsPlaying(false);
            }
            const newAudioPlayer = new Audio(masterAudio);
            setAudioPlayer(newAudioPlayer);
            newAudioPlayer.play();
            setIsPlaying(true);
        }
    }, [masterAudio]);

    const handlePlayPause = () => {
        if (audioPlayer) {
            if (isPlaying) {
                audioPlayer.pause();
                setIsPlaying(false);
            } else {
                audioPlayer.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div>
            <h2 className="font-bold text-primary mb-4 md:mb-5">Resultados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[22px] pb-[120px]">
                {songs.map((song) => {
                    return (
                        <SongCard
                            key={song.id}
                            id={song.id}
                            artist={song.artist}
                            title={song.title}
                            cover={song.cover}
                            preview={song.preview}
                            isPlaying={
                                masterAudio === song.preview && isPlaying
                            }
                            handlePlayPause={handlePlayPause}
                            setMasterAudio={setMasterAudio}
                        />
                    );
                })}
            </div>
        </div>
    );
};
