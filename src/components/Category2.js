import React, { useState } from 'react';
import withCategoryStyles from '../styles/Category.style'

import { Paper, Tabs, Tab} from '@material-ui/core'

const Category2 = (props) => {
    const { classes } = props
    const [value, setValue] = useState(0)
    const categoryList = ["appetizers", "main", "desserts", "drinks"]

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
                {categoryList.map(category => (
                    <Tab label={category} onClick={() => props.handleChoice(category)}/>
                ))}
            </Tabs>
        </Paper>
    )
}

export default withCategoryStyles(Category2)