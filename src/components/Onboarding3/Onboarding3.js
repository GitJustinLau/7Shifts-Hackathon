import "./Onboarding3.scss"
import '@7shifts/sous-chef/dist/index.css';

const Onboarding3 = () => {
    return (
        <main className='onboarding3'>
            <div className='onboarding3__text'>
                <h1 className='onboarding3__title'>When do you operate?</h1>
                <p className='onboarding3__subtitle'>This helps us recommend you a personalized schedule template made for you.</p>
            </div>
            <form className='onboarding3__form'>
                <div className="onboarding3__form-content">
                    <div className='onboarding3__weekday-container'>
                        <h1 className="onboarding3__name">Weekdays</h1>
                        <label className="onboarding3__label">
                            Open
                            <input className="onboarding3__weekday" name="weekday_open" placeholder="9:00AM"/>
                        </label>
                        <label className="onboarding3__label">
                            Close
                            <input className="onboarding3__weekday" name="weekday_close" label="Close" placeholder="9:00AM"/>
                        </label>
                    </div>
                    <div className='onboarding3__weekend-container'>
                        <h1 className="onboarding3__name">Weekend</h1>
                        <label className="onboarding3__label">Open
                            <input className='onboarding3__weekend' name="weekend_open" label="Open" placeholder="9:00AM"/>
                        </label>
                        <label className="onboarding3__label">Close
                            <input className='onboarding3__weekend' name="weekend_close" label="Close" placeholder="9:00AM"/>
                        </label>
                    </div>
                </div>

                <button className="onboarding3__button">
                    Next
                </button>

            </form>
        </main>
    );
};

export default Onboarding3;
