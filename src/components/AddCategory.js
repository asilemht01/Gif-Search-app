import React, { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ({setcategoria}) =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
       // console.log('cargado ')
        e.preventDefault();
        if(inputValue.length > 2 ){
            setcategoria( cats => [inputValue, ...cats ]);
            setInputValue('');

        }
    }
    return(
        <form onSubmit={ handleSubmit }>
           <input 
               
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
           />
        </form>
    );
}

AddCategory.propTypes = {
    setcategoria: PropTypes.func.isRequired
}