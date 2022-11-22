import React, { useEffect } from 'react'
import Axios from "axios";
import {useNavigate} from "react-router-dom";

export const Editprofile = () => {

    const navigate = useNavigate();
    const edituser = () => {
        Axios.post("http://localhost:3005/editprofile", {
            id: "637affe160ed422ceccf0e0a",
            photo: "https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg",
        }).then((response) => {
            console.log("edited")
        });
        // navigate("/")
      };

    useEffect(()=>{
     edituser()   
    })
  return (
    <div>
        hi 
    </div>
  )
}
