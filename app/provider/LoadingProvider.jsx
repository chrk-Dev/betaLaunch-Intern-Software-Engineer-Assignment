import React, { createContext, useContext, useState } from 'react';
import { LoadingContext } from "../context/LoadingContext";
import Layout from '../components/Layout';


const LoadingProvider = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{isLoading}}>
      <Layout/>
    </LoadingContext.Provider>
  )
}

export { LoadingProvider };


