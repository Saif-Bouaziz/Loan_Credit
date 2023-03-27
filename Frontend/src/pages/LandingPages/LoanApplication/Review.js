import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList'; 
import './App.scss';
export default function Review() { 
 
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  return ( 
    
    
    <div className="App">
      
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}
    