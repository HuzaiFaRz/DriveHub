import { Fragment, useState } from "react";
import { FormControl, TextField, InputLabel } from "@mui/material";
import { auth, createUserWithEmailAndPassword } from "./firebase";
const SignUp = () => {
  const [signUpInputs, setSignUpInputs] = useState({
    signUpName: "sarsa",
    signUpEmail: "huzaifa",
    signUpPassword: "asdfgg",
  });

  const signUpInputsHandler = (event) => {
    setSignUpInputs((prevSetSignUpInputs) => ({
      ...prevSetSignUpInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const signUpSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      if (
        !signUpInputs.signUpName ||
        !signUpInputs.signUpEmail ||
        !signUpInputs.signUpPassword
      ) {
        alert("fioll");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpInputs.signUpEmail,
        signUpInputs.signUpPassword
      );
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <FormControl component={"form"} onSubmit={signUpSubmitHandler}>
        <InputLabel>
          <TextField
            type={"text"}
            name="signUpName"
            className={"signUpName"}
            id={"signUpName"}
            placeholder="Enter Name"
            value={signUpInputs.signUpName}
            onChange={signUpInputsHandler}
          ></TextField>
        </InputLabel>

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
          type={"text"}
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
