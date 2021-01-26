import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    username: '',
    password: ''
}

function LoginForm(props) {
    const [user, setUser] = useState(initialState);

    // const login = event => {
    //     event.preventDefault();
    //     axiosWithAuth().post
    // }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }


    return (
        <div>
            <form /*onSubmit={login} */>
                <label>Username: </label><br></br>
                <input
                type='text'
                name='username'
                placeholder='Username'
                value={user.username}
                onChange={handleChange}
                />
                  <input
                type='password'
                name='password'
                placeholder='Password'
                value={user.password}
                onChange={handleChange}
                />
                <button disabled={!user} type='submit'>LOGIN</button>
            </form>
        </div>
    )
}

export default LoginForm
