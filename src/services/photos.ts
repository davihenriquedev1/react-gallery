import { Photo } from "@/types/Photo";
import supabase from "@/libs/supabaseClient";

export const getPhotos = async () => {
    const { data, error } = await supabase
      .from('images')
      .select('id, name, url, created_at');
  
    if (error) {
      console.error('Erro ao buscar fotos:', error.message);
      throw error;
    }
  
    return data as Photo[];
  };
  

export const submitPhoto = async (file: File): Promise<Photo | Error> => {
    if (['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      const fileName = `${Date.now()}-${file.name}`;
  
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('gallery-images') // Nome do bucket
        .upload(fileName, file);
  
      if (uploadError) {
        return new Error(uploadError.message);
      }
  
      const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/gallery-images/${uploadData.path}`;
  
      // Salvar no banco
      const { data: dbData, error: dbError } = await supabase
        .from('images') // Nome da tabela
        .insert([{ name: fileName, url: imageUrl }])
        .select(); // Selecionar a linha criada
  
      if (dbError) {
        return new Error(dbError.message);
      }
  
      return dbData[0] as Photo; // Retorna a linha inserida
    } else {
      return new Error('Tipo de arquivo não permitido');
    }
  };

  