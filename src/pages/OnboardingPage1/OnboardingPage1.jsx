import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@7shifts/sous-chef/dist/index.css';
import sideBar from '../../assets/images/side-bar.png';
import './OnboardingPage1.scss';
import OnBoardingHeader from "../../components/OnBoardingHeader/OnBoardingHeader";
import { Text, Button, PillSelectField, TextField } from '@7shifts/sous-chef';

const OnboardingPage1 = () => {

    const [pillselect, setPillSelect] = useState(null)
    const [text, setText] = useState(null)
    


    return (
        <main className='on-board-1'>
            <img src={sideBar} alt="sidebar" className='on-board-1__sidebar' />
            <div className='on-board-1__content'>
                <OnBoardingHeader pagination={"1/4"} progress={25} />
                <div className='on-board-1__container'>
                    <div className="on-board-1__heading">
                        <Text as="insight">What type of Restaurant is Samsara?</Text>
                        <Text as="h5">Search or select below</Text>
                    </div>
                    <div className="on-board-1__text-pill">
                        <TextField
                            onChange={setText}
                            prefix
                            placeholder="Your Restaurant Type"
                        />
                        <PillSelectField
                            name="openDays"
                            onChange={setPillSelect}
                            options={[
                                { label: 'Pub', value: 'pub' },
                                { label: 'Restaurant', value: 'restaurant' },
                                { label: 'Diner', value: 'diner' },
                                { label: 'Stand', value: 'stand' },
                                { label: 'club', value: 'Club' },
                            ]}
                            value={pillselect}
                        />
                    </div>
                    <Link to="/onboarding2" className='on-board-1__link'>
                        <Button theme="marketing" type="button" className="on-board-1__button" size='full-width'>Next</Button>
                    </Link>
                </div>
            </div>
        </main>

    );
};

export default OnboardingPage1;