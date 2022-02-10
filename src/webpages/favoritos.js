import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { favouritesAtom } from '../atom';
import Header from '../components/Header';
import MovielList from '../components/MovielList';


const Favoritos = () => {
    const [favourites, setFavourites] = useRecoilState(favouritesAtom);
    console.log(favourites);
    
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('react-movie-app-favourites')) == null){
            const movieFavourites = [];
           }else{
                const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
                setFavourites(movieFavourites);
            }
      },[])

      const saveToLocalStorage = (items) =>{
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    }

      const removeFavouriteMovie = (movie) =>{
        const newFavouriteList = favourites.filter((favourite)=>favourite.imdbID !== movie.imdbID)
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
      }
    
      return (
        <div>
            <div className='search-container'>
                <h2 className='text-3xl text-white mt-20 ml-10 mr-10'>Puedes eliminar una película o serie de favoritos haciendo click en la imagen</h2>
            </div>
            <MovielList movies={favourites} handleSaveFav = {removeFavouriteMovie} />
        </div>
    );
};
export default Favoritos;