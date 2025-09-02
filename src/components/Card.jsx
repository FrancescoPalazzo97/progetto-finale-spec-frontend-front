import { Link } from "react-router-dom"
import { memo } from "react";
import { useCover } from "../hooks/useCover";

const Card = memo(({ game }) => {
    const { id, title, category } = game;
    const { image, video } = useCover(title);

    return (
        <>
            <div className="group overflow-hidden relative bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:shadow-md hover:shadow-rose-500 p-1 rounded-md">
                <Link to={`/game/${id}`} className="absolute z-10 inset-0" />
                <div className="relative">
                    <img src={image} alt={`${title}'s image`} className="block group-hover:opacity-40 transition-opacity duration-700 w-full rounded-md" />
                    <div
                        className="absolute bg-black rounded-md flex items-center group-hover:opacity-100 duration-700 inset-0 opacity-0"
                    >
                        <video src={video} className="w-full rounded-md" autoPlay loop preload="none" muted />
                    </div>
                </div>
                <div className="py-2 z-20">
                    <span className="text-md font-semibold">{title}</span>
                </div>
            </div>
        </>

    )
})

export default Card
