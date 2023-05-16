import React from 'react';
import Add from '../img/add_image.png';
import Attach from '../img/attach.png';

const Input = () => {
    return (
        <div className='input'>
            <input type='text' placeholder='Type some thing...' />
            <div className='send'>
                <img src={Attach} alt='' />
                <input style={{ display: 'none' }} type='file' id='file' />
                <label htmlFor='file'>
                    <img src={Add} alt='' />
                </label>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Input;
