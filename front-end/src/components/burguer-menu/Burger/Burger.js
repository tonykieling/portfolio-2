import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;

  return (
    // <div style={{border: "3px solid red"}}>
    <StyledBurger 
      aria-label="Toggle menu" 
      aria-expanded={isExpanded} 
      open={open} 
      onClick={() => setOpen(!open)} {...props}
      title="Hamburguer Menu is ON"
    >
      <span />
      <span />
      <span />
    </StyledBurger>
    // </div>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
