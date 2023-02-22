import { SidebarTitles } from "../../types";
import "./SidebarLinks.css";
import clsx from "clsx";
import { useState } from "react";
export const SidebarLinks = ({
    title,
    sideLinks,
    className,
}: SidebarTitles) => {
    return (
        <div className={className}>
            <h2 className="pl-4 md:pl-10 font-bold text-md mb-2">{title}</h2>
            <ul className="text-sm">
                {sideLinks.map((link) => (
                    <li
                        key={link}
                        className="sidebar-link relative pl-4 md:pl-10 py-1 hover:text-primary focus:text-primary flex cursor-pointer"
                    >
                        <span className="absolute left-0 bg-primary w-1 h-full top-0 opacity-0"></span>
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};
