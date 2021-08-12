import React from 'react';
import List from './List'
import Karousel from './Karousel'
import SideBar from './SideBar'
// import video from './video/video.mp4'
import video from './video/video3.mp4'


const Home = (match) => {
    return (
        <div>
            <div className="slider">

            <video className="video" src={video} width="100%" height="100%" autoplay="autoplay" loop="loop" muted defaultMuted playsinline></video>

            </div>

            <div>
                <SideBar />
                <List page={match.page} />
            </div>
        </div>
    );
};

export default Home;