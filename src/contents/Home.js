import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <h1>Joseph Mattern</h1>
                <ReactTypingEffect className="typingeffect" text={['Full Stack', 'Python Developer', 'A Problem Solver!']} speed={50} eraseDelay={900} />
                <Social />
            </div>
        )
    }
}

export default Home
