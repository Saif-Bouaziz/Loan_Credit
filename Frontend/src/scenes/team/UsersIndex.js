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


  return (
    <div className="container">
      <UsersTable users={usersData}
                  setUsersData={setUsersData}/>
    </div>
      
  );
};

export default UsersIndex;
