import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, useMode ,tokens} from "../../theme";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ClientTable = ({ demandes, handleEdit,setDemandesData }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [theme, colorMode] = useMode();
  const windowWidth = useRef(window.innerWidth);
  const colors = tokens(theme.palette.mode);


  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  }

  const handleFilterTerm = (e) => {
    let value = e.target.value;
    setFilterTerm(value);
  }
  const [active1, setActive1] = useState(false);
  const one = (e) => {
    let value = e.target.value;
    setFilterTerm(value);
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);


  };
  const [active2, setActive2] = useState(false);
  const two = (e) => {
    let value = e.target.value;
    setFilterTerm(value);
    setActive2(true);
    setActive1(false);
    setActive3(false);
    setActive4(false);


  };
  const [active3, setActive3] = useState(false);
  const three = (e) => {
    let value = e.target.value;
    setFilterTerm(value);
    setActive3(true);
    setActive1(false);
    setActive2(false);
    setActive4(false);

  };
  const [active4, setActive4] = useState(true);
  const four = (e) => {
    let value = e.target.value;
    setFilterTerm(value);
    setActive3(false);
    setActive1(false);
    setActive2(false);
    setActive4(true);

  };

  const [deletedDemandeId, setDeletedDemandeId] = useState(null);

const handleDelete = (id_demande) => {
  fetch(`http://localhost:8000/credit/delete_demande/${id_demande}/`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      // Remove the deleted agent from the agents array
      const updatedDemandes = demandes.filter(demande => demande.DemandeId!== id_demande);
      setDemandesData(updatedDemandes);
      setDeletedDemandeId(id_demande);
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
        <h2 style={{ textAlign: "center" }}>Liste des demandes</h2>

      <div className='filterBar'>
        <button className="button muted-button" value={""} onClick={four} style={{ backgroundColor: active4 ? "#ccc" : null }}>
          Tous
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="button muted-button" value={"Acceptée"} onClick={one} style={{ backgroundColor: active1 ? "#ccc" : null }}>
          Acceptées
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"Refusée"} onClick={two} style={{ backgroundColor: active2 ? "#ccc" : null }}>
          Refusées
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"En cours"} onClick={three} style={{ backgroundColor: active3 ? "#ccc" : null }}>
          En cours
        </button>


      </div>
     
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="contain-table" >
          <table >
            <thead>
              <tr>
                <th>DemandeId</th>
                <th>ClientId</th>
                <th>Age</th>
                <th>Salaire</th>
                <th>Prop</th>
                <th>Emploi</th>
                <th>Obj</th>
                <th>Cat</th>
                <th>Montant</th>
                <th>Intérêt</th>
                <th>%</th>
                <th>Status</th>
                <th colSpan={2} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {demandes.length > 0 ? (
                demandes.filter(
                  (val) => {
                    return val.status.toLowerCase().includes(filterTerm.toLowerCase());
                  }
                )
                .filter(val => val.loan_intent.toLowerCase().includes(searchTerm.toLowerCase())
                ||
                val.loan_amnt.toString().includes(searchTerm))
         
                  .map(val => (
                    <tr key={val.id} style={{ display: val.DemandeId === deletedDemandeId ? 'none' : 'table-row' }}>
                      <td>{val.DemandeId}</td>
                      <td>{val.ClientId}</td>
                      <td>{val.person_age}</td>
                      <td>{val.person_income}</td>
                      <td>{val.person_home_ownership}</td>
                      <td>{val.person_emp_length}</td>
                      <td>{val.loan_intent}</td>
                      <td>{val.loan_grade}</td>
                      <td>{val.loan_amnt} </td>
                      <td>{val.loan_int_rate} </td>
                      <td>{val.loan_percent_income} </td>
                      <td>{val.status}</td>
                      <td className="text-left">
                        <button
                          onClick={() => handleEdit(val.DemandeId)}
                          className="button muted-button"
                        >
                          <ContentPasteGoIcon/>
                        </button>
                        <button
                          onClick={() => handleDelete(val.DemandeId)}
                          className="button muted-button"
                        >
                          <DeleteForeverIcon/>
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={7}>Aucune demande</td>
                </tr>
              )}
            </tbody>
          </table>
        </div >
      </div>

    </div>


  );
};

export default ClientTable;
