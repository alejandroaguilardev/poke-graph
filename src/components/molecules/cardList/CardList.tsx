import { Grid } from "@mui/material";
import { SmallPokemon } from "../../../types";
import { CardItem } from "../../atoms";

interface Props {
    pokemons: SmallPokemon[];
}

export const CardList = ({ pokemons }: Props) => {

    return (
        <Grid container >
            {pokemons?.map(({ id, name, img }) => (
                <CardItem key={id} id={id} name={name} img={img} />
            ))}
        </Grid>
    );
};
