import React, { useState } from 'react';

const PlayerPool = ({ active, handleAvailabe, handleSelected, selectedPlayer }) => {

    return (
        <div className='flex justify-between container mx-auto font-bold py-10'>
            <div>
                <h1> {active ? `Available Players` : 'Selected Player'} </h1>
            </div>
            <div >
                <button
                    onClick={() => handleAvailabe(active)}
                    className={`py-2 px-5 border border-r-0 rounded-l-xl border-gray-300 ${active === true && 'bg-[#E7FE29]'}`}>Available</button>
                <button

                    onClick={() => handleSelected(active)}
                    className={`py-2 px-5 border border-l-0 rounded-r-xl border-gray-300 ${active === false && 'bg-[#E7FE29]'}`}> Selected ({selectedPlayer.length}) </button>
            </div>
        </div>
    );
};

export default PlayerPool;