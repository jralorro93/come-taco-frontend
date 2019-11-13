import React, { useState } from 'react';
import withCategoryStyles from '../styles/Category.style'

import { Paper, Tabs, Tab} from '@material-ui/core'

const Category = (props) => {
    const { classes } = props
    const [value, setValue] = useState(0)
    const categoryList = ["all","appetizers", "main", "desserts", "drinks"]

    const handleChangeValue = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <Paper className={classes.root}>
            <Tabs 
                value={value}
                onChange={handleChangeValue}
                indicatorColor='secondary'
                textColor='secondary'
                centered
                className={classes.tabs}
            >
                {categoryList.map(category => (
                    <Tab className={classes.tab} label={category} onClick={() => props.handleChoice(category)}/>
                ))}
            </Tabs>
        </Paper>
    )
}

export default withCategoryStyles(Category)