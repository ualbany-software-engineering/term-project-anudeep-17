import React, { useEffect, useState } from 'react'
import {DisplayHome} from './profileinforcard'
import Axios from "axios";
import {useNavigate} from "react-router-dom";

export const Profiles = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3005/getprofile").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

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
  };

  return (
  
   <div>
      {
      listOfUsers.map((item) => {
        return <DisplayHome photo={item.photo} name={item.name} description={item.description} />;
      })
      }

     <div> <>
    <input type="text" placeholder="Photo...." onChange={(e) => setPhoto(e.target.value) }/>
    <input type="text" placeholder="Name...." onChange={(e) => setName(e.target.value) }/>
    <input type="text" placeholder="Desc...." onChange={(e) => setDescription(e.target.value) }/>

    <button onClick = {addUser}>createruser</button>
    </>
   </div>
  </div>
  )
}
