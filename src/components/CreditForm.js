import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection'
import PersonalInfo from './PersonalInfo'
import CreditInfo from './CreditInfo'

class CreditForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        cardNum: '',
        cv: '',
        expDate: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log('this is props from CreditForm', this.props.stripe)
        return (
            <form id='ccForm'>
                <PersonalInfo firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} handleChange={this.handleChange}/>
                <CreditInfo cardNum={this.state.cardNum} cv={this.state.cv} expDate={this.state.expDate} handleChange={this.handleChange}/>
            </form>

        )
    }
}
export default injectStripe(CreditForm)