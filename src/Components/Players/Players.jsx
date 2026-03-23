import React, { use } from 'react';
import Card from '../Card/Card';

const Players = ({ playerPromise, handleSelect, selectedPlayer }) => {
    const players = use(playerPromise)
    // console.log(players);

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-between'>
            {
                players.map(item => <Card key={item.id} selectedPlayer={selectedPlayer} handleSelect={handleSelect} item={item}></Card>)
            }
        </div>
    );
};

export default Players;