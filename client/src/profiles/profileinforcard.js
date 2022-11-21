import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const DisplayHome = ({photo, name, description}) =>{
  return (
    <>
    <div class="container">
    <div class="row">
        <div class="col-sm">
            <img class="rounded float-left" src={photo} width="300px" height="300px" />
        </div>
        <div class="col-sm">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    </div>
    </div>
    </>
  )
}