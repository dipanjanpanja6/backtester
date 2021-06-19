import React, { useState } from "react"
import { Box, Button, Container, Grid, Paper, TextField, Hidden, Typography } from "@material-ui/core"
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
    <Box height="100vh" display="flex" alignItems="center">
      <Grid container>
        <Grid item sm={12} md={4} container alignItems="center">
          <Container maxWidth="xs">
            <Paper>
              <Box p={3} pb={0}>
                <Typography variant="h3"> Sign in </Typography>
              </Box>

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
        </Grid>

        <Hidden smDown>
          <Grid item sm={12} md={8}>
            <Box height="100vh" display="flex" alignItems="center">
              <img alt="promotion" height="100%" width="100%" src="https://source.unsplash.com/random/800x763" />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export { Login }
