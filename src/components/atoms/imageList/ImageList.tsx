import Image from 'next/image'
import { Grid } from '@mui/material'

interface Props {
    name: string;
    image: string[];
}

export const ImageList = ({ name, image }: Props) => {
    return (
        <Grid container sx={{ cursor: "pointer", boxShadow: '2px 2px 4px #999', }}>
            {image?.map(img => (
                <Grid key={img} item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <Image
                        src={img}
                        alt={name}
                        width={200}
                        height={200}
                    />
                </Grid>
            ))
            }
        </Grid>
    )
}
