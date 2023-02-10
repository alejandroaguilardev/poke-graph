import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Typography, Grid, Box } from '@mui/material';

export const Logotype = () => {
    return (
        <Link href={"/"}>
            <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
                    alt="Icono"
                    width={70}
                    height={70}
                />

                <Typography sx={{
                    mr: 2,
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontSize: 20,

                }} >
                    P
                    <Box component={"span"} sx={{ fontSize: 15 }}  >okémon!</Box>
                </Typography>
            </Grid>
        </Link >
    )
}
