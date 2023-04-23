import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios'
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, useMode ,tokens} from "../../theme";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const CreditTable = ({ payer,credits, handleEdit,setCreditsData}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);


  const windowWidth = useRef(window.innerWidth);


  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  }

  const [active4, setActive4] = useState(true);
  const [active1, setActive1] = useState(false);

const [activeButton, setActiveButton] = useState("tous");

const handleTousClick = () => {
  setActiveButton("tous");
  setActive4(true);
  setActive1(false);
};

const handleNonPayeClick = () => {
  setActiveButton("non payé");
  setActive1(true);
  setActive4(false);
};
const [deletedCreditId, setDeletedCreditId] = useState(null);

const handleDelete = (id_credit) => {
  fetch(`http://localhost:8000/credit/delete_credit/${id_credit}/`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      // Remove the deleted agent from the agents array
      const updatedCredits = credits.filter(credit => credit.IdCredit !== id_credit);
      setCreditsData(updatedCredits);
      setDeletedCreditId(id_credit);
    })
    .catch(error => console.error(error));
};

  return (
    <div className='table' style={{ fontSize: windowWidth.current * 0.01,marginLeft: '140px',backgroundColor: `${colors.primary[100]}`   }}>
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
        <h2 style={{ textAlign: "center" }}>Liste des credits</h2>

      <div className='filterBar'>
        <button className="button muted-button" value={"tous"} onClick={handleTousClick } style={{ backgroundColor: active4 ? "#ccc" : null }}>
          Tous
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="button muted-button" value={"non payé"} onClick={handleNonPayeClick} style={{ backgroundColor: active1 ? "#ccc" : null }}>
          Non payés
        </button>


      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="contain-table" >
          <table >
            <thead>
              <tr>
                <th>CreditId</th>
                <th>Montant principal</th>
                <th>Montant restant</th>
                <th>Taux</th>
                <th>Mensualité</th>
                <th colSpan={2} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            
            {   
             ( credits.length > 0 || payer ? (
                credits.filter(val => val.montant_principal.toString().includes(searchTerm))
                  .map(val => (
                    <tr key={val.id} style={{ display: activeButton === "non payé" ? (val.montant_restant === val.montant_principal &&
                      val.id !== deletedCreditId? 'table-row' : 'none') : 'table-row' }}>
                      <td>{val.IdCredit}</td>
                      <td>{val.montant_principal}</td>
                      <td>{val.montant_restant}</td>
                      <td>{val.taux}</td>
                      <td>{val.mensualite}</td>
                      <td className="text-left">
                        <button
                          onClick={() => handleEdit(val.IdCredit)}
                          className="button muted-button"
                        >
                        <ContentPasteGoIcon/>

                        </button>
                        <button
                          onClick={() => handleDelete(val.IdCredit)}
                          className="button muted-button"
                        >
                          <DeleteForeverIcon/>
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={7}>Aucun credit</td>
                </tr>
             ))}
            </tbody>
          </table>
        </div >
      </div>

    </div>


  );
};

export default CreditTable;
