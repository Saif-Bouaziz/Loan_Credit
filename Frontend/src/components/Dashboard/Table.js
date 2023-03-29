import React, { useState, useEffect } from 'react';

const Table = ({ employees, handleEdit }) => {

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
          All
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="button muted-button" value={"accepted"} onClick={one} style={{ backgroundColor: active1 ? "#ccc" : null }}>
          Accepted
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"refused"} onClick={two} style={{ backgroundColor: active2 ? "#ccc" : null }}>
          Refused
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button muted-button" value={"notyet"} onClick={three} style={{ backgroundColor: active3 ? "#ccc" : null }}>
          NotYet
        </button>


      </div>
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

        <table className="striped-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th>Type</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.filter(
                (val) => {
                  return val.type.toLowerCase().includes(filterTerm.toLowerCase());
                }
              ).filter(
                (val) => {
                  return val.lastName.toLowerCase().includes(searchTerm.toLowerCase());
                }
              ).map((val, i) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.email}</td>
                  <td>{formatter.format(val.salary)}</td>
                  <td>{val.date} </td>
                  <td>{val.type} </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleEdit(val.id)}
                      className="button muted-button"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Employees</td>
              </tr>
            )}
          </tbody>
        </table>
      </div >
    </div>
  );
};

export default Table;
