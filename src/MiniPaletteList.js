import React from 'react'
import {withStyles} from '@material-ui/styles'


const styles = {
    root: {
        background: 'white',
        borderRadius: '5px',
        padding: '.5rem',
        position: "relative",
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        background: '#e9e9e9',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
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
    },
    miniColorBox: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginTop: '-3.5px'
    }
}

function MiniPaletteList(props) {

    const {classes,paletteName,emoji,colors,linkToPalette} = props;
    const miniColorBox = colors.map((color) => {
         return <div className={classes.miniColorBox} style={{backgroundColor: color.color}} key={color.name}></div>
    })

    return (
        <div>
            <div className={classes.root} onClick={linkToPalette}>
                <div className={classes.colors}>
                    {miniColorBox}
                </div>
                <h4 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h4>  
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPaletteList);