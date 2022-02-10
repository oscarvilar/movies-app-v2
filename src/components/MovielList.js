import React from 'react';

const MovielList = (props) => {
  return (
    <>
    <div className='container justify-center container mx-auto'>
    <div  className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {props.movies.map((movie) => (
            <a key={movie.imdbID} className="group" onClick={()=>props.handleSaveFav(movie)}>
              <div  className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="poster-height w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-lg font-medium text-white-900">{movie.Title}</h3>
              <p className="mt-1 text-lg font-medium text-white-900">{movie.Year}</p>
            </a>
          ))}
        </div>
        </div>
  </>
  );
};

export default MovielList;
