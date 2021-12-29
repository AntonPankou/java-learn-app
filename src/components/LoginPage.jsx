import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

function LoginPage(props) {  
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleNameChange = (event) => {
    setNameValue(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value)
  };

  const handleClickAuth = () => {
    // put authorization logic here
    props.authCallback(true);
  };

  return (
    <div className="container">
      <div className="container__title-wrapper">
        <Typography component="h2" variant="h3">
          Login to the Help Desk
        </Typography>
      </div>
      <div className="container__from-wrapper">
        <form>
          <div className="container__inputs-wrapper">
            <div className="form__input-wrapper">
              <TextField
                onChange={handleNameChange}
                label="User name"
                variant="outlined"
                placeholder="User name"
              />
            </div>
            <div className="form__input-wrapper">
              <TextField
                onChange={handlePasswordChange}
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="container__button-wrapper">
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleClickAuth}
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
