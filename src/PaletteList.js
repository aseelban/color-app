import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPaletteList from './MiniPaletteList';


export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;

        return (
            <div>
               
                {palettes.map((palette) => (
                     <MiniPaletteList {...palette}/> 
                ))}

                
            </div>
        )
    }
}
