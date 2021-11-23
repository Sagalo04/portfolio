import React from 'react';
import Button from '../../Button/Button'
import SocialLinks from './SocialLinks/SocialLinks';
import Styles from './Welcome.module.scss'
import { SANTIIMAGE } from '../../../constants/images'
import {DownloadIcon} from '../../../constants/icons'


function Welcome(props) {
    return (
        <div className={Styles.o_welcome}>
            <div className={Styles.o_socialcontainer}>
                <SocialLinks className={Styles.o_socialcomponent}/>
                <span className={Styles.o_dummysocial}>
                </span>
            </div>
            <div className={Styles.o_container}>
                <img src={SANTIIMAGE} alt="Santiago García Vector" />
                <div className={Styles.o_info}>
                    <h1>Hola, soy <br /><span>Santiago García</span></h1>
                    <p className={Styles.o_profession}>Ingeniero Multimedia / Fullstack Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit porta cubilia mi non odio, ad venenatis malesuada tristique commodo nisl orci consequat duis curae pretium, ligula velit accumsan gravida a tempus facilisis tempor convallis nunc leo.</p>
                    <div className={Styles.o_btns}>
                        <Button title="Contáctame" />
                        <Button title="CV" icon={DownloadIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;