import { useContext } from 'react';

import { Button } from '../components/Button';
import { MoviesCategoriesContext } from '../MoviesCategoriesContext';

export function SideBar() {
  const { genre, genreId } = useContext(MoviesCategoriesContext);
  
  const [ genres, ] = genre;
  const [ selectedGenreId , setSelectedGenreId ] = genreId;

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={genre.id}
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}