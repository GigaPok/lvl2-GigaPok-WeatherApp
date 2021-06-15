import React, { useEffect, useState } from 'react';

const Search = (props) => {

    const [data, setData] = useState()

    useEffect(
       () => {
           props.setSearch('Tbilisi')
       }, [])

    return (
        <div>
            <input placeholder="Enter" type="text" value={data} onChange={(e) => setData(e.target.value) }/>
            <button onClick={() => props.setSearch(data)}>Search</button>
        </div>
    );
};

export default Search;