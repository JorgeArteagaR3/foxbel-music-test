import "./ArtistBanner.css";
import { TbDots } from "react-icons/tb";
import clsx from "clsx";
export const ArtistBanner = ({
    artist,
    className,
}: {
    artist: string;
    className?: string;
}) => {
    return (
        <div className={clsx("md:flex md:h-[250px] md:w-full", className)}>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"
                className="w-full md:w-[250px]"
            />
            <div className="p-4 md:pt-10 md:pl-[30px] text-white flex flex-col bg-top relative">
                <h3 className="font-bold z-10">Adele 21</h3>
                <div className="mb-2 md:mb-5 z-10 md:flex md:items-center">
                    <h4 className="md:text-sm">Lo mejor de {artist}</h4>
                    <span className="z-10 md:ml-6 text-xs text-[#662323]">
                        321, 123 seguidores
                    </span>
                </div>
                <p className="text-xs hidden md:block z-10 md:mb-10">
                    Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5
                    de mayo de 1988), conocida simplemente como Adele, es una
                    cantante, compositora y multinstrumentista británica.
                </p>
                <div className="z-10 flex flex-col md:flex-row justify-between md:justify-start items-center text-xs gap-1.5 md:gap-5">
                    <button className="bg-primary rounded-full w-[110px] py-1">
                        Repdroducir
                    </button>
                    <button className="border-solid border rounded-full border-[var(--primary)] w-[110px] py-1 text-primary">
                        Seguir
                    </button>
                    <TbDots />
                </div>
                <div className="bg-image z-0 w-full h-full absolute w-full h-full left-0 top-0" />
            </div>
        </div>
    );
};
