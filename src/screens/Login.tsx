import React, { useState } from "react"
import "firebase/auth"
import "firebaseui/dist/firebaseui.css"
import { Box, Button, Container, Paper, TextField } from "@material-ui/core"
import * as Realm from "realm-web"
import realm from "../services/realm"

async function loginEmailPassword(email: string, password: string) {
  // Create an anonymous credential
  const credentials = Realm.Credentials.emailPassword(email, password)
  try {
    // Authenticate the user
    const user = await realm.logIn(credentials)
    window.location.reload()
    // `App.currentUser` updates to match the logged in user
    // assert(user.id === app.currentUser.id)
    return user
  } catch (err) {
    console.error("Failed to log in", err)
  }
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [pass, setPass] = useState<string>("")

  return (
    <Box height="90vh" display="flex" alignItems="center">
      <Container maxWidth="xs">
        <Paper>
          <Box p={3}>
            <TextField variant="outlined" fullWidth margin="normal" size="small" label="Username" onChange={e => setEmail(e.target.value)}></TextField>
            <TextField variant="outlined" fullWidth margin="normal" size="small" label="Password" type={"password"} onChange={e => setPass(e.target.value)}></TextField>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={() => loginEmailPassword(email, pass)}>
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export { Login }
