import React from 'react';
import { TextField, IconMapMarker, Button } from '@7shifts/sous-chef';

const OnboardingPage2 = () => {

    return (
        <main>
            <div className="content__container">
                <div className="content__text">
                    <h1>Where is "Restaurant" located?</h1>
                    <p>This helps us recommend you a personalized schedule template made for you.</p>
                </div>
                <TextField
                    onBlur={function noRefCheck() { }}
                    onChange={function noRefCheck() { }}
                    onFocus={function noRefCheck() { }}
                    onKeyDown={function noRefCheck() { }}
                    placeholder="Enter your restaurant location here"
                    prefix={<IconMapMarker />}
                />
            </div>
            <Button
                size="full-width"
                theme="marketing"
                type="button"
            >
                Next
            </Button>

        </main>
    );
};

export default OnboardingPage2;