import { render } from 'react-dom'
import { MoviesCategoriesProvider } from './MoviesCategoriesContext';

import { App } from './App'

render(
  <MoviesCategoriesProvider>
    <App />
  </MoviesCategoriesProvider>, 
  document.getElementById('root')
)