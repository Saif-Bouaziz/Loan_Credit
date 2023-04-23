import React, { useState, useEffect , useRef} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, useMode ,tokens} from "../../theme";
import axios from 'axios'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


const AgentTable = ({ agents, handleAdd,setAgentsData}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const windowWidth = useRef(window.innerWidth);

  const [editMode, setEditMode] = useState(false);
  const [currentAgent, setCurrentAgent] = useState({});
  const [preagents, setPreAgents] = useState(agents);


  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  }

  const handleUpdate = (agent) => {
    setCurrentAgent(agent);
    setEditMode(true);
  };

  const handleSave = (id_agent, newEmail) => {
    if (!newEmail) {
      // newEmail is empty or null, handle the error here
      console.error('New email is empty or null');
      return;
    }
  
    fetch(`http://localhost:8000/credit/update_agent/${id_agent}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: newEmail }),
    })
      .then(response => response.json())
      .then(data => {
        // Update the agents array with the updated user
        const updatedAgents = agents.map(agent => {
          if (agent.id === id_agent) {
            return { ...agent, email: data.email };
          }
          return agent;
        });
        setPreAgents(updatedAgents);
        setEditMode(false);
      })
      .catch(error => console.error(error));
  };

const [deletedAgentId, setDeletedAgentId] = useState(null);

const handleDelete = (id_agent) => {
  fetch(`http://localhost:8000/credit/delete_agent/${id_agent}/`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      // Remove the deleted agent from the agents array
      const updatedAgents = agents.filter(agent => agent.id !== id_agent);
      setAgentsData(updatedAgents);
      setDeletedAgentId(id_agent);
    })
    .catch(error => console.error(error));
};

  return (
    <div className='table' style={{ fontSize: windowWidth.current * 0.01,marginLeft: '140px',backgroundColor: `${colors.primary[100]}`  }}>
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
        <h2 style={{ textAlign: "center" }}>Liste des agents</h2>

      <div className='filterBar'>
          <button onClick={() => handleAdd()} className="button muted-button">
                     <PersonAddAlt1Icon/>
                  </button>

      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div className="contain-table">

        <table >
          <thead>
            <tr>
              <th>Id utilisateur</th>
              <th>Nom et Prénom</th>
              <th>Email</th>
              <th>Mot de passe</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {agents.length > 0 ? (
              agents .filter(val => val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ||
              val.email.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(val => (
                <tr key={val.id } style={{ display: val.id === deletedAgentId ? 'none' : 'table-row' }}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>
                  {editMode && currentAgent.id === val.id ? (
                        <input
                          type="text"
                          value={currentAgent.email}
                          onChange={(event) =>
                            setCurrentAgent({
                              ...currentAgent,
                              email: event.target.value })
                            }
                          />
                        ) : (
                          val.email
                        )}
                  </td>
                  <td>{val.password}</td>
                  <td>
                  {editMode && currentAgent.id === val.id ? (
                    <button className="button muted-button" onClick={() => handleSave(currentAgent.id,currentAgent.email)}>
                      <FileDownloadDoneIcon/></button>
                  ) : (
                    <button className="button muted-button" onClick={() => handleUpdate(val)}><EditIcon/></button>
                  )}
                  <button onClick={() => handleDelete(val.id)}
                      className="button muted-button"
                    >
                     <DeleteForeverIcon />
                    </button>
                  </td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>Aucun agent</td>
              </tr>
            )}
          </tbody>
        </table>
        </div >

        </div>

        </div>


  );
};

export default AgentTable;
