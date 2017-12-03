import React from 'react';
import {create, nextStep, prevStep, hasPrevStep, hasNextStep} from './Model';
import observe from 'mvstate-react';
import ContactDetails from './ContactDetails';
import BillingDetails from './BillingDetails';
import PaymentDetails from './PaymentDetails';
import Confirm from './Confirm';
import './Checkout.css';

const steps = [
    {
        title: 'Enter Your Contact Details',
        component: ContactDetails
    },
    {
        title: 'Enter Your Billing Address',
        component: BillingDetails
    },
    {
        title: 'Select a Payment Method',
        component: PaymentDetails
    },
    {
        title: 'Confirm',
        component: Confirm
    }
];

function Checkout({mvstate}) {
    const {model, notify} = mvstate;

    const Step = steps[model.step];
    return (
        <div>
            <p>
                <strong>{Step.title}</strong>
            </p>
            <div>
                <Step.component mvstate={mvstate} />
            </div>
            <p>
                <button onClick={notify(prevStep)}
                        disabled={!hasPrevStep(model)}>Previous Step</button>
                &nbsp;
                <button onClick={notify(nextStep)}
                        disabled={!hasNextStep(model)}>Next Step</button>
            </p>
        </div>
    );
}

export default observe(create(), Checkout);
