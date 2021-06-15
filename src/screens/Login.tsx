import React from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/app";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css"

const Login: React.FC = () => {
  React.useEffect(() => {
    const auth = firebase.auth();
    if (process.env.NODE_ENV === "development") {
      auth.useEmulator(process.env.REACT_APP_AUTH_EMULATOR_URL as string)
    }
    const authUI = new firebaseui.auth.AuthUI(auth);
    const uiConfig = ({
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          disableSignUp: { status: true },
          requireDisplayName: false,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        }
      ]
    });
    authUI.start("#firebaseui-auth-container", uiConfig)
  });

  return (
    <div id="firebaseui-auth-container" />
  );
};

export {Login};
