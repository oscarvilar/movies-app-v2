import '../App.css';
import MovielList from '../components/MovielList';
import '../index.css';
import React, {useState,useEffect} from 'react';
import SearchBox from '../components/SearchBox'
import { useRecoilState } from "recoil"
import { favouritesAtom } from '../favAtom';
import config from '../config.json';


function Home() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue])

   useEffect(() => { 
    var movieFavourites;
     if (JSON.parse(localStorage.getItem('react-movie-app-favourites')) == null){
      movieFavourites = [];
     }else{
        movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
        setFavourites(movieFavourites);
    }
   },[])


  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${config.API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
}

  const saveFav = (movie) =>{
    if(ifRepeated(movie,favourites)){
      alert("La pelicula ya esta en la lista de Favoritos");
    }else {
      const newFavouriteList = [...favourites, movie]
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }

  }

  const ifRepeated = (movie,[]) =>{

    var isRepeated = false;

    for (let i = 0; i < favourites.length; i++) {
      if(movie.imdbID == favourites[i].imdbID){
        isRepeated = true;
      }
    }
    return isRepeated;
  }

  return (
    <div className='cont'>
      <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
      <MovielList movies = {movies}  handleSaveFav = {saveFav} ></MovielList>
    </div>
  );
}

export default Home;
