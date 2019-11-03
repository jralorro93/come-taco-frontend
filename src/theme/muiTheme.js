import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
            contrastText: '#fff',
        },
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