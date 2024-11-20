import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar sx={{backgroundColor: 'inherit', color: 'black', boxShadow: 'none'}}>
        <Toolbar sx={{justifyContent: 'center'}}>
          <Typography sx={{paddingLeft: '2rem'}}>About</Typography>
          <Typography sx={{paddingLeft: '2rem'}}>My experience</Typography>
          <Typography sx={{paddingLeft: '2rem'}}>Contact me</Typography>
        </Toolbar>
      </AppBar> 
    </React.Fragment>
  );
};

export default Header;