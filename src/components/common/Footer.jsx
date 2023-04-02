import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__cont">
                <a className="footer__cont-item"
                    href="https://github.com/JacobBowlware/groupbot.git"
                    target='_blank'
                    rel="noreferrer">
                    GitHub
                </a>
                <a className="footer__cont-item" href="/#">Back To Top</a>
                <a className="footer__cont-item"
                    href="https://discord.com/api/oauth2/authorize?client_id=1091778100972486827&permissions=8&scope=bot%20applications.commands"
                    target='_blank'
                    rel="noreferrer">
                    GroupBot
                </a>
            </div>
        </div>
    );
}

export default Footer;