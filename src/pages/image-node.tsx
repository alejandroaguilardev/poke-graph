import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import pokeApi from '../api/pokemonApi';
import { MainGraph } from '../components/templates';
import { PokemonListResponse } from '../types';
import { pokemonsGraphBasic } from '../utils/pokemons';
import * as THREE from 'three';

const NoSSRForceGraph = dynamic(() => import('../Graph/ForceGraph3D/ForceGraph3D'), {
    ssr: false
});

const ImageNodePage = () => {
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
                nodeThreeObject={({ img }: any) => {
                    console.log(img)
                    const imgTexture = new THREE.TextureLoader().load(img);
                    const material = new THREE.SpriteMaterial({ map: imgTexture });
                    const sprite:any = new THREE.Sprite(material);
                    sprite.scale.set(12, 12);

                    return sprite;
                }}
            />

        </MainGraph>
    )
}


export default ImageNodePage;