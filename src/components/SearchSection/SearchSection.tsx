import { FaUser, FaSearch } from "react-icons/fa";
import clsx from "clsx";
import { ChangeEvent, useContext, SetStateAction } from "react";
import { MyContext } from "../../App";

export const SearchSection = ({ className }: { className?: string }) => {
    const {
        user,
        setSearchValue,
    }: {
        user: string;
        setSearchValue: (value: SetStateAction<string>) => void;
    } = useContext(MyContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length >= 4) {
            setSearchValue(e.target.value);
        }
    };

    return (
        <div className={clsx("flex justify-between items-center", className)}>
            <div className="w-[50%] px-4 py-1 border border-solid border-gray rounded-full flex  gap-1 items-center">
                <input
                    onChange={handleChange}
                    className="w-full focus:outline-none border-none rounded-full text-xs"
                    type="text"
                    placeholder="Buscar"
                />
                <FaSearch color="var(--softgray)" />
            </div>
            <div className="flex gap-1.5">
                <FaUser
                    size={14}
                    color="var(--primary)"
                />
                <p className="text-xs first-letter:uppercase">{user}</p>
            </div>
        </div>
    );
};
