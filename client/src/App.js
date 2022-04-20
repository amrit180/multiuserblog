import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentUser } from "./functions/auth";
import CreateBlog from "./pages/user/CreateBlog";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const unsubscribe = await onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        await currentUser(idTokenResult.token).then((res) => {
          console.log(res);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              _id: res.data._id,
              email: res.data.email,
              name: res.data.name,
              image: res.data.image,
              role: res.data.role,
              username: res.data.username,
              token: idTokenResult.token,
            },
          });
        });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <CreateBlog />
    </div>
  );
}

export default App;
