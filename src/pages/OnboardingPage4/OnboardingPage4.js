import '@7shifts/sous-chef/dist/index.css';
import "./OnboardingPage4.scss"
import {Link} from "react-router-dom";
import { useState } from 'react';
import OnBoardingHeader from "../../components/OnBoardingHeader/OnBoardingHeader"
import sideBar from '../../assets/images/side-bar.png';
import {Button} from '@7shifts/sous-chef'
const OnboardingPage4 = () => {

    const [value, setValue] = useState(0);

    const adjustNumber = (change) => {
        setValue((val) => val + change);
    };

    return (
        <main className='onboarding4'>
            <img src={sideBar}
                alt="sidebar"
                className='onboarding4__sidebar'/>
            <div className='onboarding4__content'>
                <OnBoardingHeader pagination={"4/4"}
                    progress={100}/>

                <div className='onboarding4__text'>
                    <h1 className='onboarding4__title'>What’s your weekly budget?</h1>
                    <p className='onboarding4__subtitle'>This helps us recommend you a personalized schedule template made for you.</p>
                </div>
                <form className='onboarding4__form'>

                    <div className="number-input">
                        <button className="adjust-button minus"
                            onClick={
                                () => adjustNumber(-1)
                        }>-</button>
                        <input type="text"
                            value={value}
                            pattern="[0-9]*"
                            readOnly/>
                        <button className="adjust-button plus"
                            onClick={
                                () => adjustNumber(1)
                        }>+</button>
                    </div>
                    <Link to="/onboarding4" className='onboarding4__link'>
                        <Button theme="marketing" type="button" className="on-board-1__button" size='full-width'>Next</Button>
                    </Link>

                </form>
            </div>
        </main>
    );
};

export default OnboardingPage4;
