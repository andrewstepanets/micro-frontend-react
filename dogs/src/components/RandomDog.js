import React from "react";
import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import { getRandomDog } from '../utils'


function RandomDog() {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery('dog', getRandomDog)


  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="container__header">
      <h3>Dog of the day</h3>
      <div className="button__container">
        <button onClick={() => refetch()}>New Dog</button>
      </div>
      <div className="img__container">
        {
          (isLoading || isFetching) ? (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          ) : (
            <img src={data} alt="Dog" />
          )
        }
      </div>
    </div>
  );
}

export default RandomDog;
