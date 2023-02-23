import { FaPlay, FaVolumeOff } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { Song } from "../../types";
import "./MusicPlayer.css";
export const MusicPlayer = ({ song }: { song: Song | undefined }) => {
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
                <div className="bg-lightred h-[40px] w-[40px]  md:h-[60px] md:w-[60px] flex items-center justify-center rounded-full">
                    <FaPlay
                        className="music-player"
                        color="white"
                    />
                </div>
                <MdSkipNext
                    className="music-change"
                    color="white"
                />
            </div>
            <div className="flex items-center md:gap-10 place-self-end self-center">
                <input
                    type="range"
                    className="volume w-[70px] md:w-[100px]"
                />

                <FaVolumeOff
                    className="mute-volume"
                    size={20}
                    color="white"
                />
            </div>
        </div>
    );
};
