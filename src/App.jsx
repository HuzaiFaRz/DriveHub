import { Fragment } from "react";
import LocomotiveScroll from "locomotive-scroll";
import SignUp from "./Auth/SignUp";
const App = () => {
  new LocomotiveScroll();

  return (
    <Fragment>
      <main className="Main">
        <SignUp />
      </main>
    </Fragment>
  );
};

export default App;
