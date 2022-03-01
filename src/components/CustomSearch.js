import React, { useState, useEffect } from 'react';
import FiveDayCard from './FiveDayCard';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux'
import { addFavorite } from '../Store/index'
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import API from '../Utils/getData'
import './CustomSearch'

const CustomSearch = () => {
    const [searchData, setSearchData] = useState('');
    const [KeyResponse, setKeyResponse] = useState('');
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([{}]);
    const dispatch = useDispatch()


    const onSubmit = async (chosenCity) => {
        const autocomplete = await API.get('locations/v1/cities/autocomplete?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&q=' + chosenCity)
        const key = autocomplete.data[0].Key
        setKeyResponse(autocomplete.data[0])
        const forecasts = await API.get(`forecasts/v1/daily/5day/` + key + `?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f&details=true&metric=true`)
        setKey(key)
        const forecastsSearchData = forecasts.data.DailyForecasts;
        setSearchData(forecastsSearchData)
    }

    useEffect(async () => {
        const topcities = await API.get('locations/v1/topcities/150?apikey=fdyjyD2XskiXjlWqEtPAXkZ2KhdMSG8f')
        setOptions(topcities.data)
        const telAvivIndex = topcities.data.findIndex(({ LocalizedName }) => LocalizedName === 'Tel Aviv')
        setValue(telAvivIndex)
    }, []);

    return (
        <div className='container'>
            <Autocomplete
                className='item'
                id="controllable-states-demo"
                value={value}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => { setInputValue(newInputValue); onSubmit(newInputValue) }}
                options={options}
                getOptionLabel={(option) => option.LocalizedName}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Choose City" />}
            />
            <Button className='item' onClick={() => dispatch(addFavorite(key))} >Add to favorites</Button>
            {searchData ? <FiveDayCard data={searchData} local={KeyResponse} /> : <div></div>}
        </div>
    );
}
export default CustomSearch
