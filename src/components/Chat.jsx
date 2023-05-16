import React from 'react';
import VideoCall from '../img/video_call.png';
import Add from '../img/add_friend.png';
import More from '../img/ellipsis.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>Jane</span>
                <div className='chatIcons'>
                    <img src={VideoCall} alt='' />
                    <img src={Add} alt='' />
                    <img src={More} alt='' />
                </div>
                
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
