import * as React from 'react';
import SearchField from "react-search-field";
import axios from 'axios';
import FiveDayCard from './FiveDayCard';
import { Button } from '@mui/material';
import {  useDispatch } from 'react-redux'
import {addFavorite} from '../Store/index'

const CustomSearch = () => {
    const [searchData, setSearchData] = React.useState('');
    const [KeyResponse, setKeyResponse] = React.useState('');
    const [key, setKey] = React.useState('');
    const dispatch = useDispatch()

    const onSubmit = async (val) => {
        const KeyResponse = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&q=' + val)
        const key = KeyResponse.data[0].Key
        setKeyResponse(KeyResponse.data[0])
        const forecastReasponse = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/` + key + `?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f`)
        setKey(key)
        const forecast = forecastReasponse.data;
        setSearchData(forecast.DailyForecasts)
    }

    return (
        <div style={{ margin: 'auto' }}>
            <SearchField
                placeholder="Search..."
                searchText=""
                classNames="test-class"
                onEnter={(val) => onSubmit(val)}
                onSearchClick={(val) => onSubmit(val)}
                sx={{ tp: '5px' }}
            />
            <Button onClick={() => dispatch(addFavorite(key))} >Add to favorites</Button>
            <br />
            <br />
            <br />
            {searchData ? <FiveDayCard data={searchData} local={KeyResponse} /> : <div></div>}

        </div>
    );
}
export default CustomSearch