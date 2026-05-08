import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            <h1 className='text-xl font-bold'>Loading</h1>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default LoadingPage;