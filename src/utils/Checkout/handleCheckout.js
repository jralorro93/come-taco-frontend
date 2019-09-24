import React from 'react';
import { withRouter } from "react-router-dom"

const handleCheckout = (props) => {
    props.history.push('/checkout')
}

export default withRouter(handleCheckout)