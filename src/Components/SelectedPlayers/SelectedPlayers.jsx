import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ selectedPlayer, handleDelete }) => {
    console.log(selectedPlayer);

  

    return (
        <div className='container mx-auto'>
            {
                selectedPlayer.map(item => <SelectedPlayerCard handleDelete={handleDelete} item={item}></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayers;