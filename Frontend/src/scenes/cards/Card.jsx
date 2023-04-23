import React , { useState, useEffect }from "react";
import "./Card.css";
//import { cardsData } from "./Data";

import CardDemande from "./demandes";

const Card = () => {
  const [demandeCount, setDemandeCount] = useState([]);

  useEffect(() => {
    async function fetchDemandeCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/demande_count_date");
      const data = await response.json();
      setDemandeCount(data);
    }
  
    fetchDemandeCounts();
  },[]);
  
  const graphData = Object.entries(demandeCount).map(([date_string,count]) => ({date_string,count }));
  const [nbrDemande,setNbrDemande]=useState(null)
  useEffect(() => {
    async function fetchDemandeCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/demande_count");
      const data = await response.json();
      setNbrDemande(data);
    }

    fetchDemandeCounts();
  },[]);


  const [creditCount, setCreditCount] = useState([]);
  useEffect(() => {
    async function fetchCreditCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/credit_count_date");
      const data = await response.json();
      setCreditCount(data);
    }
  
    fetchCreditCounts();
  },[]);

  const creditData = Object.entries(creditCount).map(([date_string,count]) => ({date_string,count }));
  const [nbrCredit,setNbrCredit]=useState(null)
  useEffect(() => {
    async function fetchCreditCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/credit_count");
      const data = await response.json();
      setNbrCredit(data);
    }

    fetchCreditCounts();
  },[]);

  const [clientCount, setClientCount] = useState([]);
  useEffect(() => {
    async function fetchClientCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/client_count_date");
      const data = await response.json();
      setClientCount(data);
    }
  
    fetchClientCounts();
  },[]);

  const clientData = Object.entries(clientCount).map(([date_string,count]) => ({date_string,count }));
  const [nbrClient,setNbrClient]=useState(null)
  useEffect(() => {
    async function fetchClientCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/client_count/");
      const data = await response.json();
      setNbrClient(data);
    }

    fetchClientCounts();
  },[]);

  const [agentCount, setAgentCount] = useState([]);
  useEffect(() => {
    async function fetchAgentCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/agent_count_date");
      const data = await response.json();
      setAgentCount(data);
    }
  
    fetchAgentCounts();
  },[]);

  const agentData = Object.entries(agentCount).map(([date_string,count]) => ({date_string,count }));
  const [nbrAgent,setNbrAgent]=useState(null)
  useEffect(() => {
    async function fetchAgentCounts() {
      const response = await fetch("http://127.0.0.1:8000/credit/agent_count/");
      const data = await response.json();
      setNbrAgent(data);
    }

    fetchAgentCounts();
  },[]);

  const data = [
    {
    title: "Demandes",
    color: {
      backGround: "linear-gradient(180deg, #A9A9A9 0%, #A9A9A9 100%)",
      boxShadow: "0px 10px 20px 0px #B2BEB5",
    },
    series: [
      {
        name: "Demande",
        data: graphData.map(item => item.count),
      },
    ],
    creation: graphData.map(item => item.date_string) ,
    number:nbrDemande,
  },
  {
    title: "Credits",
    color: {
      backGround: "linear-gradient(180deg, #A9A9A9 0%, #A9A9A9 100%)",
      boxShadow: "0px 10px 20px 0px #B2BEB5",
    },
    series: [
      {
        name: "Credit",
        data: creditData.map(item => item.count),
      },
    ],
    creation: creditData.map(item => item.date_string) ,
    number:nbrCredit,
  },
  {
    title: "Clients",
    color: {
      backGround: "linear-gradient(180deg, #A9A9A9 0%, #A9A9A9 100%)",
      boxShadow: "0px 10px 20px 0px #B2BEB5",
    },
    series: [
      {
        name: "Client",
        data: clientData.map(item => item.count),
      },
    ],
    creation: clientData.map(item => item.date_string) ,
    number:nbrClient,
  },
  {
    title: "Agents",
    color: {
      backGround: "linear-gradient(180deg,  #A9A9A9 0%, #A9A9A9 100%)",
      boxShadow: "0px 10px 20px 0px #B2BEB5",
    },
    series: [
      {
        name: "Agent",
        data: agentData.map(item => item.count),
      },
    ],
    creation: agentData.map(item => item.date_string) ,
    number:nbrAgent,
  }
  ];


  return (
    <div className="Cards">
      {data.map((card) => {
        return (
          <div className="parentContainer" key={card.title}>
            <CardDemande
              title={card.title}
              color={card.color}
              series={card.series}
              creation={card.creation}
              number={card.number}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;