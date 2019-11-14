import React, { useState } from 'react';

import { Box, FormControl, InputAdornment, IconButton, TextField, FormGroup, Button } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.white,
        width: '570px',
        marginLeft: '280px',
        marginTop: '275px'
    },
    text: {
        width: '200px'
    },
    button: {
        width: '40px',
        alignContent: 'centered',
        marginBottom: '15px'
    }
}))

const Login = (props) => {
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

    const handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    return (
        <Box className={classes.container}>
            <h1>Login</h1>
            <FormGroup>    
                <FormControl variant="outlined">
                    <TextField 
                        className={classes.text}
                        variant='outlined'
                        multiline
                        name='email'
                        label="Email"
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl variant='outlined'>
                    <TextField
                        label='Password'
                        className={classes.text}
                        type={values.showPassword ? 'text' : 'password'}
                        name='password'
                        margin="normal"
                        variant='outlined'
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton
                                        onClick={handleShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
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
export default Login