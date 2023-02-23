import { SetStateAction } from "react";
export interface SidebarTitles {
    title: string;
    sideLinks: string[];
    className?: string;
}
export interface Song {
    cover: string;
    title: string;
    id: number;
    artist: string;
    preview: string;
    className?: string;
    isPlaying: boolean;
    albumName?: string;
}

export interface Album {
    title: string;
    artist_name: string;
    fans: number;
    description?: string;
    artist_picture: string;
    album_cover: string;
}
