// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const Header = ({ onAddResource }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddModule = () => {
    handleClose();
    onAddResource('module');
  };

  const handleAddLink = () => {
    handleClose();
    onAddResource('link');
  };

  const handleUpload = () => {
    handleClose();
    onAddResource('upload');
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Course builder
        </Typography>
        <IconButton color="primary" onClick={handleClick}>
          <AddIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleAddModule}>Create module</MenuItem>
          <MenuItem onClick={handleAddLink}>Add a link</MenuItem>
          <MenuItem onClick={handleUpload}>Upload</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
