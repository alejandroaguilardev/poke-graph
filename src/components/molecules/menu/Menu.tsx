import { Toolbar, Box } from '@mui/material'
import { Logotype, Mode, PageRoute } from '../../atoms'

interface Props {
    pages: string[]
}

export const Menu = ({ pages }: Props) => {
    return (
        <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between', mt: { xs: 1, sm: 0.5 }, mb: { xs: 0.5, sm: 0 } }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Logotype />
                <Mode />
            </Box>
            <Box sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: '2rem',
            }}>
                {pages.map((page: string) => (
                    <PageRoute page={page} key={page} />
                ))}
            </Box>
        </Toolbar >
    )
}
