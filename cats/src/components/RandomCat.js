import React from "react";
import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import { getRandomCat } from '../utils'

export default function RandomCat() {


  const { data, error, isLoading, isError, isFetching, refetch } = useQuery('cat', getRandomCat)


  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="container__header">
      <h3>Cat of the day</h3>
      <div className="button__container">
        <button onClick={() => refetch()}>New Cat</button>
      </div>
      <div className="img__container">
        {
          (isLoading || isFetching) ? (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          ) : (
            <img src={data} alt="Cat" />
          )
        }
      </div>
    </div>
  );
}
