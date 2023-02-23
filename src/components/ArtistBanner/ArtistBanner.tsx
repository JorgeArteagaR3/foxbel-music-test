import "./ArtistBanner.css";
import { TbDots } from "react-icons/tb";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Song } from "../../types";
import { getData } from "../../services/getData";
import { SetStateAction } from "react";
import { Album } from "../../types";
import { convertArrToSongs, numberWithCommas } from "../../utils/utils";

export const ArtistBanner = ({ className }: { className?: string }) => {
    const {
        songs,
        actualSong,
        setSongs,
    }: {
        songs: Song[];
        actualSong: Song;
        setSongs: (value: SetStateAction<Song[]>) => void;
    } = useContext(MyContext);

    const [album, setAlbum] = useState<Album>();

    useEffect(() => {
        getData(`https://api.deezer.com/album/302127`).then((data) => {
            setAlbum({
                albumId: data.id,
                fans: data.fans,
                artist_name: data.artist.name,
                title: data.title,
                description: data.label,
                artist_picture: data.artist.picture_medium,
                album_cover: data.cover_big,
            });
        });
    }, []);

    const getAlbumSongs = () => {
        getData(`https://api.deezer.com/album/${album?.albumId}`).then(
            (data) => {
                if (data) {
                    const arr = data.tracks.data;
                    convertArrToSongs(arr, setSongs);
                }
            }
        );
    };
    return (
        <div className={clsx("md:flex md:h-[250px] md:w-full", className)}>
            <img
                src={album?.artist_picture}
                className="w-full md:w-[250px]"
            />
            <div className="p-4 md:pt-10 md:pl-[30px] md:w-full text-white flex flex-col bg-top relative">
                <h3 className="font-bold z-10">{album?.title}</h3>
                <div className="mb-2 md:mb-5 z-10 md:flex md:items-center">
                    <h4 className="md:text-sm">Lo mejor de {album?.title}</h4>
                    <span className="z-10 md:ml-6 text-xs text-[#662323]">
                        {numberWithCommas(album?.fans)} seguidores
                    </span>
                </div>
                <p className="text-xs hidden md:block z-10 md:mb-10">
                    {album?.description}
                </p>
                <div className="z-10 flex flex-col md:flex-row justify-between md:justify-start items-center text-xs gap-1.5 md:gap-5">
                    <button
                        onClick={() => getAlbumSongs()}
                        className="bg-primary rounded-full w-[110px] py-1"
                    >
                        Reproducir
                    </button>
                    <button className="border-solid border rounded-full border-[var(--primary)] w-[110px] py-1 text-primary">
                        Seguir
                    </button>
                    <TbDots />
                </div>
                <div
                    className={`bg-image z-0 w-full h-full absolute w-full h-full left-0 top-0 overflow-hidden`}
                >
                    <img
                        src={album?.album_cover}
                        className="opacity-20 w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};
