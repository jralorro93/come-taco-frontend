import React from 'react';

const CreditInfo = (props) => {
    return (
        <div>
            <label>
                Card Number: 
                <input type='text' value={props.cardNum} name='cardNum' onChange={props.handleChange} placeholder='1234567891234567'/>
            </label>
            <label>
                CV:
                <input type='text' value={props.cv} name='cv' onChange={props.handleChange} placeholder='333'/>
            </label>
            <label>
                Expiration Date: 
                <input type='text' value={props.expDate} name='expDate' onChange={props.handleChange} placeholder='02/20'/>
            </label>
        </div>
    )
}
export default CreditInfo