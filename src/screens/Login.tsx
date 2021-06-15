import React from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/app";
import "firebase/auth";

const Login: React.FC = () => {
  React.useEffect(() => {
    const authUI = new firebaseui.auth.AuthUI(firebase.auth());
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
