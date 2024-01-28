import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    // Your theme customization
});
const StickyFooter = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Sticky footer
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'Pin a footer to the bottom of the viewport.'}
                        {'The footer will move as the main element of the page grows.'}
                    </Typography>
                    <Typography variant="body1">Sticky footer placeholder.</Typography>
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                            My sticky footer can be found here.
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default StickyFooter;
