import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = {
  root: {
    flexGrow: 1
  }
};

class NavBar extends React.Component {

//Moves blue bar is NavBar depending on which tab is clicked
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab component={Link} to="/" label="Menu" />
          <Tab component={Link} to="/about" label="Our Story" />
          <Tab component={Link} to="/contact" label="Contact Us" />
          {this.props.currentUser ? (
            <Tab onClick={this.props.handleLogout} label="Logout" />
          ) : (
            <Tab component={Link} to="/login" label="Login" />
          )}
          {this.props.currentUser ? (
            <Tab component={Link} to="/shoppingcart" label={<i class="material-icons">shopping_cart</i>} />
          ) : null}
          {this.props.currentUser ? (
            null
          ) : (
            <Tab component={Link} to="/signup" label="Sign Up"/>
          )}
        </Tabs>
      </Paper>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
