import React, { useState, useEffect } from 'react';

const Table = ({ demandes, handleEdit }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");



  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });


  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
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
    <div>
      <div className='filterBar'>
        <button className="button muted-button" value={""} onClick={four} style={{ backgroundColor: active4 ? "#ccc" : null }}>
          Tout
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="button muted-button" value={"accepted"} onClick={one} style={{ backgroundColor: active1 ? "#ccc" : null }}>
          Acceptées
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"refused"} onClick={two} style={{ backgroundColor: active2 ? "#ccc" : null }}>
          Refusées
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"notyet"} onClick={three} style={{ backgroundColor: active3 ? "#ccc" : null }}>
          Pas de decision
        </button>


      </div>
      <div className="contain-table">


        <div className='searchBar'>
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder='Recherche sur le nom du client'
            onChange={handleSearchTerm}

          />

        </div>

        <table className="striped-table">
          <thead>
            <tr>
              <th>Id Demande</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Salaire</th>
              <th>objectif du prêt</th>
              <th>montant du prêt</th>

            </tr>
          </thead>
          <tbody>
            {demandes.length > 0 ? (
              demandes.filter(
                (val) => {
                  return val.decision.toLowerCase().includes(filterTerm.toLowerCase());
                }
              ).filter(
                (val) => {
                  return val.last_name.toLowerCase().includes(searchTerm.toLowerCase());
                }
              ).map((val, i) => (
                <tr key={val.DemandeId}>
                  <td>{val.DemandeId}</td>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td>{formatter.format(val.person_income)}</td>
                  <td>{val.loan_intent} </td>
                  <td>{val.loan_amnt} </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleEdit(val.DemandeId)}
                      className="button muted-button"
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>Pas de Demandes</td>
              </tr>
            )}
          </tbody>
        </table>
      </div >
    </div>
  );
};

export default Table;
