import React from 'react';
import Styles from './Button.module.scss'
import { Icon } from '@iconify/react';

function Button({title, icon, refr="#",targ="_blank"}) {
    return (
        <a href={refr} className={Styles.o_btn} target={targ}>
            {
                icon ? <Icon className={Styles.o_icon} icon={icon} color="white" /> : <></>
            }
            {title}
        </a>
    );
}

export default Button;