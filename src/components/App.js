import React, { useState } from 'react';
import '../css/App.css';
import Editor from './Editor';
import Previewer from './Previewer';


function App() {
  const [editText, setEditText] = useState('## Hello World!!');

  function handleChange(e) {
    setEditText(e.target.value);
  }


  return (
    <>
      <Editor 
        editText={editText}
        handleChange={handleChange}        
      />
      <Previewer 
        editText={editText}
      />
    </>
  );
} 

export default App;
