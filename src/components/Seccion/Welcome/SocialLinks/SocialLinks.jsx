import React from 'react';
import Styles from "./SocialLinks.module.scss"
import { Icon } from '@iconify/react';
import { INSTAGRAMICON, GITHUBICON, LINKEDINICON, GMAILICON } from '../../../../constants/images'
import { BracketOpenIcon, SlashIcon, BracketCloseIcon } from '../../../../constants/icons'

function SocialLinks() {
    return (
        <div className={Styles.o_social}>
            <Icon className={Styles.o_socialicon} icon={BracketOpenIcon} color="#ababab" />
            <Icon className={Styles.o_socialicon} icon={SlashIcon} color="#ababab" />
            <a href="https://www.instagram.com/santigl09/">
                <img src={INSTAGRAMICON} alt="instagram logo" />
            </a>
            <a href="https://github.com/Sagalo04">
                <img src={GITHUBICON} alt="github logo" />
            </a>

            <a href="https://github.com/Sagalo04">
                <img src={LINKEDINICON} alt="linkedin logo" />
            </a>

            <a href="mailto:santiago_garcia09@live.com">
                <img src={GMAILICON} alt="gmail logo" />
            </a>

            <Icon className={Styles.o_socialicon} icon={BracketCloseIcon} color="#ababab" />
        </div>
    );
}

export default SocialLinks;