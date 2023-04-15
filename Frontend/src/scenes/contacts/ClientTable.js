import React, { useState, useEffect, useRef } from 'react';
const ClientTable = ({ demandes, handleEdit }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [prediction, setPrediction] = useState(null);

  const windowWidth = useRef(window.innerWidth);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });


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

  return (
    <div className='table' style={{ fontSize: windowWidth.current * 0.01 }}>
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


          <div className='searchBar'>
            <input
              type="text"
              name="searchbar"
              id="searchbar"
              placeholder='Rechercher'
              onChange={handleSearchTerm}

            />

          </div>
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
                demandes
                  .map(val => (
                    <tr key={val.id}>
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
                          Traiter
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
