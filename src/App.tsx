import React, { useEffect, useState } from "react"
import { Login } from "./screens/Login"
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import TabPanel from "../src/components/TabPanel"
import Appbar from "../src/components/AppBar"
import ListPage from "../src/screens/ListPage"
import realm from "./services/realm"
import ComboForm from "./screens/ComboForm"
import { useSnackbar } from "notistack"
import "./App.css"

function App() {
  const [value, setValue] = useState(0)
  //toast example
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    enqueueSnackbar("I love snacks.", { variant: "success" })
  }, [enqueueSnackbar])

  const handleChangeIndex = (index: number, indexLatest: number) => {
    setValue(index)
    console.log(index, indexLatest)
  }

  if (realm.currentUser?.isLoggedIn) {
    return (
      <Grid>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">Title</Typography>
          </Toolbar>
        </AppBar>

        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} path={"Main"} index={0}>
            <ComboForm />
          </TabPanel>
          <TabPanel value={value} path={"List"} index={1}>
            <ListPage />
          </TabPanel>
          <TabPanel value={value} path={"Blank"} index={2}>
            empty item
          </TabPanel>
        </SwipeableViews>

        <Appbar {...{ handleChange, value }} />
      </Grid>
    )
  }

  return <Login />
}

export default App
