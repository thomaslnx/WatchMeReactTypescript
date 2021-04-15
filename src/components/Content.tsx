import { useContext } from 'react';

import { MoviesCategoriesContext } from '../MoviesCategoriesContext';

import { MovieCard } from '../components/MovieCard';

export function Content() {
  const { movie, genreSelected } = useContext(MoviesCategoriesContext);
  
  const [ selectedGenre ] = genreSelected;
  const [ movies ] = movie;
  return(
    <div className="container">
          <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>

          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
                ))}
            </div>
          </main>
        </div>
  )
}