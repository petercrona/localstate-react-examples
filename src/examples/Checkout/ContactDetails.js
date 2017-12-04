import React from 'react';
import {get, compose} from 'lodash/fp';
import {setContact} from './Model';

const getValueAnd = f => compose(f, get('target.value'));

export default function ContactDetails({mvstate}) {
    const {notify2, model} = mvstate;

    const handleFirstname = getValueAnd(notify2(setContact('firstname')));
    const handleLastname = getValueAnd(notify2(setContact('lastname')));
    const handleEmail = getValueAnd(notify2(setContact('email')));
    const handleContactMethod = getValueAnd(notify2(setContact('contactMethod')));

    return (
        <form className="Checkout_form">
            <p>
                <label>
                    <span>Firstname</span>
                    <input type="text"
                           value={model.contactDetails.firstname}
                           onChange={handleFirstname} />
                </label>
            </p>
            <p>
                <label>
                    <span>Lastname</span>
                    <input type="text"
                           value={model.contactDetails.lastname}
                           onChange={handleLastname} />
                </label>
            </p>
            <p>
                <label>
                    <span>Email</span>
                    <input type="text"
                           value={model.contactDetails.email}
                           onChange={handleEmail} />
                </label>
            </p>
            <p>
                <label>
                    <span>Contact Method</span>
                    <select value={model.contactDetails.contactMethod}
                            onChange={handleContactMethod}>
                        <option value="phone">Phone</option>
                        <option value="pigeon">Pigeon</option>
                        <option value="email">Email</option>
                    </select>
                </label>
            </p>
        </form>
    );
}
