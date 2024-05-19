// src/components/AddModuleForm.jsx
import React, { useContext, useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { CourseContext } from '../context/CourseContext';

const AddModuleForm = () => {
  const [moduleName, setModuleName] = useState('');
  const { dispatch } = useContext(CourseContext);

  const handleAddModule = () => {
    if (moduleName.trim() === '') return;

    dispatch({
      type: 'ADD_MODULE',
      payload: { id: Date.now(), name: moduleName, resources: [] },
    });

    setModuleName('');
  };

  return (
    <Box mb={2}>
      <TextField
        label="New Module Name"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddModule} fullWidth>
        Add Module
      </Button>
    </Box>
  );
};

export default AddModuleForm;
