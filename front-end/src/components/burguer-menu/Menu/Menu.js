import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const hideMenu = () => props.setOpen(false);

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Home
      </Link>

      <Link to="/about" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">💸</span>
        About
      </Link>

      <Link to="/contact" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">📩</span>
        Contact
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
