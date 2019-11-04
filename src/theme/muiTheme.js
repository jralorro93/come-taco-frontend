import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#101318',
            contrastText: '#fff',
        },
        //Still need to understand below
        overrides: {
            MuiDrawer: {
              paper: {
                background: '#18202c',
              },
            },
          },
    }
})
export default theme