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
}
