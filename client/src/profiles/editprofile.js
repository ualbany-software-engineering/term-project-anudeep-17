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
      

      useEffect(() => {
        
        Axios.get("http://localhost:3005/getprofile").then((response) => {
          for(let i = 0; i< response.data.length; i++)
          {
            if(response.data[i]._id.includes("637afabb60ed422ceccf0da5"))
            {
              setName1(response.data[i].name);
              setPhoto1(response.data[i].photo);
              setDescription1(response.data[i].description);
            }
          }
        })
      }, []);

  return (
    <div>
    <div className='container form'> <>
    <h1>edit Posts to Profile</h1>
    <input type="text" placeholder={photo1} onChange={(e) => setPhoto(e.target.value) }/>
    <input type="text" placeholder={name1} onChange={(e) => setName(e.target.value) }/>
    <input type="text" placeholder={description1} onChange={(e) => setDescription(e.target.value) }/>

    <button className='btn btn-primary' onClick = {edituser}>edit</button>
    <button className='btn btn-primary' onClick = {()=>{navigate("/")}}>cancel</button>
    </>
    </div>
    </div>
  )
}
