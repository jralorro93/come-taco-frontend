import React, { Component } from 'react';
import {Elements} from 'react-stripe-elements';
import CreditForm from './CreditForm'

class CreditInfo extends Component {
    render() {
        return (
            <Elements>
                <CreditForm />
            </Elements>
        )
    }
}
export default CreditInfo