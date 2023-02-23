import { useState, useEffect } from "react";
import { SidebarLinks } from "../SidebarLinks/SidebarLinks";
import { HiMenuAlt3 } from "react-icons/hi";
import clsx from "clsx";
import tinyLogo from "../../assets/images/tiny-logo.png";
import bigLogo from "../../assets/images/big-logo.png";

const miLibreria = ["Artistas", "Albums", "Canciones", "Estaciones"];
const playlist = ["Metal", "Para bailar", "Rock 90s", "Estaciones"];
export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside
            className={clsx(
                "bg-secondary relative text-white pt-8 flex flex-col items-start gap-8 transition-all duration-500 lg:w-[330px]",
                isOpen ? "w-[50%]" : "w-[20%]"
            )}
        >
            <div className="fixed">
                <div
                    className={clsx(
                        "transition-all duration-500 w-full lg:ml-4 lg:mb-[30px]",
                        isOpen ? "ml-4" : "-ml-2 md:ml-4"
                    )}
                >
                    <HiMenuAlt3
                        size={30}
                        className="self-end cursor-pointer mx-auto md:hidden"
                        color={isOpen ? "#E86060" : ""}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                    <figure className="self-center flex justify-center items-center relative w-full">
                        <img
                            src={tinyLogo}
                            alt="logo"
                            className="h-12 lg:hidden"
                        />
                        <img
                            src={bigLogo}
                            alt=""
                            className="hidden lg:block w-[250px]"
                        />
                    </figure>
                </div>
                <div
                    className={clsx(
                        " transition-all duration-500 flex flex-col items-start gap-8 ",
                        isOpen
                            ? "trasnlate-x-0 opacity-100 "
                            : "-translate-x-full opacity-0 md:-translate-x-0 md:opacity-100"
                    )}
                >
                    <SidebarLinks
                        title="Mi Librería"
                        sideLinks={miLibreria}
                        className="mb-2"
                    />
                    <SidebarLinks
                        title="Playlist"
                        sideLinks={playlist}
                    />
                </div>
            </div>
        </aside>
    );
};
