import React from 'react'
import {withStyles} from '@material-ui/styles'


const styles = {
    main : {
        backgroundColor: '#d7d7d7',

        "& title": {
            color: "red"
        }
    },
}

function MiniPaletteList(props) {

    const {classes} = props;

    return (
        <div>
            <div className={classes.main}>
                <h1>MiniPaletteList func</h1>
                <span className={classes.title}>this is span</span>
            </div>


            <h1>antoher</h1>
        </div>
    )
}

export default withStyles(styles)(MiniPaletteList);