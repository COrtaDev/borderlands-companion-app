import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&
        // <h1>HEY SOME ASYNC ALL IN PROGRESS YA DIGUS!!!</h1>
        <div style={{
            width: '100%',
            height: '1000px',
            // position: 'fixed',
            // left: '50%',
            // top: '50%',
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            background: 'black',
            zIndex: '1050'
        }}
        >
            <Loader type='Audio' color='rgb(238 150 40 / 80%)' height='200' width='200' />
        </div>
    )
};

export default LoadingIndicator;
