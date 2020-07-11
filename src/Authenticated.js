import React, { Component } from 'react'


import { withRouter } from "react-router-dom";
class Authenticated extends Component {
    constructor(props) {
        super();
        this.state = {
            user: undefined,
            logged_in: localStorage.getItem('token') ? true : false,
        }
    }

    async componentDidMount() {
        // const token = localStorage.getItem('token').substr(15, 40)
        // console.log(token);
        if (!this.state.logged_in) {
            this.props.history.push('./login')
        }
        // axios.get('http://127.0.0.1:8000/auth/users/me', {
        //     headers: { "Authorization": `Token ${token}`, 'Content-Type': 'application/x-www-uniform' }
        // }).then(res => res.setState({ user: JSON.stringify(res.data) })
        //     .then(user => console.log(user)))
        //     .catch(err => {
        //         // localStorage.removeItem('token');
        //         // this.props.history.push('/login')
        //         console.log(err);
        //     });

        // fetch('http://127.0.0.1:8000/auth/users/me', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //         "Authorization": `Token ${token}`,
        //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        //         "Access-Control-Allow-Origin": 'http://localhost:3000'
        //     },

        // }).then(res => res.setState({ user: JSON.stringify(res.data) })).then(user => console.log(user));

        if (this.state.logged_in) {
            fetch('http://127.0.0.1:8000/auth/users/me', {
                method: 'GET',
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'X-Requested-With': 'XMLHttpRequest'
                    
                },
                credentials: 'include'

            })
                .then(res => JSON.stringify(res.data))
                .then(json => {
                    this.setState({ username: json.username });
                });
        }


    }
    render() {
        if (this.state.user === undefined) {
            return (
                <div><h1>Loading...{this.state.user}</h1></div>

            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default withRouter(Authenticated);