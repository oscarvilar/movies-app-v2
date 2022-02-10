import React from 'react';

const SearchBox = (props) => {
  return (
  <div className='search-container'>
    <h2 className='text-3xl text-white mt-20 mr-10 ml-10'>Busca tus películas y series y haz click en la imagen para añadirlas a Favoritos</h2>
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
