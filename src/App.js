import './App.css';
import MovielList from './components/MovielList';
import './index.css';
import React, {useState,useEffect} from 'react';
import Header from './components/Header'
import SearchBox from './components/SearchBox'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1c06d092`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue])

  return (
    <div>
      <Header searchValue = {searchValue} setSearchValue = {setSearchValue}/>
      {/* <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue}/> */}
      <MovielList movies = {movies}></MovielList>
    </div>
  );
}

export default App;
