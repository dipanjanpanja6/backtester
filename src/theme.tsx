import { createMuiTheme } from "@material-ui/core"
import orange from "@material-ui/core/colors/orange"
import green from "@material-ui/core/colors/green"
import purple from "@material-ui/core/colors/purple"
import red from "@material-ui/core/colors/red"
import brown from "@material-ui/core/colors/brown"
import indigo from "@material-ui/core/colors/indigo"

const theme = createMuiTheme({
  palette: {
    primary: {
      ...green,
    },
    secondary: {
      ...indigo,
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
})

const ListPageTheme = createMuiTheme({
  palette: {
    primary: {
      ...orange,
    },
    secondary: {
      ...red,
    },
    background: { default: "#fdf7ee", paper: "#fff0db" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
})
const EmptyPageTheme = createMuiTheme({
  palette: {
    primary: {
      ...brown,
    },
    secondary: {
      ...purple,
    },
    background: { default: "#ff0", paper: "#0cc" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
})

export default theme
export { ListPageTheme, EmptyPageTheme }
