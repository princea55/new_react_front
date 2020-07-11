import React from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="username or email" /><br /><br />
                <TextField id="standard-basic" label="password" /><br /><br />
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    )
}
