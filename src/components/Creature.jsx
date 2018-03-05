import React from 'react';
import PropTypes from 'prop-types';

function Creature(props) {
  return (
    <div>
      <style jsx>{`
        background: lightyellow;
        margin: 0;
        img {
          width: 120px;
          height: auto;
        }
      `}</style>
      <h2>{props.name}</h2>
      <img src={props.image} />

    </div>
  );
}

Creature.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  parts: PropTypes.arrayOf(PropTypes.string)
};
export default Creature;
