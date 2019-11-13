import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'sans-serif'
  },
  palette: {
    primary: {
        light: '#63ccff',
        main: '#009be5',
        dark: '#101318',
        contrastText: '#fff',
    }
  },
  overrides: {
    MuiListItem: {
      divider: {
        borderBottom: '1px solid #404854'
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0
      }
    },
    MuiFormGroup: {
      root: {
        alignItems: 'center'
      }
    }
  }
})
export default theme