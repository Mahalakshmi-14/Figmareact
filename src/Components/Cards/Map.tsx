import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import details from "../Details/Details";
import "../Cards/Cards.css";

const Map = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    let employeeDetail = JSON.parse(
      `${localStorage.getItem("Employeedetails")}`
    );
    setCardData(employeeDetail);
  }, []);
  return (
    <div className="Cards">
      {cardData.map((card: any, id) => {
        // console.log(card.e_id);
        return (
          <div className="mappingcard">
            <Cards
              // key={card.e_id}
              // image={card.image}
              name={card.name}
              designation={card.designation}
              employeedetails={card.employeedetails}
              // info2={card.details}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Map;
