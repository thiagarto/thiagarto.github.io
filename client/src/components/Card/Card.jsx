import React from "react";

import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ name, weight, image, temperament,id }) => {
  let navigate = useNavigate();
  function DetailHandler(e) {
    e.preventDefault();
    navigate(`/dog/${id?id:name}`);
  }
  return (
    <>
      <div className="Card">
      <div className="Container">
        <img
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // esto evita que loopee o sea en error no hace nada y setea el src a la img que quiero
            currentTarget.src =
              "https://cdn.com.do/wp-content/uploads/2016/08/PERRO-CHINA.jpg";
          }}
          alt="HOLA"
          width="175vh"
          height="120vh"
          onClick={(el) => DetailHandler(el)}
        ></img>
        <h3>{name ? name : "XD"}</h3>
        <div>Weight: {`${weight} KG`}</div>
        <div>
          Temperament:{" "}
          {temperament
            ? temperament.map((el) => el.name)
            : " No temperaments found."}
        </div>
        </div>
      </div>
    </>
  );
};

export default Card;
