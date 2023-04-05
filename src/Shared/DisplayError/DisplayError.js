import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1 className='text-4xl font-bold text-accent'>Oops!</h1>
            <p className=''>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default DisplayError;