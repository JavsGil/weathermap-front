import React from 'react';
import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius.js";
import "../css/card.css";

 const Card = ({current}) => {
  return (
    <div className="card mt-3 card-with-margin">
    <h3 className="card-header size-title">
      La temperatura en{" "}
      <span className="font-weight-bold">{current?.state}</span>{" "}
      es:
    </h3>
    <div className="card-body">
      <h4 className="card-title temperatura text-center tempe">
        {convertKelvinToCelsius(current?.temp)} C&deg;
      </h4>
      <ul>
        <li className="text-center temp-min-max size-min-max">
          Temperatura mínima: {convertKelvinToCelsius(current?.temp_min)} C&deg;{" "}
        </li>
        <li className="text-center temp-min-max size-min-max">
          Temperatura máxima: {convertKelvinToCelsius(current?.temp_max)} C&deg;
        </li>
      </ul>
      <div className="card-footer text-center text-info humedad size-min-max">
        Humedad Relativa: {current?.humidity} %
      </div>
    </div>
  </div>
  )
}

export default Card;
