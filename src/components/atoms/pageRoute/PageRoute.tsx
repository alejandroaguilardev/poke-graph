import { useMemo, useContext } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "@mui/material"
import { ModeContext } from '../../../context/mode/ModeContext';

interface IPage {
    page: string;
    sx?: object;
}

export const PageRoute = ({ page, sx = {} }: IPage) => {
    const router = useRouter();
    const { theme } = useContext(ModeContext);

    const memoColor = useMemo(() => theme.mode === 'dark' ? "#fff" : "#000", [theme.mode])


    return (
        <Link href={`/${page.toLocaleLowerCase()}`}>
                <Typography
                    sx={{
                        ...sx,
                        fontWeight:800,
                        color: `${router.pathname === `/${page.toLocaleLowerCase()}` ? 'primary.main' : memoColor}`
                    }}>
                    {page.toUpperCase()}
                </Typography>
        </Link>
    )
}
