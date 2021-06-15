import React from 'react';
import './App.css';
import "./services/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { Main } from './screens/Main';
import { Login } from './screens/Login';

function App() {
  const [user, setUser] = React.useState<null | firebase.User>(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  if (user) {
    return <Main />;
  }

  return <Login />;
}

export default App;
