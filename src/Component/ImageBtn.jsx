import React from 'react'
import "./ImageBtn.css";

function ImageBtn({image , setImage}) {
    return (
            <img src={image} className='image-option' onClick={() => setImage(image)} />
    )
}

export default ImageBtn