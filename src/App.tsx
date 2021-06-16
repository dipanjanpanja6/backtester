import React, { useEffect } from "react"
import "./App.css"
import "./services/firebase"
import firebase from "firebase/app"
import { Main } from "./screens/Main"
import { Login } from "./screens/Login"
import { Grid } from "@material-ui/core"
import TabPanel from "../src/components/TabPanel"
import Appbar from "../src/components/AppBar"
import ListPage from "../src/screens/ListPage"

function App() {
  const [user, setUser] = React.useState<null | firebase.User>(null)
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  if (user) {
    return (
      <Grid container>
        <Appbar {...{ handleChange, value }} />
        <TabPanel value={value} index={0}>
          <Main />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListPage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          empty item
        </TabPanel>
      </Grid>
    )
  }

  return <Login />
}

export default App
