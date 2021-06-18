import React, { useEffect, useState } from 'react';
import '../App.scss';
import { appKey } from '../config';
import Loader from './Loader';
import Modal from './Modal';

const Hourlyforecast = (props) => {

    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState([]);

    let date = new Date();

    date = (date.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
    }));

    useEffect(() => {

        setLoading(true)

        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${props.city}&key=${appKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                    if (result.data.length) {
                        setData(result.data)
                    } else {
                        setData()
                    }
                },

            ).finally(() => {
                setLoading(false)
            })
    }, [props.city])

    return (
        <div>
            <Modal title={<h3>{date}</h3>}>
                {
                    data && (
                        <Loader isLoading={Loading}>
                            <div className='daysWrapper'>
                                {data.filter((el, index) => index < 5).map((el) => (
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
            </Modal>
        </div>
    );
};

export default Hourlyforecast;