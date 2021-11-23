import React from 'react';
import Styles from "./SocialLinks.module.scss"
import { Icon } from '@iconify/react';
import {INSTAGRAMICON, GITHUBICON, LINKEDINICON, GMAILICON} from '../../../../constants/images'
import {BracketOpenIcon, SlashIcon, BracketCloseIcon} from '../../../../constants/icons'

function SocialLinks() {
    return (
        <div className={Styles.o_social}>
            <Icon className={Styles.o_socialicon} icon={BracketOpenIcon} color="#ababab" />
            <Icon className={Styles.o_socialicon} icon={SlashIcon} color="#ababab" />
            <img src={INSTAGRAMICON} alt="instagram logo" />
            <img src={GITHUBICON} alt="github logo" />
            <img src={LINKEDINICON} alt="linkedin logo" />
            <img src={GMAILICON} alt="gmail logo" />
            <Icon className={Styles.o_socialicon} icon={BracketCloseIcon} color="#ababab" />
        </div>
    );
}

export default SocialLinks;