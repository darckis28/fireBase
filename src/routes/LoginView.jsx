import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/data";
function LoginView() {
  async function handelOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }
  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const { displayName, email } = res.user;
      console.log(displayName, email);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {" "}
      <button onClick={handelOnClick}>login with gogle</button>{" "}
    </div>
  );
}
export default LoginView;
