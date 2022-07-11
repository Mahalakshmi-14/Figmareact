import React from "react";
import Cards from "./Cards";
import details from "../Details/Details";
import "../Cards/Cards.css";

const Map = () => {
  return (
    <div className="Cards">
      {details.map((card, id) => {
        console.log(card.e_id);
        return (
          <div className="mappingcard">
            <Cards
              key={card.e_id}
              image={card.image}
              title={card.title}
              description={card.description}
              info1={card.content}
              info2={card.details}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Map;
