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
                <a className="footer__cont-item" href="/#">Reviews</a>
            </div>
        </div>
    );
}

export default Footer;