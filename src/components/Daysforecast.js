import '../App.scss';
import React, { useEffect, useState } from 'react';
import { appKey } from '../config';


function Daysforecast(props) {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${props.city}&key=${appKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                    if (result.data.length) {
                        setDays(result.data)
                    } else {
                        setDays()
                    }
                },

            )
    }, [props.city])
    return (
        <div>

            {
                days && (
                    <div className='daysWrapper'>
                        {days.filter((el, index) => index < 8).map((el) => (
                            <div className='weathertemp'>
                                {el.datetime}
                                <img src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}></img>
                                {el.temp}°C
                                {el.weather.description}
                            </div>
                        ))}
                    </div>

                )
            }

        </div>
    );
}

export default Daysforecast;