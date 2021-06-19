import { createMuiTheme } from "@material-ui/core"
import lightGreen from "@material-ui/core/colors/lightGreen"
import orange from "@material-ui/core/colors/orange"
import green from "@material-ui/core/colors/green"
import red from "@material-ui/core/colors/red"

const theme = createMuiTheme({
  palette: {
    primary: {
      ...lightGreen,
    },
    secondary: {
      ...orange,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
})

const ListPageTheme = createMuiTheme({
  palette: {
    primary: {
      ...green,
    },
    secondary: {
      ...red,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
})

export default theme
export { ListPageTheme }
