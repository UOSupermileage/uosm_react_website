import { createTheme } from '@mui/material/styles';

// Bright Grey = "58595b"

const theme = createTheme({
    palette: {
        primary: {
            main: '#ec7001',
        },
        secondary: {
            main: "#231f20"
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});

export default theme;