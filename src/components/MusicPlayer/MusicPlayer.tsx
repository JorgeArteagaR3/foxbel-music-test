import { useState, ChangeEvent, SetStateAction, useEffect } from "react";
import { FaPlay, FaVolumeOff, FaVolumeUp, FaPause } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { Song } from "../../types";
import "./MusicPlayer.css";
export const MusicPlayer = ({
    song,
    audioPlayer,
    handlePlayMusic,
}: {
    song: Song | undefined;
    audioPlayer: HTMLAudioElement | undefined;
    handlePlayMusic: () => void;
}) => {
    const [volumeValue, setVolumeValue] = useState(0.5);
    const [isMuted, setIsMuted] = useState<boolean>(false);

    useEffect(() => {
        if (audioPlayer) {
            audioPlayer.volume = volumeValue;
        }
    }, [volumeValue]);

    useEffect(() => {
        if (audioPlayer) {
            if (isMuted) {
                audioPlayer.volume = 0;
            } else {
                audioPlayer.volume = volumeValue;
            }
        }
    }, [isMuted]);

    const handleSound = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value) / 100;
        setVolumeValue(value);
    };

    let isPlaying;

    if (audioPlayer && !audioPlayer.paused) {
        isPlaying = true;
    } else {
        isPlaying = false;
    }

    const toggleSound = () => {
        setIsMuted(!isMuted);
    };
    return (
        <div className="h-[60px] md:h-[100px] fixed w-full left-0 right-0 bottom-0 bg-[#EB5757]  grid grid-cols-3 z-20 pr-[10px] md:pr-[32px] max-w-[1300px] mx-auto">
            <div className="flex gap-2 md:gap-5 items-center md:max-w-[250px] lg:max-w-none lg:w-[320px]">
                <img
                    src={song?.cover}
                    alt=""
                    className="w-[60px] md:w-[100px] hidden md:block"
                />
                <div className="text-white pl-4 md:pl-0">
                    <p className="font-bold text-sm">{song?.title}</p>
                    <p className="text-xs">{song?.artist}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 place-self-center">
                <MdSkipNext
                    color="white"
                    className="rotate-180 music-change"
                />
                <div
                    onClick={handlePlayMusic}
                    className="bg-lightred h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center rounded-full cursor-pointer"
                >
                    {isPlaying ? (
                        <FaPause
                            className="music-player"
                            color="white"
                            onClick={handlePlayMusic}
                        />
                    ) : (
                        <FaPlay
                            className="music-player"
                            color="white"
                            onClick={() => {
                                audioPlayer?.play();
                            }}
                        />
                    )}
                </div>
                <MdSkipNext
                    className="music-change"
                    color="white"
                />
            </div>
            <div className="flex items-center md:gap-10 place-self-end self-center">
                <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={handleSound}
                    className="volume w-[70px] md:w-[100px]"
                />
                {!isMuted ? (
                    <FaVolumeUp
                        className="mute-volume cursor-pointer"
                        size={20}
                        color="white"
                        onClick={toggleSound}
                    />
                ) : (
                    <FaVolumeOff
                        className="mute-volume cursor-pointer"
                        size={20}
                        color="white"
                        onClick={toggleSound}
                    />
                )}
            </div>
        </div>
    );
};
