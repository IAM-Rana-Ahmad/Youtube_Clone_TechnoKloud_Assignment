import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Left from '../left Component/left';
import Crousel from '../crousel Buttons/crousel';
import Right from '../right component/right';
import '../../App.css'; 

export default function Index() {
    const apiKey = "AIzaSyAFOupO5Tn2Rd-_8Iy-SaaVEQaTCt5kh18"; 
    const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=programming&key=${apiKey}`; 
    
    const [data, setData] = useState([]); 
    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState([]); 

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const searchFunction = () => {
        if (data && data.length > 0) {
            const filteredData = data.filter(item => item.snippet.title.includes(searchValue));
            setFilteredData(filteredData);
        }
    };

    useEffect(() => {
        searchFunction();
    }, [searchValue, data]);

    const fetchData = () => {
        fetch(api)
            .then(response => response.json())
            .then(result => {
                setData(result?.items);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <>
              <Navbar
                searchValue={searchValue}
                handleSearchChange={handleSearchChange}
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Left/>
                    </div>
                    <div className="col-md-10">
                        <Crousel/>
                     <div className="row">
                     {
                            filteredData.map((item, id) => (
                                <div key={id} className='col-md-3 mt-5'>
                                    <Right item={item}/>
                                </div>
                            ))
                        }
                     </div>
                    </div>
                </div>
            </div>
        </>
    );
}



