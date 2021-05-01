import React from "react";
import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import { getRandomCat } from '../utils'

export default function RandomCat() {

  const { data, error, isLoading, isError, isFetching, refetch } = useQuery('cat', getRandomCat, {
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
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div className="button">
          <button onClick={() => refetch()}>New Cat</button>
        </div>
        <div className="img__container">
          <img src={data} width="400px" alt="Cat" />
        </div>
      </header>
    </div>
  );
}
