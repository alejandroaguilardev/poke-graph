import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import pokeApi from '../api/pokemonApi';
import { Main } from '../components/templates';
import { PokemonListResponse } from '../types';
import { pokemonsGraphBasic } from '../utils/pokemons';

const NoSSRForceGraph = dynamic(() => import('../Graph/ForceGraph2D/ForceGraph2D'), {
    ssr: false
});


const BasicPage = () => {
    const [pokemons, setPokemons] = useState({ nodes: [], links: [] })

    useEffect(() => {
        pokeApi.get<PokemonListResponse>("/pokemon?limit=151").then(({ data }) => {
            const basic: any = pokemonsGraphBasic(data);
            setPokemons(basic)

        })
    }, [])

    return (
        <Main title="Pokemon" description="Lista de Pokemones a elegir">
            <NoSSRForceGraph
                graphData={pokemons}
                nodeAutoColorBy="group"
                nodeCanvasObject={(node: any, ctx: any, globalScale) => {
                    const label: any = node.name;
                    const fontSize = 20 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = ctx.measureText(label).width;
                    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

                    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                    ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = node.color;
                    ctx.fillText(label, node.x, node.y);

                    node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
                }}
                nodePointerAreaPaint={(node: any, color, ctx: any) => {
                    ctx.fillStyle = color;
                    const bckgDimensions = node.__bckgDimensions;
                    bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
                }}
            />

        </Main>
    )
}


export default BasicPage;