import React from "react"
import "./App.css"
import { Login } from "./screens/Login"
import { Grid } from "@material-ui/core"
import TabPanel from "../src/components/TabPanel"
import Appbar from "../src/components/AppBar"
import ListPage from "../src/screens/ListPage"
import realm from "./services/realm"
import ComboForm from "./screens/ComboForm"

function App() {
  const [value, setValue] = React.useState("Main")

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  if (realm.currentUser?.isLoggedIn) {
    return (
      <Grid container>
        <TabPanel value={value} path={"Main"}>
          <ComboForm />
        </TabPanel>
        <TabPanel value={value} path={"List"}>
          <ListPage />
        </TabPanel>
        <TabPanel value={value} path={"Blank"}>
          empty item
        </TabPanel>
        <Appbar {...{ handleChange, value }} />
      </Grid>
    )
  }

  return <Login />
}

export default App
