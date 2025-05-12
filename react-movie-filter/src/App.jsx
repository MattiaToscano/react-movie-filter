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

  return (
    <div className="container">
      <h1 className="lista-film">Movie Filter</h1>
      <ul className="list-group">
        {films.map((film, index) => (
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
