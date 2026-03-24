import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteToast = ({player}) => {
    return (
        <div className='flex gap-2 items-center'>
            <div className='text-4xl'>
                <MdDelete />
            </div>
            <p className='text-md'> {player.name} -Deleted Successful</p>

        </div>
    );
};

export default DeleteToast;