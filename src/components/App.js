import React, { useState } from 'react';
import '../css/App.css';
import Editor from './Editor';
import Previewer from './Previewer';


function App() {
 
  const initialText = 
    '# Markdown Previewer\r\n## GitHub Flavored Markdown\r\nYou can checkout [markedjs](https://github.com/markedjs/marked) on GitHub.\r\n>⚖️ light-weight while implementing all markdown features\r\nYou can show **code blocks**\r\n\r\n```\r\nconst = example(e => (e^2))\r\n```'
  
  const [editText, setEditText] = useState(initialText);

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
