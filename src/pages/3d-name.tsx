import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import pokeApi from '../api/pokemonApi';
import { MainGraph } from '../components/templates';
import { PokemonListResponse } from '../types';
import { pokemonsGraphBasic } from '../utils/pokemons';
import threeSpritetext from 'three-spritetext';

const NoSSRForceGraph = dynamic(() => import('../Graph/ForceGraph3D/ForceGraph3D'), {
    ssr: false
});


const DnamePage = () => {
    const [pokemons, setPokemons] = useState({ nodes: [], links: [] })

    useEffect(() => {
        pokeApi.get<PokemonListResponse>("/pokemon?limit=151").then(({ data }) => {
            const basic: any = pokemonsGraphBasic(data);
            setPokemons(basic)

        })
    }, [])

    return (
        <MainGraph title="Pokemon" description="Lista de Pokemones a elegir">
            <NoSSRForceGraph
                graphData={pokemons}
                nodeThreeObject={(node: any) => {
                    const sprite = new threeSpritetext(node.name);
                    sprite.color = "black";
                    sprite.textHeight = 10;
                    sprite.backgroundColor="white"
                    sprite.padding=5

                    return sprite;
                }}
            />
        </MainGraph>
    )
}


export default DnamePage;