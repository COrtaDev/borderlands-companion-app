import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return(
        promiseInProgress &&
        <h1>HEY SOME ASYNC ALL IN PROGRESS YA DIGUS!!!</h1>
    )
};
