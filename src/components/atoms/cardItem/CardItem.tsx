import { useRouter } from 'next/router';
import { Grid, Card, CardContent, Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
    id: string | number;
    name: string;
    img: string;
    width?:number;
    height?:number;
    md?:number
}

export const CardItem = ({ id, name, img, width=150, height=150, md=2 }: Props) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`)
    }
    return (
        <Grid item xs={6}  md={md} m={2} >
            <Card sx={{ cursor: "pointer", boxShadow: '2px 2px 4px #999' }} onClick={onClick}>
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Image src={img} width={width} height={height} alt={name} />
                    <Box display="flex" justifyContent="center" gap={1}>
                        <Typography>#{id}</Typography>
                        <Typography >{name}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};
