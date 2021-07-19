import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: "",
      passwordValue: "",
      isLoggedIn: false,
    };
  }

  handleNameChange = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ passwordValue: event.target.value });
  };

  handleSubmitClick = (event) => {
    this.setState({ isLoggedIn: true });
  };

  handleClickAuth = () => {
    this.props.authCallback(true);
  }
  
  render() {
    console.log(this.props);
    
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
                  onChange={this.handleNameChange}
                  label="User name"
                  variant="outlined"
                  placeholder="User name"
                />
              </div>
              <div className="form__input-wrapper">
                <TextField
                  onChange={this.handlePasswordChange}
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
            /* component={Link}
            to="/main-page" */
            size="large"
            variant="contained"
            color="primary"
            onClick={this.handleClickAuth}
          >
            Enter
          </Button>
        </div>
      </div>
    );
  }
}
