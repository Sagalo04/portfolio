import React from 'react';
import Styles from './Button.module.scss'
import { Icon } from '@iconify/react';

function Button({ title, icon, refr = "#", targ = "_blank", dis = true, btn = false, onclick }) {
    return (
        <>
            {btn ? <button type='submit' onClick={onclick} className={Styles.o_btn}>
                {
                    icon ? <Icon className={Styles.o_icon} icon={icon} color="white" /> : <></>
                }
                {title}
            </button> :
            <a href={refr} className={dis === true ? Styles.o_btn : (Styles.o_btn + " " + Styles.disable)} target={targ}>
            {
                icon ? <Icon className={Styles.o_icon} icon={icon} color="white" /> : <></>
            }
            {title}
        </a>}

        </>

    );
}

export default Button;