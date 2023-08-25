import React from 'react';
import { TextField, IconMapMarker, Button } from '@7shifts/sous-chef';
import { Link } from 'react-router-dom';
import OnBoardingHeader from '../../components/OnBoardingHeader/OnBoardingHeader';
import sideBar from '../../assets/images/side-bar.png';
import './OnboardingPage2.scss'


const OnboardingPage2 = () => {

    return (
        <main className='on-board-1'>
            <img src={sideBar} alt="sidebar" className='on-board-1__sidebar' />
            <div className='on-board-1__content'>
                <OnBoardingHeader pagination={"2/4"} progress={50} />
                <div className="on-board-2__container">
                    <div className="content__text">
                        <h1>Where is Samsara located?</h1>
                        <p>This helps us recommend you a personalized schedule template made for you.</p>
                    </div>
                    <div className="wrapper__textfield">
                        <TextField
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                            onKeyDown={function noRefCheck() { }}
                            placeholder="Enter your restaurant location here"
                            prefix={<IconMapMarker color="tangerine-400" />}
                        />
                    </div>
                    <Link to="/onboarding3" className='wrapper__button'>
                    <Button
                        size="full-width"
                        theme="marketing"
                        type="button"
                        id='button__next'
                    >
                        Next
                    </Button>
                    </Link>
                </div>
            </div>

        </main>
    );
};

export default OnboardingPage2;