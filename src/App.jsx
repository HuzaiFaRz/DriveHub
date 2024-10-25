import { firebaseConfig } from "./Auth/firebase";
import "./Auth/firebase";

const App = () => {
  console.log(firebaseConfig.apiKey);

  console.log(import.meta.env);

  return <div>App</div>;
};

export default App;
