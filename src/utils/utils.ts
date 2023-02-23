import { SetStateAction } from "react";
import { Song } from "../types";

export const convertArrToSongs = (
    arr: any,
    callback: (value: SetStateAction<Song[]>) => void
) => {
    if (!arr) return;
    const newSongs: Array<Song> = arr.map((obj: any) => ({
        cover: obj.album.cover_medium,
        artist: obj.artist.name,
        title: obj.title,
        preview: obj.preview,
        id: obj.id,
        albumName: obj.album.title,
    }));
    callback(newSongs);
};

export const numberWithCommas = (value: number | undefined) => {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
