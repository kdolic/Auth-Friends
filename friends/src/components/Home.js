import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Friends App</h1>
            <Link to='/login'><button>LOGIN</button></Link>
        </div>
    )
}

export default Home
