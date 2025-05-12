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
  const [titleSearch, setTitleSearch] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(films);


  useEffect(() => {
    setFilteredFilms(films.filter(film => {
      const matchesGenre = search === '' || film.genre === search;
      const matchesTitle = titleSearch === '' ||
        film.title.toLowerCase().includes(titleSearch.toLowerCase());
      return matchesGenre && matchesTitle;
    }));
  }, [search, titleSearch]);

  return (
    <div className="container">
      <h1 className="lista-film">Movie Filter</h1>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca film per titolo"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
        />
      </div>

      <select className="form-select mb-3" onChange={(e) => setSearch(e.target.value)} value={search}>
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
    </div>
  )
}

export default App
