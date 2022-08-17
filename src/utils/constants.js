export const padToThree = (number) =>
	number <= 999 ? `00${number}`.slice(-3) : number;

export const PokeAPI =
	'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
