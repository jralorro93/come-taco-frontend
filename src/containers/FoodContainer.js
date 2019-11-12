import React, { useState, useEffect } from 'react';
import axios from 'axios'

import FoodCard from '../components/FoodCard'
import Category2 from '../components/Category2'

import { makeStyles } from '@material-ui/core/styles';
import{ Grid } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1
    }
}))

const FoodContainer = (props) => {
    const { classes } = useStyles()
    const [foodList, setFoodList] = useState([])
    const [categoryChoice, setCategoryChoice] = useState("")

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
    console.log(categoryChoice)
    return (
        <div className='foodContainer'>
            <Category2 handleChoice={handleChoice} categoryChoice={categoryChoice} />
            <h1>¡Come Taco!</h1>
            <Grid container>
                {foodList.filter(food => food.category.includes(categoryChoice)).map(food => (
                    <Grid item>
                        <FoodCard currentUser={props.currentUser} food={food}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default FoodContainer

// {this.state.foodsList.filter(food => food.category.includes(this.props.categoryChoice)).map(food => <FoodCard currentUser={this.props.currentUser} food={food}/>)}