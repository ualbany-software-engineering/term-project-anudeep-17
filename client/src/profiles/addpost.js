import React, { useEffect, useState } from 'react'
import Axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import "./profile.css";

export const Addpost = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
  
    const addUser = () => {
        Axios.post("http://localhost:3005/createuser", {
          photo,
          name,
          description,
        }).then((response) => {
          setListOfUsers([
            ...listOfUsers,
            {
              photo,
              name,
             description
            },
          ]);
        });
        navigate("/")
      };

      const location = useLocation();
      var check = false;

     
      if(check !== null)
        {
          if(location.state.loggedin)
          {
            check = true;
          }
          else
          {
            check = false
          }
        }
      console.log(check);


    if(check === false)
    {
      return (
        <div>
          <h1>Please Login First</h1>
          <a className='btn btn-primary' href = "/login">go to login</a>
        </div>
      )
    }
    else
    {
      return (
        <div className='container form'> <>
        <h1>Add New Posts to Profile</h1>
        <input type="text" placeholder="Photo...." onChange={(e) => setPhoto(e.target.value) }/>
        <input type="text" placeholder="Name...." onChange={(e) => setName(e.target.value) }/>
        <input type="text" placeholder="Desc...." onChange={(e) => setDescription(e.target.value) }/>
    
        <button className='btn btn-primary' onClick = {addUser}>Add post</button>
        </>
        </div>
      )
  
    }

}
