import React from 'react';

const Navbar = () => {
    return <div className='navbar'>
        <span className="logo">ChatterLot</span>
        <div className="user">
            <img src="https://i.pinimg.com/736x/71/19/5c/71195c869b2b0b2e5a226d76d206dd43.jpg" alt="" />
            <span>Andrew</span>
            <button>Logout</button>
        </div>
    </div>;
};

export default Navbar;


