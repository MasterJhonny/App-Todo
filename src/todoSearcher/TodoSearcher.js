import React from 'react';
import './TodoSearch.css';

function TodoSearcher () {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    } 

    return [ 
        <input 
            onChange={onSearchValue}
            value={searchValue}
            placeholder="Buscar Todo"/>
        , 
        <p>{searchValue}</p>
    ];
}

export { TodoSearcher };