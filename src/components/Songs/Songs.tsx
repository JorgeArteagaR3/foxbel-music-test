import { SongCard } from "../SongCard/SongCard";

export const Songs = () => {
    return (
        <div>
            <h2 className="font-bold text-primary mb-4 md:mb-5">Resultados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[22px] pb-[120px]">
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
            </div>
        </div>
    );
};
