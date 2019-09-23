import React from 'react';

const PersonalInfo = (props) => {
    return(
        <div>
            <label>
                First name:
                <input type='text' name='firstName' value={props.firstName} placeholder='John' onChange={props.handleChange}/>
            </label>
            <label>
                Last name:
                <input type='text' name='lastName' value={props.lastName} placeholder='Doe' onChange={props.handleChange}/>
            </label>
            <label>
                Email
                <input type='email' name='email' value={props.email} placeholder='JohnDoe@email.com' onChange={props.handleChange}/>
            </label>
        </div>
    )
}
export default PersonalInfo