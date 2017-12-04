import React from 'react';
import {get, compose} from 'lodash/fp';
import {setPayment} from './Model';

const getValueAnd = f => compose(f, get('target.value'));

export default function PaymentDetails({_localstate}) {
    const {notify2, model} = _localstate;

    const handlePaymentMethod = getValueAnd(notify2(setPayment('method')));

    return (
        <form className="Checkout_form">
            <p>
                <label>
                    <span>Payment Method</span>
                    <select onChange={handlePaymentMethod} value={model.paymentDetails.method}>
                        <optgroup label="Payment methods">
                            <option value="cookies">Cookies</option>
                            <option value="chickens">Chickens</option>
                            <option value="blueberries">Blueberries</option>
                        </optgroup>
                    </select>
                </label>
            </p>
        </form>
    );
}
