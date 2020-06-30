import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;

        return (
            <div>

                {palettes.map((palette) => (
                <Link to={`/palette/${palette.id}`}>
                    <p>{palette.id}</p>
                </Link>
                ))}

                
            </div>
        )
    }
}
