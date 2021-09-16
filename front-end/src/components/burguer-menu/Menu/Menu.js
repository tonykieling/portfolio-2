import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  
  const hideMenu = () => props.setOpen(false);
  
  // emjis coming from https://emojipedia.org
  // I wann to get the about emoji randmomly
  // so, I will create an array an each time the screen is load, it gets a new one to show up
  
  const homes = [
    "🏠 ",
    "🏡 "
  ];

  const abouts = [
    "🐸 ",
    "🕺 ",
    "🐵 ",
    // "🐨",
    "🚚",
    "🐜 ",
    "🐧 ",
    // "🦆",
    "🦉 ",
    "🦖 ",
    // "🐙",
    "🐝 ",
    // "🐠",
    "🏊‍♂️ ",
    // "🌻",
  ];

  const projects = [
    "🚧 ",
    "🗄️ ",
    "💻 ",
    "🧮 "
  ];

  const samples = [
    "🤖 ",
    "👨‍💻 ",
    "🛠️ "
  ];

  const contacts = [
    "📝 ",
    "✉️ ",
    "📩 "
  ];

  // thinking about avoiding repetition
  // it will need to presist state (not now)
  // const [emoji, setEmoji] = useState(null)
  // const getHome = options => {
  //   const index = Math.floor(Math.random() * options.length);
  //   console.log("BEFORE:", "options[index]", options[index], "emoji", emoji);
  //   setEmoji(options[index]);
  //   console.log(index, " => ", options[index]);
  //   return (options[index]);
  // };

  const getEmoji = options => {
    const index = Math.floor(Math.random() * options.length);
    return (options[index]);
  };

  
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">
          { getEmoji(homes) }
        </span>
        Home
      </Link>

      <Link to="/about" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">
          { getEmoji(abouts) }
        </span>
        About
      </Link>

      <Link to="/projects" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">
          { getEmoji(projects) }
        </span>
        Projects
      </Link>

      <Link to="/samples" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">
          { getEmoji(samples) }
        </span>
          {/* ⌨️ */}
        Snippets
      </Link>

      <Link to="/contact" tabIndex={tabIndex} onClick={hideMenu}>
        <span aria-hidden="true">
          { getEmoji(contacts) }
        </span>
        Contact
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
