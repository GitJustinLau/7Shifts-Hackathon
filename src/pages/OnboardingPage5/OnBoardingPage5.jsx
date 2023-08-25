import sideBar from '../../assets/images/side-bar.png';
import logo from '../../assets/images/app-logo-round.png';
import { Text, Button, PillSelectField, TextField } from '@7shifts/sous-chef';
import './OnBoardingPage5.scss';
import schedule from '../../assets/images/Schedule Image Thing.jpg';
import { useState } from 'react';

const OnBoardingPage5 = () => {
    const [recommended, setRecommended] = useState(null)

    return (
        <main className="ob5">
            <img src={sideBar} alt="sidebar" className="ob5__sidebar" />
            <div className="ob5__container">
                <header className="ob5__header">
                    <img src={logo} alt="logo" className='ob5__logo' />
                    <Text as="h2">MyRestaurant</Text>
                </header>
                <section className='ob5__content'>
                    <Text as="insight">Choose your schedule</Text>
                    <div className="ob5__recommended">
                        <Text as="h4">Recommended</Text>
                        <PillSelectField
                            name="openDays"
                            onChange={setRecommended}
                            options={[
                                {
                                    label: 'Budget Friendly',
                                    value: 'budget_friendly'
                                },
                                {
                                    label: 'Equal Skills Distribution',
                                    value: 'equal_skills_distribution'
                                },
                                {
                                    label: 'Weekend Intensive',
                                    value: 'weekend_intensive'
                                },
                                {
                                    label: 'Student Friendly',
                                    value: 'student_friendly'
                                }
                            ]}
                            value={recommended}
                        />
                    </div>
                    <img src={schedule} alt="schedule" className="ob5__schedule" />
                </section>
            </div>

        </main>
    )
}

export default OnBoardingPage5;