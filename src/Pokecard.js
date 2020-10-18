import React, { Component } from 'react';
import './Pokecard.css';
const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render () {
        let imgSrc = `${PokeAPI}${this.props.id}.png`;
        return (
            
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alg={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        )
    }
}


export default Pokecard;


