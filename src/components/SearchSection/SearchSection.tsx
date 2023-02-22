import { FaUser, FaSearch } from "react-icons/fa";
import clsx from "clsx";

export const SearchSection = ({ className }: { className?: string }) => {
    return (
        <div className={clsx("flex justify-between items-center", className)}>
            <div className="w-[50%] px-4 py-1 border border-solid border-gray rounded-full flex  gap-1 items-center">
                <input
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
                <p className="text-xs">Francisco M.</p>
            </div>
        </div>
    );
};
