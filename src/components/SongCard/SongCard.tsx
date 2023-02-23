import clsx from "clsx";
import { FaPlay, FaPause } from "react-icons/fa";
import { Song } from "../../types";
import { SetStateAction } from "react";
import { useContext } from "react";
import { MyContext } from "../../App";

export const SongCard = ({
    className,
    cover,
    title,
    artist,
    preview,
    id,
    isPlaying,
    handlePlayPause,
    setMasterAudio,
}: Song & {
    isPlaying: boolean;
    handlePlayPause: () => void;
    setMasterAudio: (value: SetStateAction<string>) => void;
}) => {
    const {
        setActualSong,
    }: { setActualSong: (value: SetStateAction<Song>) => void } =
        useContext(MyContext);

    const handleSong = () => {
        setActualSong({ artist, cover, title, preview, id, isPlaying });
    };

    return (
        <div className="card">
            <figure className="relative">
                <img
                    src={cover}
                    alt={title}
                    className={clsx("mb-2", className)}
                />
                <button
                    className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer w-full h-[full] flex items-center justify-center"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? (
                        <FaPause
                            color="white"
                            size={30}
                            onClick={handlePlayPause}
                        />
                    ) : (
                        <FaPlay
                            color="white"
                            size={30}
                            onClick={() => {
                                setMasterAudio(preview);
                            }}
                        />
                    )}
                </button>
            </figure>

            <div>
                <p className="font-bold text-sm">{title}</p>
                <p className="text-xs">{artist}</p>
            </div>
        </div>
    );
};
