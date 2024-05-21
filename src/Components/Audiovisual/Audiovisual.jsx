import React, { useState, useEffect } from 'react';
import { useContextCar } from '../../Context/Context';

const Audiovisual = ({ AudiovisualDatos }) => {
    const { SaveMedia, user } = useContextCar()
    const [media, setMedia] = useState(null);
    const [mediaType, setMediaType] = useState(null);
    const [Enlace, setEnlace] = useState(null)
    const [LinkUrl, setLinkUrl] = useState(null)
    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (file) {

            const reader = new FileReader();
            reader.onloadend = () => {
                setMedia(reader.result);
                if (file.type.startsWith('image')) {
                    setMediaType('image');
                    SaveMedia(file, user.uid, setLinkUrl)
                } else if (file.type.startsWith('video')) {
                    setMediaType('video');
                    SaveMedia(file, user.uid, setLinkUrl)
                } else {
                    setMediaType(null);
                }
            };
            reader.readAsDataURL(file);
        }
    }

    const handleRemoveMedia = () => {
        setMedia(null);
        setMediaType(null);
    };
    useEffect(() => {
        if (mediaType === 'image') {
            if (LinkUrl) {
                AudiovisualDatos.Imagen = LinkUrl
                AudiovisualDatos.Video = "No Video"
            }

        } else {
            if (LinkUrl) {
                AudiovisualDatos.Video = LinkUrl
                AudiovisualDatos.Imagen = "No Imagen"
            }

        }

    }, [LinkUrl])


    return (
        <div className='bg-[#071620] text-white mb-12'>
            <div className='ml-8 mr-8 mt-8'>
                <div className='text-left'>
                    <h3 className='underline text-2xl'>Imágenes y video</h3>
                </div>
                <div className='mt-8'>
                    <form className='max-w-full'>
                        <div>
                            <div className='grid gap-6 mb-6 lg:grid-cols-1'>
                                <div className='mb-4'>
                                    <label className='text-sm'>Sube tu Imagen/Video</label>
                                    <div className="bg-black rounded-lg border border-gray-500 h-[12rem] w-[12rem] bg-clip-content border-dashed"
                                        style={{
                                            position: 'relative'
                                        }}
                                    >
                                        {mediaType === 'image' && (
                                            <img src={media} alt="Uploaded" className='object-cover h-full w-full rounded-lg' />
                                        )}
                                        {mediaType === 'video' && (
                                            <video src={media} controls className='h-full w-full rounded-lg'></video>
                                        )}
                                        {media && (
                                            <button onClick={handleRemoveMedia} className='absolute top-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded'>Borrar</button>
                                        )}
                                        {!media && (
                                            <div className='flex items-center justify-center w-full h-full'>
                                                <label htmlFor={`file-upload-1`} className='px-3 py-2 text-right text-xs leading-4'>
                                                    <div className='text-white px-4 py-2 rounded-full text-center cursor-pointer'>
                                                        <input onChange={handleMediaChange} id={`file-upload-1`} type="file" className="hidden" />
                                                        <span className='text-4xl'>+</span>
                                                    </div>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='mb-4 grid gap-6 lg:grid-cols-1 w-full'>
                                    <div className='mb-8'>
                                        <label className='block mb-2 text-sm font-medium text-white'>Enlace para el video</label>
                                        <input type='text' className='bg-[#12232E] text-sm block w-full p-2.5' onChange={(e) => setEnlace(e.target.value)} required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Audiovisual;
