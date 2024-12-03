import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {
    const location = useLocation();
    const pathName=location.pathname;
    const queryParams=new URLSearchParams(location.search);
    console.log(queryParams);

    const {id}=useParams();
  return (
    <div>
      <h1>Path Name: {pathName}</h1>
      <h1>Base path Name: {pathName.split("/")[1]}</h1>
      <h1>ID: {id}</h1>
      <h1>username: {queryParams.get('username')}</h1>
      <h1>Password: {queryParams.get('password')}</h1>
    </div>
  )
}

export default Details
