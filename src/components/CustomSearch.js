import * as React from 'react';
import SearchField from "react-search-field";
import axios from 'axios';

export default function CustomSearch() {

    const onSubmit = async (val) => {
        const KeyResponse = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&q=' + val)
        const key = KeyResponse.data[0].Key
        const forecastReasponse = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/` + key + `?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f`)
        const forecast = forecastReasponse.data;
        console.log(forecast)
        return (forecast)
    }

    return (
        <div>
            <br />
            <SearchField
                placeholder="Search..."
                searchText=""
                classNames="test-class"
                onEnter={(val) => onSubmit(val)}
                onSearchClick={(val) => onSubmit(val)}
            />
        </div>
    );
}