import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  let userId = 52;
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , textAlign:"left" }}>
              <Link style={{textDecoration:"none",boxShadow:"none",color:"white"}} to="/">Home</Link>
            </Typography>
            <Link style={{textDecoration:"none",boxShadow:"none",color:"white"}} to={`users/${userId}`}>User</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
