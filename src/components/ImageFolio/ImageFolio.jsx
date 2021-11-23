import React from 'react';
import Styles from "./ImageFolio.module.scss"

function ImageFolio({image}) {
    return (
        <div className={Styles.imagefolio}>
            <img src={image} alt="" />
        </div>
    );
}

export default ImageFolio;