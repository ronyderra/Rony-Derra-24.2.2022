import * as React from 'react';
import SearchField from "react-search-field";
export default function CustomSearch() {

    const [value, setValue] = React.useState('');
    const [enterVal, setEnterVal] = React.useState('');

    return (
        <div>
            <br />
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${enterVal}'`}</div>

            <SearchField
                placeholder="Search..."
                searchText=""
                classNames="test-class"
                onChange={(val)=>setValue(val)}
                onEnter={(val)=>setEnterVal(val)}
                onSearchClick={(val)=>setEnterVal(val)}
            />
        </div>
    );
}