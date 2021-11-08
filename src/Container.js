import React from 'react';
import PropTypes from 'prop-types';

Container.propTypes = {
  value: String,
};

function Container(props) {
  return (
    <div>
      <h2>Containter</h2>
      <input type="text" value={props.value} />
    </div>
  );
}

export default Container;
<h2></h2>;
