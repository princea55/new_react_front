import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 225,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function Login() {
    const classes = useStyles();
    const [todos, setTodos] = useState();
    return (
        <div>
            <h1>Signup</h1>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Username" /><br /><br />
                <TextField id="standard-basic" label="Password" /><br /><br />
                <TextField id="standard-basic" label="Confirm Password" /><br /><br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        
                    >
                        
                        <MenuItem value={10}>College</MenuItem>
                        <MenuItem value={20}>Professor</MenuItem>
                        <MenuItem value={30}>Student</MenuItem>
                    </Select>
                    <FormHelperText>Select what type user you</FormHelperText>
                </FormControl><br /><br />
                <Button variant="contained" color="primary">
                    Signup
                </Button>
            </form>
        </div>
    )
}
