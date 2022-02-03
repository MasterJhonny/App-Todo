import React from 'react';
import './TodoSearch.css';

function TodoSearcher ({ searchValue, setSearchValue }) {
    
    // function at buscar todoSearcher
    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    } 

    return ( 
        <input 
            onChange={onSearchValue}
            value={searchValue}
            placeholder="Buscar Todo"/>
    );
}

export { TodoSearcher };