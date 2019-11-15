import React from 'react'

import { makeStyles } from '@material-ui/styles'

import bg from '../Images/cutting-board.jpg'

const useStyles = makeStyles(theme => ({
    bg: {
        backgroundImage: `url(${bg})`
    }
}))


const Contact2 = () => {
    const classes = useStyles()
    return (
        <div>

        </div>
    )
}
export default Contact2