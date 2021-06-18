import '../App.scss';
import React, { useEffect, useState } from 'react';
import { appKey } from '../config';
import Loader from './Loader';


function Daysforecast(props) {

    const [days, setDays] = useState([]);
    const [Loading, setLoading] = useState(false);


    useEffect(() => {

        setLoading(true)

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

            ).finally(() => {
                setLoading(false)
            })
    }, [props.city])
    return (
        <div>
            {
                days && (
                    <Loader isLoading={Loading}>
                        <div className='daysWrapper'>
                            {days.filter((el, index) => index < 9).map((el) => (
                                <div className='weathertemp'>
                                    {el.datetime}
                                    <img src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}></img>
                                    {el.temp}°C
                                    {el.weather.description}
                                </div>
                            ))}
                        </div>
                    </Loader>
                )
            }

        </div>
    );
}

export default Daysforecast;