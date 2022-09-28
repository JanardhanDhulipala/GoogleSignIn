import './App.css';
import { Text, Image } from "react";
import { signInWithGoogle} from "./modules/Firebase";

function App() {
  //const user = localStorage.getItem("userInfo");
  return (
    <div className="App">
      Hello World<br/>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      
    </div>
  );
}

export default App;
