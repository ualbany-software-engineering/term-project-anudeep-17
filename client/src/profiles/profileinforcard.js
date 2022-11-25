import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const DisplayHome = ({photo, name, description}) =>{
  return (
    <>
    <div class="container">
    <div class="row">
        <div class="col">
            <img class="rounded float-left" src={photo} width="350px" height="300px" />
        </div>
        <div class="col profile">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    </div>
    <hr className='breaker'/>
    {/* <br/> */}
    </div>
    </>
  )
}