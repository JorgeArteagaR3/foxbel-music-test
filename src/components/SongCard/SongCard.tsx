import clsx from "clsx";
export const SongCard = ({ className }: { className?: string }) => {
    return (
        <div className="card">
            <img
                src="https://bloximages.chicago2.vip.townnews.com/fontanaheraldnews.com/content/tncms/assets/v3/editorial/8/3b/83b610e4-b811-11ec-a0d7-b763888abef4/6251987c48896.image.jpg"
                alt=""
                className={clsx("mb-2", className)}
            />
            <div>
                <p className="font-bold text-sm">EL NENE</p>
                <p className="text-xs">Anuel</p>
            </div>
        </div>
    );
};
