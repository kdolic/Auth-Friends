import React, {useState} from 'react';
import axios from 'axios';

const initialState = {
    username: '',
    password: ''
}

function LoginForm(props) {
    const [user, setUser] = useState(initialState);

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }
    
    const login = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', user)
        .then(res => {
            console.log('response: ', res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
        })
        .catch(err=> {
            console.log('error: ', err)
        })
    }

    //1. use axios to do a post request.
    //2. if request is successful, console.log token.
    //3. if request is unsuccessful, show error.

    return (
        <div className='login'>
            <form onSubmit={login}>
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
