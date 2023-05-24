import React , { useState, useEffect }from "react";
import "./Card.css";

import Notification from "./notification";

const Mail = () => {
  const [mailCount, setMailCount] = useState([]);

  useEffect(() => {
    async function fetchMailCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/get_nb_email", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
        }
      });
      const data = await response.json();
      setMailCount(data['nbr']);
    }
  
    fetchMailCounts();
  },[]);
  
  const data = [
    {
    title: "Nombre de mails non lus",
    color: {
      backGround: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
      boxShadow: "0px 10px 20px 0px #FFFFFF",
    },
    number:mailCount,
  }
  ];


  return (
    <div className="Cards">
      {data.map((card) => {
        return (
          <div className="parentContainer" key={card.title}>
            <Notification
              title={card.title}
              color={card.color}
              number={card.number}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Mail;