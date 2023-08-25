import React from 'react';
import '@7shifts/sous-chef/dist/index.css';
import {
    Form,
    FormRow,
    TextField,
    FormFooter, Button} from '@7shifts/sous-chef'


const HomePage = () => {
    return (
        <div>
            <h1>welcome</h1>
            <Form>
                <FormRow>
                    <TextField name="firstName" label="First Name"/>
                    <TextField name="lastName" label="Last Name"/>
                </FormRow>
                <TextField name="address" label="Address"/>
                <FormFooter actions={
                    {
                        primary: <Button onClick={
                            () => {}
                        }>Save</Button>
                    }
                }/>
            </Form>
    </div>
    );
};

export default HomePage;
