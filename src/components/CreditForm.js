import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection'
import PersonalInfo from './PersonalInfo'
import CreditInfo from './CreditInfo'
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'

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

    handleSubmit = (e, price, userId, cart) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/charges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                price: price,
                items: cart
            }).then(res => res.json())
        })
    }


    //Left off at putting in parameters for handleSubmit
    //Check props, might not need to pass as many props as before
    //Use currentUser props instead
    render() {
        console.log('this is props from CreditForm', this.props)
        let grandTotal = handleGrandTotal(this.props.shoppingCart)
        return (
            <form id='ccForm' onSubmit={(e) => this.handleSubmit(e, grandTotal, this.props.currentUser.id, this.props.shoppingCart)}>
                <PersonalInfo firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} handleChange={this.handleChange}/>
                <CreditInfo cardNum={this.state.cardNum} cv={this.state.cv} expDate={this.state.expDate} handleChange={this.handleChange}/>
                <button>Submit</button>
            </form>

        )
    }
}
export default injectStripe(CreditForm)