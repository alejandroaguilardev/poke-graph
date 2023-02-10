import pokeApi from "../api/pokemonApi";
import { PokemonResponse } from "../types/Pokemon";


export const getPokemonInfo = async (nameOrld: string) => {
	try {
		const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${nameOrld}`);

		return {
			id: data.id,
			name: data.name,
			sprites: data.sprites,
		};
	} catch (error) {
		return null;
	}
};
