import React, { useEffect, useState } from 'react'
import Axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export const Editprofile = () => {

    const navigate = useNavigate();
    const [photo, setPhoto] = useState("");
    const [_id, setID] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const location = useLocation();
    const user = localStorage.getItem("username");
    var username = JSON.parse(user);

    const edituser = () => {
        Axios.post("http://localhost:3005/edit", {_id,photo, name, description, username}).then((response) => {
            console.log("edited")
        });
        navigate("/")
      };

      const handleChange_photo = (event) => {
        setPhoto(event.target.value);
    };
      const handleChange_name = (event) => {
        setName(event.target.value);
    };
      const handleChange_desc = (event) => {
        setDescription(event.target.value);
    };

      useEffect(() => {
        
        Axios.get("http://localhost:3005/getprofile").then((response) => {
          for(let i = 0; i< response.data.length;i++)
          {
            if(response.data[i].username.includes(username))
            {
              setID(response.data[i]._id);
              setName(response.data[i].name);
              setPhoto(response.data[i].photo);
              setDescription(response.data[i].description);
            }
          }
        });
      }, []);

  return (
    <div className='editor profiles'>
    <div className='container form pro profile'> <>
    <h1>Edit Posts to Profile</h1>
    <input type="text" value={photo} className="form-control" onChange={handleChange_photo}/>
    <input type="text" value={name} className="form-control" onChange={handleChange_name}/>
    <input type="text" value={description} className="form-control"  onChange={handleChange_desc}/>

    <button className='btn btn-primary' onClick = {edituser}>edit</button> &nbsp;
    <button className='btn btn-primary' onClick = {()=>{navigate("/")}}>cancel</button>
    </>
    </div>
    </div>
  )
}
