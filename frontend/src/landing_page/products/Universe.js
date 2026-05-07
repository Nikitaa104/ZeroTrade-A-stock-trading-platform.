
import React from 'react';

function Universe() {
    return (  
                        <div className='container'>
                <div className='row text-center'>
                    <h1>The Zerodha Universe</h1>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/smallcaseLogo.png" className="img-fluid" style={{ width: "150px" }} alt="Zerodha"></img>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/streakLogo.png" className="img-fluid" style={{ width: "150px" }} alt="Zerodha"></img>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/zerodhaFundHouse.png" className="img-fluid" style={{ width: "150px" }} alt="Zerodha"></img>
                        <p>Our assesment managable venture<br></br>that is creating simple and transparent index<br></br> funds to help you save for your goals.</p>
                    </div>
                                        <div className='col-4 p-3 mt-5'>
                        <img src="media/images/dittoLogo.png" className="img-fluid" style={{ width: "150px" }} alt="Zerodha"></img>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/smallcaseLogo.png" className="img-fluid" style={{ width: "150px" }} alt="Zerodha"></img>
                    </div>
                    <div className='col-4 p-3 mt-5'>
                        <img src="media/images/smallcaseLogo.png" className="img-fluid" style={{ width: "150px" }} alt="Zerodha"></img>
                        <p className='mt-5 mb-5' >Our assesment managable venture<br></br>that is creating simple and transparent index<br></br> funds to help you save for your goals.</p>
                    </div>
                <button className="p-3 btn btn-primary fs-5 mb-5" style={{width: "25%", margin: "0 auto"}}>Signup for free</button>
                </div>
            </div>
    );
}

export default Universe;