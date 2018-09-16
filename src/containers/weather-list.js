import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

const kelvinToCelcius = (kelvin) => kelvin - 273.15;
const kelvinToFarenheight = (kelvin) => 1.8 * kelvinToCelcius(kelvin) + 32;

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = { weather: [] };
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
    

    renderWeather(cityData){
        console.log('cityData', cityData);
        const cityName = cityData.city.name;
        const { lat, lon } = cityData.city.coord;
        const temps = cityData.list.map(weather => kelvinToCelcius(weather.main.temp));
        const humidities = cityData.list.map( weather => weather.main.humidity);
        const pressures = cityData.list.map( weather => weather.main.pressure);

        return (
        <tr key={cityName}>
            <td><GoogleMap lat={lat} lon={lon}/></td>
            <td><Chart name="Temperature" data={temps} color="orange" units="°C"/></td>
            <td><Chart name="Pressure" data={pressures} color="green" units="hPa"/></td>
            <td><Chart name="Humidity" data={humidities} color="black" units="%"/></td>
        </tr>)
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);