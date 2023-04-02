import React from 'react';

// Images / Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team from '../images/team.svg';
import works from '../images/works.svg';
import steps from '../images/steps.svg';
import { faEye, faRobot, faUsers } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="home">
            <div className="home__hero container-fluid page" id="home" >
                <div className="home__hero-item" data-aos="fade-right" data-aos-once="true"
                    data-aos-duration="1000">
                    <p className="home__hero-item__header">
                        Group creation and management made easy with GroupBot.
                    </p>
                    <p className="home__hero-item__header">
                        Simply provide a group name and let GroupBot handle the rest.
                    </p>
                    <p className="home__hero-item__header">
                        Effortlessly communicate with your group through a unique role and dedicated channel.                    </p>
                    <a href="/#features" className="btn home__hero-item__btn">Learn More</a>
                </div>
                <div className="home__hero-item" data-aos="fade-left"
                    data-aos-duration="1000" data-aos-once="true">
                    <img className="img" src={team} alt="Team of people high-fiving." />
                </div>
            </div>
            <div className="home__features container-fluid page" id="features" data-aos="fade-up"
                data-aos-duration="1000" data-aos-once="true">
                <h2 className="home__features-header">GroupBot Features</h2>
                <div className="home__features-item__container">
                    <div className="home__features-item__container-cont">
                        <div className="home__features-item">
                            <FontAwesomeIcon className="home__features-item__icon" icon={faRobot} />
                        </div>
                        <p className="home__features-item__body">
                            GroupBot creates a Discord role and channel for your group automatically.
                        </p>
                    </div>
                    <div className="home__features-item__container-cont">
                        <div className="home__features-item">
                            <FontAwesomeIcon className="home__features-item__icon" icon={faEye} />
                        </div>
                        <p className="home__features-item__body">
                            Customize permissions and settings for each group role.
                        </p>
                    </div>
                    <div className="home__features-item__container-cont">
                        <div className="home__features-item">
                            <FontAwesomeIcon className="home__features-item__icon" icon={faUsers} />
                        </div>
                        <p className="home__features-item__body">
                            Add/remove members, modify settings, and access channels easily.
                        </p>
                    </div>
                </div>
            </div>
            <div className="home__works container-fluid page" id="how-it-works">
                <div className="home__works-container" data-aos="fade-right"
                    data-aos-duration="1000" data-aos-once="true">
                    <div className="home__works-item">
                        <h3 className="home__works-header">How It Works</h3>
                        <p className="home__works-body">
                            To create a new group with GroupBot, simply provide a
                            group name and let the bot handle the rest. GroupBot
                            will create a unique Discord role for the group and a
                            dedicated text/voice channel that members can use to
                            communicate and collaborate with ease.
                        </p>
                        <p className="home__works-body">
                            Once the group has been created, members can be added
                            to the group role to gain access to the group channel.
                            From there, you can customize the group settings,
                            add new members, and manage communication with ease,
                            all from one centralized location. With GroupBot,
                            creating and managing groups has never been simpler.

                        </p>
                        <a href="/#set-up" className="btn home__works-btn">Setup GroupBot</a>
                    </div>
                    <div className="home__works-item" data-aos="fade-left"
                        data-aos-duration="1000" data-aos-once="true">
                        <img className="img img-noshow" src={works} alt="A business man wondering how this bot could help him." />
                    </div>
                </div>
            </div>
            <div className="home__setup container-fluid page" id="set-up">
                <div className="home__setup-container">
                    <div className="home__setup-item" data-aos="flip-right"
                        data-aos-duration="1000" data-aos-once="true">
                        <img className="home__setup-item__img img img-noshow" src={steps} alt="A business man walking through the steps of success." />
                    </div>
                    <div className="home__setup-item" data-aos="flip-left"
                        data-aos-duration="1000" data-aos-once="true">
                        <h3 className="home__setup-header">Setup Instructions</h3>
                        <ul className="home__setup-list">
                            <li className="home__setup-list__item">
                                Add GroupBot to your Discord server.
                            </li>
                            <li className="home__setup-list__item">
                                Specify a name for your group.
                            </li>
                            <li className="home__setup-list__item">
                                GroupBot creates a role and dedicated channel.
                            </li>
                            <li className="home__setup-list__item">
                                Browse existing groups or create your own.
                            </li>
                            <li className="home__setup-list__item">
                                Start collaborating with your group!
                            </li>
                        </ul>
                        <a
                            href="https://discord.com/api/oauth2/authorize?client_id=1091893500980764673&permissions=8&scope=bot%20applications.commands"
                            className="btn home__setup-btn"
                            target="_blank"
                            rel="noreferrer"

                        >Add GroupBot To Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;