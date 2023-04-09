import React, { useState, useEffect } from 'react';

const UsersTable = ({ users,handleDelete}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [usersData, setUsersData] = useState("");

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
    <div>
      <div className='filterBar'>
  
      <button className="button muted-button" value={""} onClick={four} style={{ backgroundColor: active4 ? "#ccc" : null }}>
          Tous
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="button muted-button" value={"client"} onClick={one} style={{ backgroundColor: active1 ? "#ccc" : null }}>
          Client
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"agent"} onClick={two} style={{ backgroundColor: active2 ? "#ccc" : null }}>
          Agents
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
              <th>Type</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.filter(
                (val) => {
                  return val.user_type.toLowerCase().includes(searchTerm.toLowerCase());
                })
              .map(val => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.user_type}</td>
                  <button onClick={() => handleDelete(val.id)}
                      className="button muted-button"
                    >
                     Supprimer
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
