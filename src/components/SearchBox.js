import React from 'react';

const SearchBox = (props) => {
  return (
  <div className='search-container'>
    <input 
        className='form-control ' 
        placeholder='Escribe para buscar...' 
        onChange = {(e)=>props.setSearchValue(e.target.value)}
        value={props.value}>
    </input>
  </div>
  );
};

export default SearchBox;
