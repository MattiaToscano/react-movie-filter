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
  return (
    <div className="container">
      <h1 className="lista-film">Movie Filter</h1>
      <select className="form-select" onChange={(e) => setSearch(e.target.value)}>
        {films.map((film) => (
          <option key={film.title} value={film.genre}>{film.genre}</option>
        ))}
      </select>
      <ul className="list-group">
        {films.map((film) => (
          <li key={film.id} className="list-group-item">
            <h2>{film.title}</h2>
            <p>{film.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
