import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete, CircularProgress } from '@mui/material';
import getData from '../Utils/getData'
import FiveDayCard from './FiveDayCard';

const SearchInput = () => {
    const [options, setOptions] = useState([]);
    const [key, setKey] = useState("215854")
    const [cityName, setCityName] = useState('Tel Aviv')

    const onChangeHandle = async (value) => {
        const response = await getData.autocomplete(value)
        if (response) {
            const items = response.map((item, id) => { return { cityName: item.LocalizedName, key: id } })
            setOptions(items)
        }
        else {
            setOptions([])
        }
    };


    return (
        <>
            <Autocomplete
                id="cityAutocomplete"
                style={{ width: '80%', margin: 'auto' }}
                options={options}
                getOptionLabel={(option) => option.cityName}
                defaultValue={{ cityName: "Tel Aviv" }}
               
                onInputChange={(event, newInputVal) => { onChangeHandle(newInputVal) }}
               
                renderInput={(params) => { return <TextField {...params} label="Choose City" /> }}
            />
            <br />
            <br />
            <br />
            <FiveDayCard keyVal={key} cityName={cityName} />
        </>
    );
}
export default SearchInput;
