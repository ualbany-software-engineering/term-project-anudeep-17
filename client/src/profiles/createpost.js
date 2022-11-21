import React, { useEffect, useState } from 'react'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";

export const Setprofile = () =>
{
const [photo, setPhoto] = useState("");
const [name, setname] = useState("");
const [desc, setdesc] = useState("");
const navigate = useNavigate();

const createuser =() =>{
    console.log(name);
    Axios.post(`http://localhost:3005/createuser`, {
        photo,
        name,
        desc
    }).then((response) =>{
        alert("added");
        navigate("/");
    })
}
return(

    <>
    <input type="text" placeholder="Photo...." onChange={(e) => setPhoto(e.target.value) }/>
    <input type="text" placeholder="Name...." onChange={(e) => setname(e.target.value) }/>
    <input type="text" placeholder="Desc...." onChange={(e) => setdesc(e.target.value) }/>

    <button onClick = {createuser}>createruser</button>
    </>
)
}

