import React from 'react';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = '50c075de586e5e251f07eb4ec62accac';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="weatherForecast">
            <div className="row">
                <div className="col">
                    <div className="weatherForecast-day">Sat</div>
                    <WeatherIcon code="01d" size={32} />
                    <div className="weatherForecast-temperatures">
                        <span className="weatherForecast-temperature-max">
                            14°C |
                        </span>
                        <span className="weatherForecast-temperature-min">
                            | 8°C
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
