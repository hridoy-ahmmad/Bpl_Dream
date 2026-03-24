import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const Card = ({ item, handleSelect, selectedPlayer }) => {
    const { name, image, country, role, batting_style, bowling_style, price, rating } = item
    return (
        <div className="card bg-base-100  shadow-md border border-gray-100">
            <figure className='p-5'>
                <img
                    className='rounded-t-xl h-96 w-full object-cover'
                    src={image} />
            </figure>
            <div className="p-5">
                <h2 className="card-title text-xl font-bold text-gray-600"> <IoPerson /> {name}</h2>
                <div className='flex justify-between items-center py-4 border-b border-gray-300'>
                    <h1 className='flex items-center gap-1 text-gray-500 font-semibold'><FaFlag /> {country} </h1>
                    <button className='py-2 px-3 bg-gray-100 rounded-md font-semibold'>{role}</button>
                </div>
                <div className='flex justify-between items-center py-3 font-semibold text-gray-500'>
                    <h4>Ratings:</h4>
                    <p>{rating}⭐</p>
                </div>
                <div className='flex justify-between items-center py-2 font-semibold text-gray-500'>
                    <h4>Bating Style🏏: </h4>
                    <p> {batting_style}</p>
                </div>
                <div className='flex justify-between items-center  font-semibold text-gray-500'>
                    <h4>Bowling Style:</h4>
                    <p> {bowling_style}</p>
                </div>
                <div className="flex justify-between items-center py-4 font-semibold text-gray-600">
                    <h3>Price: ${price} </h3>
                    <button
                        onClick={() => handleSelect(item)}
                        className="py-2 px-5 cursor-pointer hover:scale-102  bg-[#E7FE29]
                     rounded-md"> {
                            selectedPlayer.find(p => p.id === item.id) ? 'Selected' : 'Select'
                        }  </button>
                </div>
            </div>
        </div>
    );
};

export default Card;