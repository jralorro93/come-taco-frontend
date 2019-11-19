import React, { useState, useEffect } from 'react';
import axios from 'axios'

import FoodCard from '../components/FoodCard'
import Category from '../components/Category'

import { makeStyles } from '@material-ui/core/styles';
import{ Grid } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    container: {
        border: '2px solid black',
        maxWidth: '925px',
        marginLeft: '125px',
        marginRight: '125px',
        marginBottom: '100px',
        padding: '20px',
        backgroundColor: "#754F41"
    },
    header: {
        color: theme.palette.common.white
    }
}))

const FoodContainer = (props) => {
    const classes = useStyles()
    const [foodList, setFoodList] = useState([])
    const [categoryChoice, setCategoryChoice] = useState("all")

    const handleChoice = (newValue) => {
        setCategoryChoice(newValue)
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:3000/api/v1/items")
            setFoodList(result.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Category handleChoice={handleChoice} categoryChoice={categoryChoice} />
            <h1 className={classes.header}>¡Come Tacos!</h1>
            <Grid container className={classes.container}>
                { categoryChoice === 'all' ? ( foodList.map(food => (
                    <Grid item>
                        <FoodCard currentUser={props.currentUser} food={food}/>
                    </Grid>))) : ( foodList.filter(food => food.category.includes(categoryChoice)).map(food => (
                    <Grid item>
                        <FoodCard currentUser={props.currentUser} food={food}/>
                    </Grid>
                )))}
            </Grid>
        </div>
    )
}
export default FoodContainer

// {this.state.foodsList.filter(food => food.category.includes(this.props.categoryChoice)).map(food => <FoodCard currentUser={this.props.currentUser} food={food}/>)}