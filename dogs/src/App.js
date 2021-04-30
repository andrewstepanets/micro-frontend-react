import React from 'react'
import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import Nav from './Nav'

import { getRandomDog } from './utils'

import './App.scss';

function App() {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery('dog', getRandomDog, {
    manual: true
  })

  if (isLoading) {
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  if (isFetching) {
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
  }

  return (
    <div className="wrapper">
      <Nav refetch={refetch} />
      <section className="container">
        <img src={data} alt="Dog name" />

      </section>
    </div>
  );
}

export default App;
