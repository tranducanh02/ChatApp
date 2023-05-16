import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://64.media.tumblr.com/1c650b5211ae3e5a3df1b0d445322444/9d5b8bd01b68f656-55/s1280x1920/2143e7e838288c3950d781bcafa04bbe4a5139c9.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search