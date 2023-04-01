import React from 'react';

const Header = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary page">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">GroupBot</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">How It Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Setup</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;