import React from 'react';
import Styles from './Button.module.scss'
import { Icon } from '@iconify/react';

function Button({title, icon}) {
    return (
        <button className={Styles.o_btn}>
            {title}
            {
                icon ? <Icon className={Styles.o_icon} icon={icon} color="white" /> : <></>
            }
        </button>
    );
}

export default Button;