import React from 'react'
import {withStyles} from '@material-ui/styles'


const styles = {
    root: {
        background: 'white',
        borderRadius: '5px',
        padding: '.5rem',
        position: "relative",
        overflow: 'hidden',
        border: '1px solid #d7d7d7',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        background: 'grey',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: '1.5rem'
    }
}

function MiniPaletteList(props) {

    const {classes,paletteName,id,emoji} = props;

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.colors} />
                <h4 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h4>  
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPaletteList);