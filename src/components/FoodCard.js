import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import handleAddToCart from '../utils/Cart/handleAddToCart'

const styles = theme => ({
  card: {
    maxWidth: 200,
    float: "right",
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



class FoodCard extends React.Component {
  render() {
    const foodPrice = "$" + this.props.food.price
    const { classes } = this.props;
    console.log('this is props from foodCard', this.props)
    return (
      <Card className={classes.card}>
        <CardHeader title={this.props.food.name} />
        <CardMedia
          className={classes.media}
          image={this.props.food.imgURL}
          title={this.props.food.name}
        />
        <CardContent>
          <Typography component="p">
            {this.props.food.description}<br/>
          <p className="price" >{foodPrice}</p>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={() => handleAddToCart(this.props.currentUser.user.id, this.props.food.id)}>
            <i class="material-icons">add_shopping_cart</i>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

FoodCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FoodCard);
