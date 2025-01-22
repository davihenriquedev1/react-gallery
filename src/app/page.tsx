"use client";

import { PhotoItem } from '@/components/gallery/PhotoItem';
import { UploadForm } from '@/components/gallery/UploadForm';
import Loading from '@/components/partials/Loading';
import * as Photos from '@/services/photos';
import { Photo } from '@/types/Photo';
import { FormEvent, useEffect, useState } from 'react';

export default function Page() {
	const [uploading, setUploading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [photos, setPhotos] = useState<Photo[]>([]);

	useEffect(()=> {
		const getPhotos = async () => {
			setLoading(true);
			setPhotos(await Photos.getPhotos());
			setLoading(false);
		}
		getPhotos();
	},[])	

	const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const file = formData.get('image') as File;

		if(file && file.size > 0) {
			setUploading(true);
			let result = await Photos.submitPhoto(file);
			setUploading(false);

			if(result instanceof Error) {
				alert(`${result.name} - ${result.message}`)
			} else {
				setPhotos((prev) => [...prev, result]);
			}
		}
	}

	return (
		<div className="bg-[#27282F] text-white min-h-screen">
			<div className="m-auto max-w-[980px] py-8 px-0">
				<div className="m-0 p-0 text-center mb-8">
					<h1>Galeria de Fotos</h1>
				</div>
				<div className="">
					<UploadForm onSubmit={handleFormSubmit}/>
					{uploading && <p>Enviando...</p>}
				</div>
				<div className="w-full grid grid-cols-3 2xl:grid-cols-5 gap-3">
					{loading && <Loading/>}
					{!loading && photos.length > 0 &&
						photos.map((item, key)=> (
							<PhotoItem item={item} key={key}/>
						))
					}
					{!loading && photos.length === 0 &&
						<div className='text-white/50'>nada para exibir</div>
					}
				</div>
			</div>
		</div>
	);
}
