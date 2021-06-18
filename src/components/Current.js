import '../App.scss';
import React, { useEffect, useState } from 'react';
import { appKey } from '../config';
import Loader from './Loader';


function Current(props) {

    const [city, setCity] = useState();
    const [Loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)

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

            ).finally(() => {
                setLoading(false)

            }
            )
    }, [props.city])
    return (
        <div>
            {
                city && (
                    <Loader isLoading={Loading}>
                        <div className='currentWrapper'>
                            <div className='datetime'>{city.datetime}</div>
                            <div className="cityname">{city.city_name}, {city.country_code}</div>
                            <div className='weathertemp'>
                                <img src={`https://www.weatherbit.io/static/img/icons/${city.weather.icon}.png`}></img>
                                {city.temp}°C
                            </div>
                            <div></div>
                        </div>

                    </Loader>
                )
            }
        </div>
    );
}

export default Current;