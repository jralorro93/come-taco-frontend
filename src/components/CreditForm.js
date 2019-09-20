import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';

class CreditForm extends Component {
    render() {
        console.log('this is props from CreditForm', this.props)
        return (
            <div>Hi from CreditForm</div>
        )
    }
}
export default CreditForm