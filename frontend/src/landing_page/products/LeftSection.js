
import React from 'react';

function Leftsection({imageUrl, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
        <div className = "conatainer">
            <div className = "row">
                <div className='col-6 p-5'>
                    <img src={imageUrl}></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div><a href={tryDemo}></a>
                    <a href={learnMore} style={{marginLeft: "50px"}}></a></div>
                    <div className = "mt-5 mb-5">
                    <a href={googlePlay}><img src ="media\images\googlePlayBadge.svg"></img></a>
                    <a href={appStore} style={{marginLeft: "50px"}}><img src ="media\images\appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftsection;