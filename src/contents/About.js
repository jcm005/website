import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <p>Software Developer || Physicist
                </p>
                <br></br>
                <p className="p10">Hello! My name is Joseph.</p> <p className="p10">With a Bachelors's in Physics, I am a self-taught software developer and data analyst. I am a natural problem solver/ innovator, with a passion for health and technology. My long-term goal is to apply my love for learning and technology to advance the human standard of living.</p>
                <p className='tc mt4 white'>I am open to any software engineering positions, including python, full-stack, and machine learning.</p>

                <h3> Education</h3>
                <h4>B.S. In Physics</h4>
                <p className="p1">Stony Brook University</p>

                <h3 class="sk_head">Skills</h3>
                <div class="sk s glass">Python</div>
                <div class="sk s2 glass">JavaScript</div>
                <div class="sk s3 glass">React</div>
                <div class="sk s4 glass">Node</div>
                <div class="sk s5 glass">HTML</div>
                <div class="sk s6 glass">CSS</div>

            </div>
        )
    }
}

export default About
