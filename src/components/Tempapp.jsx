import React, { useEffect, useState } from "react";
import './css/Style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f7333a9d4fd95351341523e2557fb101`;
            const response = await fetch(url);
            // console.log(response);
            const resjson = await response.json();
            setCity(resjson.main);
        }
        fetchApi();

    }, [search]);


    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type='search' className='inputfield' placeholder='search here' onChange={(event) => {
                        setSearch(event.target.value);

                    }} />
                </div>


                {!city ? (
                    <p className='errorMsg'>No data found !</p>
                ) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}°C

                            </h1>
                            <h3 className='tempmin_max'>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>


                        </div>
                        <div className='wave-one'></div>
                        <div className='wave-two'></div>
                        <div className='wave-three'></div>

                    </div>


                )}
            </div>
        </>
    );
}

export default Tempapp;