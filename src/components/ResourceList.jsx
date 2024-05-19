// src/components/ResourceList.jsx
import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import Resource from './Resource';
import AddResourceForm from './AddResourceForm';
import { Box, Typography, Paper } from '@mui/material';

const ResourceList = () => {
  const { state } = useContext(CourseContext);

  return (
    <Box>
      {state.resources.length === 0 ? (
        <Paper elevation={0} style={{ padding: 20, textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Empty state" />
          <Typography variant="h6" color="textSecondary">
            Nothing added here yet
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Click on the [+] Add button to add items to this course
          </Typography>
        </Paper>
      ) : (
        state.resources.map((resource) => (
          <Resource key={resource.id} resource={resource} />
        ))
      )}
      <AddResourceForm />
    </Box>
  );
};

export default ResourceList;
