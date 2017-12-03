import React from 'react';
import {get, compose} from 'lodash/fp';
import {setPayment} from './Model';

const getValueAnd = f => compose(f, get('target.value'));
const execute = x => x();

export default function PaymentDetails({mvstate}) {
    const {notify, model} = mvstate;
    const handlePaymentMethod = compose(execute, notify, getValueAnd(setPayment('method')));

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
