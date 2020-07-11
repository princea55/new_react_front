import React, { Component } from 'react'
import './signup.css';


// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 225,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

class Signup extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            re_password: '',
            user_type: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const user_type_create = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            re_password: this.state.re_password,
            user_type: this.state.user_type,
        }
        var formBody = [];
        for (var property in user_type_create) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(user_type_create[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch('http://127.0.0.1:8000/auth/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        })
            .then(res => res.json())
            .then(data => console.log(data));
        // this.props.history.push("/")
        console.log("resgister!");
    }
    render() {
        // 
        return (
            <div>
                <h1>Signup</h1>
                <form noValidate autoComplete="off" onSubmit={this.onSubmit} >
                    <TextField
                        id="standard-basic"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        label="Username"
                        variant="outlined"
                    /><br /><br />
                    <TextField
                        id="standard-basic"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        label="Email"
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
                    <TextField
                        id="standard-basic"
                        name="re_password"
                        value={this.state.re_password}
                        onChange={this.onChange}
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    /><br /><br />
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            name='user_type'
                            value={this.state.user_type}
                            onChange={this.onChange}
                        >
                            <MenuItem value="College">College</MenuItem>
                            <MenuItem value="Professor">Professor</MenuItem>
                            <MenuItem value="Student">Student</MenuItem>
                        </Select>
                        <FormHelperText>Select what type user you</FormHelperText>
                    </FormControl><br /><br />
                    <Button variant="contained" color="primary" type="submit">
                        Signup
                    </Button>
                </form>
            </div>
        )
    }
}
// className={classes.formControl}
export default Signup;