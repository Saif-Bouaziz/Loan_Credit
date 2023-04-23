import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, useMode ,tokens} from "../../theme";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const UsersTable = ({ users,setUsersData}) => {
  const [theme, colorMode] = useMode();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const windowWidth = useRef(window.innerWidth);

  const colors = tokens(theme.palette.mode);
  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  }

  const [deletedUserId, setDeletedUserId] = useState(null);

const handleDelete = (id_user) => {
  fetch(`http://localhost:8000/credit/delete_user/${id_user}/`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      // Remove the deleted agent from the agents array
      const updatedUsers = users.filter(client => client.id !== id_user);
      setUsersData(updatedUsers);
      setDeletedUserId(id_user);
    })
    .catch(error => console.error(error));
};

  return (
    <div className='table' style={{ fontSize: windowWidth.current * 0.01,marginLeft: '140px',backgroundColor: `${colors.primary[100]}` }}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Rechercher" 
          onChange={handleSearchTerm}
          />
          <IconButton type="button" sx={{ p: 1 }} >
            <SearchIcon />
          </IconButton>
        </Box>
        <h2 style={{ textAlign: "center" }}>Liste des clients</h2>

      
      <div >
      <div className="contain-table">
        <table >
          <thead>
            <tr>
              <th>Id utilisateur</th>
              <th>Nom et Prénom</th>
              <th>Email</th>
              <th colSpan={2} className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.filter(val => val.name.toLowerCase().includes(searchTerm.toLowerCase())
               || val.email.toLowerCase().includes(searchTerm.toLowerCase()))
        
              .map(val => (
                <tr key={val.id} style={{ display: val.id === deletedUserId ? 'none' : 'table-row' }}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <button onClick={() => handleDelete(val.id)}
                      className="button muted-button"
                    >
                     <DeleteForeverIcon/>
                    </button>

                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>Aucun utilisateur</td>
              </tr>
            )}
          </tbody>
        </table>
        </div >
        </div>

        </div>


  );
};

export default UsersTable;
