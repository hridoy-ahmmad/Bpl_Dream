import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='container mx-auto flex justify-center h-42  items-center'>
            
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
        </div>
        
    );
};

export default Loading;