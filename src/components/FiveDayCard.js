import React, { useState, useEffect } from 'react';
import ReactWeather from 'react-open-weather';
import formatDate from '../Utils/dateConverter';
import API from '../Utils/getData'


const FiveDayCard = ({ data, local }) => {
    const currentconditionsUrl = 'currentconditions/v1/'
    const [currentTemp, setCurrentTemp] = useState('')

    const getCurrentTemp = async (key) => {
        const KeyResponseData = await API.get(currentconditionsUrl + key + '?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true')
        const temperature = KeyResponseData.data[0].Temperature.Metric.Value
        setCurrentTemp(temperature)
    }

    useEffect(() => {
        getCurrentTemp(local.Key)
    });

    const cardData = {
        forecast: [
            {
                date: formatDate(data[1].Date),
                description: data[1].Day.IconPhrase,
                temperature: { min: data[1].Temperature.Minimum.Value, max: data[1].Temperature.Maximum.Value },
                wind: '2',
                humidity: 60,
            },
            {
                date: formatDate(data[4].Date),
                description: data[4].Day.IconPhrase,
                temperature: { min: data[4].Temperature.Minimum.Value, max: data[4].Temperature.Maximum.Value },
                wind: '3',
                humidity: 67,
            },
            {
                date: formatDate(data[3].Date),
                description: data[3].Day.IconPhrase,
                temperature: { min: data[3].Temperature.Minimum.Value, max: data[3].Temperature.Maximum.Value },
                wind: '3',
                humidity: 67,
            },
            {
                date: formatDate(data[2].Date),
                description: data[2].Day.IconPhrase,
                temperature: { min: data[2].Temperature.Minimum.Value, max: data[2].Temperature.Maximum.Value },
                wind: '3',
                humidity: 67,
            },
            {
                date: formatDate(data[1].Date),
                description: data[1].Day.IconPhrase,
                temperature: { min: data[1].Temperature.Minimum.Value, max: data[1].Temperature.Maximum.Value },
                wind: '3',
                humidity: 67,
            },
        ],
        current: {
            date: formatDate(data[0].Date),
            description: data[0].Day.IconPhrase,
            temperature: { current: currentTemp, min: data[0].Temperature.Minimum.Value, max: data[0].Temperature.Maximum.Value },
            wind: data[0].Day.Wind.Speed.Value,
            humidity: 90,
            icon: ''
        },
    };

    return (
        <div >
            <ReactWeather
                data={cardData}
                lang="en"
                locationLabel={local.LocalizedName}
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
        </div>
    );
}
export default FiveDayCard;