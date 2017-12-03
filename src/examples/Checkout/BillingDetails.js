import React from 'react';
import {get, compose} from 'lodash/fp';
import {setBilling, getBillingDetails} from './Model';

const getValueAndChecked = f => compose(f, get('target.checked'))
const getValueAnd = f => compose(f, get('target.value'));
const execute = x => x();

export default function ContactDetails({mvstate}) {
    const {notify, model} = mvstate;

    const handleSameAsContact =
        compose(execute, notify, getValueAndChecked(setBilling('sameAsContact')));
    const handleFirstname = compose(execute, notify, getValueAnd(setBilling('firstname')));
    const handleLastname = compose(execute, notify, getValueAnd(setBilling('lastname')));
    const handleEmail = compose(execute, notify, getValueAnd(setBilling('email')));

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
