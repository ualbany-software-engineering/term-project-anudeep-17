import React, { useEffect, useState } from 'react'
import {DisplayHome} from './profileinforcard'
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import "./profile.css";

export const Profiles = () => {
   const [listOfUsers, setListOfUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://44.202.145.129:3005/getprofile").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  

  return (
  
   <div className='profiles'>
    <div className='bgset1'>
      <h5>518 Assignment</h5> 
    </div>
    <div className='bgset2'> 
      <h1>PROFILES</h1>
    </div>
    <div className='container pro'>
      {
      listOfUsers.map((item) => {
        return <DisplayHome photo={item.photo} name={item.name} description={item.description} />
      })
    }
    </div>
    </div>
  )
}
