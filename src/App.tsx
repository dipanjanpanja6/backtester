import React from 'react';
import './App.css';
import "./services/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { Main } from './screens/Main';
import { Login } from './screens/Login';
import { Grid } from '@material-ui/core';
import TabPanel from '../src/components/TabPanel';
import Appbar from '../src/components/AppBar';

function App() {
  const [user, setUser] = React.useState<null | firebase.User>(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  if (user) {
    return (
      <Grid container>
        <Appbar {...{ handleChange, value }} />
        <TabPanel value={value} index={0}>
          <Main />
        </TabPanel>
        <TabPanel value={value} index={1}>
          empty item
        </TabPanel>
      </Grid>
    )
  }

  return <Login />;
}

export default App;
