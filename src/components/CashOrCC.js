import React from 'react';

const CashOrCC = (props) => {
    console.log('this is props', props)
    return (
        <div>
            <form onSubmit={props.handleActivePage}>
                <h3>Select payment</h3>
                <input type='radio' onClick={props.handleChoice} value='Cash' name='paymentOption'/>
                <label>Cash</label>
                <input type='radio' onClick={props.handleChoice} value='Card' name='paymentOption'/>
                <label>Card</label>
                <br/>
                <button>Go</button>
            </form>
        </div>
    )
}
export default CashOrCC