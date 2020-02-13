import React, {useState} from 'react'
import withContactStyles from '../styles/Contact.style'
import { TextField, FormGroup, FormControl } from '@material-ui/core'

const Contact2 = (props) => {
    const { classes } = props
    const [ values, setValues ] = useState({
        name: '',
        email: ''
    })


    const handleOnChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]:value})
        console.log('this is values', values)
    }

    return (
        <div>
            <FormGroup>
                <FormControl variant='outlined'>
                    <TextField
                        variant='outlined'
                        multiline
                        name='name'
                        label='Name'
                        onChange={handleOnChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        variant='outlined'
                        multiline
                        name='email'
                        label='Email'
                        onChange={handleOnChange}
                    />
                </FormControl>
            </FormGroup>
        </div>
    )
}

export default withContactStyles(Contact2)