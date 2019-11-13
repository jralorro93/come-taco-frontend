import React, { useState } from 'react'

import { Box, FormGroup, TextField, FormControl, Button, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.white,
        width: '570px',
        marginTop: '200px',
        marginLeft: '290px'
    },
    button: {
        width: '40px'
    },
    fields: {
        margin: '5px',
        width: '255px'
    },
    button: {
        marginBottom: '15px'
    }
}))

const SignupForm = (props) => {
    const classes = useStyles()
    const [ values, setValues ] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passConf: '',
        showPassword: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({...values, [name]: value})
    } 

    const handleShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    return (
        <Box className={classes.container}>
            <h1>Signup</h1>
            <FormGroup>
                <FormControl variant='outlined'>
                    <TextField 
                        label='First Name'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='firstName'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl variant='outlined'>
                    <TextField 
                        label='Last Name'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='lastName'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl variant='outlined'>
                    <TextField 
                        label='Email'
                        className={classes.fields}
                        variant='outlined'
                        multiline
                        name='email'
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
                <FormControl variant='outlined'>
                    <TextField
                        label='Password Confirmation'
                        className={classes.text}
                        type={values.showPassword ? 'text' : 'password'}
                        name='passConf'
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
                    onClick={() => props.handleSignup(values.email, values.password, values.firstName, values.lastName)}
                >Submit</Button>
            </FormGroup>
        </Box>
    )
}

export default SignupForm