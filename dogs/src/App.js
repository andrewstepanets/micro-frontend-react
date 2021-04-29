import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss';

function App() {
  const [dogImg, setDogImg] = useState(null)

  const fetchDog = () => {
    setDogImg('loading')
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => setDogImg(res.data.message))

  }

  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <div className="wrapper">
      <header>
        <h2>Dog of the day</h2>
        <button onClick={() => fetchDog()}>New Dog</button>
      </header>
      <section className="container">
        {
          dogImg !== 'loading'
            ? (
              <img src={dogImg} alt="Dog name" />
            ) : (
              <h2>Loading ...</h2>
            )
        }

      </section>
    </div>
  );
}

export default App;
