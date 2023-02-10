import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Grid } from "@mui/material";
import pokeApi from "../../api/pokemonApi";
import { Main } from "../../components/templates";
import { getPokemonInfo } from "../../utils/getPokemonInfo";
import { PokemonResponse } from "../../types/Pokemon";
import { PokemonListResponse } from "../../types";
import { CardItem, ImageList } from "../../components/atoms";

interface Props {
    pokemon: PokemonResponse;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const { id, name } = pokemon;

    return (
        <Main title={pokemon.name} description="Pokemon">
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:"80vh" }}>
                <Grid item xs={12} sm={6} >
                    <CardItem
                        id={id}
                        name={name}
                        img={pokemon.sprites?.other?.dream_world.front_default || "/no-image.png"}
                        width={500}
                        height={400}
                        md={12}
                    />

                </Grid>

                <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <ImageList
                        name={name}
                        image={[
                            pokemon.sprites.front_default,
                            pokemon.sprites.back_default,
                            pokemon.sprites.front_shiny,
                            pokemon.sprites.back_shiny
                        ]}
                    />
                </Grid>
            </Grid>
        </Main>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

    return {
        paths: data.results.map((value) => ({
            params: { name: value.name },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };

    const pokemon = await getPokemonInfo(name);
    if (!pokemon) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { pokemon },
    };
};
export default PokemonPage;
