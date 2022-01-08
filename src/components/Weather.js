import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import axios from 'axios';

export default function Weather({ defaultCity }) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(defaultCity);

    // get a data
    function handleResponse(response) {
        setWeatherData({
            wind: response.data.wind.speed,
            city: response.data.name,
            coordinates: response.data.coord,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            ready: true,
            temperature: response.data.main.temp
        });
    }
    // form submit
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    // handle city change
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    // response data
    function search() {
        const apiKey = '50c075de586e5e251f07eb4ec62accac';
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city.."
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <button
                                type="submit"
                                className="btn
                                btn-outline-secondary"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search();
        return 'The app is loading... Please be patient😊';
    }
}
