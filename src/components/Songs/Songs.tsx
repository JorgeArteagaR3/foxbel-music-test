import { useContext, useState, useEffect, SetStateAction } from "react";
import { SongCard } from "../SongCard/SongCard";
import { MyContext } from "../../App";
import { Song } from "../../types";
import { SkeletonLoading } from "../SkeletonLoading/SkeletonLoading";
export const Songs = () => {
    const {
        songs,
        masterAudio,
        isPlaying,
        setMasterAudio,
        handlePlayMusic,
    }: {
        songs: Song[];
        masterAudio: string;
        isPlaying: boolean;
        setMasterAudio: (value: SetStateAction<string>) => void;
        handlePlayMusic: () => void;
    } = useContext(MyContext);

    return (
        <div>
            <h2 className="font-bold text-primary mb-4 md:mb-5">Resultados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[22px] pb-[120px]">
                {songs.length ? (
                    songs.map((song) => {
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
                                handlePlayMusic={handlePlayMusic}
                                setMasterAudio={setMasterAudio}
                            />
                        );
                    })
                ) : (
                    <>
                        {[...Array(10)].map((_, index) => (
                            <SkeletonLoading key={index} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
