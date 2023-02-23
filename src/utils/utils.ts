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
    }));
    callback(newSongs);
};
