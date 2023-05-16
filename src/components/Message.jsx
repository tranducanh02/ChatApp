import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://64.media.tumblr.com/1c650b5211ae3e5a3df1b0d445322444/9d5b8bd01b68f656-55/s1280x1920/2143e7e838288c3950d781bcafa04bbe4a5139c9.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://64.media.tumblr.com/1c650b5211ae3e5a3df1b0d445322444/9d5b8bd01b68f656-55/s1280x1920/2143e7e838288c3950d781bcafa04bbe4a5139c9.jpg"></img>
      </div>
    </div>
  )
}

export default Message