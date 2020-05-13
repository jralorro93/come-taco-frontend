import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.white,
        height: '500px',
        width: '500px',

    },
    image: {

    }
}))

const CashCheckoutContainer = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>Hi from CashCheckout</div>
    )
}
export default CashCheckoutContainer