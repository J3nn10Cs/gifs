import React, { useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect } from 'react'
import GifItem from './GifItem';

export const Card = (category) => {

  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  
  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  //solo se ejecuta una vez cuando el componente este listo
  useEffect(() => {
    getImages()
  },[])

  return (
    <div
      className='mx-4 md:grid md:grid-cols-3 md:gap-3 mb-4'
    >
      {images.map(({id,title,url}) => (
        <GifItem
          key={id}
          title={title}
          url={url}
        />
      ))}
    </div>
  )
}


