import React from 'react';

const Empty = ({ handleAvailabe }) => {
    return (
        <div className='text-center border border-gray-300 h-42 my-5 flex justify-center items-center rounded-xl'>
            <div>
                <h1 className='font-bold text-2xl'>No players selected Yet</h1>
                <button
                    className='btn my-3'
                    onClick={() => handleAvailabe()}
                >Go to Available Players</button>
            </div>
        </div>
    );
};

export default Empty;