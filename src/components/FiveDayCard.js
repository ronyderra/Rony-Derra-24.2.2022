import * as React from 'react';
import ReactWeather from 'react-open-weather';

const FiveDayCard = (props) => {

    const formatDate = (propDate) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const parsed = Date.parse(propDate)
        const dateString = new Date(parsed)
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", options)
    }

    const data = {
        forecast: [
            {
                date: formatDate(props.data[1].Date),
                description: props.data[1].Day.IconPhrase,
                temperature: { min: props.data[1].Temperature.Minimum.Value, max: props.data[1].Temperature.Maximum.Value },
                wind: '2',
                humidity: 60,
            },
            {
                date: formatDate(props.data[4].Date),
                description: props.data[4].Day.IconPhrase,
                temperature: { min: props.data[4].Temperature.Minimum.Value, max: props.data[4].Temperature.Maximum.Value },
                wind: '3',
                humidity: 67,
            },
            {
                date: formatDate(props.data[3].Date),
                description: props.data[3].Day.IconPhrase,
                temperature: { min: props.data[3].Temperature.Minimum.Value, max: props.data[3].Temperature.Maximum.Value },
                wind: '3',
                humidity: 67,
            },
            {
                date: formatDate(props.data[2].Date),
                description: props.data[2].Day.IconPhrase,
                temperature: { min: props.data[2].Temperature.Minimum.Value, max: props.data[2].Temperature.Maximum.Value  },
                wind: '3',
                humidity: 67,
            },
            {
                date: formatDate(props.data[1].Date),
                description: props.data[1].Day.IconPhrase,
                temperature: { min: props.data[1].Temperature.Minimum.Value, max: props.data[1].Temperature.Maximum.Value  },
                wind: '3',
                humidity: 67,
            },
        ],
        current: {
            date: formatDate(props.data[0].Date),
            description: props.data[0].Day.IconPhrase,
            temperature: { current: '-2', min: props.data[0].Temperature.Minimum.Value, max: props.data[0].Temperature.Maximum.Value  },
            wind: '2',
            humidity: 90,
            icon: ''
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
export default FiveDayCard;