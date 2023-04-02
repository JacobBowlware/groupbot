import React from 'react';

// Images / Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team from '../images/team.svg';
import works from '../images/works.svg';
import steps from '../images/steps.svg';
import steps2 from '../images/steps2.svg';
import { faBrain, faComment, faFilter } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="home">
            <div className="home__hero container-fluid page" id="home">
                <div className="home__hero-item">
                    <p className="home__hero-item__header">
                        Find compatible team members effortlessly with GroupBot
                    </p>
                    <p className="home__hero-item__header">
                        Eliminate the stress and focus on bringing your ideas to life
                    </p>
                    <p className="home__hero-item__header">
                        Achieve your goals with a group of like-minded individuals.
                    </p>
                    <a href="/#features" className="btn home__hero-item__btn">Learn More</a>
                </div>
                <div className="home__hero-item">
                    <img src={team} alt="Team of people high-fiving." />
                </div>
            </div>
            <div className="home__features container-fluid page" id="features">
                <h2 className="home__features-header">GroupBot Features</h2>
                <div className="home__features-item__container">
                    <div className="home__features-item__container-cont">
                        <div className="home__features-item">
                            <FontAwesomeIcon className="home__features-item__icon" icon={faBrain} />
                        </div>
                        <p className="home__features-item__body">
                            GroupBot matches users with compatible
                            team members based on interests, skills,
                            and preferences.
                        </p>
                    </div>
                    <div className="home__features-item__container-cont">
                        <div className="home__features-item">
                            <FontAwesomeIcon className="home__features-item__icon" icon={faFilter} />
                        </div>
                        <p className="home__features-item__body">
                            Users can set custom filters, such as age
                            range and language, to refine the matching
                            process.
                        </p>
                    </div>
                    <div className="home__features-item__container-cont">
                        <div className="home__features-item">
                            <FontAwesomeIcon className="home__features-item__icon" icon={faComment} />
                        </div>
                        <p className="home__features-item__body">
                            Facilitates team collaboration by providing
                            communication, delegation, and progress
                            tracking features.
                        </p>
                    </div>
                </div>
            </div>
            <div className="home__works container-fluid page" id="how-it-works">
                <div className="home__works-container">
                    <div className="home__works-item">
                        <h3 className="home__works-header">How It Works</h3>
                        <p className="home__works-body">
                            GroupBot is a powerful tool that simplifies the process of
                            finding a group of like-minded individuals to work on
                            projects or other initiatives. To get started, simply
                            add GroupBot to your Discord server and initialize it
                            with a set of filters, or use the default filters.
                            From there, individuals can put themselves into a
                            pooling system for group making, based on their skills,
                            interests, age, and more.
                        </p>
                        <p className="home__works-body">
                            After completing a short questionnaire, GroupBot's
                            intelligent matching algorithm will pair you with
                            compatible team members, ensuring that everyone in
                            the group is a good fit for the project. With a
                            dedicated group in place, you can start collaborating,
                            delegating tasks, and tracking progress towards your
                            goals. Say goodbye to the hassle of finding a compatible
                            team and say hello to GroupBot!

                        </p>
                        <a href="/#set-up" className="btn home__works-btn">Setup GroupBot</a>
                    </div>
                    <div className="home__works-item">
                        <img src={works} alt="A business man wondering how this bot could help him." />
                    </div>
                </div>
            </div>
            <div className="home__setup container-fluid page" id="set-up">
                <div className="home__setup-container">
                    <div className="home__setup-item">
                        <img className="home__setup-item__img" src={steps} alt="A business man walking through the steps of success." />
                    </div>
                    <div className="home__setup-item">
                        <h3 className="home__setup-header">Setup Instructions</h3>
                        <ul className="home__setup-list">
                            <li className="home__setup-list__item">
                                Add GroupBot to Your Server
                            </li>
                            <li className="home__setup-list__item">
                                Set Your Preferences
                            </li>
                            <li className="home__setup-list__item">
                                Answer a Short Questionnaire
                            </li>
                            <li className="home__setup-list__item">
                                Get Matched with Compatible Team Members
                            </li>
                            <li className="home__setup-list__item">
                                Start Collaborating on Projects and Goals!
                            </li>
                        </ul>
                        <a href="/" className="btn home__setup-btn">Add GroupBot To Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;