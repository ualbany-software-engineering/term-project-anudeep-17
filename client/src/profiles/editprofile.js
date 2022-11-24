import React, { useEffect, useState } from 'react'
import Axios from "axios";
import {useNavigate} from "react-router-dom";

export const Editprofile = () => {

    const navigate = useNavigate();
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo1, setPhoto1] = useState("");
    const [name1, setName1] = useState("");
    const [description1, setDescription1] = useState("");
    
    const edituser = () => {
        Axios.post("http://localhost:3005/edit", {_id:"637afabb60ed422ceccf0da5",photo, name, description}).then((response) => {
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
            if(response.data[i]._id.includes("637afabb60ed422ceccf0da5"))
            {
              setName(response.data[i].name);
              setPhoto(response.data[i].photo);
              setDescription(response.data[i].description);
            }
          }
        });
      }, []);

  return (
    <div>
    <div className='container form'> <>
    <h1>edit Posts to Profile</h1>
    <input type="text" value={photo} onChange={handleChange_photo}/>
    <input type="text" value={name} onChange={handleChange_name}/>
    <input type="text" value={description} onChange={handleChange_desc}/>

    <button className='btn btn-primary' onClick = {edituser}>edit</button>
    <button className='btn btn-primary' onClick = {()=>{navigate("/")}}>cancel</button>
    </>
    </div>
    </div>
  )
}
