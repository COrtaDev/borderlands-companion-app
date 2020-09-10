import React from 'react';

// please delete me at some point and put me out of my misery...
function User(props) {
    return (
        <>
            <strong>Username:</strong> {props.user.username}<br />
            <strong>Email:</strong> {props.user.email}<br />
            <hr />
        </>
    );
}
export default User;
