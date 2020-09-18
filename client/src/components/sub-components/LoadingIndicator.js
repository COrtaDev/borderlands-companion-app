import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();
/*
    Ideally I need to play with this more tomorrow:
    I would love to have it display as a modal, such that it covers EVERYTHING
    while the promise is returning from the fetch call...
    Otherwise, I will need too either play around and wrap components that are higher up the component tree
    with the promise tracker or change something else about how/where the loader is being rendered...
    As I was looking through Bulma for tooltip elements, I noticed there were some good-looking Page-loader elements
    You should investigate this further...
*/
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
