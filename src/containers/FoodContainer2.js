import React, { useState, useEffect } from 'react';
import axios from 'axios'

import FoodCard from '../components/FoodCard2'

import { makeStyles } from '@material-ui/core/styles';
import{ Grid } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1
    }
}))

const FoodContainer2 = (props) => {
    const { classes } = useStyles()
    const [foodList, setFoodList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:3000/api/v1/items")
            setFoodList(result.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>¡Come Taco!</h1>
            <Grid container>
                {foodList.map(food => <FoodCard currentUser={props.currentUser} food={food}/>)}
            </Grid>
        </div>
    )
}
export default FoodContainer2