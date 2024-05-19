// src/components/Sidebar.jsx
import React, { useContext } from 'react';
import { List, ListItem, ListItemText, Button, Box, Divider } from '@mui/material';
import { CourseContext } from '../context/CourseContext';
import AddModuleForm from './AddModuleForm';

const Sidebar = () => {
  const { state } = useContext(CourseContext);

  return (
    <Box width="250px">
      <AddModuleForm />
      <List>
        {state.modules.map((module) => (
          <React.Fragment key={module.id}>
            <ListItem button>
              <ListItemText primary={module.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
