import React from 'react';

export default function RightComponent({ item }) {
    return (
        
            
                <div className="card popup">
                    <img src={item?.snippet?.thumbnails?.medium?.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item?.snippet?.title}</h5>
                        <p className="card-text">{item?.channelTitle}</p>
                    </div>
                </div>
            
       
    );
}
