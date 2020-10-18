import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO Import Pokemon from : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

//  The source below must be padded with 2 zeros
// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png


ReactDOM.render(

    <App />,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
