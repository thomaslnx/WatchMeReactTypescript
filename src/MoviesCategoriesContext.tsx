import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import { api } from './services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesCategoriesProviderProps {
  children: ReactNode;
}

interface MoviesContextProps {
  genreId: [number, Dispatch<SetStateAction<number>>],
  genre: [GenreResponseProps[], Dispatch<GenreResponseProps[]>],
  movie: [MovieProps[], Dispatch<MovieProps[]>],
  genreSelected: [GenreResponseProps, Dispatch<GenreResponseProps>]
}

export const MoviesCategoriesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

export function MoviesCategoriesProvider({ children }: MoviesCategoriesProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  const contextData:MoviesContextProps = {
    genreId: [selectedGenreId, setSelectedGenreId],
    genre: [genres, setGenres],
    movie: [movies, setMovies],
    genreSelected: [selectedGenre, setSelectedGenre]
  }

  return (
    <MoviesCategoriesContext.Provider value={contextData}>
      {children}
    </MoviesCategoriesContext.Provider>
  )

}