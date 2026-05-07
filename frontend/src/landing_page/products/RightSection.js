
import React from 'react';

function RightSection({productTitle, productDescription, imageUrl, learnMore}) {
    return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-6 p-5 mt-5'>
        <h1>{productTitle}</h1>
        <p>{productDescription}</p>
        <a href="#" style={{textDecoration:"none"}}>{learnMore}</a>
                    </div>
                    <div className='col-6 p-5'>
                        <img src={imageUrl} alt="Zerodha"></img>
                    </div>
                </div>
            </div>
    );
}

export default RightSection;
