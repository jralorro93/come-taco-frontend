import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    form: {
        backgroundColor: theme.palette.common.white,
        marginTop: '200px',
        borderStyle: 'solid',
        borderWidth: '3px'
    }
}))

const CashOrCC = (props) => {
    const classes = useStyles()
    return (
        <div >
            <FormControl className={classes.form}>
                <FormLabel>Select Payment Method</FormLabel>
                <RadioGroup>
                    <FormControlLabel onClick={props.handleChoice} value="Cash" control={<Radio />} label="Cash" />
                    <FormControlLabel onClick={props.handleChoice} value="Card" control={<Radio />} label="Card" />
                </RadioGroup>
                <Button onClick={props.handleActivePage} variant='contained' color='primary'>Go</Button>
            </FormControl>
        </div>
    )
}
export default CashOrCC