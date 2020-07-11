import React, { Component } from 'react'
// import { withRouter } from 'react-router';
import { withRouter } from "react-router-dom";

import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async onSubmit(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/token/login',{
            email:this.state.email,
            password:this.state.password,
        }).then(res => {
            localStorage.setItem('token', JSON.stringify(res.data));
            this.props.history.push('/protcted')
        });
    console.log("resgister!");
    // console.log(resd.json());
}
render() {
    return (
        <div>
            <h1>Login</h1>
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    variant="outlined"
                /><br /><br />
                <TextField
                    id="standard-basic"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                /><br /><br />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Login
                    </Button>
            </form>
        </div>
    )
}
}
export default Login;