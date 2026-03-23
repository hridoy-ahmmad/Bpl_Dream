import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayerCard = ({ item, handleDelete }) => {
    return (
        <div className='flex items-center justify-between p-4 border border-gray-200 rounded-xl mb-3'>
            <div className='flex items-center gap-4 '>
                <div className='h-16 w-16 rounded-xl'>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-gray-600'>{item.name}</h1>
                    <h2 className='text-sm font-semibold text-gray-500'>{item.batting_style}</h2>
                </div>
            </div>
            <div className='text-2xl text-red-600'>
                <MdDelete
                    className='cursor-pointer'
                    onClick={() => handleDelete(item)}
                ></MdDelete>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;