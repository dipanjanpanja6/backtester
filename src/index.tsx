import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ApolloProvider } from "@apollo/client"
import client from "./services/apollo"
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme"
import { SnackbarProvider } from "notistack"
import { IconButton } from "@material-ui/core"
import { Cancel } from "@material-ui/icons"

const NotistackComponent = () => {
  const notistackRef = React.useRef<SnackbarProvider>(null)
  const onClickDismiss = (key: string | number) => () => notistackRef.current?.closeSnackbar(key)

  return (
    <SnackbarProvider
      maxSnack={3}
      ref={notistackRef}
      action={key => (
        <IconButton onClick={onClickDismiss(key)}>
          <Cancel />
        </IconButton>
      )}>
      <App />
    </SnackbarProvider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NotistackComponent />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
