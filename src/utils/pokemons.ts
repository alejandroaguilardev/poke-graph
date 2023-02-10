import { PokemonListResponse, SmallPokemon } from "../types";

export const pokemonsResult = (data: PokemonListResponse) => {
	const pokemons: SmallPokemon[] = [];

	for (const pokemon of data.results) {
		const arrray = pokemon.url.split("/");
		const id = arrray[arrray.length - 2];
		pokemons.push({
			...pokemon,
			id,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		});
	}
	return pokemons;
};


export const pokemonsGraphBasic = (data: PokemonListResponse) => {
	return {
		nodes: data.results?.map((pokemon, i) => ({
			id: `id${i + 1}`,
			name: pokemon.name,
			img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
			val: Number(i + 1),
		})),
		links: data.results?.map((pokemon, i) => ({
			source: `id${i + 1}`,
			target: i === 150 ? `id${1}` : `id${i + 2}`,
		})),
	};
};
