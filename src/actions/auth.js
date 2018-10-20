import { firebase, googleAuthProvider } from "../firebase/firebase";

//LOG_IN
export const login = uid => ({
  type: "LOG_IN",
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

//LOG_OUT
export const logout = () => ({
  type: "LOG_OUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
