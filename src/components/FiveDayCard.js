import React, { useState, useEffect } from 'react';
import ReactWeather from 'react-open-weather';
import formatDate from '../Utils/dateConverter';
import getData from '../Utils/getData'

const FiveDayCard = ({ keyVal, cityName }) => {

    const [currentStatus, setCurrentStatus] = useState({})
    const [forecastData, setForecastData] = useState([])

    const getCurrentTemp = async (keyVal) => {
        const keyResponseData = await getData.currentConditions(keyVal)
        const res = keyResponseData[0]
        setCurrentStatus({
            temperature: res.Temperature.Metric.Value,
            description: res.WeatherText,
            date: res.LocalObservationDateTime,
            min: res.TemperatureSummary.Past24HourRange.Minimum.Metric.Value,
            max: res.TemperatureSummary.Past24HourRange.Maximum.Metric.Value,
            wind: res.Wind.Speed.Metric.Value,
            humidity: res.RelativeHumidity
        })
    }

    const getForecastData = async (keyVal) => {
        const keyResponseData = await getData.forecasts(keyVal)
        const mapped = keyResponseData.DailyForecasts.map((item, index) => {
            return (
                {
                    key: index,
                    date: formatDate(item.Date),
                    description: item.Day.IconPhrase,
                    icon: '',
                    temperature: { min: item.Temperature.Minimum.Value, max: item.Temperature.Maximum.Value },
                }
            )
        })
        setForecastData(mapped)
    }

    useEffect(() => {
        getCurrentTemp(keyVal)
        getForecastData(keyVal)
    }, [keyVal]);

    const cardData = {
        forecast: forecastData,
        current: {
            date: formatDate(currentStatus.date),
            description: currentStatus.description,
            icon: '',
            temperature: { current: currentStatus.temperature, min: currentStatus.min, max: currentStatus.max },
            wind: currentStatus.wind,
            humidity: currentStatus.humidity,
        },
    };

    return (
        <div >
            <ReactWeather
                data={cardData}
                lang="en"
                locationLabel={cityName}
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
        </div>
    );
}
export default FiveDayCard;