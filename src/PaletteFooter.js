import React from 'react';

const PaletteFooter = (props) => {
    return ( 
        <footer className="Palette-footer">
        {props.paletteName}
        <span className="Palette-emoji">{props.emoji}</span>
      </footer>
     );
}
 
export default PaletteFooter;