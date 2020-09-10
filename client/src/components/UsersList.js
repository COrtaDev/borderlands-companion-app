import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { apiUrl } from '../config';
import { Redirect } from 'react-router-dom'
import User from './User';

function UsersList(props) {
    const { token } = useSelector(state => state.auth);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(apiUrl + '/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const userComponents = users.map((user) => <User key={user.id} user={user} />)
    if (!token) return <Redirect to='/' />;
    return (
        <>
            <h1>User List: </h1>
            {userComponents}
        </>
    );
}

export default UsersList;
