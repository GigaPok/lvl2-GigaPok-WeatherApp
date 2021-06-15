import '../App.scss';
import React, { useEffect, useState } from 'react';
import { appKey } from '../config';


function Current(props) {
    const [city, setCity] = useState();

    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=${props.city}&key=${appKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.data.length) {
                        setCity(result.data[0])
                    } else {
                        setCity()
                    }
                },

            )
    }, [props.city])
    return (
        <div>

            {
                city && (
                    <div className='currentWrapper'>
                        <div className='datetime'>{city.datetime}</div>
                        <div className="cityname">{city.city_name}, {city.country_code}</div>
                        <div className='weathertemp'>
                            <img src={`https://www.weatherbit.io/static/img/icons/${city.weather.icon}.png`}></img>
                            {city.temp}°C
                        </div>
                        <div></div>
                    </div>

                )
            }

        </div>
    );
}

export default Current;