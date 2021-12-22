import React from 'react';
import Button from '../../Button/Button'
import SocialLinks from './SocialLinks/SocialLinks';
import Styles from './Welcome.module.scss'
import { SANTIIMAGE } from '../../../constants/images'
import { DownloadIcon } from '../../../constants/icons'
import cv from "../../../images/Hoja de Vida Santiago G.pdf"
// import cv from "../../../images/CV.pdf"



function Welcome(props) {
    return (
        <div className={Styles.o_welcome}>
            <div className={Styles.o_socialcontainer}>
                <SocialLinks className={Styles.o_socialcomponent} />
                <span className={Styles.o_dummysocial}>
                </span>
            </div>
            <div className={Styles.o_container}>
                <img src={SANTIIMAGE} alt="Santiago García Vector" />
                <div className={Styles.o_info}>
                    <h1>Hola, soy <br /><span>Santiago García</span></h1>
                    <p className={Styles.o_profession}>Ingeniero Multimedia / Fullstack Developer</p>
                    <p>¡Hola! Soy Santiago García,  una persona creativa, con iniciativa y me gusta trabajar en equipo. Como Desarrollador Web me he dedicado a crear productos con la capacidad de ofrecer experiencias interactivas multiplataforma.
                    <br/><br />
                    Desde que descubrí la programación, siempre procuro que mis desarrollos se adapten completamente a la necesidad de los usuarios, convirtiendose en sistemas dinámicos para todos.</p>
                <div className={Styles.o_btns}>
                    <Button title="Contáctame" />
                    <Button title="CV" icon={DownloadIcon} refr={cv} targ="_blank" />
                </div>
            </div>
        </div>
        </div >
    );
}

export default Welcome;