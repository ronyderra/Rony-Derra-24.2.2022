import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete, CircularProgress } from '@mui/material';
import getData from '../Utils/getData'
import FiveDayCard from './FiveDayCard';

const SearchInput = () => {
    const [options, setOptions] = useState([]);
    const [apiKey, setApiKey] = useState("215854")
    const [cityName, setCityName] = useState('Tel Aviv')

    const onInputChangeHandel = async (value) => {
        console.log('Input:' + value)
        const response = await getData.autocomplete(value)
        if (response) {
            const items = response.map((item, id) => {
                return { cityName: item.LocalizedName, key: id, apiKey: item.Key }
            })
            setOptions(items)
        }
        else {
            setOptions([])
        }
    };

    const onChangeHandel = (value) => {
        if (value) {
            console.log(value.apiKey)
            setApiKey(value.apiKey)
            setCityName(value.cityName)
        }
    }

    return (
        <>
            <Autocomplete
                id="cityAutocomplete"
                style={{ width: '80%', margin: 'auto' }}
                options={options}
                getOptionLabel={(option) => option.cityName}
                defaultValue={{ cityName: "Tel Aviv" }}
                onInputChange={(event, newInputVal) => { onInputChangeHandel(newInputVal) }}
                onChange={(event, newChangeVal) => { onChangeHandel(newChangeVal) }}
                renderInput={(params) => { return <TextField {...params} label="Choose City" /> }}
            />
            <br />
            <br />
            <br />
            <FiveDayCard keyVal={apiKey} cityName={cityName} />
        </>
    );
}
export default SearchInput;
