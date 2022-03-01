import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FiveDayCard from './FiveDayCard';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux'
import { addFavorite } from '../Store/index'
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import API from '../Utils/getData'

const CustomSearch = () => {
    const [searchData, setSearchData] = useState('');
    const [KeyResponse, setKeyResponse] = useState('');
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([{ LocalizedName: 'Santiago' }]);

    const dispatch = useDispatch()

    const onSubmit = async (chosenCity) => {
        const KeyResponse = await API.get('locations/v1/cities/autocomplete?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&q=' + chosenCity)
        const key = KeyResponse.data[0].Key
        setKeyResponse(KeyResponse.data[0])
        const forecastReasponse = await API.get(`forecasts/v1/daily/5day/` + key + `?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true&metric=true`)
        setKey(key)
        const forecast = forecastReasponse.data.DailyForecasts;
        setSearchData(forecast)
    }

    useEffect(async () => {
        const res = await API.get('locations/v1/topcities/150?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
        const topOptions = res.data
        setOptions(topOptions)
        const resp = topOptions.findIndex(({ LocalizedName }) => LocalizedName === 'Tel Aviv')
        setValue(resp)
    }, []);

    return (
        <div style={{ margin:'auto'}}>
            <Autocomplete
                id="controllable-states-demo"
                value={value}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {setInputValue(newInputValue); onSubmit(newInputValue)}}
                options={options}
                getOptionLabel={(option) => option.LocalizedName}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Choose City" />}
            />
            <Button onClick={() => dispatch(addFavorite(key))} >Add to favorites</Button>
            {searchData ? <FiveDayCard data={searchData} local={KeyResponse} /> : <div></div>}
        </div>
    );
}
export default CustomSearch
