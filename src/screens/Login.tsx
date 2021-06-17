import React from "react";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css"
import {Button,Grid, Paper, TextField} from "@material-ui/core";

const Login: React.FC = () => {

  return (
      <Paper>
        <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
  );
};

export {Login};
