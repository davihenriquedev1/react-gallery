import { FormEvent } from "react"

type Props = {
    onSubmit:(e:FormEvent<HTMLFormElement>)=>void
}

export const UploadForm = ({onSubmit}:Props)=> {

    return (
        <form onSubmit={onSubmit} className="bg-[rgb(61,63,67)] p-3 rounded-md mb-8">
            <input title="image" type="file" name="image" id="image" />
            <input type="submit" value="Enviar" className="bg-[#756df4] border-0 text-white py-2 px-4 rounded-md my-0 mx-4 cursor-pointer hover:opacity-90"/>
        </form>
    )
}