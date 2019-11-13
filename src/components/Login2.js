import React, { useState } from 'react';

import { Box, FormControl, InputAdornment, IconButton, TextField, FormGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.white
    },
    button: {
        width: '40px',
        alignContent: 'centered'
    }
}))

const Login2 = (props) => {
    const classes = useStyles()
    const [ values, setValues ] = useState({
        email: '',
        password: '',
        showPassword: false
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value})
    }
    
    const handleShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    }

    const showStuff = (e, p) => {
        console.log('this is e', e)
        console.log('this is p', p)
    }
    return (
        <Box className={classes.container}>
            <h1>Login</h1>
            <FormGroup>     
                <FormControl variant="outlined">
                    <TextField 
                    variant='outlined'
                    multiline
                    name='email'
                    label="Email"
                    onChange={handleChange}
                    />
                </FormControl>
                <br/>
                <FormControl variant='outlined'>
                    <TextField 
                        variant='outlined'
                        multiline
                        name='password'
                        label='Password'
                        onChange={handleChange}
                    />
                </FormControl>
                <Button 
                    variant='contained'
                    className={classes.button}
                    onClick={ () => props.handleLogin(values.email, values.password)}
                >
                    Login
                </Button>
            </FormGroup>
        </Box>
    )
}
export default Login2