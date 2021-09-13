import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'; // ok - it needs to install the library
import { useOnClickOutside } from './burguer-menu/helpers/hooks'; // ok
import { theme } from './burguer-menu/helpers/theme.js'; // ok
import { Burger, Menu } from './burguer-menu'; // OK
import FocusLock from 'react-focus-lock'; // ok - it needs to intall the library

function App() {
  useEffect(() => console.log("ATTA boy!"), []);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>        
      </>
    </ThemeProvider>
  );
}

export default App;
