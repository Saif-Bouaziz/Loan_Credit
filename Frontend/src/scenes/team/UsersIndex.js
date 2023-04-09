import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersTable from './UsersTable';



const UsersIndex = () => {
 
  const [usersData, setUsersData] = useState([]);


  useEffect(() => {
  fetch('http://localhost:8000/credit/get_users')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the data returned by the API
    setUsersData(data)
  })
  .catch(error => {
    console.error(error); // Handle any errors that occurred during the request
  });
  });

  const handleDelete = (id_user) => {
    fetch(`http://localhost:8000/credit/delete_user/${id_user}/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        setUsersData(users.filter(user => user.id !== id_user));
    })
    .catch(error => console.error(error));
    console.log(id_agent)

  }

  return (
    <div className="container">
      <UsersTable users={usersData}
      
                handleDelete={handleDelete}/>
    </div>
      
  );
};

export default UsersIndex;
