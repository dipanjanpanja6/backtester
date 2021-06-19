import React, { useState } from "react"
import { Login } from "./screens/Login"
import { AppBar, Toolbar, Typography, Box, ThemeProvider } from "@material-ui/core"
import TabPanel from "../src/components/TabPanel"
import Appbar from "../src/components/AppBar"
import ListPage from "../src/screens/ListPage"
import realm from "./services/realm"
import ComboForm from "./screens/ComboForm"
import { ListPageTheme, EmptyPageTheme } from "./theme"
import Loader from "./components/Loader"
import "./App.css"

function App() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  if (realm.currentUser?.isLoggedIn) {
    return (
      <Box>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">Title</Typography>
          </Toolbar>
        </AppBar>

        <TabPanel value={value} path={"Main"} index={0}>
          <Loader>
            <ComboForm />
          </Loader>
        </TabPanel>
        <TabPanel value={value} path={"List"} index={1}>
          <ThemeProvider
            theme={outerTheme => ({
              ...outerTheme,
              ...ListPageTheme,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
            })}>
            <ListPage />
          </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} path={"Blank"} index={2}>
          <ThemeProvider theme={upperTheme => ({ ...upperTheme, ...EmptyPageTheme })}>empty item</ThemeProvider>
        </TabPanel>

        <Appbar {...{ handleChange, value }} />
      </Box>
    )
  }

  return <Login />
}

export default App
