import React, {useEffect, useState} from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


  //const [images , setImages] = useState([]);
  const { data, loading } = useFetchGifs(category);
  
 
  //useEffect(() => {
  //   getGifs(category)
  //         .then(imgs => setImages(imgs) );
 //},[category]);

  
  //getGifs();

  return (
    <>
      <h3 className='animate__animated animate__fedeIn'>{category}</h3>
  
      { loading && <p className='animate__animated animate__flash'>Loading... </p>}
    <div className='cardGrid'>

            {
               data.map((img) => (
                 <GifGridItem 
                    key={ img.id }
                    { ...img }
                 />
                ))
            }
   
      </div> 
   </>
  )
}
