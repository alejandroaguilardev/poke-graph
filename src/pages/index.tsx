import { GetStaticProps } from 'next';
import pokeApi from '../api/pokemonApi';
import { CardList } from '../components/molecules';
import { Main } from '../components/templates';
import { SmallPokemon, PokemonListResponse } from '../types';
import { pokemonsResult } from '../utils/pokemons';

interface Props {
  pokemons: SmallPokemon[];
}
const HomePage = ({ pokemons }: Props) => {

  return (
    <Main title="Pokemon" description="Lista de Pokemones a elegir">
      <CardList pokemons={pokemons} />
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = pokemonsResult(data);
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
