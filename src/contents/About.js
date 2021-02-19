import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <p>Software Developer || Physicist
                </p>
                <br></br>
                <p className="p10">Hello! My name is Joseph.</p> <p className="p10"> I have a very analytical and ambitious personality.
                With a passion for learning I possess both entrepreneur and detailed-oriented qualities. I am currently investing my time into software development and applied analytics so I may take my creativity and love of developing projects to the next level. I aim to establish products that will higher the human standard of living and quality of life.
                </p>

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
