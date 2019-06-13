import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


const styles = theme => ({
  card: {
    maxWidth: 200,
    float: "left",
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  }
});

//The Current User's cart
 class ItemCard extends Component {
  render() {
    const foodPrice = "$" + this.props.food.price
    const { classes } = this.props
    return(
      <Card className={classes.card}>
        <CardHeader title={this.props.food.name} />
        <CardMedia
          className={classes.media}
          image={this.props.food.imgURL}
          title={this.props.food.name}
        />
        <CardContent>
          <Typography component="p">
            {this.props.food.description}
            <p className="price" >{foodPrice}</p>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Delete" onClick={(event) => this.props.handleDelete(this.props.food)}>
            <i class="material-icons">remove_shopping_cart</i>
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemCard);
// <div>
// <h3>{this.props.food.name}</h3>
// <h5>{this.props.food.price}</h5>
// <h6 onClick={() => this.props.handleDelete(this.props.food)}>Remove</h6>
// </div>
