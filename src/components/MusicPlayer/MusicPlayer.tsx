import { FaPlay, FaVolumeOff } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import "./MusicPlayer.css";
export const MusicPlayer = () => {
    return (
        <div className="h-[60px] md:h-[100px] fixed w-full left-0 right-0 bottom-0 bg-[#EB5757]  flex justify-between z-20 pr-[10px] md:pr-[32px] max-w-[1300px] mx-auto">
            <div className="flex gap-2 md:gap-5 items-center">
                <img
                    src="https://bloximages.chicago2.vip.townnews.com/fontanaheraldnews.com/content/tncms/assets/v3/editorial/8/3b/83b610e4-b811-11ec-a0d7-b763888abef4/6251987c48896.image.jpg"
                    alt=""
                    className="w-[60px] md:w-[100px]"
                />
                <div className="text-white">
                    <p className="font-bold text-sm">EL NENE</p>
                    <p className="text-xs">Anuel</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
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
            <div className="flex items-center md:gap-10">
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
