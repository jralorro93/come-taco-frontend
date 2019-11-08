import React, { useState } from 'react';
import withCategoryStyles from '../styles/Category.styles'
import { useStyles } from '@material-ui/styles'

import { Paper, Tabs, Tab} from '@material-ui/core'

const Category2 = (props) => {
    const { classes } = useStyles()
    const [value, setValue] = useState(0)

    const categoryList = ["Appetizers", "Main", "Desserts", "Drinks"]

    const handleChangeValue = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <Paper className={classes.root}>
            <Tabs 
                value={value}
                onChange={handleChangeValue}
                indicatorColor='primary'
                textColor='primary'
                centered
            >


            </Tabs>
        </Paper>
    )
}

export default withCategoryStyles(Category2)