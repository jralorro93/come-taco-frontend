import React, { useState } from 'react';

import FoodCard from '../components/FoodCard'

import { makeStyles } from '@material-ui/core/styles';
import{ Grid } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1
    },

}))

const FoodContainer2 = () => {
    const {classes} = useStyles()
    //Converting FoodContainer into using hooks
    const [foodList, setFoodList] = useState()
    return (
        <div>
            <h1>¡Come Taco!</h1>
            <Grid container spacing={3}>
              
            </Grid>
        </div>
    )
}
export default FoodContainer2