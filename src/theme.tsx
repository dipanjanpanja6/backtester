import { createMuiTheme } from "@material-ui/core"
import orange from "@material-ui/core/colors/orange"
import green from "@material-ui/core/colors/green"
import skyBlue from "@material-ui/core/colors/cyan"
import red from "@material-ui/core/colors/red"
import brown from "@material-ui/core/colors/brown"
import indigo from "@material-ui/core/colors/indigo"

const theme = createMuiTheme({
  palette: {
    primary: {
      ...green,
    },
    secondary: {
      ...orange,
    },
  },
  typography: {
    fontFamily: "'Dancing Script', cursive",
  },
})

const ListPageTheme = createMuiTheme({
  palette: {
    primary: {
      ...red,
    },
    secondary: {
      ...skyBlue,
    },
    background: { default: "#ffbdbd", paper: "#eee" },
  },
  typography: {
    fontFamily: "'Dancing Script', cursive",
  },
})
const EmptyPageTheme = createMuiTheme({
  palette: {
    primary: {
      ...brown,
    },
    secondary: {
      ...indigo,
    },
    background: { default: "#ff0", paper: "#0cc" },
  },
  typography: {
    fontFamily: "'Dancing Script', cursive",
  },
})

export default theme
export { ListPageTheme, EmptyPageTheme }
