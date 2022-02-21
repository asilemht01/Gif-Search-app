import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GiftSearchApp = () => {

   
   const [categoria, setcategoria] = useState(['Luffy']);
   return(
        <div>
            <h2> GiftSearchApp</h2>
            <hr/>
            <AddCategory setcategoria={setcategoria}/>
            
            <ol>
                {
                    categoria.map((category) =>(
                        <GifGrid 
                            key = {category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
 
    );

};