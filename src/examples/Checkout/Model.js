import {curry, pick} from 'lodash/fp';

export const create = () => ({
    step: 0,
    contactDetails: {
        firstname: '',
        lastname: '',
        email: '',
        contactMethod: 'phone'
    },
    billingDetails: {
        sameAsContact: false,
        firstname: '',
        lastname: '',
        email: ''
    },
    paymentDetails: {
        method: 'cookies'
    }
});

export const nextStep = model => {
    if (model.step < 3) {
        return {...model, step: model.step + 1};
    } else {
        return {...model};
    }
};

export const prevStep = model => {
    if (model.step > 0) {
        return {...model, step: model.step - 1};
    } else {
        return {...model};
    }
};

export const hasPrevStep = model => model.step > 0;
export const hasNextStep = model => model.step < 3;

export const setValue = curry((type, key, value, model) => ({
    ...model, [type]: {...model[type], [key]: value}
}));

export const setContact = setValue('contactDetails');
export const setBilling = setValue('billingDetails');
export const setPayment = setValue('paymentDetails');

export const getBillingDetails = model => {
    if (model.billingDetails.sameAsContact) {
        return pick(['firstname', 'lastname', 'email'], model.contactDetails);
    } else {
        return {
            firstname: model.billingDetails.firstname,
            lastname: model.billingDetails.lastname,
            email: model.billingDetails.email
        };
    }
};

export const getFinalModel = (model) => {
    return {
        contactDetails: model.contactDetails,
        billingDetails: getBillingDetails(model),
        paymentDetails: model.paymentDetails
    };
};
