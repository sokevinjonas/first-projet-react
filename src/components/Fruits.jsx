// import React from "react";
import PropTypes from "prop-types";
export default function Fruits({ fruitDetail, actionClick }) {
  return (
    <li>
      {fruitDetail.name}
      <button onClick={actionClick}>x</button>{" "}
    </li>
  );
}
// fruitDetail is missing in props validation
Fruits.propTypes = {
  fruitDetail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  actionClick: PropTypes.func.isRequired,
};

// installation de validation de props avec 'npm install prop-types'
