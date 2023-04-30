import React, { useState , useEffect} from "react";
import "./cards.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import axios from "axios";


// parent Card

const Notification = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [vu,setVu]=useState(false);
    const [update,setUpdate]=useState(props.number)

    const ResetMailCount = async () => {
         const response = await fetch("http://127.0.0.1:8000/credit/reset_nb_email", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`, // include JWT token in the request header
          }
        }).then(response => response.json())
          .then(data =>{
            console.log(data)
            console.log(data['nbr'])
            setUpdate(data['nbr'])
          } 
          )
          .catch(error => console.error(error));
      };

      useEffect(() => {
        if (!expanded) {
          ResetMailCount();
        }
      }, [expanded]);


  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() =>  setExpanded(false)} resetMailCount={ResetMailCount} setVu={setVu}/>
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} update={update} setVu={() => setVu(true)} vu={vu}  />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded,vu,update,setVu }) {
    function handleButtonClick1() {
        setExpanded(); // close the expanded card
        setVu(); // call the function to reset mail count
      }
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={handleButtonClick1}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
      <div className="detail">
       {vu ? ( <span>{update}</span>)
       :(<span>{param.number}</span>)
       }
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded,resetMailCount,setVu }) {
  const message = " Veuillez consulter votre boîte mail, vous avez des nouveaux messages non lus"
  function handleButtonClick() {
    setExpanded(); // close the expanded card
    resetMailCount(); // call the function to reset mail count
    setVu(true);

  }

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={handleButtonClick} />
      </div>
        <span>{message}</span>
    </motion.div>
  );
}

export default Notification;