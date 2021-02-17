import React, { Component } from 'react';


class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <div>
                    <a className='link black dim condiv mt4 link ' style={{ height: '150px', width: '650px', left: '10%', top: '12%' }} href='https://github.com/jcm005/QuantitativeTrader'>
                        <p className='p10'>Algorithmic trading</p>

                    </a>

                    <a
                        className='condiv mt4 link dim black'
                        style={{ height: '150px', width: '650px', left: '10%', top: '37%' }}
                        href='https://facereco555.herokuapp.com'
                    >
                        <p className=''>Facial Recognition</p>
                    </a>





                </div>
            </div>
        )
    }
}

export default Portfolio

//link black dim db mw5 pa2 br2 ba b--black-10 shadow-1

// <a className='condiv mt4 link dim black' style={{ height: '150px', width: '650px', left: '10%', top: '62%' }}>
//<p className=''>Food.io</p>
//</a>