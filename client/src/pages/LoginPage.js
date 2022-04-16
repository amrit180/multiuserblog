import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleAuthProvider } from "../firebase";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../functions/auth";
export default function LoginPage() {
  const dispatch = useDispatch();
  const signinwithgoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        console.log(idTokenResult.token);
        await createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            console.log(res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                email: res.data.email,
                name: res.data.name,
                image: res.data.image,
                role: res.data.role,
                username: res.data.username,
                token: idTokenResult.token,
              },
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={signinwithgoogle}>Login Please !!!</button>
    </div>
  );
}
