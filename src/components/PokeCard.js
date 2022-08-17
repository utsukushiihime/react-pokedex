import React from 'react';
import styled from 'styled-components';
import { padToThree, PokeAPI } from '../utils/constants';

const PokeCardWrapper = styled.div`
	background-color: #fff;
	width: 250px;
	padding: 10px;
	margin: 1rem;
	text-align: center;
	border-radius: 10px;
	-webkit-box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
	-moz-box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
	box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
	&.pokecard-title {
		font-size: 1.5rem;
		font-weight: bold;
	}
	&.pokecard-image {
		margin-top: 1rem;
	}
	&.pokecard-data {
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}
	&.pokecard img {
		transition: all ease 0.5s;

		&:hover {
			transform: scale(1.1);
		}
	}
`;

const PokeCard = (props) => {
	return (
		<>
			<PokeCardWrapper>
				<h1 className="pokecard-title">{props.name}</h1>
				<div className="pokecard-image">
					<img
						src={`${PokeAPI}${padToThree(props.id)}.png`}
						alt={props.name}
					/>
				</div>
				<div className="pokecard-data">Type: {props.type}</div>
				<div className="pokecard-data">
					EXP: {props.base_experience}
				</div>
			</PokeCardWrapper>
		</>
	);
};

export default PokeCard;
