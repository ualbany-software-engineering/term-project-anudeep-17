import React, { useEffect, useState } from 'react'
import {DisplayHome} from './profileinforcard'
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import "./profile.css";

export const Profiles = () => {

   const [listOfUsers, setListOfUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3005/getprofile").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  

  return (
  
   <div>
      {
      listOfUsers.map((item) => {
        return <DisplayHome photo={item.photo} name={item.name} description={item.description} />;
      })
      }
    </div>
  )
}
