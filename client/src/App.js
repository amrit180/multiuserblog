import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const signin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const IdTokenResult = result.user.getIdToken().token;
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
