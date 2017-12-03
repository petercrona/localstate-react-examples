import React from 'react';

import {getFinalModel, getBillingDetails} from './Model';

export default function ContactDetails({mvstate}) {
    const {model} = mvstate;

    const alertModel = () => window.alert(JSON.stringify(getFinalModel(model)));
    const billingDetails = getBillingDetails(model);

    return (
        <div className="Checkout_Confirm">
            <strong>Contact Details</strong>
            <ul>
                <li>
                    <span>Firstname</span>
                    <span>{model.contactDetails.firstname}</span>
                </li>
                <li>
                    <span>Lastname</span>
                    <span>{model.contactDetails.lastname}</span>
                </li>
                <li>
                    <span>Email</span>
                    <span>{model.contactDetails.email}</span>
                </li>
                <li>
                    <span>Contact Method</span>
                    <span>{model.contactDetails.contactMethod}</span>
                </li>
            </ul>

            <strong>Billing Details</strong>
            <ul>
                <li>
                    <span>Firstname</span>
                    <span>{billingDetails.firstname}</span>
                </li>
                <li>
                    <span>Lastname</span>
                    <span>{billingDetails.lastname}</span>
                </li>
                <li>
                    <span>Email</span>
                    <span>{billingDetails.email}</span>
                </li>
            </ul>

            <strong>Payment Details</strong>
            <ul>
                <li>
                    <span>Method</span>
                    <span>{model.paymentDetails.method}</span>
                </li>
            </ul>

            <button className="Checkout_Confirm_Buy" onClick={alertModel}>Buy</button>
        </div>
    );
}
