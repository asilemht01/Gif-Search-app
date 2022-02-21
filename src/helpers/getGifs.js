
//import React from "react";

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=c5UJ8vqnhC66FG3wCRIxU14Fy52giBs0`
    const resp = await fetch(url);
    const { data } = await resp.json();
     //restructuracion 
    const gifs = data.map(img => {
       return{
           id: img.id,
           title: img.title,
           url: img.images?.downsized_medium.url
       }

  });

// console.log(data);
 //setImages(gifs);
 return gifs;

 }
