import React, { useEffect } from "react"
import "./App.css"
import "./services/firebase"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
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
    if (process.env.NODE_ENV === "development") {
      firebase.firestore().settings({
        host: "localhost:8080",
        ssl: false,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
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
