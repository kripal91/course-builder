// src/components/Resource.jsx
import React, { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Card, CardContent, CardActions, Button, TextField, Box, Link } from '@mui/material';

const Resource = ({ resource }) => {
  const { dispatch } = useContext(CourseContext);
  const [newName, setNewName] = useState(resource.name);

  const handleRename = () => {
    dispatch({
      type: 'RENAME_RESOURCE',
      payload: { id: resource.id, name: newName },
    });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_RESOURCE', payload: { id: resource.id } });
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            fullWidth
            label="Resource Name"
            variant="outlined"
          />
          <Button onClick={handleRename} variant="contained" sx={{ ml: 2 }}>
            Rename
          </Button>
          <Button onClick={handleDelete} variant="outlined" color="error" sx={{ ml: 2 }}>
            Delete
          </Button>
        </Box>
        <Box mt={2}>
          {resource.type === 'link' ? (
            <Link href={resource.url} target="_blank" rel="noopener">
              {resource.url}
            </Link>
          ) : (
            <Link href={resource.url} target="_blank" rel="noopener">
              {resource.file ? resource.file.name : 'View File'}
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Resource;
