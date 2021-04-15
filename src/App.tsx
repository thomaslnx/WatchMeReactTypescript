import { useContext } from 'react';
import { MoviesCategoriesContext } from './MoviesCategoriesContext';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const { genre, genreId, genreSelected, movie } = useContext(MoviesCategoriesContext);

  const [ selectedGenre, setSelectedGenre ] = genreSelected;
  const [ movies, setMovies ] = movie;
  
  return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar />

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
      </div>
  )
}