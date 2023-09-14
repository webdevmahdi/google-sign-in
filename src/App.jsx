import { useState } from 'react';
import app from './firebase.init';
import './App.css';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

let auth = getAuth(app);

function App() {

  let [user, setUser] = useState({});

  let googleProvider = new GoogleAuthProvider();

  let signInPopUp = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        let user = result.user;
        setUser(user);
        console.log(result);
      })
      .catch(error => console.error('error', error));
  }
  return (
    <div>
      <button onClick={signInPopUp}>Log in</button>
    </div>
  )
}

export default App
