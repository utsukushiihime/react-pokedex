import React, { Component } from 'react';
import PokeCard from './components/PokeCard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		let title;
		title = this.props.isWinner ? (
			<h1 className="Pokedex-winner">Winning Hand</h1>
		) : (
			<h1 className="Pokedex-loser">Losing Hand</h1>
		);
		return (
			<div className="Pokedex">
				{title}
				<h4>Total Experience: {this.props.exp}</h4>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) => (
						<PokeCard
							key={p.id}
							id={p.id}
							name={p.name}
							type={p.type}
							base_experience={p.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
