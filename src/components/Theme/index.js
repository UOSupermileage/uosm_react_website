import { createTheme } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: purple,
    },
    status: {
        danger: orange[500],
    },
});

export default theme;