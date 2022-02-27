import * as React from 'react';
import SearchField from "react-search-field";
import axios from 'axios';
import FiveDayCard from './FiveDayCard';
import { margin } from '@mui/system';

export default function CustomSearch() {

    const [searchData, setSearchData] = React.useState('');
    const [KeyResponse, setKeyResponse] = React.useState('');


    const onSubmit = async (val) => {
        
        const KeyResponse = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&q=' + val)
        const key = KeyResponse.data[0].Key
        setKeyResponse(KeyResponse.data[0])
        const forecastReasponse = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/` + key + `?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f`)
        const forecast = forecastReasponse.data;
        console.log(forecast.DailyForecasts)
        setSearchData(forecast.DailyForecasts)
    }

    return (
        <div style={{margin:'auto'}}>
            <SearchField
                placeholder="Search..."
                searchText=""
                classNames="test-class"
                onEnter={(val) => onSubmit(val)}
                onSearchClick={(val) => onSubmit(val)}
                sx={{tp:'5px'}}
            />
            <br />
            <br />
            <br />
            { searchData ? <FiveDayCard data={searchData} local={KeyResponse} />  : <div></div>}
           
        </div>
    );
}