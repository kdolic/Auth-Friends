import React, {useState, useEffect} from 'react';
import Friend from './Friend';
import AddFriends from './AddFriends';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = []

function FriendList() {
    const [friends, setFriends] = useState(initialState);
    
    const getFriends = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => {
            console.log('error', err)
        })
    }
    
    useEffect(() => {
        getFriends()
    }, [])


    return (
        <div>
            <h2>Friends List</h2>
            <div>
                {friends.map(friend => {
                    return <Friend friend={friend} />
                })}
            </div>
            <AddFriends />
        </div>
    )
}

export default FriendList
