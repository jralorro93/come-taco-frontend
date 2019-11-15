import React from 'react'
import withContactStyles from '../styles/Contact.style'
import { Box } from '@material-ui/core'
import feedback from '../Images/feedback.jpg'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    image: {
        maxHeight: '300px'
    }
}))

const Contact2 = (props) => {
    const classes = useStyles()
    return (
        <div>
            <div>
                <img src={feedback} alt='Feedback' className={classes.image}/>
            </div>
        </div>
    )
}
export default Contact2