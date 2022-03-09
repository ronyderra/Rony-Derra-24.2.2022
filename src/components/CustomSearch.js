import React, { useState, useEffect } from 'react';
import FiveDayCard from './FiveDayCard';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux'
import { addFavorite } from '../Store/index'
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import getData from '../Utils/getData'
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
        const autocomplete = await getData.autocomplete(chosenCity)
        const key = autocomplete[0].Key
        setKeyResponse(autocomplete[0])
        const forecasts = await getData.forecasts(key)
        setKey(key)
        const forecastsSearchData = forecasts.DailyForecasts;
        setSearchData(forecastsSearchData)
    }

    useEffect(async () => {
        const topcities = await getData.locations()
        setOptions(topcities)
    }, []);

    return (
        <div className='container'>
            <Autocomplete
                className='item'
                id="controllable-states-demo"
                value={value}
                onChange={(event, newValue) => { setValue(newValue); }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => { setInputValue(newInputValue); onSubmit(newInputValue) }}
                options={options}
                getOptionLabel={(option) => option ? option.LocalizedName : 'Tel Aviv'}
                sx={{ width: '80%', margin: 'auto' }}
                renderInput={(params) => <TextField {...params} label="Choose City" />}
                disableClearable={true}
            />
            <br />
            <Button className='item' onClick={() => dispatch(addFavorite(key))} >Add to favorites</Button>
            {searchData ? <FiveDayCard data={searchData} local={KeyResponse} /> : <div></div>}
        </div>
    );
}
export default CustomSearch
