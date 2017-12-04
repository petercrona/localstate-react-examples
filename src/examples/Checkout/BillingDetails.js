import React from 'react';
import {get, compose} from 'lodash/fp';
import {setBilling, getBillingDetails} from './Model';

const getValueAnd = f => compose(f, get('target.value'));

export default function ContactDetails({mvstate}) {
    const {notify2, model} = mvstate;

    const handleSameAsContact = compose(
        notify2(setBilling('sameAsContact')), get('target.checked')
    );
    const handleFirstname = getValueAnd(notify2(setBilling('firstname')));
    const handleLastname = getValueAnd(notify2(setBilling('lastname')));
    const handleEmail = getValueAnd(notify2(setBilling('email')));

    const billingDetails = getBillingDetails(model);

    return (
        <form className="Checkout_form">
            <p>
                <label className="Checkout_form_label-checkbox">
                    <span>Same as contact details</span>
                    <input type="checkbox"
                           onChange={handleSameAsContact}
                           checked={model.billingDetails.sameAsContact} />
                </label>
            </p>
            <p>
                <label>
                    <span>Firstname</span>
                    <input type="text"
                           disabled={model.billingDetails.sameAsContact}
                           onChange={handleFirstname}
                           value={billingDetails.firstname} />
                </label>
            </p>
            <p>
                <label>
                    <span>Lastname</span>
                    <input type="text"
                           disabled={model.billingDetails.sameAsContact}
                           onChange={handleLastname}
                           value={billingDetails.lastname}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Email</span>
                    <input type="text"
                           disabled={model.billingDetails.sameAsContact}
                           onChange={handleEmail}
                           value={billingDetails.email}/>
                </label>
            </p>
        </form>
    );
}
