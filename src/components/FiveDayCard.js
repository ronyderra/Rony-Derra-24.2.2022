import * as React from 'react';
import ReactWeather from 'react-open-weather';



export default function FiveDayCard(props) {

    

    const data = {
        forecast: [
            {
                date: props.data[1].Date,
                description: 'Clear',
                temperature: { min: '-0', max: '6' },
                wind: '2',
                humidity: 60,
            },
            {
                date: props.data[4].Date,
                description: 'Clouds',
                temperature: { min: '-1', max: '6' },
                wind: '3',
                humidity: 67,
            },
            {
                date: props.data[3].Date,
                description: 'Clouds',
                temperature: { min: '-1', max: '6' },
                wind: '3',
                humidity: 67,
            },
            {
                date: props.data[2].Date,
                description: 'Clouds',
                temperature: { min: '-1', max: '6' },
                wind: '3',
                humidity: 67,
            },
            {
                date: props.data[1].Date,
                description: 'Clouds',
                temperature: { min: '-1', max: '6' },
                wind: '3',
                humidity: 67,
            },
        ],
        current: {
            date: props.data[0].Date,
            description: 'Clear',
            temperature: { current: '-2', min: -3, max: 1 },
            wind: '2',
            humidity: 90,
            icon: "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"
        },
    };

    return (
        <div >
            <ReactWeather
                data={data}
                lang="en"
                locationLabel={props.local.LocalizedName}
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
        </div>
    );
}