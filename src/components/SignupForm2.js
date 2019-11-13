import React, { useState } from 'react'

import { Box, FormGroup, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.white
    },
    button: {
        width: '40px'
    },
    fields: {
        margin: '5px'
    }
}))

const SignupForm2 = (props) => {
    const classes = useStyles()
    const [ values, setValues ] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passConf: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({...values, [name]: value})
    } 

    return (
        <Box className={classes.container}>
            <h1>Signup</h1>
            <FormGroup>
                <FormControl>
                    <TextField 
                        label='First Name'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='firstName'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField 
                        label='Last Name'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='lastName'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField 
                        label='Email'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='email'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField 
                        label='Password'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='password'
                        type='password'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField 
                        label='Password Confirmation'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='passConf'
                        onChange={handleChange}
                    />
                </FormControl>
                <Button
                    variant='contained'
                    className={classes.button}
                >Submit</Button>
            </FormGroup>
        </Box>
    )
}

export default SignupForm2