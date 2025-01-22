import { Photo } from "@/types/Photo"

type Props = {
    item:Photo
}

export const PhotoItem = ({item}:Props)=> {
    return (
        <div className="flex flex-col gap-2 rounded-md p-2">
            <img src={item.url} alt={item.name} className="w-full mb-2 h-auto object-contain"/>
            <p className="text-sm">{item.name}</p>
        </div>
    )
}