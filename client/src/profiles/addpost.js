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
    const location = useLocation();
    var username = location.state.username;
    
    const addUser = () => {
        Axios.post("http://44.202.145.129:3005/createuser", {
          photo,
          name,
          description,
          username
        }).then((response) => {
          setListOfUsers([
            ...listOfUsers,
            {
              photo,
              name,
              description,
            },
          ]);
          navigate("/")
        });
      };


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
        <div className='editor profiles'>
        <div className='container form pro profile'> <>
        <h1>Add New Posts to Profile</h1>
        <input type="text" placeholder="Photo...." className="form-control" onChange={(e) => setPhoto(e.target.value) }/>
        <input type="text" placeholder="Name...." className="form-control" onChange={(e) => setName(e.target.value) }/>
        <input type="text" placeholder="Desc...." className="form-control" onChange={(e) => setDescription(e.target.value) }/>
    
        <button className='btn btn-primary' onClick = {addUser}>Add post</button>
        </>
        </div>
        </div>
      )
  
    }

}
