// src/components/Module.jsx
import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import Resource from './Resource';

const Module = ({ module }) => {
  const { dispatch } = useContext(CourseContext);

  const handleRename = (newName) => {
    dispatch({ type: 'RENAME_MODULE', payload: { id: module.id, name: newName } });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_MODULE', payload: { id: module.id } });
  };

  return (
    <div className="module">
      <input value={module.name} onChange={(e) => handleRename(e.target.value)} />
      <button onClick={handleDelete}>Delete Module</button>
      <div className="resources">
        {module.resources.map(resource => (
          <Resource key={resource.id} resource={resource} />
        ))}
      </div>
      {/* AddResourceForm goes here */}
    </div>
  );
};

export default Module;
