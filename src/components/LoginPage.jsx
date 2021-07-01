import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { Redirect } from "react-router-dom";

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            passwordValue: '',
            isLoggedIn: false
        };
    };

    handleNameChange = (event) => {
        this.setState({ nameValue: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ passwordValue: event.target.value });
    }

    handleSubmitClick = (event) => {
        this.setState({ isLoggedIn: true });
        console.log(this.state);
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className='container'>
                <div className='container__title-wrapper'>
                    <Typography variant="h3">
                        Login To the Help Desk
                    </Typography>
                </div>
                <div className='container__from-wrapper'>
                    <form>
                        <div className="container__inputs-wrapper">
                            <div className='form__input-wrapper'>
                                <TextField
                                    onChange={this.handleNameChange}
                                    label="User name"
                                    variant="outlined"
                                    placeholder='User name'
                                />
                            </div>
                            <div className='form__input-wrapper'>
                                <TextField
                                    onChange={this.handlePasswordChange}
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    placeholder='Password'
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='container__button-wrapper'>
                    <Button onClick={this.handleSubmitClick} size='large' variant="contained" color="primary">
                        Enter
                    </Button>
                </div>
            </div>
        )
    }
};
