import { Fragment, useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { auth, createUserWithEmailAndPassword } from "./firebase";
import "./firebase";
const SignUp = () => {
  const [signUpInputs, setSignUpInputs] = useState({
    signUpName: "qxcvxcv",
    signUpEmail: "fgfd@gmail.com",
    signUpPassword: "123456",
  });

  const signUpInputsHandler = (event) => {
    setSignUpInputs((prevSetSignUpInputs) => ({
      ...prevSetSignUpInputs,
      [event.target.name]: [event.target.value],
    }));
  };

  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !signUpInputs.signUpName ||
      !signUpInputs.signUpEmail ||
      !signUpInputs.signUpPassword
    ) {
      alert("fioll");
    }

    createUserWithEmailAndPassword(
      auth,
      signUpInputs.signUpEmail,
      signUpInputs.signUpPassword
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <FormControl component={"form"} onSubmit={signUpSubmitHandler}>
        <TextField
          type={"text"}
          name="signUpName"
          className={"signUpName"}
          id={"signUpName"}
          placeholder="Enter Name"
          value={signUpInputs.signUpName}
          onChange={signUpInputsHandler}
        ></TextField>
        <TextField
          type={"email"}
          name="signUpEmail"
          className={"signUpEmail"}
          id={"signUpEmail"}
          placeholder="Enter Email"
          value={signUpInputs.signUpEmail}
          onChange={signUpInputsHandler}
        ></TextField>
        <TextField
          type={"password"}
          name="signUpPassword"
          className={"signUpPassword"}
          id={"signUpPassword"}
          placeholder="Enter Password"
          value={signUpInputs.signUpPassword}
          onChange={signUpInputsHandler}
        ></TextField>
        <TextField
          type={"submit"}
          name="signUpSubmitButton"
          className={"signUpSubmitButton"}
          id={"signUpSubmitButton"}
          value={"Sign Up"}
        ></TextField>
      </FormControl>
    </Fragment>
  );
};

export default SignUp;
