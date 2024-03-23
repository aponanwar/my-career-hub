import React from 'react';

const Categoryitem = ({ item }) => {
    const { logo, category_name, availability } = item;
    return (
        <div>
            <div className='p-5 bg-blue-100 rounded-md flex-col'>
                <img className='w-14 rounded-md' src={logo} alt="" />
                <h2 className='text-xl font-bold mt-4'>{category_name}</h2>
                <h2>{availability}</h2>
            </div>
            
        </div>
    );
};

export default Categoryitem;