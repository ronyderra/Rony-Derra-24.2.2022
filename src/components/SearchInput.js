import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete, CircularProgress } from '@mui/material';
import getData from '../Utils/getData'

export default function Asynchronous() {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([{}]);
    const loading = open && options.length === 0;

    const onChangeHandle = async (value) => {
        const response = await getData.autocomplete(value)
        if (response) {
            const items = response.map((item, id) => { return { name: item.LocalizedName, key: id } })
            setOptions(items)
        }
        else {
            setOptions([])
            setOpen(false)
        }
    };

    const handleInputChang = (ev, newValue) => {
        // console.log(ev)
        // console.log(newValue)
    }

    useEffect(() => {if(!open) {setOptions([])}}, [open]);

    return (

        <Autocomplete
            id="asynchronous-demo"
            style={{width:'80%', margin:'auto'}}
            open={open}
            onOpen={() => {setOpen(true)}}
            onClose={() => {setOpen(false)}}
            getOptionLabel={option => option.name}
            options={options}
            loading={loading}
            onInputChange={(event, newInputVal) => {handleInputChang(event, newInputVal)}}


            renderInput={params => (
                <TextField
                    {...params}
                    label="Choose City"
                    variant="outlined"
                    onChange={ev => {
                        if (ev.target.value !== "" || ev.target.value !== null) {
                            onChangeHandle(ev.target.value);
                        }
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />


    );
}
