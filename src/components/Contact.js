import React, {useState} from 'react'
import withContactStyles from '../styles/Contact.style'
import { TextField, FormGroup, FormControl, Typography, Button} from '@material-ui/core'

const Contact = (props) => {
    const { classes } = props
    const [ values, setValues ] = useState({
        name: '',
        email: '',
        feedback: ''
    })


    const handleOnChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]:value})
        console.log('this is values', values)
    }

    return (
        <div className={classes.container}>
            <Typography variant='h1' gutterBottom>Give us your feedback! We would love to hear it!</Typography>
            <FormGroup className={classes.formGroup}>
                <FormControl className={classes.form}>
                    <TextField
                        variant='outlined'
                        multiline
                        name='name'
                        label='Name'
                        onChange={handleOnChange}
                    />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        variant='outlined'
                        multiline
                        name='email'
                        label='Email'
                        onChange={handleOnChange}
                    />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl className={classes.form}>
                    <TextField
                        variant='outlined'
                        multiline
                        name='feedback'
                        label='Feedback'
                        onChange={handleOnChange}
                        rows='9'
                        // color='secondary'
                    />
                </FormControl>
            </FormGroup>
            <Button variant='contained' color='primary'>Send</Button>
        </div>
    )
}

export default withContactStyles(Contact)