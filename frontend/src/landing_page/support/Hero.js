
import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className='p-3' id="supportWrapper">
                <h1 className='fs-4'>Support portal</h1>
                <a href = '#'>Track Tickets</a>
            </div>
            <div className=' row p-5 mx-5'>
                <div className='col-6 p-5'><h2 className='fs-3'>Search for an answer or browse help topics to create a ticket</h2>
                <input placeholder="Eg: how do i activate F&O, why is my order getting rejected"/>
                <br></br>
                <a href = "">Track account opening</a>
                <a href = "">Track segmnet activation</a>
                <a href = "">Intraday margins</a>
                <a href = "">Kite user manual</a>
                </div>
                <div className='col-6 p-5'><h2 className='fs-3'>Featured</h2>
                <ol>
                    <li><a href = "">1. Current Takeovers and Delisting - January 2024</a></li>
                    <li><a href = "">2. Latest Intraday Leverages - MIS & CO</a></li>
                </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;