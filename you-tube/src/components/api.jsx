import React, { useState } from 'react';

export default function ApiComponent() {   const apiKey = "AIzaSyAFOupO5Tn2Rd-_8Iy-SaaVEQaTCt5kh18";  
    const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=programming&key=${apiKey}`; 
  

    const [responseData, setResponseData] = useState(null);

    const fetchData = () => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data);  
                setResponseData(data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <div className="container-fluid">
              
                <button onClick={fetchData}>Fetch Data</button>
               
            </div>
        </div>
    );
}



























