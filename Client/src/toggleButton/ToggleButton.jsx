import React from 'react'
import PropTypes from 'prop-types';

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      Toggle Button
    </button>
  )
}


// Define expected prop types
ToggleButton.propTypes = {
    setOpen: PropTypes.func.isRequired,
  };
  

export default ToggleButton
