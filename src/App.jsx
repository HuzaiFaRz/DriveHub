import { Fragment } from "react";
import LocomotiveScroll from "locomotive-scroll";
import SignUp from "./Auth/SignUp";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
