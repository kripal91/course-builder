// src/App.jsx
import React from 'react';
import { CourseProvider } from './context/CourseContext';
import Header from './components/Header';
import ResourceList from './components/ResourceList';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import './styles/styles.css';

const App = () => {
  const handleAddResource = (type) => {
    // Logic to handle resource addition
    // For now, it logs the type
    console.log(type);
  };

  return (
    <CourseProvider>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header onAddResource={handleAddResource} />
        <Box display="flex" mt={4}>
          <Box flexGrow={1} p={2}>
            <Typography variant="h4" gutterBottom>
              Course Resources
            </Typography>
            <ResourceList />
          </Box>
        </Box>
      </Container>
    </CourseProvider>
  );
};

export default App;
