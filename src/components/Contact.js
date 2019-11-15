import React from 'react'
import { makeStyles } from '@material-ui/styles'
import bg from '../Images/cutting-board.jpg'

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundImage: `url(${bg})`
  }
}))

const Contact = (props) => {
  const classes = useStyles()
  return (
    <div>
      <div>
        <h1>Come Taco</h1>
        <h5>321 Borg Ave, Turing City, Flatiron 10010</h5>
        <h3>Phone Number:</h3>
        <h3>101-111-0100</h3>
        <h2>info@cometaco.com</h2>
        <h3>Store Hours:</h3>
        <h4>Monday Closed</h4>
        <h4>Tues-Friday   12:00am - 11:00pm</h4>
        <h4>Saturday-Sunday 11:00am - 11:00pm</h4>
      </div>
    </div>
  )
}

export default Contact;
