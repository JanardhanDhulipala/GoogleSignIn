import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXEdqrNd_E8Y7t6IEYWOvq0aSFn6z1YYA",
    authDomain: "sample-103f4.firebaseapp.com",
    databaseURL: "https://sample-103f4.firebaseio.com",
    projectId: "sample-103f4",
    storageBucket: "sample-103f4.appspot.com",
    messagingSenderId: "833188386098",
    appId: "1:833188386098:web:c294a1a4b4a42ae76c732b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("userInfo", [{"name":name},{"email":email},{"profilePic":profilePic}]);
    }).catch((error) => {
        console.log(error);
    })
}