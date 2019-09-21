import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection'

class CreditForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        console.log('this is props from CreditForm', this.props.stripe)
        return (
            <form id='ccForm'>
                <label>
                    First name:
                    <input type='text' name='firstName' value={this.state.firstName} placeholder='John' onChange={this.handleChange}/>
                </label>
                <label>
                    Last name:
                    <input type='text' name='lastName' value={this.state.lastName} placeholder='Doe' onChange={this.handleChange}/>
                </label>
                <label>
                    Email
                    <input type='email' name='email' value={this.state.email} placeholder='JohnDoe@email.com' onChange={this.handleChange}/>
                </label>
            </form>

        )
    }
}
export default injectStripe(CreditForm)