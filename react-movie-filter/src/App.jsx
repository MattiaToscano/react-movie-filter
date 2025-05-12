import React from 'react'
import { useState, useEffect } from 'react'

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    const filtered = search === '' ? films : films.filter(film => film.genre === search);
    setFilteredFilms(filtered);
  }, [search])

  return (
    <div className="container">
      <h1 className="lista-film">Movie Filter</h1>
      <select className="form-select" onChange={(e) => setSearch(e.target.value)} value={search}>
        <option value="">Tutti i generi</option>
        {[...new Set(films.map(film => film.genre))].map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <ul className="list-group">
        {filteredFilms.map((film) => (
          <li key={film.title} className="list-group-item">
            <h2>{film.title}</h2>
            <p>{film.genre}</p>
          </li>
        ))}
      </ul>
      <form action="">
        <div className="mb-3">
          <input type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={newFilm}
            placeholder="Aggiungi un film">
          </input>
        </div>
      </form>
    </div>
  )
}

export default App
