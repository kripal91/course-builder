// src/components/AddResourceForm.jsx
import React, { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';

const AddResourceForm = () => {
  const { dispatch } = useContext(CourseContext);
  const [resourceType, setResourceType] = useState('link');
  const [resourceName, setResourceName] = useState('');
  const [resourceUrl, setResourceUrl] = useState('');
  const [resourceFile, setResourceFile] = useState(null);

  const handleAddResource = () => {
    if (!resourceName.trim() || (resourceType === 'link' && !resourceUrl.trim())) return;

    const newResource = {
      id: Date.now(),
      name: resourceName,
      type: resourceType,
      url: resourceType === 'link' ? resourceUrl : URL.createObjectURL(resourceFile),
      file: resourceType === 'file' ? resourceFile : null,
    };

    dispatch({
      type: 'ADD_RESOURCE',
      payload: newResource,
    });

    setResourceName('');
    setResourceUrl('');
    setResourceFile(null);
  };

  return (
    <Box mb={2}>
      <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
        <InputLabel>Resource Type</InputLabel>
        <Select
          value={resourceType}
          onChange={(e) => setResourceType(e.target.value)}
          label="Resource Type"
        >
          <MenuItem value="link">Link</MenuItem>
          <MenuItem value="file">File</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Resource Name"
        value={resourceName}
        onChange={(e) => setResourceName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      {resourceType === 'link' ? (
        <TextField
          label="Resource URL"
          value={resourceUrl}
          onChange={(e) => setResourceUrl(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
      ) : (
        <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
          Upload File
          <input
            type="file"
            hidden
            onChange={(e) => setResourceFile(e.target.files[0])}
          />
        </Button>
      )}
      <Button onClick={handleAddResource} variant="contained" color="primary" fullWidth>
        Add Resource
      </Button>
    </Box>
  );
};

export default AddResourceForm;
