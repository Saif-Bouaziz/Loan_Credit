import React, { useState, useEffect } from 'react';

const ClientTable = ({ agents, handleAdd}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [agentsData, setAgentsData] = useState("");

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
  const handleDelete = (id_agent) => {
    fetch(`http://localhost:8000/credit/delete_agent/${id_agent}/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        setAgentsData(agents.filter(agent => agent.id !== id_agent));
    })
    .catch(error => console.error(error));
    console.log(id_agent)

  }

  return (
    <div>
      <div className='filterBar'>
        <button className="button muted-button" value={""} onClick={four} style={{ backgroundColor: active4 ? "#ccc" : null }}>
          Tous
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => handleAdd()} className="button muted-button">
                     Ajouter
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
          En cours
        </button>


      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div className="contain-table">


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
              agents.filter(
                (val) => {
                  return val.name.toLowerCase().includes(searchTerm.toLowerCase());
                })
              .map(val => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td className="text-left">
                    <button
                      onClick={() => handleDelete(val.id)}
                      className="button muted-button"
                    >
                     Supprimer
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

export default ClientTable;
