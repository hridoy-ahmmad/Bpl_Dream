import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';
import Empty from '../Empty';

const SelectedPlayers = ({ selectedPlayer, handleDelete, handleAvailabe }) => {


    return (
        <div className='container mx-auto'>
            {
                selectedPlayer.length === 0 ? <Empty handleAvailabe={handleAvailabe}></Empty> :
                    selectedPlayer.map(item => <SelectedPlayerCard handleDelete={handleDelete} item={item}></SelectedPlayerCard>)
            }

        </div>
    );
};

export default SelectedPlayers;